import React, { useRef, useEffect } from 'react';
import { 
  Camera, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Video,
  Crosshair,
  ShieldAlert,
  CheckCircle2
} from 'lucide-react';
import type { CameraFeedState, ThreatLevel } from '../types';

interface CameraViewProps {
  cameraState: CameraFeedState;
  threatLevel: ThreatLevel;
  onToggleBoxes: () => void;
  onToggleNightVision: () => void;
  onTakeSnapshot: () => void;
  railPositionPct: number;
}

export const CameraView: React.FC<CameraViewProps> = ({
  cameraState,
  threatLevel,
  onToggleBoxes,
  onToggleNightVision,
  onTakeSnapshot,
  railPositionPct,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particleOffset = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const panShift = (railPositionPct - 50) * 1.4;

      // 1. Sky & Atmospheric Gradient
      const skyGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      if (cameraState.nightVision) {
        skyGrad.addColorStop(0, '#021c0e');
        skyGrad.addColorStop(0.55, '#05331b');
        skyGrad.addColorStop(1, '#011108');
      } else if (threatLevel === 'RED') {
        skyGrad.addColorStop(0, '#1f0b09');
        skyGrad.addColorStop(0.55, '#2d140e');
        skyGrad.addColorStop(1, '#09140e');
      } else if (threatLevel === 'ORANGE') {
        skyGrad.addColorStop(0, '#17120c');
        skyGrad.addColorStop(0.55, '#1e2014');
        skyGrad.addColorStop(1, '#08140e');
      } else {
        skyGrad.addColorStop(0, '#06150f');
        skyGrad.addColorStop(0.55, '#0b291c');
        skyGrad.addColorStop(1, '#04100b');
      }
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Distant Mountain Ridge Silhouette
      ctx.fillStyle = cameraState.nightVision
        ? 'rgba(16, 185, 129, 0.12)'
        : 'rgba(10, 32, 22, 0.85)';
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      for (let x = 0; x <= canvas.width; x += 40) {
        const ridgeY =
          canvas.height * 0.52 +
          Math.sin((x + panShift * 0.4) * 0.012) * 28 +
          Math.cos((x + panShift * 0.2) * 0.025) * 14;
        ctx.lineTo(x, ridgeY);
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      ctx.fill();

      // 3. Fire & Smoke Plume Layer (behind foreground canopy)
      if (threatLevel === 'ORANGE' || threatLevel === 'RED' || cameraState.detections.length > 0) {
        const fireOriginX = canvas.width * 0.45 - panShift * 0.35;
        const fireOriginY = canvas.height * 0.68;

        // Ambient thermal glow
        const radiusGlow = threatLevel === 'RED' ? 180 : 130;
        const glow = ctx.createRadialGradient(
          fireOriginX,
          fireOriginY,
          8,
          fireOriginX,
          fireOriginY,
          radiusGlow
        );
        if (cameraState.nightVision) {
          glow.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
          glow.addColorStop(0.3, 'rgba(93, 214, 44, 0.65)');
          glow.addColorStop(1, 'transparent');
        } else {
          glow.addColorStop(0, threatLevel === 'RED' ? 'rgba(254, 215, 170, 0.9)' : 'rgba(251, 146, 60, 0.75)');
          glow.addColorStop(0.35, threatLevel === 'RED' ? 'rgba(239, 68, 68, 0.6)' : 'rgba(249, 115, 22, 0.38)');
          glow.addColorStop(1, 'transparent');
        }
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(fireOriginX, fireOriginY, radiusGlow, 0, Math.PI * 2);
        ctx.fill();

        // Volumetric rising smoke particles
        for (let j = 0; j < 28; j++) {
          const pDist = (particleOffset * 1.8 + j * 11) % 190;
          const sway = Math.sin((j * 18 + particleOffset) * 0.04) * (pDist * 0.32);
          const px = fireOriginX + sway + pDist * 0.12;
          const py = fireOriginY - pDist;
          const radius = 12 + pDist * 0.25;

          const smokeGrad = ctx.createRadialGradient(px, py, 2, px, py, radius);
          const alpha = Math.max(0, 0.42 - pDist / 230);
          smokeGrad.addColorStop(
            0,
            cameraState.nightVision
              ? `rgba(167, 243, 208, ${alpha})`
              : `rgba(210, 215, 212, ${alpha})`
          );
          smokeGrad.addColorStop(1, 'transparent');
          ctx.fillStyle = smokeGrad;
          ctx.beginPath();
          ctx.arc(px, py, radius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Active flame tongues for RED level
        if (threatLevel === 'RED') {
          for (let f = 0; f < 10; f++) {
            const fx = fireOriginX + (f - 5) * 9 + Math.sin(particleOffset * 0.2 + f) * 4;
            const fy = fireOriginY - ((particleOffset * 3 + f * 7) % 38);
            const fr = 6 + (f % 4) * 3;
            ctx.fillStyle = cameraState.nightVision
              ? 'rgba(255, 255, 255, 0.85)'
              : 'rgba(253, 186, 116, 0.85)';
            ctx.beginPath();
            ctx.arc(fx, fy, fr, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // 4. Midground & Foreground Pine Canopy
      const treeCount = 22;
      for (let i = 0; i < treeCount; i++) {
        const baseX = (i * (canvas.width / (treeCount - 3))) - 30 - panShift * 0.6;
        const x = baseX + Math.sin(i * 2.5 + particleOffset * 0.015) * 3;
        const treeHeight = 95 + ((i * 17) % 65);
        const yBase = canvas.height - 18;

        ctx.fillStyle = cameraState.nightVision
          ? i % 2 === 0
            ? 'rgba(16, 185, 129, 0.32)'
            : 'rgba(6, 95, 70, 0.48)'
          : i % 2 === 0
          ? 'rgba(8, 38, 24, 0.92)'
          : 'rgba(4, 24, 15, 0.96)';

        // 3-tier pine silhouette
        for (let tier = 0; tier < 3; tier++) {
          const tierTop = yBase - treeHeight + tier * (treeHeight * 0.24);
          const tierBottom = yBase - treeHeight * 0.15 + tier * 10;
          const halfWidth = 18 + tier * 10;
          ctx.beginPath();
          ctx.moveTo(x, tierTop);
          ctx.lineTo(x - halfWidth, tierBottom);
          ctx.lineTo(x + halfWidth, tierBottom);
          ctx.closePath();
          ctx.fill();
        }
      }

      // 5. Subtle Tactical Grid & Scanlines
      ctx.strokeStyle = cameraState.nightVision
        ? 'rgba(52, 211, 153, 0.12)'
        : 'rgba(93, 214, 44, 0.06)';
      ctx.lineWidth = 1;
      for (let gx = 80; gx < canvas.width; gx += 80) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, canvas.height);
        ctx.stroke();
      }
      for (let gy = 60; gy < canvas.height; gy += 60) {
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(canvas.width, gy);
        ctx.stroke();
      }

      if (cameraState.nightVision) {
        ctx.fillStyle = 'rgba(16, 185, 129, 0.05)';
        for (let y = 0; y < canvas.height; y += 4) {
          ctx.fillRect(0, y, canvas.width, 1);
        }
      }

      particleOffset += 0.75;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [threatLevel, cameraState.detections, cameraState.nightVision, railPositionPct]);

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
      {/* Header Bar */}
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
            <Video size={16} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h2 style={{ fontSize: '15px', fontWeight: 700, color: '#F4F7F5', letterSpacing: '-0.01em' }}>
                {cameraState.cameraName}
              </h2>
              <span
                className="tabular-nums"
                style={{
                  fontSize: '10px',
                  fontFamily: 'var(--font-mono)',
                  padding: '2px 7px',
                  borderRadius: '5px',
                  background: 'rgba(93, 214, 44, 0.12)',
                  color: '#5DD62C',
                  border: '1px solid rgba(93, 214, 44, 0.3)',
                  fontWeight: 700,
                }}
              >
                TRACK POS: {railPositionPct.toFixed(1)}%
              </span>
            </div>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              Endpoint: POST /api/v1/detect-fire • YOLOv8n-Edge
            </span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '5px 11px',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <span style={{ color: 'var(--text-soft)' }}>{cameraState.resolution}</span>
          <span style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
          <span className="tabular-nums" style={{ color: '#5DD62C', fontWeight: 700 }}>
            {cameraState.fps} FPS
          </span>
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: cameraState.isLive ? '#5DD62C' : '#ef4444',
              boxShadow: cameraState.isLive ? '0 0 8px #5DD62C' : 'none',
            }}
          />
        </div>
      </div>

      {/* Main Video Viewport */}
      <div className="camera-viewport">
        <canvas
          ref={canvasRef}
          width={640}
          height={340}
          className="camera-canvas"
        />

        {/* Tactical Crosshair */}
        <div className="camera-grid-crosshair" />

        {/* Top-Left Viewport Telemetry HUD */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            fontFamily: 'var(--font-mono)',
            fontSize: '10.5px',
            color: '#5DD62C',
            background: 'rgba(7, 10, 8, 0.76)',
            backdropFilter: 'blur(12px)',
            padding: '6px 10px',
            borderRadius: '7px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
          }}
        >
          <span style={{ fontWeight: 700, color: '#F4F7F5' }}>SENSOR: OV2640 • STREAM LIVE</span>
          <span>LATENCY: 42ms • AXIS: {Math.round((railPositionPct / 100) * 1200)}mm</span>
          <span className="tabular-nums">FRAME TS: {cameraState.lastSnapshot}</span>
        </div>

        {/* Top-Right Detection Alert Badge */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            fontFamily: 'var(--font-mono)',
            fontSize: '10.5px',
            padding: '5px 10px',
            borderRadius: '7px',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontWeight: 700,
            background:
              cameraState.detections.length > 0
                ? 'rgba(239, 68, 68, 0.85)'
                : 'rgba(7, 10, 8, 0.76)',
            color: cameraState.detections.length > 0 ? '#ffffff' : '#5DD62C',
            border:
              cameraState.detections.length > 0
                ? '1px solid #fca5a5'
                : '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {cameraState.detections.length > 0 ? (
            <>
              <ShieldAlert size={13} />
              <span>{cameraState.detections.length} ANOMALI TERDETEKSI</span>
            </>
          ) : (
            <>
              <CheckCircle2 size={13} />
              <span>KANOPI BERSIH (0 OBJEK)</span>
            </>
          )}
        </div>

        {/* Dynamic Bounding Boxes */}
        {cameraState.showBoundingBoxes &&
          cameraState.detections.map((box) => (
            <div
              key={box.id}
              className={`bounding-box ${box.label}`}
              style={{
                left: `${box.x}%`,
                top: `${box.y}%`,
                width: `${box.width}%`,
                height: `${box.height}%`,
              }}
            >
              <div className="bounding-tag">
                {box.label} • {Math.round(box.confidence * 100)}%
              </div>
            </div>
          ))}

        {/* Night Vision Status Indicator */}
        {cameraState.nightVision && (
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              right: '12px',
              color: '#34d399',
              fontFamily: 'var(--font-mono)',
              fontSize: '10.5px',
              fontWeight: 700,
              background: 'rgba(4, 22, 14, 0.82)',
              backdropFilter: 'blur(8px)',
              padding: '4px 10px',
              borderRadius: '6px',
              border: '1px solid rgba(16, 185, 129, 0.5)',
            }}
          >
            [IR NIGHT VISION ENHANCED]
          </div>
        )}

        {/* Bottom-Left Azimuth Indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: 'var(--text-soft)',
            background: 'rgba(7, 10, 8, 0.76)',
            backdropFilter: 'blur(8px)',
            padding: '4px 9px',
            borderRadius: '6px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Crosshair size={11} style={{ color: '#5DD62C' }} />
          <span>FOV: 66° WIDE • SEKTOR PERIMETER UTARA</span>
        </div>
      </div>

      {/* Camera Control Toolbar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            onClick={onToggleBoxes}
            className={`btn-outline-emerald ${cameraState.showBoundingBoxes ? 'active' : ''}`}
            title="Tampilkan / Sembunyikan Bounding Box AI"
          >
            {cameraState.showBoundingBoxes ? <Eye size={14} /> : <EyeOff size={14} />}
            <span>AI Bounding Box</span>
          </button>

          <button
            onClick={onToggleNightVision}
            className={`btn-outline-emerald ${cameraState.nightVision ? 'active' : ''}`}
            title="Toggle Filter Night Vision IR"
          >
            <Sparkles size={14} />
            <span>Mode IR / Night</span>
          </button>
        </div>

        <button
          onClick={onTakeSnapshot}
          className="btn-emerald"
          title="Tangkap Snapshot Frame & Kirim ke FastAPI"
        >
          <Camera size={14} />
          <span>Capture & Analyze Frame</span>
        </button>
      </div>
    </div>
  );
};
