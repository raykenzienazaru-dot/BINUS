import React from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Square, 
  RotateCw, 
  AlertOctagon, 
  Cpu, 
  Zap, 
  ThermometerSnowflake,
  ShieldCheck,
  Camera,
  Gauge
} from 'lucide-react';
import type { RailControlState } from '../types';

interface RailControllerProps {
  railState: RailControlState;
  onMoveLeft: () => void;
  onMoveRight: () => void;
  onStop: () => void;
  onToggleAutoPatrol: () => void;
  onSpeedChange: (speed: number) => void;
  onEmergencyStop: () => void;
  onPositionClick: (targetPct: number) => void;
}

const RAIL_PRESETS = [
  { label: 'Home (0mm)', pct: 0 },
  { label: 'Sektor A (300mm)', pct: 25 },
  { label: 'Tengah (600mm)', pct: 50 },
  { label: 'Sektor B (900mm)', pct: 75 },
  { label: 'Ujung (1200mm)', pct: 100 },
];

export const RailController: React.FC<RailControllerProps> = ({
  railState,
  onMoveLeft,
  onMoveRight,
  onStop,
  onToggleAutoPatrol,
  onSpeedChange,
  onEmergencyStop,
  onPositionClick,
}) => {
  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (railState.status === 'ESTOP') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
    onPositionClick(pct);
  };

  const isEstop = railState.status === 'ESTOP';

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
      {/* Header & Interlock Status */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
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
            <Cpu size={16} />
          </div>
          <div>
            <h2 style={{ fontSize: '15px', fontWeight: 700, color: '#F4F7F5', letterSpacing: '-0.01em' }}>
              Aktuator Rel Linier L298N
            </h2>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              Dual H-Bridge Driver • Lintasan 1200 mm
            </span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            padding: '5px 10px',
            borderRadius: '8px',
            background: isEstop ? 'rgba(239, 68, 68, 0.18)' : 'rgba(93, 214, 44, 0.1)',
            border: `1px solid ${isEstop ? '#ef4444' : 'rgba(93, 214, 44, 0.3)'}`,
            color: isEstop ? '#f87171' : '#5DD62C',
          }}
        >
          <ShieldCheck size={13} />
          <span>{isEstop ? 'E-STOP LOCKED' : `STATUS: ${railState.status}`}</span>
        </div>
      </div>

      {/* Visual Rail Slider */}
      <div className="rail-track-container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-soft)',
            marginBottom: '6px',
          }}
        >
          <span style={{ color: railState.limitLeftTriggered ? '#ef4444' : 'var(--text-muted)' }}>
            SW1: {railState.limitLeftTriggered ? 'TRIGGERED' : 'CLEAR'}
          </span>
          <span
            className="tabular-nums"
            style={{
              color: '#5DD62C',
              fontWeight: 700,
              background: 'rgba(93, 214, 44, 0.1)',
              padding: '2px 10px',
              borderRadius: '6px',
              border: '1px solid rgba(93, 214, 44, 0.25)',
            }}
          >
            POSISI: {railState.positionMm} mm ({railState.positionPct.toFixed(1)}%)
          </span>
          <span style={{ color: railState.limitRightTriggered ? '#ef4444' : 'var(--text-muted)' }}>
            SW2: {railState.limitRightTriggered ? 'TRIGGERED' : 'CLEAR'}
          </span>
        </div>

        {/* Clickable Steel Beam Track */}
        <div
          className="rail-steel-beam"
          onClick={handleTrackClick}
          style={{ cursor: isEstop ? 'not-allowed' : 'pointer' }}
          title="Klik pada lintasan untuk memindahkan posisi kamera"
        >
          {/* Active Progress Fill */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: `${railState.positionPct}%`,
              background: 'linear-gradient(90deg, rgba(46, 107, 21, 0.45) 0%, rgba(93, 214, 44, 0.75) 100%)',
              borderRadius: '9999px',
              transition: 'width 0.18s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          />

          {/* Left Endstop Indicator */}
          <div className={`rail-endstop left ${railState.limitLeftTriggered ? 'active' : 'inactive'}`}>
            SW1
          </div>

          {/* Moving Carriage */}
          <div
            className="rail-carriage"
            style={{ left: `${railState.positionPct}%` }}
          >
            <Camera size={17} />
          </div>

          {/* Right Endstop Indicator */}
          <div className={`rail-endstop right ${railState.limitRightTriggered ? 'active' : 'inactive'}`}>
            SW2
          </div>
        </div>

        {/* Quick Preset Sector Buttons */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
            gap: '6px',
            marginTop: '6px',
          }}
        >
          {RAIL_PRESETS.map((preset) => {
            const isNear = Math.abs(railState.positionPct - preset.pct) < 5;
            return (
              <button
                key={preset.label}
                onClick={() => !isEstop && onPositionClick(preset.pct)}
                disabled={isEstop}
                style={{
                  fontSize: '10px',
                  fontFamily: 'var(--font-mono)',
                  padding: '5px 4px',
                  borderRadius: '6px',
                  background: isNear ? 'rgba(93, 214, 44, 0.14)' : 'rgba(255, 255, 255, 0.025)',
                  border: `1px solid ${isNear ? 'rgba(93, 214, 44, 0.5)' : 'rgba(255, 255, 255, 0.07)'}`,
                  color: isNear ? '#5DD62C' : 'var(--text-muted)',
                  fontWeight: isNear ? 700 : 500,
                  cursor: isEstop ? 'not-allowed' : 'pointer',
                  transition: 'all 0.15s ease',
                  textAlign: 'center',
                }}
              >
                {preset.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Directional & Mode Controls */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '8px' }}>
        <button
          onClick={onMoveLeft}
          disabled={railState.limitLeftTriggered || isEstop}
          className={railState.status === 'SLIDING_LEFT' ? 'btn-emerald' : 'btn-outline-emerald'}
          style={{ justifyContent: 'center', padding: '10px 10px' }}
        >
          <ArrowLeft size={15} />
          <span>Geser Kiri</span>
        </button>

        <button
          onClick={onStop}
          disabled={isEstop}
          className="btn-outline-emerald"
          style={{
            justifyContent: 'center',
            padding: '10px 10px',
            borderColor: railState.status === 'IDLE' ? 'rgba(250, 204, 21, 0.4)' : undefined,
            color: railState.status === 'IDLE' ? '#fde047' : undefined,
          }}
        >
          <Square size={14} />
          <span>Hentikan</span>
        </button>

        <button
          onClick={onMoveRight}
          disabled={railState.limitRightTriggered || isEstop}
          className={railState.status === 'SLIDING_RIGHT' ? 'btn-emerald' : 'btn-outline-emerald'}
          style={{ justifyContent: 'center', padding: '10px 10px' }}
        >
          <span>Geser Kanan</span>
          <ArrowRight size={15} />
        </button>

        <button
          onClick={onToggleAutoPatrol}
          disabled={isEstop}
          className={railState.autoPatrol ? 'btn-emerald' : 'btn-outline-emerald'}
          style={{ justifyContent: 'center', padding: '10px 10px' }}
        >
          <RotateCw size={15} className={railState.autoPatrol ? 'animate-spin' : ''} />
          <span>{railState.autoPatrol ? 'Patroli ON' : 'Auto-Patrol'}</span>
        </button>
      </div>

      {/* Speed PWM Controller */}
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.025)',
          padding: '12px 14px',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(255, 255, 255, 0.07)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
          <span style={{ color: 'var(--text-soft)', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
            <Gauge size={14} style={{ color: '#5DD62C' }} /> Duty Cycle Motor (PWM):
          </span>
          <span className="tabular-nums" style={{ fontFamily: 'var(--font-mono)', color: '#5DD62C', fontWeight: 700 }}>
            {railState.speedPwm} / 255 ({Math.round(railState.speedPwm / 2.55)}%)
          </span>
        </div>

        <input
          type="range"
          min="50"
          max="255"
          value={railState.speedPwm}
          onChange={(e) => onSpeedChange(Number(e.target.value))}
          className="tactical-slider"
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2px' }}>
          <span style={{ fontSize: '10.5px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
            Frekuensi PWM: 1.2 kHz
          </span>
          <div style={{ display: 'flex', gap: '6px' }}>
            {[
              { label: 'Pelan (100)', val: 100 },
              { label: 'Sedang (180)', val: 180 },
              { label: 'Maks (255)', val: 255 },
            ].map((p) => (
              <button
                key={p.val}
                onClick={() => onSpeedChange(p.val)}
                className={`btn-outline-emerald ${railState.speedPwm === p.val ? 'active' : ''}`}
                style={{ padding: '3px 8px', minHeight: '26px', fontSize: '10.5px', borderRadius: '6px' }}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hardware Diagnostics & Emergency Stop */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <div
            className="tabular-nums"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-soft)',
              background: 'rgba(255, 255, 255, 0.025)',
              padding: '6px 10px',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.07)',
            }}
          >
            <ThermometerSnowflake size={13} style={{ color: '#38bdf8' }} />
            <span>L298N: {railState.motorTempC.toFixed(1)}°C</span>
          </div>

          <div
            className="tabular-nums"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-soft)',
              background: 'rgba(255, 255, 255, 0.025)',
              padding: '6px 10px',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.07)',
            }}
          >
            <Zap size={13} style={{ color: '#facc15' }} />
            <span>Arus: {railState.motorCurrentMa} mA</span>
          </div>
        </div>

        <button
          onClick={onEmergencyStop}
          className={isEstop ? 'btn-emerald' : 'btn-danger'}
          title={isEstop ? 'Reset kunci darurat E-STOP' : 'Hentikan seketika seluruh daya ke L298N'}
        >
          <AlertOctagon size={15} />
          <span>{isEstop ? 'RESET E-STOP' : 'EMERGENCY STOP'}</span>
        </button>
      </div>
    </div>
  );
};

