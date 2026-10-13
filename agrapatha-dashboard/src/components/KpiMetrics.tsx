import React from 'react';
import { 
  ShieldCheck, 
  Thermometer, 
  Droplets, 
  Sliders, 
  Wind, 
  Layers,
  Gauge
} from 'lucide-react';
import type { SensorDataPoint, SystemStatus, RailControlState } from '../types';

interface KpiMetricsProps {
  currentSensor: SensorDataPoint;
  systemStatus: SystemStatus;
  railState: RailControlState;
}

export const KpiMetrics: React.FC<KpiMetricsProps> = ({
  currentSensor,
  systemStatus,
  railState,
}) => {
  const getScoreColor = (score: number) => {
    if (score >= 75) return '#ef4444';
    if (score >= 50) return '#f97316';
    if (score >= 25) return '#f59e0b';
    return '#10b981';
  };

  return (
    <div className="dashboard-grid grid-cols-4" style={{ paddingBottom: '0' }}>
      {/* 1. Multi-modal Fusion Score */}
      <div className="glass-panel kpi-card">
        <div className="kpi-label">
          <ShieldCheck size={16} style={{ color: getScoreColor(systemStatus.threatScore) }} />
          <span>Multi-Modal Threat Index</span>
        </div>
        <div>
          <div className="kpi-value" style={{ color: getScoreColor(systemStatus.threatScore) }}>
            {systemStatus.threatScore}
            <span className="kpi-unit">/ 100</span>
          </div>
          {/* Progress bar */}
          <div style={{
            width: '100%',
            height: '6px',
            background: 'rgba(2, 20, 14, 0.8)',
            borderRadius: '9999px',
            overflow: 'hidden',
            marginBottom: '8px',
            border: '1px solid rgba(16, 185, 129, 0.2)'
          }}>
            <div style={{
              width: `${systemStatus.threatScore}%`,
              height: '100%',
              background: getScoreColor(systemStatus.threatScore),
              boxShadow: `0 0 10px ${getScoreColor(systemStatus.threatScore)}`,
              transition: 'width 0.4s ease'
            }} />
          </div>
        </div>
        <div className="kpi-footer">
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Layers size={12} />
            <span>Bobot: Vis {systemStatus.fusion.visionContribution}% • RF {systemStatus.fusion.edgeRfContribution}% • Soil {systemStatus.fusion.soilMoistureContribution}%</span>
          </span>
        </div>
      </div>

      {/* 2. Suhu & Udara Ambient (DHT22 + Wind) */}
      <div className="glass-panel kpi-card">
        <div className="kpi-label">
          <Thermometer size={16} className="text-emerald-400" />
          <span>Kondisi Atmosfer & Cuaca</span>
        </div>
        <div className="kpi-value">
          {currentSensor.temp.toFixed(1)}
          <span className="kpi-unit">°C</span>
          <span style={{ fontSize: '16px', color: 'var(--text-soft)', marginLeft: '12px', fontWeight: '500' }}>
            {currentSensor.rh.toFixed(0)}% <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>RH</span>
          </span>
        </div>
        <div className="kpi-footer">
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Wind size={12} /> Angin: {currentSensor.wind.toFixed(1)} km/h
          </span>
          <span style={{ 
            color: currentSensor.ffmc > 88 ? '#fb923c' : '#34d399', 
            fontFamily: 'var(--font-mono)' 
          }}>
            FFMC: {currentSensor.ffmc.toFixed(1)}
          </span>
        </div>
      </div>

      {/* 3. Hidrologi Tanah & Presipitasi */}
      <div className="glass-panel kpi-card">
        <div className="kpi-label">
          <Droplets size={16} className="text-emerald-400" />
          <span>Hidrologi Tanah & Hujan</span>
        </div>
        <div className="kpi-value">
          {currentSensor.soilMoisture.toFixed(1)}
          <span className="kpi-unit">% ADC</span>
          <span style={{ 
            fontSize: '12px', 
            fontWeight: 700, 
            padding: '3px 8px', 
            borderRadius: '4px',
            marginLeft: 'auto',
            background: currentSensor.soilMoisture < 25 ? 'rgba(239, 68, 68, 0.2)' : 'rgba(16, 185, 129, 0.2)',
            color: currentSensor.soilMoisture < 25 ? '#f87171' : '#34d399',
            border: `1px solid ${currentSensor.soilMoisture < 25 ? '#ef4444' : '#10b981'}`
          }}>
            {currentSensor.soilMoisture < 25 ? 'KRITIS KERING' : 'NORMAL LEMBAP'}
          </span>
        </div>
        <div className="kpi-footer">
          <span>Curah Hujan: {currentSensor.rain.toFixed(1)} mm/h</span>
          <span style={{ fontFamily: 'var(--font-mono)' }}>DMC: {currentSensor.dmc.toFixed(1)}</span>
        </div>
      </div>

      {/* 4. Mekatronika Rail L298N */}
      <div className="glass-panel kpi-card">
        <div className="kpi-label">
          <Sliders size={16} className="text-emerald-400" />
          <span>Status Rel Geser L298N</span>
        </div>
        <div className="kpi-value">
          {railState.positionMm}
          <span className="kpi-unit">mm</span>
          <span style={{ 
            fontSize: '11px', 
            fontFamily: 'var(--font-mono)',
            padding: '4px 8px',
            borderRadius: '4px',
            marginLeft: 'auto',
            background: railState.status === 'ESTOP' ? '#ef4444' : 'rgba(16, 185, 129, 0.2)',
            color: railState.status === 'ESTOP' ? '#ffffff' : '#34d399',
            border: '1px solid var(--border-glass)'
          }}>
            {railState.status}
          </span>
        </div>
        <div className="kpi-footer">
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Gauge size={12} /> PWM: {railState.speedPwm}/255 ({Math.round(railState.speedPwm / 2.55)}%)
          </span>
          <span style={{ fontFamily: 'var(--font-mono)' }}>
            I: {railState.motorCurrentMa} mA
          </span>
        </div>
      </div>
    </div>
  );
};
