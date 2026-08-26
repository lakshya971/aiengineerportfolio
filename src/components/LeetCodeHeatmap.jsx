import React, { useState, useEffect, useMemo } from 'react';
import { Terminal, RefreshCw, CheckCircle2, Flame, Award, Calendar, ExternalLink, Activity } from 'lucide-react';

const USERNAME = 'lakshya1202';

// Static initial snapshot of Lakshya's profile data for instant 0ms load
const INITIAL_SNAPSHOT = {
  totalSolved: 181,
  easySolved: 74,
  totalEasy: 961,
  mediumSolved: 78,
  totalMedium: 2105,
  hardSolved: 29,
  totalHard: 967,
  totalQuestions: 4033,
  ranking: 970937,
  submissionCalendar: {
    "1759276800":2,"1759363200":1,"1759622400":2,"1759795200":3,"1774656000":1,"1776124800":1,
    "1777161600":3,"1779062400":1,"1779494400":6,"1779580800":2,"1779667200":2,"1779753600":3,
    "1779926400":5,"1780012800":3,"1780272000":4,"1780444800":19,"1780531200":6,"1780617600":3,
    "1780704000":4,"1780790400":17,"1780876800":3,"1780963200":3,"1781049600":4,"1782950400":6,
    "1783468800":3,"1783814400":3,"1783987200":5,"1784332800":15,"1784419200":5,"1784505600":1,
    "1784678400":9,"1784764800":3,"1784851200":1,"1784937600":2,"1785024000":2,"1785110400":3,
    "1785196800":7,"1785283200":2,"1785369600":9,"1785542400":1,"1785974400":7,"1786060800":10,
    "1786147200":1,"1786233600":8,"1786320000":8,"1786406400":9,"1786492800":7,"1786579200":1,
    "1786665600":6,"1786752000":1,"1786838400":6,"1786924800":9,"1787011200":3,"1787097600":20,
    "1787184000":3,"1787270400":5,"1787356800":8,"1787443200":7,"1787529600":3,"1787616000":5,
    "1787702400":5
  },
  recentSubmissions: [
    { title: 'Single Number', titleSlug: 'single-number', statusDisplay: 'Accepted', lang: 'python3' },
    { title: 'Remove Duplicates from Sorted Array', titleSlug: 'remove-duplicates-from-sorted-array', statusDisplay: 'Accepted', lang: 'python3' },
    { title: 'Rotate Array', titleSlug: 'rotate-array', statusDisplay: 'Accepted', lang: 'python3' },
    { title: 'Missing Number', titleSlug: 'missing-number', statusDisplay: 'Accepted', lang: 'python3' },
    { title: 'Shortest and Lexicographically Smallest Beautiful String', titleSlug: 'shortest-and-lexicographically-smallest-beautiful-string', statusDisplay: 'Accepted', lang: 'python3' }
  ]
};

export default function LeetCodeHeatmap() {
  const [data, setData] = useState(INITIAL_SNAPSHOT);
  const [loading, setLoading] = useState(false);
  const [lastSync, setLastSync] = useState(new Date());
  const [hoveredCell, setHoveredCell] = useState(null);

  // Fetch real-time data from LeetCode API
  const fetchLeetCodeData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${USERNAME}`);
      if (res.ok) {
        const json = await res.json();
        if (json.totalSolved) {
          setData(json);
          setLastSync(new Date());
        }
      }
    } catch (err) {
      console.warn('Live LeetCode API sync fallback:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeetCodeData();
    // Auto-refresh telemetry every 5 minutes while page is open
    const interval = setInterval(fetchLeetCodeData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Process 52-week submission calendar grid
  const calendarGrid = useMemo(() => {
    const today = new Date();
    const days = [];
    const calendarMap = {};

    // Parse calendar timestamps from API
    if (data.submissionCalendar) {
      const calObj = typeof data.submissionCalendar === 'string' 
        ? JSON.parse(data.submissionCalendar) 
        : data.submissionCalendar;

      Object.entries(calObj).forEach(([ts, count]) => {
        const dateStr = new Date(parseInt(ts) * 1000).toISOString().split('T')[0];
        calendarMap[dateStr] = (calendarMap[dateStr] || 0) + Number(count);
      });
    }

    // Generate past 364 days (52 weeks x 7 days)
    for (let i = 363; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const count = calendarMap[dateStr] || 0;
      days.push({
        date: dateStr,
        count,
        dayOfWeek: d.getDay(),
        month: d.toLocaleString('default', { month: 'short' })
      });
    }
    return days;
  }, [data.submissionCalendar]);

  // Compute month labels for x-axis
  const monthsAxis = useMemo(() => {
    const labels = [];
    let lastMonth = '';
    calendarGrid.forEach((d, idx) => {
      if (idx % 7 === 0 && d.month !== lastMonth) {
        labels.push({ month: d.month, colIndex: Math.floor(idx / 7) });
        lastMonth = d.month;
      }
    });
    return labels;
  }, [calendarGrid]);

  // Total submissions in past year
  const totalSubmissionsYear = useMemo(() => {
    return calendarGrid.reduce((sum, d) => sum + d.count, 0);
  }, [calendarGrid]);

  // Calculate Streak & Active Days
  const activeDaysCount = useMemo(() => {
    return calendarGrid.filter(d => d.count > 0).length;
  }, [calendarGrid]);

  const getHeatmapColorClass = (count) => {
    if (count === 0) return 'bg-surface-container border border-on-background/20';
    if (count <= 2) return 'bg-emerald-900/80 border border-emerald-700 text-white';
    if (count <= 5) return 'bg-emerald-700 border border-emerald-500 text-white';
    if (count <= 9) return 'bg-emerald-500 border border-emerald-400 text-black font-bold';
    return 'bg-emerald-400 border border-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.8)] text-black font-bold';
  };

  return (
    <section className="w-full flex flex-col gap-4 font-mono">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-1">
        <div className="flex items-center gap-3">
          <h2 className="font-bold text-xl md:text-2xl text-primary flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-accent" />
            <span>[ LEETCODE_LIVE_TELEMETRY ]</span>
          </h2>
          <span className="text-xs bg-emerald-accent/10 text-emerald-accent border border-emerald-accent px-2 py-0.5 font-bold">
            @{USERNAME}
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs text-secondary">
          <span className="flex items-center gap-1 text-emerald-accent font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-accent animate-ping inline-block"></span>
            LIVE SYNC
          </span>
          <button
            onClick={fetchLeetCodeData}
            disabled={loading}
            className="px-3 py-1 border border-on-background bg-surface hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-1.5 font-bold text-primary"
            title="Refresh LeetCode data from API"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-emerald-accent' : ''}`} />
            <span>[{loading ? 'Syncing...' : 'Sync Data'}]</span>
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="border border-on-background bg-surface p-6 shadow-[6px_6px_0px_0px_var(--color-on-background)] space-y-6">
        {/* Profile Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-on-background">
          {/* Solved Ring / Summary */}
          <div className="md:col-span-5 border border-on-background bg-surface-container p-5 flex flex-col justify-between relative overflow-hidden">
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="text-xs uppercase font-bold text-secondary tracking-wider block">Solved Problems</span>
                <div className="text-3xl font-bold text-primary mt-1 flex items-baseline gap-1">
                  <span>{data.totalSolved}</span>
                  <span className="text-xs text-secondary font-normal">/ {data.totalQuestions || 4033}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-secondary block font-bold">Global Rank</span>
                <span className="text-sm font-bold text-emerald-accent">#{data.ranking?.toLocaleString() || '970,937'}</span>
              </div>
            </div>

            {/* Difficulty Breakdown Bars */}
            <div className="space-y-2 mt-4 text-xs font-mono">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-emerald-500 font-bold">Easy</span>
                  <span className="font-bold">{data.easySolved} / {data.totalEasy || 961}</span>
                </div>
                <div className="w-full bg-surface-container-high h-2 border border-on-background/40">
                  <div 
                    className="bg-emerald-500 h-full transition-all duration-500" 
                    style={{ width: `${((data.easySolved / (data.totalEasy || 961)) * 100).toFixed(1)}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-amber-500 font-bold">Medium</span>
                  <span className="font-bold">{data.mediumSolved} / {data.totalMedium || 2105}</span>
                </div>
                <div className="w-full bg-surface-container-high h-2 border border-on-background/40">
                  <div 
                    className="bg-amber-500 h-full transition-all duration-500" 
                    style={{ width: `${((data.mediumSolved / (data.totalMedium || 2105)) * 100).toFixed(1)}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-rose-500 font-bold">Hard</span>
                  <span className="font-bold">{data.hardSolved} / {data.totalHard || 967}</span>
                </div>
                <div className="w-full bg-surface-container-high h-2 border border-on-background/40">
                  <div 
                    className="bg-rose-500 h-full transition-all duration-500" 
                    style={{ width: `${((data.hardSolved / (data.totalHard || 967)) * 100).toFixed(1)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Activity Badges & Streak */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border border-on-background p-4 bg-surface-container flex flex-col justify-between">
              <div className="flex items-center gap-2 text-emerald-accent">
                <Flame className="w-5 h-5 text-emerald-accent" />
                <span className="text-xs uppercase font-bold text-primary">Max Streak</span>
              </div>
              <div className="text-3xl font-bold text-primary my-2">21 <span className="text-xs text-secondary font-normal">days</span></div>
              <span className="text-[10px] text-secondary font-bold text-emerald-accent">[Consistency Index: High]</span>
            </div>

            <div className="border border-on-background p-4 bg-surface-container flex flex-col justify-between">
              <div className="flex items-center gap-2 text-primary">
                <Calendar className="w-5 h-5 text-emerald-accent" />
                <span className="text-xs uppercase font-bold">Active Days</span>
              </div>
              <div className="text-3xl font-bold text-primary my-2">{activeDaysCount} <span className="text-xs text-secondary font-normal">days</span></div>
              <span className="text-[10px] text-secondary">Past 365 Days</span>
            </div>

            <div className="border border-on-background p-4 bg-surface-container flex flex-col justify-between">
              <div className="flex items-center gap-2 text-primary">
                <Award className="w-5 h-5 text-amber-500" />
                <span className="text-xs uppercase font-bold">Badges</span>
              </div>
              <div className="text-3xl font-bold text-primary my-2">1 <span className="text-xs text-secondary font-normal">Badge</span></div>
              <span className="text-[10px] text-secondary font-bold text-emerald-accent">[50 Days Badge 2026]</span>
            </div>
          </div>
        </div>

        {/* 52-Week Submission Heatmap Grid */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-primary flex items-center gap-2">
              <span>{totalSubmissionsYear} submissions in the past year</span>
            </span>
            <div className="flex items-center gap-1.5 text-[11px] text-secondary">
              <span>Less</span>
              <span className="w-3 h-3 bg-surface-container border border-on-background/20 inline-block"></span>
              <span className="w-3 h-3 bg-emerald-900/80 border border-emerald-700 inline-block"></span>
              <span className="w-3 h-3 bg-emerald-700 border border-emerald-500 inline-block"></span>
              <span className="w-3 h-3 bg-emerald-500 border border-emerald-400 inline-block"></span>
              <span className="w-3 h-3 bg-emerald-400 border border-emerald-300 inline-block"></span>
              <span>More</span>
            </div>
          </div>

          {/* Heatmap Grid Wrapper */}
          <div className="overflow-x-auto pb-2">
            <div className="min-w-[700px]">
              {/* Month Labels Axis */}
              <div className="flex text-[10px] text-secondary font-bold mb-1 pl-6 relative h-4">
                {monthsAxis.map((m, idx) => (
                  <span 
                    key={idx} 
                    className="absolute" 
                    style={{ left: `${m.colIndex * 13.5 + 24}px` }}
                  >
                    {m.month}
                  </span>
                ))}
              </div>

              {/* Grid: 7 rows (Days of week) x 52 cols (Weeks) */}
              <div className="flex gap-1">
                {/* Day labels (Mon, Wed, Fri) */}
                <div className="flex flex-col gap-1 text-[9px] text-secondary font-mono leading-none justify-between h-[84px] pr-2 uppercase font-bold">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>

                {/* 52 Columns */}
                <div className="grid grid-flow-col grid-rows-7 gap-1">
                  {calendarGrid.map((day, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredCell(day)}
                      onMouseLeave={() => setHoveredCell(null)}
                      className={`w-2.5 h-2.5 transition-all duration-150 cursor-pointer ${getHeatmapColorClass(day.count)}`}
                      title={`${day.date}: ${day.count} submissions`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hovered cell info bar */}
          <div className="h-6 flex items-center justify-between text-xs text-secondary border-t border-on-background/20 pt-2 font-mono">
            {hoveredCell ? (
              <span className="text-emerald-accent font-bold">
                &gt; Date: {hoveredCell.date} | Submissions: {hoveredCell.count}
              </span>
            ) : (
              <span>Hover over grid cells to inspect daily submission telemetry.</span>
            )}
            <a 
              href={`https://leetcode.com/u/${USERNAME}/`}
              target="_blank"
              rel="noreferrer"
              className="text-primary font-bold hover:underline flex items-center gap-1"
            >
              <span>[ Open LeetCode Profile ]</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
