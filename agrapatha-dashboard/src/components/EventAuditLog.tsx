import React, { useState } from 'react';
import { Terminal, Shield, Cpu, Sliders, AlertCircle, CheckCircle, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { EventLogItem } from '../types';

interface EventAuditLogProps {
  logs: EventLogItem[];
  onClearLogs: () => void;
}

const CATEGORIES: Array<'ALL' | EventLogItem['category']> = ['ALL', 'EDGE', 'RAIL', 'VISION', 'ALERT', 'SYSTEM'];

export const EventAuditLog: React.FC<EventAuditLogProps> = ({ logs, onClearLogs }) => {
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | EventLogItem['category']>('ALL');

  const getCategoryBadge = (category: EventLogItem['category']) => {
    switch (category) {
      case 'EDGE':
        return { color: '#5DD62C', bg: 'rgba(93, 214, 44, 0.14)', icon: <Cpu size={11} /> };
      case 'RAIL':
        return { color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.14)', icon: <Sliders size={11} /> };
      case 'VISION':
        return { color: '#fb923c', bg: 'rgba(251, 146, 60, 0.14)', icon: <Shield size={11} /> };
      case 'ALERT':
        return { color: '#f87171', bg: 'rgba(239, 68, 68, 0.2)', icon: <AlertCircle size={11} /> };
      default:
        return { color: '#94a3b8', bg: 'rgba(148, 163, 184, 0.14)', icon: <CheckCircle size={11} /> };
    }
  };

  const filteredLogs = selectedCategory === 'ALL' ? logs : logs.filter((l) => l.category === selectedCategory);

  return (
    <div
      className="glass-panel"
      style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '12px',
        height: '100%',
      }}
    >
      {/* Top Header */}
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
            <Terminal size={16} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h2 style={{ fontSize: '15px', fontWeight: 700, color: '#F4F7F5', letterSpacing: '-0.01em' }}>
                Event Audit Log & Interrupts
              </h2>
              <span
                className="tabular-nums"
                style={{
                  fontSize: '10px',
                  fontFamily: 'var(--font-mono)',
                  background: 'rgba(93, 214, 44, 0.12)',
                  color: '#5DD62C',
                  padding: '1px 7px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(93, 214, 44, 0.28)',
                  fontWeight: 700,
                }}
              >
                {filteredLogs.length} EVENTS
              </span>
            </div>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              Log Telemetri MQTT, Eksekusi Kernel, & Interlock Hardware
            </span>
          </div>
        </div>

        <button
          onClick={onClearLogs}
          className="btn-outline-emerald"
          style={{ fontSize: '11px', padding: '5px 10px' }}
        >
          <Trash2 size={12} />
          <span>Bersihkan</span>
        </button>
      </div>

      {/* Category Filter Pills with Spring Indicator */}
      <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                position: 'relative',
                fontSize: '10px',
                fontFamily: 'var(--font-mono)',
                fontWeight: isSelected ? 700 : 500,
                padding: '5px 10px',
                borderRadius: '7px',
                cursor: 'pointer',
                background: 'rgba(255, 255, 255, 0.025)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                color: isSelected ? '#5DD62C' : 'var(--text-muted)',
                transition: 'color 0.15s ease',
                zIndex: 1,
              }}
            >
              {isSelected && (
                <motion.div
                  layoutId="audit-cat-pill"
                  transition={{ type: 'spring', stiffness: 420, damping: 32, mass: 0.8 }}
                  style={{
                    position: 'absolute',
                    inset: -1,
                    borderRadius: '7px',
                    background: 'rgba(93, 214, 44, 0.14)',
                    border: '1px solid rgba(93, 214, 44, 0.5)',
                    zIndex: -1,
                  }}
                />
              )}
              {cat === 'ALL' ? 'SEMUA' : cat}
            </button>
          );
        })}
      </div>

      {/* Terminal Stream Container */}
      <div
        style={{
          height: '280px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '7px',
          paddingRight: '4px',
        }}
      >
        <AnimatePresence initial={false} mode="popLayout">
          {filteredLogs.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--text-muted)',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '10px',
                border: '1px dashed rgba(255, 255, 255, 0.1)',
              }}
            >
              Tidak ada log untuk kategori ini.
            </motion.div>
          ) : (
            filteredLogs.map((log) => {
              const badge = getCategoryBadge(log.category);
              return (
                <motion.div
                  key={log.id}
                  layout
                  initial={{ opacity: 0, y: -8, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 32, mass: 0.8 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    padding: '9px 12px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.025)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderLeft: `3px solid ${badge.color}`,
                    fontSize: '11.5px',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <span
                    className="tabular-nums"
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '10.5px',
                      minWidth: '58px',
                      marginTop: '2px',
                    }}
                  >
                    {log.time}
                  </span>

                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '2px 7px',
                      borderRadius: '4px',
                      background: badge.bg,
                      color: badge.color,
                      fontSize: '9.5px',
                      fontWeight: 700,
                      border: `1px solid ${badge.color}38`,
                      minWidth: '64px',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {badge.icon}
                    {log.category}
                  </span>

                  <span
                    style={{
                      color: log.level === 'danger' ? '#fca5a5' : log.level === 'warning' ? '#fde047' : 'var(--text-main)',
                      flex: 1,
                      lineHeight: 1.45,
                    }}
                  >
                    {log.message}
                  </span>
                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </div>

      {/* Footer Status */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '10.5px',
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-muted)',
          background: 'rgba(255, 255, 255, 0.025)',
          padding: '8px 12px',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <span>SYSLOG STREAM: ACTIVE (RING BUFFER 40)</span>
        <span style={{ color: '#5DD62C' }}>BAUD: 115200 • MQTT QoS 1</span>
      </div>
    </div>
  );
};

