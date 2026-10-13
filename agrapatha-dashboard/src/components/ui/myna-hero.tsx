import {
  Activity,
  ArrowRight,
  BarChart,
  ChevronDown,
  Cpu,
  Flame,
  Plug,
  Radio,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const SPRING_FAST = { type: "spring" as const, stiffness: 380, damping: 30, mass: 0.8 };

const navigationItems = [
  { title: "IKHTISAR", href: "#" },
  { title: "TELEMETRI SENSOR", href: "#monitoring-section" },
  { title: "PROTOKOL SOP", href: "#sop-section" },
  { title: "VISION & REL L298N", href: "#rail-section" },
  { title: "ANALITIK & LOG", href: "#analytics-section" },
];

const labels = [
  { icon: Cpu, label: "Edge Random Forest (model_hazard.h)" },
  { icon: Plug, label: "Mekatronika Rel Linier L298N" },
  { icon: Activity, label: "AI Vision ESP32-CAM (FastAPI)" },
  { icon: ShieldCheck, label: "Fusi Multi-Modal 5 Sensor" },
];

const heroMetrics = [
  { value: "< 1.8 ms", label: "Inferensi Edge SRAM", sub: "100 Decision Trees C-Kernel" },
  { value: "1,200 mm", label: "Lintasan Patroli Rel", sub: "Dual Limit Switch SW1/SW2" },
  { value: "5 Kanal", label: "Akuisisi ADC Real-Time", sub: "Suhu, RH, Lux, Tanah, Hujan" },
  { value: "3 Kelas", label: "Klasifikasi Risiko", sub: "Aman • Waspada • Bahaya Api" },
];

const features = [
  {
    code: "MOD-01 // EDGE AI KERNEL",
    icon: BarChart,
    label: "Edge AI Predictive Hazard",
    description:
      "Evaluasi mikroklimat instan dengan 100 decision trees (model_hazard.h) langsung pada SRAM ESP32 menggunakan indeks FWI (FFMC & DMC) tanpa ketergantungan cloud.",
    specs: ["RF 100 Trees", "score() C99", "FFMC & DMC Index"],
  },
  {
    code: "MOD-02 // MECHATRONICS",
    icon: Zap,
    label: "Autonomous Rail Surveillance",
    description:
      "Patroli kamera sepanjang lintasan rel linier 1200 mm dengan kontrol PWM motor driver L298N serta proteksi hardware interlock limit switch SW1 & SW2.",
    specs: ["L298N Dual H-Bridge", "PWM 0–255", "SW1/SW2 Interlock"],
  },
  {
    code: "MOD-03 // SENSOR FUSION",
    icon: Activity,
    label: "Multi-Modal Sensor Fusion",
    description:
      "Integrasi presisi bobot AI Vision (45%), probabilitas Random Forest Edge (35%), dan hidrologi kelembapan tanah (20%) untuk keputusan mitigasi dini.",
    specs: ["Vision 45%", "Edge RF 35%", "Soil ADC 20%"],
  },
];

interface MynaHeroProps {
  onScrollToMonitoring?: () => void;
}

export function MynaHero({ onScrollToMonitoring }: MynaHeroProps) {
  const handleStartClick = () => {
    if (onScrollToMonitoring) {
      onScrollToMonitoring();
    } else {
      const el = document.getElementById("monitoring-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 75% 50% at 50% -5%, rgba(93, 214, 44, 0.16) 0%, rgba(12, 18, 14, 0.55) 55%, #070a08 100%)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        color: "#F4F7F5",
      }}
    >
      {/* Decorative Ambient Glow Orbs */}
      <div
        style={{
          position: "absolute",
          top: "-140px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "820px",
          height: "300px",
          background: "radial-gradient(circle, rgba(93, 214, 44, 0.14) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Top Navigation Bar */}
      <header
        style={{
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "0 28px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "68px",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #5DD62C 0%, #265912 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#070a08",
                border: "1px solid rgba(126, 240, 81, 0.55)",
                boxShadow: "0 2px 14px rgba(93, 214, 44, 0.28), inset 0 1px 1px rgba(255, 255, 255, 0.35)",
              }}
            >
              <Flame style={{ width: "20px", height: "20px" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "17px",
                    fontWeight: 800,
                    letterSpacing: "1px",
                    color: "#F4F7F5",
                  }}
                >
                  AGRAPATHA
                </span>
                <span
                  style={{
                    fontSize: "10px",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                    color: "#5DD62C",
                    background: "rgba(93, 214, 44, 0.12)",
                    border: "1px solid rgba(93, 214, 44, 0.3)",
                    padding: "1px 7px",
                    borderRadius: "9999px",
                  }}
                >
                  AI-IOT v2.4
                </span>
              </div>
              <span
                style={{
                  fontSize: "10px",
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                  letterSpacing: "0.6px",
                }}
              >
                AUTONOMOUS FOREST DEFENSE
              </span>
            </div>
          </a>

          <nav className="hero-nav-pills">
            {navigationItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="hero-nav-link"
              >
                {item.title}
              </a>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Button
              onClick={handleStartClick}
              variant="default"
              className="btn-emerald"
              style={{ fontFamily: "var(--font-mono)", fontSize: "11.5px" }}
            >
              PANEL KONTROL <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Hero Content */}
      <main style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 28px" }}>
        <section style={{ padding: "54px 0 40px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {/* Live Telemetry Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={SPRING_FAST}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "6px 16px",
                borderRadius: "9999px",
                background: "rgba(93, 214, 44, 0.08)",
                border: "1px solid rgba(93, 214, 44, 0.26)",
                marginBottom: "24px",
                boxShadow: "0 2px 18px rgba(93, 214, 44, 0.08)",
              }}
            >
              <span className="pulse-dot" style={{ color: "#5DD62C" }} />
              <Radio size={13} style={{ color: "#5DD62C" }} />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.8px",
                  color: "#7ef051",
                  textTransform: "uppercase",
                }}
              >
                EDGE AI TELEMETRY ACTIVE • ESP32-NODE-01 ONLINE
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING_FAST, delay: 0.06 }}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(32px, 4.5vw, 56px)",
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#F4F7F5",
                maxWidth: "940px",
              }}
            >
              AGRAPATHA{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7ef051 0%, #5DD62C 55%, #34d399 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI FOREST FIRE
              </span>
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #5DD62C 0%, #a3e635 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                SURVEILLANCE
              </span>{" "}
              & RAIL SYSTEM
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING_FAST, delay: 0.12 }}
              style={{
                maxWidth: "680px",
                marginTop: "18px",
                fontSize: "15.5px",
                color: "var(--text-soft)",
                fontFamily: "var(--font-sans)",
                lineHeight: 1.65,
                fontWeight: 400,
              }}
            >
              Sistem peringatan dini kebakaran hutan berbasis{" "}
              <strong style={{ color: "#f4f7f5", fontWeight: 600 }}>
                Edge Random Forest (model_hazard.h)
              </strong>
              , pengawasan kamera rel geser otonom{" "}
              <strong style={{ color: "#f4f7f5", fontWeight: 600 }}>L298N</strong>, dan fusi
              multi-modal 5 sensor mikroklimat secara real-time.
            </motion.p>

            {/* Module Capability Badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING_FAST, delay: 0.18 }}
              style={{
                marginTop: "24px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              {labels.map((feature) => (
                <div
                  key={feature.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "7px 14px",
                    borderRadius: "9999px",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.09)",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <feature.icon style={{ width: "14px", height: "14px", color: "#5DD62C" }} />
                  <span
                    style={{
                      fontSize: "11.5px",
                      fontFamily: "var(--font-mono)",
                      fontWeight: 500,
                      color: "#d8e2dc",
                    }}
                  >
                    {feature.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING_FAST, delay: 0.24 }}
              style={{
                marginTop: "28px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <button
                onClick={handleStartClick}
                className="btn-emerald"
                style={{
                  padding: "12px 24px",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.5px",
                }}
              >
                <span>BUKA DASHBOARD TELEMETRI</span>
                <ArrowRight size={15} />
              </button>
              <a
                href="#rail-section"
                className="btn-outline-emerald"
                style={{
                  padding: "12px 20px",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontFamily: "var(--font-mono)",
                  textDecoration: "none",
                }}
              >
                <Sparkles size={14} style={{ color: "#5DD62C" }} />
                <span>KONTROL REL & AI VISION</span>
                <ChevronDown size={14} />
              </a>
            </motion.div>

            {/* Key Engineering Metrics Strip */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...SPRING_FAST, delay: 0.3 }}
              className="grid-cols-4"
              style={{
                marginTop: "42px",
                width: "100%",
              }}
            >
              {heroMetrics.map((m) => (
                <div
                  key={m.label}
                  className="glass-panel"
                  style={{
                    padding: "16px 18px",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <span
                    className="tabular-nums"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "22px",
                      fontWeight: 800,
                      color: "#5DD62C",
                      lineHeight: 1.15,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {m.value}
                  </span>
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#F4F7F5",
                    }}
                  >
                    {m.label}
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {m.sub}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Feature Cards Grid */}
        <section style={{ paddingBottom: "52px", paddingTop: "8px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "18px",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "6px",
                  height: "18px",
                  borderRadius: "3px",
                  background: "#5DD62C",
                  boxShadow: "0 0 8px rgba(93, 214, 44, 0.5)",
                }}
              />
              <h2
                style={{
                  fontSize: "17px",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 800,
                  letterSpacing: "-0.01em",
                  color: "#F4F7F5",
                }}
              >
                Arsitektur & Pilar Teknologi AGRAPATHA
              </h2>
            </div>
            <span
              style={{
                fontSize: "11px",
                fontFamily: "var(--font-mono)",
                color: "var(--text-muted)",
              }}
            >
              EDGE COMPUTING • MECHATRONICS • COMPUTER VISION
            </span>
          </div>

          <div className="grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ...SPRING_FAST,
                  delay: 0.35 + index * 0.08,
                }}
                whileHover={{ y: -3 }}
                className="glass-panel"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "22px",
                  textAlign: "left",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "14px",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "10px",
                        background: "rgba(93, 214, 44, 0.1)",
                        border: "1px solid rgba(93, 214, 44, 0.25)",
                        padding: "10px",
                        color: "#5DD62C",
                        display: "inline-flex",
                      }}
                    >
                      <feature.icon style={{ width: "18px", height: "18px" }} />
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        fontWeight: 700,
                        color: "var(--text-muted)",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {feature.code}
                    </span>
                  </div>

                  <h3
                    style={{
                      marginBottom: "8px",
                      fontSize: "15.5px",
                      fontFamily: "var(--font-sans)",
                      fontWeight: 700,
                      color: "#F4F7F5",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {feature.label}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-soft)",
                      fontFamily: "var(--font-sans)",
                      fontSize: "13px",
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginTop: "18px",
                    paddingTop: "12px",
                    borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  {feature.specs.map((spec) => (
                    <span
                      key={spec}
                      style={{
                        fontSize: "10.5px",
                        fontFamily: "var(--font-mono)",
                        color: "#5DD62C",
                        background: "rgba(93, 214, 44, 0.08)",
                        border: "1px solid rgba(93, 214, 44, 0.18)",
                        padding: "2px 8px",
                        borderRadius: "6px",
                      }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default MynaHero;

