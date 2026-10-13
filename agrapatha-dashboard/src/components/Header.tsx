import React from 'react';
import { 
  Radio, 
  Flame, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Cpu,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';
import type { SystemStatus, ThreatLevel } from '../types';

interface ScenarioOption {
  name: string;
  shortName?: string;
  level: ThreatLevel;
}

interface HeaderProps {
  systemStatus: SystemStatus;
  isStreaming: boolean;
  onToggleStreaming: () => void;
  onSimulateScenario: () => void;
  scenarioName: string;
  scenarioIdx?: number;
  scenarios?: ScenarioOption[];
  onSelectScenario?: (idx: number) => void;
}

export const Header: React.FC<HeaderProps> = ({
  systemStatus,
  isStreaming,
  onToggleStreaming,
  onSimulateScenario,
  scenarioName,
  scenarioIdx = 0,
  scenarios,
  onSelectScenario,
}) => {
  const [isMuted, setIsMuted] = React.useState(true);

  const getThreatBadgeClass = (level: ThreatLevel) => {
    switch (level) {
      case 'GREEN': return 'status-pill GREEN';
      case 'YELLOW': return 'status-pill YELLOW';
      case 'ORANGE': return 'status-pill ORANGE';
      case 'RED': return 'status-pill RED';
    }
  };

  const getDotColor = (level: ThreatLevel) => {
    switch (level) {
      case 'GREEN': return '#5DD62C';
      case 'YELLOW': return '#facc15';
      case 'ORANGE': return '#fb923c';
      case 'RED': return '#ef4444';
    }
  };

  return (
    <header className="top-header">
      <div
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        {/* Left: Station Brand & Node Info */}
        <div className="brand-wrapper">
          <div className="brand-icon-box" style={{ width: '36px', height: '36px' }}>
            <Flame size={18} style={{ color: '#070a08' }} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h2 className="brand-title" style={{ fontSize: '14.5px', letterSpacing: '0.8px' }}>COMMAND DECK</h2>
              <span
                style={{
                  fontSize: '9.5px',
                  background: 'rgba(93, 214, 44, 0.12)',
                  color: '#5DD62C',
                  padding: '1px 7px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(93, 214, 44, 0.32)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                }}
              >
                STATION-01
              </span>
            </div>
            <p className="brand-subtitle" style={{ fontSize: '9.5px' }}>
              EDGE TELEMETRY & RAIL CONTROL
            </p>
          </div>
        </div>

        {/* Center: Threat Status & Node Link */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <div className={getThreatBadgeClass(systemStatus.level)}>
            <span className="pulse-dot" />
            <span style={{ whiteSpace: 'nowrap' }}>
              LEVEL {systemStatus.level}: {systemStatus.label}
            </span>
            <span
              className="tabular-nums"
              style={{
                opacity: 0.9,
                fontSize: '11px',
                borderLeft: '1px solid currentColor',
                paddingLeft: '8px',
                whiteSpace: 'nowrap',
              }}
            >
              INDEX: {systemStatus.threatScore}/100
            </span>
          </div>

          {/* Node Connectivity & Last Sync */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '6px 12px',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-soft)',
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Radio size={12} style={{ color: systemStatus.esp32Online ? '#5DD62C' : '#ef4444' }} />
              <span>NODE-01</span>
              <span className="tabular-nums" style={{ color: '#5DD62C', fontWeight: 700 }}>
                {systemStatus.pingMs}ms
              </span>
            </span>
            <span style={{ color: 'rgba(255, 255, 255, 0.14)' }}>|</span>
            <span className="tabular-nums" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)' }}>
              <Clock size={11} />
              {systemStatus.lastUpdate}
            </span>
          </div>
        </div>

        {/* Right: Scenario Switcher & Stream Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          {scenarios && onSelectScenario ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '4px',
                borderRadius: '11px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <span
                style={{
                  fontSize: '10px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                  padding: '0 8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                <Cpu size={12} style={{ color: '#5DD62C' }} />
                SKENARIO:
              </span>
              {scenarios.map((sc, idx) => {
                const isSelected = idx === scenarioIdx;
                const dotColor = getDotColor(sc.level);
                return (
                  <button
                    key={sc.name}
                    onClick={() => onSelectScenario(idx)}
                    style={{
                      position: 'relative',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '5px 11px',
                      borderRadius: '8px',
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: isSelected ? 700 : 500,
                      cursor: 'pointer',
                      border: 'none',
                      background: 'transparent',
                      color: isSelected ? '#ffffff' : 'var(--text-soft)',
                      transition: 'color 0.15s ease',
                      zIndex: 1,
                    }}
                    title={`Aktifkan skenario: ${sc.name}`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="scenario-active-pill"
                        transition={{ type: 'spring', stiffness: 420, damping: 32, mass: 0.8 }}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          borderRadius: '8px',
                          background: `${dotColor}22`,
                          border: `1px solid ${dotColor}88`,
                          zIndex: -1,
                        }}
                      />
                    )}
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: dotColor,
                        boxShadow: isSelected ? `0 0 8px ${dotColor}` : 'none',
                      }}
                    />
                    <span>{sc.shortName || sc.name}</span>
                  </button>
                );
              })}
            </div>
          ) : (
            <button
              onClick={onSimulateScenario}
              className="btn-outline-emerald"
              title="Ubah Skenario Cuaca & Visual"
            >
              <Cpu size={14} />
              <span>Skenario:</span>
              <strong style={{ color: '#5DD62C' }}>{scenarioName}</strong>
            </button>
          )}

          <button
            onClick={onToggleStreaming}
            className={`btn-outline-emerald ${isStreaming ? 'active' : ''}`}
            title={isStreaming ? 'Jeda Simulasi Data' : 'Jalankan Simulasi Data'}
          >
            {isStreaming ? <Pause size={13} /> : <Play size={13} />}
            <span>{isStreaming ? 'LIVE' : 'PAUSED'}</span>
          </button>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className="btn-outline-emerald"
            title={isMuted ? 'Unmute Alarm' : 'Mute Alarm'}
            style={{
              padding: '7px 10px',
              borderColor: !isMuted ? 'rgba(239, 68, 68, 0.5)' : undefined,
            }}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} style={{ color: '#ef4444' }} />}
          </button>
        </div>
      </div>
    </header>
  );
};

