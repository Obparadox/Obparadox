import React, { useState } from 'react';
import { 
  TrendingUp, 
  Layers, 
  MapPin, 
  Zap, 
  PieChart, 
  RefreshCw,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { AshokaChakra } from './AshokaChakra';

interface ZoneData {
  zone: string;
  revenue: number; // in Lakhs
  margin: number; // in %
  orders: number;
  growth: number;
}

export const AnalyticsPreviewSection: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<'revenue' | 'margin' | 'orders'>('revenue');
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  const zones: ZoneData[] = [
    { zone: 'North India (NCR & Punjab)', revenue: 48.6, margin: 24.2, orders: 12400, growth: 18.5 },
    { zone: 'West India (Mumbai & Gujarat)', revenue: 62.4, margin: 28.6, orders: 16800, growth: 22.4 },
    { zone: 'South India (Bengaluru & Hyd)', revenue: 54.1, margin: 26.8, orders: 14200, growth: 26.1 },
    { zone: 'East India (Kolkata & Odisha)', revenue: 35.8, margin: 21.4, orders: 9800, growth: 15.2 },
  ];

  const maxRevenue = Math.max(...zones.map((z) => z.revenue));
  const maxMargin = Math.max(...zones.map((z) => z.margin));
  const maxOrders = Math.max(...zones.map((z) => z.orders));

  const totalRevenue = zones.reduce((acc, z) => acc + z.revenue, 0).toFixed(1);
  const avgMargin = (zones.reduce((acc, z) => acc + z.margin, 0) / zones.length).toFixed(1);
  const totalOrders = zones.reduce((acc, z) => acc + z.orders, 0).toLocaleString();

  const getMetricValue = (zone: ZoneData) => {
    if (activeMetric === 'revenue') return { display: `₹${zone.revenue}L`, ratio: zone.revenue / maxRevenue };
    if (activeMetric === 'margin') return { display: `${zone.margin}%`, ratio: zone.margin / maxMargin };
    return { display: zone.orders.toLocaleString(), ratio: zone.orders / maxOrders };
  };

  return (
    <section id="insights-section" className="space-y-6 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-800/80 pb-4 gap-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#000080]/30 border border-blue-600/40 text-blue-400">
            <AshokaChakra size={22} color="#60a5fa" animate />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              Interactive Data Insights Explorer
              <span className="text-xs px-2 py-0.5 rounded-full font-semibold bg-[#16A34A]/20 text-emerald-300 border border-[#16A34A]/30">
                Live BI Sandbox
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Simulated multi-zone commercial analytics & KPI aggregation model
            </p>
          </div>
        </div>

        {/* Live Status indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#071120] border border-blue-900/60 text-slate-300">
          <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
          <span>Real-time State Calculation</span>
        </div>
      </div>

      {/* Main Sandbox Card */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#09152b]/95 border border-blue-900/60 shadow-2xl relative overflow-hidden backdrop-blur-md space-y-6">
        {/* Tricolor Border */}
        <div className="absolute top-0 left-0 right-0 h-1 flex">
          <div className="flex-1 bg-[#FF671F]" />
          <div className="flex-1 bg-white" />
          <div className="flex-1 bg-[#046A38]" />
        </div>

        {/* Top Controls & KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={() => setActiveMetric('revenue')}
            className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
              activeMetric === 'revenue'
                ? 'bg-orange-500/10 border-[#FF671F] shadow-lg shadow-orange-500/10'
                : 'bg-[#060D1A]/80 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Total Revenue Analyzed</span>
              <TrendingUp className="w-4 h-4 text-[#FF671F]" />
            </div>
            <div className="text-2xl font-extrabold text-white mt-1">₹{totalRevenue} Lakhs</div>
            <div className="text-[11px] text-emerald-400 font-medium mt-0.5 flex items-center gap-1">
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>+21.8% YoY Expansion</span>
            </div>
          </button>

          <button
            onClick={() => setActiveMetric('margin')}
            className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
              activeMetric === 'margin'
                ? 'bg-blue-500/10 border-[#38BDF8] shadow-lg shadow-blue-500/10'
                : 'bg-[#060D1A]/80 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Average Gross Margin</span>
              <PieChart className="w-4 h-4 text-[#38BDF8]" />
            </div>
            <div className="text-2xl font-extrabold text-white mt-1">{avgMargin}%</div>
            <div className="text-[11px] text-blue-300 font-medium mt-0.5 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Optimized via DAX measures</span>
            </div>
          </button>

          <button
            onClick={() => setActiveMetric('orders')}
            className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden ${
              activeMetric === 'orders'
                ? 'bg-emerald-500/10 border-[#16A34A] shadow-lg shadow-emerald-500/10'
                : 'bg-[#060D1A]/80 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Total Processed Volume</span>
              <Zap className="w-4 h-4 text-[#16A34A]" />
            </div>
            <div className="text-2xl font-extrabold text-white mt-1">{totalOrders}</div>
            <div className="text-[11px] text-emerald-400 font-medium mt-0.5 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" />
              <span>99.9% Transaction Accuracy</span>
            </div>
          </button>
        </div>

        {/* Visual Analytics Chart Breakdown */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300 font-semibold flex items-center gap-2">
              <span>Zonal Distribution:</span>
              <strong className="text-amber-300 capitalize">{activeMetric}</strong>
            </span>
            <span className="text-slate-400 text-[11px]">Click a zonal bar to inspect variance</span>
          </div>

          <div className="space-y-3.5">
            {zones.map((zone) => {
              const { display, ratio } = getMetricValue(zone);
              const isSelected = selectedZone === zone.zone;

              return (
                <div
                  key={zone.zone}
                  onClick={() => setSelectedZone(isSelected ? null : zone.zone)}
                  className={`p-3.5 rounded-xl transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[#0b1b36] border-[#FF671F]'
                      : 'bg-[#060D1A]/90 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#FF671F]" />
                      <span className="font-semibold text-white">{zone.zone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-white text-sm">{display}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#046A38]/30 text-emerald-300 border border-[#046A38]/50">
                        +{zone.growth}% YoY
                      </span>
                    </div>
                  </div>

                  {/* Progressive Bar */}
                  <div className="h-3 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        activeMetric === 'revenue'
                          ? 'bg-gradient-to-r from-[#FF671F] to-[#FACC15]'
                          : activeMetric === 'margin'
                          ? 'bg-gradient-to-r from-blue-500 to-[#38BDF8]'
                          : 'bg-gradient-to-r from-[#16A34A] to-emerald-300'
                      }`}
                      style={{ width: `${Math.max(ratio * 100, 10)}%` }}
                    />
                  </div>

                  {/* Expanded Zone Detail */}
                  {isSelected && (
                    <div className="mt-3 pt-3 border-t border-slate-800 grid grid-cols-3 gap-2 text-center text-xs animate-fade-in">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Zonal Revenue</span>
                        <span className="font-bold text-white">₹{zone.revenue}L</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">Net Margin</span>
                        <span className="font-bold text-emerald-400">{zone.margin}%</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">Volume</span>
                        <span className="font-bold text-amber-300">{zone.orders.toLocaleString()}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Methodology Note */}
        <div className="p-3.5 rounded-xl bg-[#060D1A] border border-slate-800/80 text-xs text-slate-300 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#FF9933] font-semibold">Data Pipeline Architecture:</span>
            <span className="text-slate-400">Aggregated via Python Pandas & Star Schema modeled in Power BI.</span>
          </div>
          <button
            onClick={() => {
              setActiveMetric('revenue');
              setSelectedZone(null);
            }}
            className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset View</span>
          </button>
        </div>
      </div>
    </section>
  );
};
