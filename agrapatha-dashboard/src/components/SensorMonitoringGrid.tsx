import React from 'react';
import { 
  Thermometer, 
  Droplets, 
  Sun, 
  CloudRain, 
  Sprout, 
  Cpu,
  Layers,
  Wind,
  Gauge
} from 'lucide-react';
import { motion } from 'framer-motion';
import type { SensorDataPoint, SystemStatus } from '../types';

interface SensorMonitoringGridProps {
  currentSensor: SensorDataPoint;
  systemStatus: SystemStatus;
}

export const SensorMonitoringGrid: React.FC<SensorMonitoringGridProps> = ({
  currentSensor,
  systemStatus,
}) => {
  const getThreatBadge = (level: string) => {
    switch (level) {
      case 'GREEN': return { bg: 'rgba(93, 214, 44, 0.12)', text: '#5DD62C', border: 'rgba(93, 214, 44, 0.4)' };
      case 'YELLOW': return { bg: 'rgba(250, 204, 21, 0.12)', text: '#facc15', border: 'rgba(250, 204, 21, 0.45)' };
      case 'ORANGE': return { bg: 'rgba(251, 146, 60, 0.14)', text: '#fb923c', border: 'rgba(251, 146, 60, 0.5)' };
      case 'RED': return { bg: 'rgba(239, 68, 68, 0.2)', text: '#f87171', border: 'rgba(239, 68, 68, 0.7)' };
      default: return { bg: 'rgba(93, 214, 44, 0.12)', text: '#5DD62C', border: 'rgba(93, 214, 44, 0.4)' };
    }
  };

  const threatStyle = getThreatBadge(systemStatus.level);

  const sensorCards = [
    {
      channel: 'CH-01',
      title: 'Suhu Udara',
      chip: 'DHT22',
      icon: Thermometer,
      value: currentSensor.temp.toFixed(1),
      unit: '°C',
      pct: Math.min(100, Math.max(0, ((currentSensor.temp - 15) / 35) * 100)),
      color: currentSensor.temp > 38 ? '#ef4444' : currentSensor.temp > 32 ? '#facc15' : '#5DD62C',
      status: currentSensor.temp > 38 ? 'Panas Ekstrem' : currentSensor.temp > 32 ? 'Suhu Meningkat' : 'Suhu Nominal',
      rangeRef: 'Normal: 22–32°C',
    },
    {
      channel: 'CH-02',
      title: 'Kelembapan Udara',
      chip: 'DHT22',
      icon: Droplets,
      value: currentSensor.rh.toFixed(0),
      unit: '% RH',
      pct: Math.min(100, Math.max(0, currentSensor.rh)),
      color: currentSensor.rh < 30 ? '#ef4444' : currentSensor.rh < 45 ? '#facc15' : '#38bdf8',
      status: currentSensor.rh < 30 ? 'Udara Kering Kritis' : currentSensor.rh < 45 ? 'Mulai Kering' : 'Kelembapan Ideal',
      rangeRef: 'Ideal: > 50% RH',
    },
    {
      channel: 'CH-03',
      title: 'Intensitas Cahaya',
      chip: 'LDR ADC',
      icon: Sun,
      value: currentSensor.lightLux.toLocaleString(),
      unit: 'Lux',
      pct: Math.min(100, Math.max(5, (currentSensor.lightLux / 80000) * 100)),
      color: currentSensor.lightLux > 55000 ? '#fb923c' : '#5DD62C',
      status:
        currentSensor.lightLux > 55000
          ? 'Radiasi Terik Tinggi'
          : currentSensor.lightLux > 20000
          ? 'Siang Hari Cerah'
          : 'Teduh / Berawan',
      rangeRef: 'Rentang: 0–80k lx',
    },
    {
      channel: 'CH-04',
      title: 'Kelembapan Tanah',
      chip: 'CAP-SOIL',
      icon: Sprout,
      value: currentSensor.soilMoisture.toFixed(1),
      unit: '% ADC',
      pct: Math.min(100, Math.max(0, currentSensor.soilMoisture)),
      color: currentSensor.soilMoisture < 20 ? '#ef4444' : currentSensor.soilMoisture < 35 ? '#facc15' : '#5DD62C',
      status:
        currentSensor.soilMoisture < 20
          ? 'Gambut/Tanah Kering'
          : currentSensor.soilMoisture < 35
          ? 'Kelembapan Menurun'
          : 'Tanah Lembap Aman',
      rangeRef: 'Ambang: > 30% ADC',
    },
    {
      channel: 'CH-05',
      title: 'Presipitasi Hujan',
      chip: 'RG-TIPPING',
      icon: CloudRain,
      value: currentSensor.rain.toFixed(1),
      unit: 'mm/h',
      pct: currentSensor.rain > 0 ? Math.min(100, currentSensor.rain * 10) : 6,
      color:
        currentSensor.rainStatus === 'HUJAN'
          ? '#38bdf8'
          : currentSensor.rainStatus === 'GERIMIS'
          ? '#34d399'
          : '#fb923c',
      status: `Status: ${currentSensor.rainStatus}`,
      rangeRef: 'Akumulasi Jam Ini',
    },
  ];

  const kernelInputs = [
    { label: 'TEMP', value: `${currentSensor.temp.toFixed(1)}°C`, icon: Thermometer },
    { label: 'RH', value: `${currentSensor.rh.toFixed(0)}%`, icon: Droplets },
    { label: 'WIND', value: `${currentSensor.wind.toFixed(1)} km/h`, icon: Wind },
    { label: 'RAIN', value: `${currentSensor.rain.toFixed(1)} mm`, icon: CloudRain },
    { label: 'FFMC', value: currentSensor.ffmc.toFixed(1), icon: Gauge },
    { label: 'DMC', value: currentSensor.dmc.toFixed(1), icon: Layers },
  ];

  const probaItems = [
    {
      idx: 0,
      label: 'Kelas 0: Aman',
      pct: Math.round(currentSensor.hazardProba[0] * 100),
      color: '#5DD62C',
      bg: 'rgba(93, 214, 44, 0.14)',
    },
    {
      idx: 1,
      label: 'Kelas 1: Waspada',
      pct: Math.round(currentSensor.hazardProba[1] * 100),
      color: '#facc15',
      bg: 'rgba(250, 204, 21, 0.14)',
    },
    {
      idx: 2,
      label: 'Kelas 2: Bahaya Api',
      pct: Math.round(currentSensor.hazardProba[2] * 100),
      color: '#ef4444',
      bg: 'rgba(239, 68, 68, 0.18)',
    },
  ];

  return (
    <div className="dashboard-container" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* 5 Utama Sensor Monitoring Grid */}
      <div className="grid-cols-5">
        {sensorCards.map((card) => {
          const IconComp = card.icon;
          return (
            <motion.div
              key={card.channel}
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30, mass: 0.8 }}
              className="glass-panel kpi-card"
            >
              {/* Top Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px', minWidth: 0 }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '9px',
                      background: `${card.color}18`,
                      border: `1px solid ${card.color}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: card.color,
                      flexShrink: 0,
                    }}
                  >
                    <IconComp size={15} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: '9.5px',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {card.channel}
                    </div>
                    <div
                      style={{
                        fontSize: '12.5px',
                        fontWeight: 700,
                        color: 'var(--text-main)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {card.title}
                    </div>
                  </div>
                </div>

                <span
                  style={{
                    fontSize: '9.5px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    color: 'var(--text-soft)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '2px 7px',
                    borderRadius: '6px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {card.chip}
                </span>
              </div>

              {/* Value Display */}
              <div className="kpi-value">
                <span>{card.value}</span>
                <span className="kpi-unit">{card.unit}</span>
              </div>

              {/* Progress Bar & Footer */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                <div
                  style={{
                    width: '100%',
                    height: '5px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    borderRadius: '9999px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: `${card.pct}%`,
                      height: '100%',
                      background: card.color,
                      boxShadow: `0 0 8px ${card.color}88`,
                      borderRadius: '9999px',
                      transition: 'width 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                  />
                </div>

                <div className="kpi-footer">
                  <span style={{ color: card.color, fontWeight: 600, fontSize: '11px' }}>
                    {card.status}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)' }}>
                    {card.rangeRef}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Edge AI Kernel model_hazard.h & Multi-Modal Sensor Fusion Deck */}
      <div
        className="glass-panel kernel-fusion-grid"
        style={{
          padding: '18px 22px',
        }}
      >
        {/* Left: Input Feature Vector into model_hazard.h */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '9px',
                  background: 'linear-gradient(135deg, #5DD62C 0%, #265912 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#070a08',
                  border: '1px solid rgba(126, 240, 81, 0.5)',
                }}
              >
                <Cpu size={17} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#F4F7F5', letterSpacing: '-0.01em' }}>
                    Edge AI Kernel: model_hazard.h
                  </span>
                  <span
                    style={{
                      fontSize: '10px',
                      fontFamily: 'var(--font-mono)',
                      background: 'rgba(93, 214, 44, 0.12)',
                      color: '#5DD62C',
                      padding: '1px 7px',
                      borderRadius: '5px',
                      border: '1px solid rgba(93, 214, 44, 0.28)',
                      fontWeight: 700,
                    }}
                  >
                    RF 100 TREES • score()
                  </span>
                </div>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  Vektor Fitur Input Real-Time (Canadian FWI + Mikroklimat)
                </span>
              </div>
            </div>

            <span
              style={{
                fontSize: '10.5px',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-soft)',
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '4px 10px',
                borderRadius: '6px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              Fusi Bobot: Vis {systemStatus.fusion.visionContribution}% • RF {systemStatus.fusion.edgeRfContribution}% • Soil {systemStatus.fusion.soilMoistureContribution}%
            </span>
          </div>

          {/* 6 Structured Input Feature Chips */}
          <div className="grid-cols-6">
            {kernelInputs.map((inp) => (
              <div
                key={inp.label}
                className="tabular-nums"
                style={{
                  background: 'rgba(255, 255, 255, 0.025)',
                  border: '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '8px',
                  padding: '7px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                }}
              >
                <span style={{ fontSize: '9.5px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  {inp.label}
                </span>
                <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#F4F7F5' }}>
                  {inp.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Output Probabilities [Low, Mod, High] & Active Class */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            background: 'rgba(8, 11, 9, 0.55)',
            padding: '14px 16px',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.07)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-soft)', fontWeight: 600 }}>
              DISTRIBUSI PROBABILITAS OUTPUT:
            </span>
            <div
              style={{
                padding: '3px 10px',
                borderRadius: '6px',
                background: threatStyle.bg,
                border: `1px solid ${threatStyle.border}`,
                color: threatStyle.text,
                fontWeight: 700,
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
              }}
            >
              KELAS: {systemStatus.hazardClassLabel}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '8px' }}>
            {probaItems.map((item) => {
              const isWinner = currentSensor.hazardClass === item.idx;
              return (
                <div
                  key={item.label}
                  className="tabular-nums"
                  style={{
                    padding: '9px 11px',
                    borderRadius: '9px',
                    background: isWinner ? item.bg : 'rgba(255, 255, 255, 0.025)',
                    border: `1px solid ${isWinner ? item.color : 'rgba(255, 255, 255, 0.06)'}`,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '10.5px', fontFamily: 'var(--font-mono)' }}>
                    <span style={{ color: isWinner ? '#ffffff' : 'var(--text-soft)', fontWeight: isWinner ? 700 : 500 }}>
                      {item.label}
                    </span>
                    <span style={{ color: item.color, fontWeight: 800 }}>
                      {item.pct}%
                    </span>
                  </div>
                  <div
                    style={{
                      width: '100%',
                      height: '4px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: '9999px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        width: `${item.pct}%`,
                        height: '100%',
                        background: item.color,
                        borderRadius: '9999px',
                        transition: 'width 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

