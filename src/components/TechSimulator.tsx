import React, { useState } from 'react';
import { Thermometer, Zap, ShieldCheck, Activity, Smartphone, RefreshCw, Sparkles, CheckCircle2 } from 'lucide-react';

export const TechSimulator: React.FC = () => {
  const [temperature, setTemperature] = useState(19);
  const [uvActive, setUvActive] = useState(false);
  const [purityLevel, setPurityLevel] = useState(99.9);
  const [sipGoal, setSipGoal] = useState(1800); // ml
  const [consumed, setConsumed] = useState(1200);

  const startUvCycle = () => {
    setUvActive(true);
    setPurityLevel(98.2);
    setTimeout(() => {
      setPurityLevel(99.99);
      setUvActive(false);
    }, 2000);
  };

  const addSip = () => {
    setConsumed((prev) => Math.min(prev + 250, 2500));
  };

  return (
    <section id="tech-simulator" className="py-28 bg-[#040d08] relative border-b border-[#c5a059]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a2316] border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERACTIVE TECHNOLOGY SIMULATOR</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Test the PEPAL OS <br />
            <span className="gold-gradient-text italic font-normal">Hydration Matrix</span>
          </h2>

          <p className="text-slate-300 font-sans text-sm sm:text-base">
            Simulate live vessel operations in real time. Adjust water temperature, trigger deep 265nm UV-C light sterilization, and track daily hydration milestones.
          </p>
        </div>

        {/* Sandbox Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: OLED Temperature & Thermal Retain */}
          <div className="p-6 rounded-3xl bg-[#07180f] border border-cyan-500/30 space-y-6 text-left shadow-xl">
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3">
              <div className="flex items-center gap-2">
                <Thermometer className="w-5 h-5 text-cyan-400" />
                <h3 className="font-serif text-lg font-bold text-white">Thermal Control</h3>
              </div>
              <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">
                ACTIVE SENSOR
              </span>
            </div>

            <div className="text-center py-4 bg-[#030e08] rounded-2xl border border-cyan-500/20">
              <div className="text-[10px] font-mono text-slate-400 uppercase">CURRENT WATER TEMP</div>
              <div className="text-5xl font-mono font-bold text-[#fceabb] my-1">{temperature}°C</div>
              <div className="text-xs font-mono text-cyan-300">
                {temperature < 12 ? '🧊 Crisp Ice Cold' : temperature <= 25 ? '💧 Optimal Hydration Zone' : '♨️ Warm Comfort'}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono text-slate-300">
                <span>Set Target Temp:</span>
                <span>{temperature}°C</span>
              </div>
              <input
                type="range"
                min={4}
                max={50}
                value={temperature}
                onChange={(e) => setTemperature(Number(e.target.value))}
                className="w-full accent-[#d4af37] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>4°C (Ice)</span>
                <span>19°C (PEPAL Ideal)</span>
                <span>50°C (Warm)</span>
              </div>
            </div>
          </div>

          {/* Card 2: UV-C Sterilization Engine */}
          <div className="p-6 rounded-3xl bg-[#07180f] border border-cyan-500/30 space-y-6 text-left shadow-xl relative overflow-hidden">
            {uvActive && (
              <div className="absolute inset-0 bg-cyan-500/10 pointer-events-none animate-pulse" />
            )}

            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h3 className="font-serif text-lg font-bold text-white">UV-C Purification</h3>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                265nm DEEP UV
              </span>
            </div>

            <div className="text-center py-4 bg-[#030e08] rounded-2xl border border-cyan-500/20 space-y-2">
              <div className="text-[10px] font-mono text-slate-400 uppercase">WATER PURITY LEVEL</div>
              <div className="text-4xl font-mono font-bold text-emerald-400">{purityLevel}%</div>
              <p className="text-[11px] font-mono text-slate-300">
                {uvActive ? '⚡ Destroying micro-pathogens...' : '✓ 100% Zero Bacterial Biofilm'}
              </p>
            </div>

            <button
              onClick={startUvCycle}
              disabled={uvActive}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-500 text-white font-mono font-bold text-xs hover:brightness-110 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4" />
              <span>{uvActive ? 'Purifying Water...' : 'RUN 60-SEC STERILIZATION'}</span>
            </button>
          </div>

          {/* Card 3: Hydration Goal Tracker & App Sync */}
          <div className="p-6 rounded-3xl bg-[#07180f] border border-cyan-500/30 space-y-6 text-left shadow-xl">
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3">
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#d4af37]" />
                <h3 className="font-serif text-lg font-bold text-white">App Hydration Sync</h3>
              </div>
              <span className="text-[10px] font-mono text-[#fceabb] bg-[#1d1607] px-2 py-0.5 rounded border border-[#c5a059]/30">
                BLE 5.3
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-300">Today's Consumption:</span>
                <span className="text-[#fceabb] font-bold">{consumed} / {sipGoal} ml</span>
              </div>
              <div className="w-full h-3 bg-[#030e08] rounded-full overflow-hidden border border-cyan-500/20">
                <div
                  className="h-full bg-gradient-to-r from-[#d4af37] to-emerald-400 transition-all duration-500"
                  style={{ width: `${Math.min((consumed / sipGoal) * 100, 100)}%` }}
                />
              </div>
            </div>

            <button
              onClick={addSip}
              className="w-full py-3.5 rounded-2xl bg-[#0a2316] border border-[#c5a059]/40 text-[#fceabb] font-mono font-bold text-xs hover:bg-[#133d28] hover:border-[#d4af37] transition-all flex items-center justify-center gap-2"
            >
              <Activity className="w-4 h-4 text-[#d4af37]" />
              <span>LOG +250ML SIP FROM VESSEL</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
