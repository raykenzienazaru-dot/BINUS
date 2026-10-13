import React, { useCallback, useEffect, useRef, useState } from 'react';

export interface TelemetryHistoryPoint {
  timestamp: string;
  temperature: number;
  humidity: number;
  soil_moisture: number;
  wind: number;
  rain: number;
  ffmc: number;
  dmc: number;
  dc: number;
  isi: number;
  sensor_risk: 'LOW' | 'MODERATE' | 'HIGH';
  sensor_confidence: number;
  vision_prediction: string;
}

interface FloraHistoryCanvasProps {
  history: TelemetryHistoryPoint[];
}

function formatTimeShort(iso: string): string {
  try {
    const d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  } catch {
    return iso;
  }
}

export const FloraHistoryCanvas: React.FC<FloraHistoryCanvasProps> = ({ history }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [timeRange, setTimeRange] = useState<'LIVE' | '1H' | '6H' | '24H'>('24H');
  const [channelFilter, setChannelFilter] = useState<'ALL' | 'TEMP' | 'HUM' | 'FFMC' | 'SOIL'>('ALL');
  const [hoverInfo, setHoverInfo] = useState<{
    x: number;
    y: number;
    record: TelemetryHistoryPoint;
  } | null>(null);

  const visiblePoints = React.useMemo(() => {
    if (!history || history.length === 0) return [];
    if (timeRange === 'LIVE') return history.slice(-20);
    if (timeRange === '1H') return history.slice(-30);
    if (timeRange === '6H') return history.slice(-40);
    return history.slice(-50);
  }, [history, timeRange]);

  const drawChart = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const w = rect.width;
    const h = 260;
    if (w === 0) return;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    const padL = 46;
    const padR = 46;
    const padT = 24;
    const padB = 30;
    const plotW = w - padL - padR;
    const plotH = h - padT - padB;

    ctx.clearRect(0, 0, w, h);
    ctx.strokeStyle = '#EEF2EA';
    ctx.lineWidth = 1;

    for (let i = 0; i <= 4; i++) {
      const y = padT + (plotH * i) / 4;
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(w - padR, y);
      ctx.stroke();

      ctx.fillStyle = '#617253';
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.textAlign = 'right';
      ctx.fillText(`${100 - i * 25}%`, padL - 8, y + 3.5);

      ctx.fillStyle = '#D97706';
      ctx.textAlign = 'left';
      ctx.fillText(`${(40 - i * 10).toFixed(0)}°C`, w - padR + 8, y + 3.5);
    }

    if (!visiblePoints || visiblePoints.length === 0) {
      ctx.fillStyle = '#617253';
      ctx.font = '12px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Menunggu rekaman telemetri riwayat sensor...', w / 2, h / 2);
      return;
    }

    const series = [
      {
        field: 'humidity' as const,
        color: '#0284C7',
        show: channelFilter === 'ALL' || channelFilter === 'HUM',
        scaleMax: 100,
      },
      {
        field: 'ffmc' as const,
        color: '#DC2626',
        show: channelFilter === 'ALL' || channelFilter === 'FFMC',
        scaleMax: 100,
      },
      {
        field: 'soil_moisture' as const,
        color: '#597C00',
        show: channelFilter === 'ALL' || channelFilter === 'SOIL',
        scaleMax: 100,
      },
      {
        field: 'temperature' as const,
        color: '#D97706',
        show: channelFilter === 'ALL' || channelFilter === 'TEMP',
        scaleMax: 40,
      },
    ];

    series.forEach(({ field, color, show, scaleMax }) => {
      if (!show) return;
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.4;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      visiblePoints.forEach((pt, idx) => {
        const raw = Number(pt[field]);
        const clamped = Math.min(scaleMax, Math.max(0, isNaN(raw) ? 0 : raw));
        const x = padL + (plotW * idx) / Math.max(1, visiblePoints.length - 1);
        const y = padT + plotH * (1 - clamped / scaleMax);
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
    });

    if (visiblePoints.length >= 2) {
      ctx.fillStyle = '#617253';
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.textAlign = 'left';
      ctx.fillText(formatTimeShort(visiblePoints[0].timestamp), padL, h - 8);

      ctx.textAlign = 'center';
      const mid = Math.floor(visiblePoints.length / 2);
      ctx.fillText(formatTimeShort(visiblePoints[mid].timestamp), padL + plotW / 2, h - 8);

      ctx.textAlign = 'right';
      ctx.fillText(formatTimeShort(visiblePoints[visiblePoints.length - 1].timestamp), w - padR, h - 8);
    }

    if (hoverInfo) {
      ctx.strokeStyle = '#597C00';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(hoverInfo.x, padT);
      ctx.lineTo(hoverInfo.x, padT + plotH);
      ctx.stroke();
      ctx.setLineDash([]);
    }
  }, [visiblePoints, hoverInfo, channelFilter]);

  useEffect(() => {
    drawChart();
    const onResize = () => drawChart();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [drawChart]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || !visiblePoints || visiblePoints.length === 0) return;
    const rect = canvas.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const padL = 46;
    const plotW = rect.width - padL - 46;
    const clampedX = Math.max(0, Math.min(plotW, relX - padL));
    const idx = Math.round((clampedX / plotW) * (visiblePoints.length - 1));
    const rec = visiblePoints[idx];
    if (rec) {
      setHoverInfo({
        x: padL + (plotW * idx) / Math.max(1, visiblePoints.length - 1),
        y: e.clientY - rect.top,
        record: rec,
      });
    }
  };

  // Compute summary stats
  const avgTemp =
    visiblePoints.reduce((acc, r) => acc + r.temperature, 0) / Math.max(1, visiblePoints.length);
  const avgHum =
    visiblePoints.reduce((acc, r) => acc + r.humidity, 0) / Math.max(1, visiblePoints.length);
  const avgFfmc =
    visiblePoints.reduce((acc, r) => acc + r.ffmc, 0) / Math.max(1, visiblePoints.length);
  const avgSoil =
    visiblePoints.reduce((acc, r) => acc + r.soil_moisture, 0) / Math.max(1, visiblePoints.length);
  const latestRec = visiblePoints[visiblePoints.length - 1];

  return (
    <>
      <section id="history" className="flora-card p-6 mt-8 shadow-xs">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 mb-4">
          <div>
            <span className="text-[10px] font-bold text-[#597C00] uppercase tracking-widest block">
              Telemetry Archive
            </span>
            <h2 className="text-lg font-bold text-[#1B2408] font-display mt-0.5">
              Multi-Sensor &amp; FWI Historical Trends
            </h2>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <div className="flex rounded-xl bg-[#F4F7F2] p-1 border border-[#E4EBE0] text-xs font-semibold">
              <button
                onClick={() => setChannelFilter('ALL')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  channelFilter === 'ALL'
                    ? 'bg-white text-[#1B2408] shadow-xs font-bold'
                    : 'text-[#617253] hover:text-[#1B2408]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setChannelFilter('TEMP')}
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  channelFilter === 'TEMP'
                    ? 'bg-white text-[#D97706] shadow-xs font-bold'
                    : 'text-[#617253] hover:text-[#D97706]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                <span>Temp (°C)</span>
              </button>
              <button
                onClick={() => setChannelFilter('HUM')}
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  channelFilter === 'HUM'
                    ? 'bg-white text-[#0284C7] shadow-xs font-bold'
                    : 'text-[#617253] hover:text-[#0284C7]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
                <span>RH (%)</span>
              </button>
              <button
                onClick={() => setChannelFilter('FFMC')}
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  channelFilter === 'FFMC'
                    ? 'bg-white text-[#DC2626] shadow-xs font-bold'
                    : 'text-[#617253] hover:text-[#DC2626]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                <span>FFMC (idx)</span>
              </button>
              <button
                onClick={() => setChannelFilter('SOIL')}
                className={`px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  channelFilter === 'SOIL'
                    ? 'bg-white text-[#597C00] shadow-xs font-bold'
                    : 'text-[#617253] hover:text-[#597C00]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[#597C00]" />
                <span>Soil (%)</span>
              </button>
            </div>

            <div className="flex rounded-xl bg-[#F4F7F2] p-1 border border-[#E4EBE0] text-xs font-semibold">
              {(['LIVE', '1H', '6H', '24H'] as const).map((rng) => (
                <button
                  key={rng}
                  onClick={() => setTimeRange(rng)}
                  className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                    timeRange === rng
                      ? 'bg-white text-[#597C00] shadow-xs font-bold'
                      : 'text-[#617253] hover:text-[#1B2408]'
                  }`}
                >
                  {rng}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Canvas Container */}
        <div className="relative w-full h-[260px] my-2 bg-white rounded-xl">
          <canvas
            ref={canvasRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setHoverInfo(null)}
            className="w-full h-[260px] block cursor-crosshair"
          />
          {hoverInfo && (
            <div
              className="absolute z-20 pointer-events-none bg-[#1E2805] text-white p-3.5 rounded-xl shadow-xl text-xs border border-[#2C3B0E] -translate-x-1/2 -translate-y-full mb-2 min-w-[215px] backdrop-blur-sm"
              style={{ left: hoverInfo.x, top: Math.max(70, hoverInfo.y) }}
            >
              <div className="text-[10px] font-bold text-[#9DB312] font-tabular border-b border-[#2C3B0E] pb-1.5 mb-2 flex items-center justify-between">
                <span>Time Recorded</span>
                <span>{formatTimeShort(hoverInfo.record.timestamp)}</span>
              </div>
              <div className="space-y-1.5 font-tabular">
                <div className="flex justify-between items-center">
                  <span className="text-[#F0F4E8] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                    Temperature:
                  </span>
                  <span className="font-bold text-[#FDE68A]">{hoverInfo.record.temperature.toFixed(1)} °C</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#F0F4E8] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
                    Air Humidity:
                  </span>
                  <span className="font-bold text-[#BAE6FD]">{hoverInfo.record.humidity.toFixed(1)} %</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#F0F4E8] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                    FFMC / DMC:
                  </span>
                  <span className="font-bold text-[#FCA5A5]">
                    {hoverInfo.record.ffmc.toFixed(1)} / {hoverInfo.record.dmc.toFixed(1)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#F0F4E8] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#597C00]" />
                    Soil Moisture:
                  </span>
                  <span className="font-bold text-[#C3D883]">{hoverInfo.record.soil_moisture.toFixed(1)} %</span>
                </div>
                <div className="pt-1.5 mt-1.5 border-t border-[#2C3B0E] flex justify-between items-center">
                  <span className="text-[#C3D883]">model_hazard.h:</span>
                  <span className="font-bold text-white">
                    {hoverInfo.record.sensor_risk} ({hoverInfo.record.sensor_confidence.toFixed(1)}%)
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom 3 Trend Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-4 pt-3 border-t border-[#E4EBE0]">
          <div className="bg-[#F4F7F2] border border-[#E4EBE0] p-3.5 rounded-xl">
            <span className="text-[10px] font-bold text-[#617253] uppercase tracking-wider block">
              Fine Fuel Moisture (FFMC) Trend
            </span>
            <span
              className={`text-sm font-bold font-display block mt-1 ${
                (latestRec?.ffmc ?? 0) >= 89.5 ? 'text-[#B43E1F]' : 'text-[#597C00]'
              }`}
            >
              {(latestRec?.ffmc ?? 0) >= 89.5
                ? `Critical Ignition Zone (${latestRec?.ffmc.toFixed(1)})`
                : `Stable Fuel Moisture (${latestRec?.ffmc.toFixed(1)})`}
            </span>
          </div>
          <div className="bg-[#F4F7F2] border border-[#E4EBE0] p-3.5 rounded-xl">
            <span className="text-[10px] font-bold text-[#617253] uppercase tracking-wider block">
              Soil Moisture Momentum (FLORA)
            </span>
            <span
              className={`text-sm font-bold font-display block mt-1 ${
                (latestRec?.soil_moisture ?? 50) < 30 ? 'text-[#D97706]' : 'text-[#597C00]'
              }`}
            >
              {(latestRec?.soil_moisture ?? 50) < 30 ? 'Decreasing / Dry Stress' : 'Optimal Hydration'}
            </span>
          </div>
          <div className="bg-[#F4F7F2] border border-[#E4EBE0] p-3.5 rounded-xl">
            <span className="text-[10px] font-bold text-[#617253] uppercase tracking-wider block">
              ESP32-CAM Optical Detection Trend
            </span>
            <span
              className={`text-sm font-bold font-display block mt-1 ${
                latestRec?.vision_prediction.toLowerCase().includes('fire')
                  ? 'text-[#B43E1F]'
                  : latestRec?.vision_prediction.toLowerCase().includes('smoke')
                  ? 'text-[#EA580C]'
                  : 'text-[#597C00]'
              }`}
            >
              {latestRec?.vision_prediction || 'Healthy Forest Canopy'}
            </span>
          </div>
        </div>
      </section>

      {/* 24-Hour Statistical Summary Rollup */}
      <section className="flora-card p-6 mt-8 shadow-xs">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-[10px] font-bold text-[#597C00] uppercase tracking-widest block">
              Aggregation Archive · Montesinho &amp; FLORA Reference
            </span>
            <h2 className="text-base font-bold text-[#1B2408] font-display">
              24-Hour Statistical Summary &amp; Dataset Rollup
            </h2>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F4F7F2] text-[#617253] border border-[#E4EBE0]">
            {visiblePoints.length} Live Points · 517 FWI + 9,000 FLORA Rows
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="bg-[#F4F7F2] border border-[#E4EBE0] p-3.5 rounded-xl">
            <span className="text-[10px] font-bold text-[#617253] uppercase tracking-wider block">
              Session Avg Temp
            </span>
            <span className="text-sm font-bold font-tabular text-[#1B2408] block mt-1">
              {avgTemp.toFixed(1)}°C (Ref: 18.9°C)
            </span>
          </div>
          <div className="bg-[#F4F7F2] border border-[#E4EBE0] p-3.5 rounded-xl">
            <span className="text-[10px] font-bold text-[#617253] uppercase tracking-wider block">
              Session Avg RH
            </span>
            <span className="text-sm font-bold font-tabular text-[#1B2408] block mt-1">
              {avgHum.toFixed(1)}% (Ref: 44.3%)
            </span>
          </div>
          <div className="bg-[#F4F7F2] border border-[#E4EBE0] p-3.5 rounded-xl">
            <span className="text-[10px] font-bold text-[#617253] uppercase tracking-wider block">
              Session Avg FFMC
            </span>
            <span className="text-sm font-bold font-tabular text-[#1B2408] block mt-1">
              {avgFfmc.toFixed(1)} (Ref: 90.6)
            </span>
          </div>
          <div className="bg-[#F4F7F2] border border-[#E4EBE0] p-3.5 rounded-xl">
            <span className="text-[10px] font-bold text-[#617253] uppercase tracking-wider block">
              Session Avg Soil
            </span>
            <span className="text-sm font-bold font-tabular text-[#1B2408] block mt-1">
              {avgSoil.toFixed(1)}% (Ref: 67.2%)
            </span>
          </div>
          <div className="bg-[#F4F7F2] border border-[#E4EBE0] p-3.5 rounded-xl">
            <span className="text-[10px] font-bold text-[#617253] uppercase tracking-wider block">
              Dominant Vision
            </span>
            <span className="text-sm font-bold font-display text-[#1B2408] block mt-1 truncate">
              {latestRec?.vision_prediction || 'Healthy Canopy'}
            </span>
          </div>
          <div className="bg-[#F4F7F2] border border-[#E4EBE0] p-3.5 rounded-xl">
            <span className="text-[10px] font-bold text-[#617253] uppercase tracking-wider block">
              Dominant Risk
            </span>
            <span className="text-sm font-bold font-tabular text-[#597C00] block mt-1">
              {latestRec?.sensor_risk || 'LOW'} ({latestRec?.sensor_confidence.toFixed(1)}%)
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
