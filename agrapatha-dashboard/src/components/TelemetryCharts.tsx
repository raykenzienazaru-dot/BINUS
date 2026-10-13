import { useState } from 'react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid,
  Legend
} from 'recharts';
import { Activity, Cpu, Sun, Thermometer } from 'lucide-react';
import { motion } from 'framer-motion';
import type { SensorDataPoint } from '../types';

interface TelemetryChartsProps {
  history: SensorDataPoint[];
}

const CHART_TABS = [
  { id: 'ENVIRONMENT' as const, label: 'Mikroklimat', icon: Thermometer },
  { id: 'LIGHT_RAIN' as const, label: 'Cahaya & Hujan', icon: Sun },
  { id: 'MODEL_HAZARD' as const, label: 'Probabilitas RF', icon: Cpu },
];

export const TelemetryCharts: React.FC<TelemetryChartsProps> = ({ history }) => {
  const [activeTab, setActiveTab] = useState<'ENVIRONMENT' | 'LIGHT_RAIN' | 'MODEL_HAZARD'>('ENVIRONMENT');

  const latest = history[history.length - 1];

  const chartData = history.map((pt) => ({
    time: pt.time,
    temp: Number(pt.temp.toFixed(1)),
    rh: Number(pt.rh.toFixed(1)),
    soil: Number(pt.soilMoisture.toFixed(1)),
    lightLux: pt.lightLux,
    rain: Number(pt.rain.toFixed(1)),
    ffmc: Number(pt.ffmc.toFixed(1)),
    probaLow: Number((pt.hazardProba[0] * 100).toFixed(1)),
    probaMod: Number((pt.hazardProba[1] * 100).toFixed(1)),
    probaHigh: Number((pt.hazardProba[2] * 100).toFixed(1)),
  }));

  return (
    <div
      className="glass-panel"
      style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '14px',
        height: '100%',
      }}
    >
      {/* Top Header & Segmented Tab Switcher */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '9px',
              background: 'rgba(93, 214, 44, 0.12)',
              border: '1px solid rgba(93, 214, 44, 0.28)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#5DD62C',
            }}
          >
            <Activity size={16} />
          </div>
          <div>
            <h2 style={{ fontSize: '15px', fontWeight: 700, color: '#F4F7F5', letterSpacing: '-0.01em' }}>
              Analitik Telemetri & Kernel model_hazard.h
            </h2>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              Time-Series Akuisisi Sensor & Probabilitas Klasifikasi
            </span>
          </div>
        </div>

        {/* Segmented Tab Controls with Spring Physics */}
        <div
          style={{
            display: 'flex',
            gap: '4px',
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '4px',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          {CHART_TABS.map((tab) => {
            const IconComp = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: isSelected ? 700 : 500,
                  padding: '6px 11px',
                  borderRadius: '7px',
                  border: 'none',
                  background: 'transparent',
                  color: isSelected ? '#5DD62C' : 'var(--text-soft)',
                  cursor: 'pointer',
                  transition: 'color 0.15s ease',
                  zIndex: 1,
                }}
              >
                {isSelected && (
                  <motion.div
                    layoutId="telemetry-tab-pill"
                    transition={{ type: 'spring', stiffness: 420, damping: 32, mass: 0.8 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '7px',
                      background: 'rgba(93, 214, 44, 0.14)',
                      border: '1px solid rgba(93, 214, 44, 0.45)',
                      zIndex: -1,
                    }}
                  />
                )}
                <IconComp size={12} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Tab Quick Summary Strip */}
      <div
        className="tabular-nums"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '10px',
        }}
      >
        {activeTab === 'ENVIRONMENT' && (
          <>
            <div style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.06)', padding: '8px 12px', borderRadius: '8px', borderLeft: '3px solid #f97316' }}>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>SUHU UDARA</div>
              <div style={{ fontSize: '15px', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#f97316' }}>{latest.temp.toFixed(1)} °C</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.06)', padding: '8px 12px', borderRadius: '8px', borderLeft: '3px solid #38bdf8' }}>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>KELEMBAPAN UDARA</div>
              <div style={{ fontSize: '15px', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#38bdf8' }}>{latest.rh.toFixed(0)} % RH</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.06)', padding: '8px 12px', borderRadius: '8px', borderLeft: '3px solid #5DD62C' }}>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>SOIL MOISTURE</div>
              <div style={{ fontSize: '15px', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#5DD62C' }}>{latest.soilMoisture.toFixed(1)} % ADC</div>
            </div>
          </>
        )}

        {activeTab === 'LIGHT_RAIN' && (
          <>
            <div style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.06)', padding: '8px 12px', borderRadius: '8px', borderLeft: '3px solid #5DD62C' }}>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>INTENSITAS CAHAYA</div>
              <div style={{ fontSize: '15px', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#5DD62C' }}>{latest.lightLux.toLocaleString()} Lux</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.06)', padding: '8px 12px', borderRadius: '8px', borderLeft: '3px solid #60a5fa' }}>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>CURAH HUJAN</div>
              <div style={{ fontSize: '15px', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#60a5fa' }}>{latest.rain.toFixed(1)} mm/h</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.06)', padding: '8px 12px', borderRadius: '8px', borderLeft: '3px solid #facc15' }}>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>INDEKS FFMC</div>
              <div style={{ fontSize: '15px', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#facc15' }}>{latest.ffmc.toFixed(1)}</div>
            </div>
          </>
        )}

        {activeTab === 'MODEL_HAZARD' && (
          <>
            <div style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.06)', padding: '8px 12px', borderRadius: '8px', borderLeft: '3px solid #5DD62C' }}>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>KELAS 0: P(AMAN)</div>
              <div style={{ fontSize: '15px', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#5DD62C' }}>{(latest.hazardProba[0] * 100).toFixed(1)}%</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.06)', padding: '8px 12px', borderRadius: '8px', borderLeft: '3px solid #f59e0b' }}>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>KELAS 1: P(WASPADA)</div>
              <div style={{ fontSize: '15px', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#f59e0b' }}>{(latest.hazardProba[1] * 100).toFixed(1)}%</div>
            </div>
            <div style={{ background: 'rgba(255, 255, 255, 0.025)', border: '1px solid rgba(255, 255, 255, 0.06)', padding: '8px 12px', borderRadius: '8px', borderLeft: '3px solid #ef4444' }}>
              <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>KELAS 2: P(BAHAYA API)</div>
              <div style={{ fontSize: '15px', fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#ef4444' }}>{(latest.hazardProba[2] * 100).toFixed(1)}%</div>
            </div>
          </>
        )}
      </div>

      {/* Chart Canvas Area */}
      <div style={{ width: '100%', height: '250px' }}>
        {activeTab === 'ENVIRONMENT' && (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 8, right: 10, left: -18, bottom: 0 }}>
              <defs>
                <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="colorRh" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="colorSoil" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5DD62C" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#5DD62C" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" />
              <XAxis dataKey="time" stroke="#6e7d73" fontSize={10.5} fontFamily="var(--font-mono)" />
              <YAxis stroke="#6e7d73" fontSize={10.5} fontFamily="var(--font-mono)" />
              <Tooltip
                contentStyle={{
                  background: 'rgba(12, 16, 13, 0.94)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11.5px',
                  boxShadow: '0 10px 28px rgba(0,0,0,0.85)',
                }}
              />
              <Legend wrapperStyle={{ fontSize: '11px', fontFamily: 'var(--font-mono)' }} />
              <Area type="monotone" dataKey="temp" name="Suhu (°C)" stroke="#f97316" strokeWidth={2} fillOpacity={1} fill="url(#colorTemp)" />
              <Area type="monotone" dataKey="rh" name="RH Udara (%)" stroke="#38bdf8" strokeWidth={2} fillOpacity={1} fill="url(#colorRh)" />
              <Area type="monotone" dataKey="soil" name="Tanah (% ADC)" stroke="#5DD62C" strokeWidth={2} fillOpacity={1} fill="url(#colorSoil)" />
            </AreaChart>
          </ResponsiveContainer>
        )}

        {activeTab === 'LIGHT_RAIN' && (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 8, right: 10, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="colorLux" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5DD62C" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="#5DD62C" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="colorRain" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.45} />
                  <stop offset="95%" stopColor="#60a5fa" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" />
              <XAxis dataKey="time" stroke="#6e7d73" fontSize={10.5} fontFamily="var(--font-mono)" />
              <YAxis yAxisId="left" stroke="#5DD62C" fontSize={10.5} fontFamily="var(--font-mono)" unit=" lx" />
              <YAxis yAxisId="right" orientation="right" stroke="#60a5fa" fontSize={10.5} fontFamily="var(--font-mono)" unit=" mm" />
              <Tooltip
                contentStyle={{
                  background: 'rgba(12, 16, 13, 0.94)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11.5px',
                }}
              />
              <Legend wrapperStyle={{ fontSize: '11px', fontFamily: 'var(--font-mono)' }} />
              <Area yAxisId="left" type="monotone" dataKey="lightLux" name="Cahaya (Lux)" stroke="#5DD62C" strokeWidth={2} fillOpacity={1} fill="url(#colorLux)" />
              <Area yAxisId="right" type="monotone" dataKey="rain" name="Curah Hujan (mm/h)" stroke="#60a5fa" strokeWidth={2} fillOpacity={1} fill="url(#colorRain)" />
            </AreaChart>
          </ResponsiveContainer>
        )}

        {activeTab === 'MODEL_HAZARD' && (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 8, right: 10, left: -18, bottom: 0 }}>
              <defs>
                <linearGradient id="colorLow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5DD62C" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#5DD62C" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="colorMod" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="colorHigh" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" />
              <XAxis dataKey="time" stroke="#6e7d73" fontSize={10.5} fontFamily="var(--font-mono)" />
              <YAxis stroke="#6e7d73" fontSize={10.5} fontFamily="var(--font-mono)" unit="%" />
              <Tooltip
                contentStyle={{
                  background: 'rgba(12, 16, 13, 0.94)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11.5px',
                }}
              />
              <Legend wrapperStyle={{ fontSize: '11px', fontFamily: 'var(--font-mono)' }} />
              <Area type="monotone" dataKey="probaLow" name="Kelas 0: P(Aman)" stroke="#5DD62C" strokeWidth={2} fillOpacity={1} fill="url(#colorLow)" />
              <Area type="monotone" dataKey="probaMod" name="Kelas 1: P(Waspada)" stroke="#f59e0b" strokeWidth={2} fillOpacity={1} fill="url(#colorMod)" />
              <Area type="monotone" dataKey="probaHigh" name="Kelas 2: P(Bahaya Api)" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorHigh)" />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Footer Info about the Edge Model */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
          fontSize: '10.5px',
          color: 'var(--text-soft)',
          background: 'rgba(255, 255, 255, 0.025)',
          padding: '8px 12px',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          fontFamily: 'var(--font-mono)',
        }}
      >
        <span>Firmware Kernel: model_hazard.h (Random Forest 100 Trees)</span>
        <span style={{ color: '#5DD62C' }}>score(double *input, double *output) &rarr; 3 Output Classes</span>
      </div>
    </div>
  );
};

