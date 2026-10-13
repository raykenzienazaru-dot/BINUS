export type ThreatLevel = 'GREEN' | 'YELLOW' | 'ORANGE' | 'RED';

export interface SensorDataPoint {
  time: string;
  timestamp: number;
  // 5 Sensor Utama yang diminta
  temp: number;          // Suhu (°C)
  rh: number;            // Kelembapan Udara (% RH)
  lightLux: number;      // Intensitas Cahaya (Lux / LDR)
  soilMoisture: number;  // Kelembapan Tanah (% ADC)
  rain: number;          // Curah Hujan (mm/h)
  rainStatus: 'KERING' | 'GERIMIS' | 'HUJAN'; // Status sensor hujan
  
  // Fitur turunan sesuai model_hazard.h input: [temp, RH, wind, rain, FFMC, DMC]
  wind: number;          // Kecepatan Angin (km/h)
  ffmc: number;          // Fine Fuel Moisture Code
  dmc: number;           // Duff Moisture Code
  
  // Output score(input, output) dari model_hazard.h
  hazardProba: [number, number, number]; // [P_Low, P_Mod, P_High]
  hazardClass: 0 | 1 | 2; // 0=Aman, 1=Waspada, 2=Bahaya Kebakaran
}

export interface FusionBreakdown {
  visionContribution: number;      // % bobot Vision
  edgeRfContribution: number;      // % bobot model_hazard.h
  soilMoistureContribution: number;// % bobot Hidrologi Tanah
}

export interface SystemStatus {
  level: ThreatLevel;
  label: string;
  hazardClassLabel: string; // Label kelas sesuai model_hazard.h
  threatScore: number;      // 0 - 100
  fusion: FusionBreakdown;
  activeSensors: number;
  lastUpdate: string;
  stationName: string;
  esp32Online: boolean;
  pingMs: number;
}

export type RailMovementStatus = 'IDLE' | 'SLIDING_LEFT' | 'SLIDING_RIGHT' | 'AUTO_PATROL' | 'LIMIT_HIT' | 'ESTOP';

export interface RailControlState {
  positionMm: number;        // 0 - 1200 mm
  positionPct: number;       // 0 - 100%
  status: RailMovementStatus;
  speedPwm: number;          // 0 - 255
  limitLeftTriggered: boolean;
  limitRightTriggered: boolean;
  autoPatrol: boolean;
  motorCurrentMa: number;
  motorTempC: number;
  stepDirection: 'LEFT' | 'RIGHT' | 'NONE';
}

export interface BoundingBox {
  id: string;
  label: 'smoke' | 'fire';
  confidence: number;
  x: number;      // %
  y: number;      // %
  width: number;  // %
  height: number; // %
}

export interface CameraFeedState {
  cameraId: string;
  cameraName: string;
  resolution: string;
  fps: number;
  isLive: boolean;
  showBoundingBoxes: boolean;
  nightVision: boolean;
  lastSnapshot: string;
  detections: BoundingBox[];
}

export interface EventLogItem {
  id: string;
  time: string;
  category: 'EDGE' | 'RAIL' | 'VISION' | 'SYSTEM' | 'ALERT';
  message: string;
  level: 'info' | 'warning' | 'danger' | 'success';
}

export interface SopActionStep {
  id: string;
  title: string;
  instruction: string;
  priority: 'info' | 'caution' | 'warning' | 'critical';
  completed: boolean;
}

export interface SopProtocol {
  threatLevel: ThreatLevel;
  headerTitle: string;
  summary: string;
  steps: SopActionStep[];
  waterMistingActive: boolean;
  sprinklerActive: boolean;
  emergencyDispatchNotified: boolean;
}
