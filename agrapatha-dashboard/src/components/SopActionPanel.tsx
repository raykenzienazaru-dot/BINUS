import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Circle, 
  Droplet, 
  Siren, 
  Send, 
  FileText, 
  ShieldCheck,
  Flame,
  ClipboardCheck
} from 'lucide-react';
import { motion } from 'framer-motion';
import type { ThreatLevel } from '../types';

interface SopActionPanelProps {
  threatLevel: ThreatLevel;
  hazardClassLabel: string;
  threatScore: number;
}

export const SopActionPanel: React.FC<SopActionPanelProps> = ({
  threatLevel,
  hazardClassLabel,
  threatScore,
}) => {
  const [sprinklerActive, setSprinklerActive] = useState(false);
  const [sirenActive, setSirenActive] = useState(false);
  const [sosSent, setSosSent] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});

  const getProtocolData = () => {
    switch (threatLevel) {
      case 'RED':
        return {
          title: 'PROTOKOL TANGGAP DARURAT: KEBAKARAN HUTAN AKTIF (LEVEL RED)',
          color: '#ef4444',
          bg: 'linear-gradient(135deg, rgba(239, 68, 68, 0.14) 0%, rgba(14, 19, 16, 0.92) 100%)',
          border: 'rgba(239, 68, 68, 0.42)',
          badgeText: 'KEDARURATAN TINGKAT I',
          summary: 'Kombinasi model_hazard.h (Kelas 2) dan AI Vision mengonfirmasi titik api aktif. Segera lakukan pemadaman darurat dan evakuasi zona!',
          steps: [
            { id: 'r1', code: 'SOP-01', title: 'Aktivasi Sirene Evakuasi', instruction: 'Bunyikan tanda bahaya radius 2 km untuk evakuasi petugas dan warga sekitar perimeter.' },
            { id: 'r2', code: 'SOP-02', title: 'Penyemprotan Hydrant / Sprinkler', instruction: 'Buka katup pompa air utama untuk membasahi sekat bakar (firebreak) guna menghambat penjalaran api.' },
            { id: 'r3', code: 'SOP-03', title: 'Transmisi SOS & Koordinat GPS', instruction: 'Kirim telemetri darurat ke BPBD, Manggala Agni, dan Dinas Kehutanan terdekat.' },
            { id: 'r4', code: 'SOP-04', title: 'Evakuasi Kereta Rel Kamera', instruction: 'Gerakkan rel L298N menjauhi pusat panas ke posisi parkir aman (Home 0 mm) agar modul kamera tidak rusak.' },
          ]
        };
      case 'ORANGE':
        return {
          title: 'PROTOKOL SIAGA II: INDIKASI ASAP & ANOMALI TERMAL (LEVEL ORANGE)',
          color: '#f97316',
          bg: 'linear-gradient(135deg, rgba(249, 115, 22, 0.13) 0%, rgba(14, 19, 16, 0.92) 100%)',
          border: 'rgba(249, 115, 22, 0.4)',
          badgeText: 'SIAGA TINGGI',
          summary: 'Terdeteksi kepulan asap visual dan nilai FFMC/DMC tinggi. Api awal berpotensi menyala dalam hitungan menit.',
          steps: [
            { id: 'o1', code: 'SOP-01', title: 'Kamera Fokus ke Koordinat Asap', instruction: 'Kunci posisi slider rel L298N tepat pada sektor sudut kepulan asap untuk konfirmasi visual berkelanjutan.' },
            { id: 'o2', code: 'SOP-02', title: 'Nyalakan Pompa Misting Pengembun', instruction: 'Tingkatkan kelembapan kanopi mikro dengan sistem spray misting otomatis di zona terdampak.' },
            { id: 'o3', code: 'SOP-03', title: 'Siagakan Regu Pemadam Cepat', instruction: 'Beritahukan pos jaga terdekat untuk mempersiapkan jet shooter dan tangki portable.' },
            { id: 'o4', code: 'SOP-04', title: 'Validasi Sensor Tanah & Hujan', instruction: 'Pastikan hidrologi tanah tidak semakin anjlok di bawah ambang kritis 20% ADC.' },
          ]
        };
      case 'YELLOW':
        return {
          title: 'PROTOKOL WASPADA I: IKLIM KERING & RAWAN SULUTAN (LEVEL YELLOW)',
          color: '#facc15',
          bg: 'linear-gradient(135deg, rgba(250, 204, 21, 0.11) 0%, rgba(14, 19, 16, 0.92) 100%)',
          border: 'rgba(250, 204, 21, 0.35)',
          badgeText: 'WASPADA PREVENTIF',
          summary: 'Suhu tinggi (>32°C), kelembapan rendah (<40%), dan tanah kering terdeteksi. Sesuai model_hazard.h Kelas 1.',
          steps: [
            { id: 'y1', code: 'SOP-01', title: 'Tingkatkan Frekuensi Sampling', instruction: 'Ubah interval transmisi ESP32 menjadi tiap 3 detik untuk menangkap fluktuasi mendadak.' },
            { id: 'y2', code: 'SOP-02', title: 'Jalankan Mode Patroli Rel Otomatis', instruction: 'Aktifkan mode Auto-Patrol bolak-balik sepanjang rel 1200 mm untuk memindai seluruh batas perimeter.' },
            { id: 'y3', code: 'SOP-03', title: 'Inspeksi Sumber Air & Pipa Tekanan', instruction: 'Pastikan ketersediaan tandon air mitigasi dalam kapasitas penuh (>80%).' },
            { id: 'y4', code: 'SOP-04', title: 'Audit Sekat Bakar & Serasah Kering', instruction: 'Bersihkan tumpukan ranting kering (fine fuel) pada koridor di bawah lintasan rel pengawasan.' },
          ]
        };
      default:
        return {
          title: 'PROTOKOL PREVENTIF STANDAR: KONDISI HUTAN AMAN (LEVEL GREEN)',
          color: '#5DD62C',
          bg: 'linear-gradient(135deg, rgba(93, 214, 44, 0.08) 0%, rgba(14, 19, 16, 0.92) 100%)',
          border: 'rgba(93, 214, 44, 0.25)',
          badgeText: 'NORMAL • KELAS AMAN',
          summary: 'Parameter mikroklimat dalam batas aman. Model Random Forest memprediksi probabilitas rendah terjadinya bahaya.',
          steps: [
            { id: 'g1', code: 'SOP-01', title: 'Patroli Rutin Terjadwal', instruction: 'Lakukan pemindaian rel 2 kali sehari untuk memastikan optik kamera ESP32 bersih dari debu/serangga.' },
            { id: 'g2', code: 'SOP-02', title: 'Pemeriksaan Kesehatan Sensor', instruction: 'Verifikasi pembacaan pin ADC (DHT22, Soil, LDR, Rain gauge) tetap stabil dan terkalibrasi.' },
            { id: 'g3', code: 'SOP-03', title: 'Pengecekan Daya & Baterai Node', instruction: 'Pastikan panel surya mengisi baterai LiFePO4 ESP32 di atas 90% pada siang hari.' },
            { id: 'g4', code: 'SOP-04', title: 'Sinkronisasi Log Telemetri Harian', instruction: 'Arsipkan histori pembacaan mikroklimat & skor FWI ke basis data stasiun pemantau.' },
          ]
        };
    }
  };

  const protocol = getProtocolData();

  const toggleStep = (id: string) => {
    setCompletedSteps((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = protocol.steps.filter((s) => !!completedSteps[s.id]).length;

  const handleSendSos = () => {
    setSosSent(true);
    setTimeout(() => setSosSent(false), 4000);
  };

  const handleDownloadReport = () => {
    const reportText = `=== LAPORAN INSIDEN AGRAPATHA ===\nWaktu: ${new Date().toLocaleString()}\nStatus: ${threatLevel} (${hazardClassLabel})\nSkor Bahaya: ${threatScore}/100\nProtokol: ${protocol.title}\nDetail: ${protocol.summary}\n`;
    const element = document.createElement('a');
    const file = new Blob([reportText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `Laporan_AGRAPATHA_${threatLevel}_${Date.now()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="dashboard-container">
      <div
        className="glass-panel"
        style={{
          padding: '20px 24px',
          border: `1px solid ${protocol.border}`,
          background: protocol.bg,
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        {/* Top Row: Protocol Identity + Action Deck */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          {/* Left: Title & Summary */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', flex: '1 1 520px' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                minWidth: '44px',
                borderRadius: '12px',
                background: `${protocol.color}1c`,
                border: `1px solid ${protocol.color}66`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: protocol.color,
                boxShadow: `0 0 18px ${protocol.color}30`,
              }}
            >
              {threatLevel === 'RED' ? (
                <Flame size={22} />
              ) : threatLevel === 'ORANGE' ? (
                <AlertTriangle size={22} />
              ) : (
                <ShieldCheck size={22} />
              )}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <h2 style={{ fontSize: '15px', fontWeight: 800, color: '#F4F7F5', letterSpacing: '-0.01em' }}>
                  {protocol.title}
                </h2>
                <span
                  style={{
                    fontSize: '10px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 800,
                    padding: '2px 9px',
                    borderRadius: '9999px',
                    background: protocol.color,
                    color: '#070a08',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {protocol.badgeText}
                </span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-soft)', marginTop: '5px', lineHeight: 1.55 }}>
                {protocol.summary}
              </p>
            </div>
          </div>

          {/* Right: Quick Mitigation Action Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap',
              background: 'rgba(7, 10, 8, 0.55)',
              padding: '7px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <button
              onClick={() => setSprinklerActive(!sprinklerActive)}
              className="btn-outline-emerald"
              style={{
                background: sprinklerActive ? 'rgba(56, 189, 248, 0.18)' : undefined,
                borderColor: sprinklerActive ? '#38bdf8' : undefined,
                color: sprinklerActive ? '#38bdf8' : undefined,
              }}
            >
              <Droplet size={14} />
              <span>{sprinklerActive ? 'Sprinkler: AKTIF' : 'Pompa Sprinkler'}</span>
            </button>

            <button
              onClick={() => setSirenActive(!sirenActive)}
              className="btn-outline-emerald"
              style={{
                background: sirenActive ? 'rgba(239, 68, 68, 0.2)' : undefined,
                borderColor: sirenActive ? '#ef4444' : undefined,
                color: sirenActive ? '#f87171' : undefined,
              }}
            >
              <Siren size={14} className={sirenActive ? 'animate-bounce' : ''} />
              <span>{sirenActive ? 'Sirene: BUNYI' : 'Uji Sirene'}</span>
            </button>

            <button onClick={handleSendSos} className="btn-danger">
              <Send size={13} />
              <span>{sosSent ? 'SOS Terkirim!' : 'Kirim SOS / Dispatch'}</span>
            </button>

            <button
              onClick={handleDownloadReport}
              className="btn-outline-emerald"
              title="Unduh Berita Acara SOP Penanganan Insiden"
            >
              <FileText size={14} />
              <span>Unduh Laporan</span>
            </button>
          </div>
        </div>

        {/* Checklist SOP Tindakan Petugas (Symmetrical 2x2 Grid) */}
        <div
          style={{
            background: 'rgba(7, 10, 8, 0.6)',
            borderRadius: 'var(--radius-md)',
            padding: '15px 18px',
            border: '1px solid rgba(255, 255, 255, 0.07)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '12px',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '11.5px',
                fontWeight: 700,
                letterSpacing: '0.4px',
                textTransform: 'uppercase',
                color: 'var(--text-soft)',
              }}
            >
              <ClipboardCheck size={15} style={{ color: protocol.color }} />
              <span>Checklist Tindakan Operasional Petugas Lapangan</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                className="tabular-nums"
                style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  color: completedCount === protocol.steps.length ? '#5DD62C' : 'var(--text-soft)',
                  fontWeight: 700,
                }}
              >
                Progres: {completedCount}/{protocol.steps.length} Selesai
              </span>
              <div
                style={{
                  width: '80px',
                  height: '6px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${(completedCount / protocol.steps.length) * 100}%`,
                    height: '100%',
                    background: '#5DD62C',
                    transition: 'width 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                  }}
                />
              </div>
            </div>
          </div>

          <div className="sop-checklist-grid">
            {protocol.steps.map((step) => {
              const isDone = !!completedSteps[step.id];
              return (
                <motion.div
                  key={step.id}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => toggleStep(step.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    background: isDone ? 'rgba(93, 214, 44, 0.1)' : 'rgba(255, 255, 255, 0.025)',
                    border: `1px solid ${isDone ? 'rgba(93, 214, 44, 0.4)' : 'rgba(255, 255, 255, 0.07)'}`,
                    cursor: 'pointer',
                    transition: 'background-color 0.18s ease, border-color 0.18s ease',
                    userSelect: 'none',
                  }}
                >
                  <div style={{ marginTop: '2px', color: isDone ? '#5DD62C' : 'var(--text-muted)' }}>
                    {isDone ? <CheckCircle2 size={17} /> : <Circle size={17} />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                      <span
                        style={{
                          fontSize: '13px',
                          fontWeight: 700,
                          color: isDone ? '#7ef051' : '#F4F7F5',
                          textDecoration: isDone ? 'line-through' : 'none',
                        }}
                      >
                        {step.title}
                      </span>
                      <span
                        style={{
                          fontSize: '9.5px',
                          fontFamily: 'var(--font-mono)',
                          color: isDone ? '#5DD62C' : 'var(--text-muted)',
                          background: 'rgba(255, 255, 255, 0.04)',
                          padding: '1px 6px',
                          borderRadius: '4px',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                      >
                        {step.code}
                      </span>
                    </div>
                    <div style={{ fontSize: '11.5px', color: 'var(--text-soft)', marginTop: '4px', lineHeight: 1.45 }}>
                      {step.instruction}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

