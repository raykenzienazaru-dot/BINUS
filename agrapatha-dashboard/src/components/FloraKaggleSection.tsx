import React from 'react';
import {
  KAGGLE_FOREST_FIRE_STATS,
  KAGGLE_FLORA_DATASET_STATS,
  REAL_DATASET_PRESETS,
  type HazardInferenceResult,
} from '../lib/aiModels';

interface FloraKaggleSectionProps {
  temp: number;
  rh: number;
  wind: number;
  rain: number;
  ffmc: number;
  dmc: number;
  dc: number;
  isi: number;
  soilMoisture: number;
  activePresetId: string;
  hazardResult: HazardInferenceResult;
  floraResult: {
    sensorRisk: 'High' | 'Low' | 'Moderate';
    sensorConfidence: number;
    highProbability: number;
    lowProbability: number;
    moderateProbability: number;
  };
  onChangeParam: (field: 'temp' | 'rh' | 'wind' | 'rain' | 'ffmc' | 'dmc' | 'soilMoisture', value: number) => void;
  onSelectPreset: (presetId: string) => void;
}

export const FloraKaggleSection: React.FC<FloraKaggleSectionProps> = ({
  temp,
  rh,
  wind,
  rain,
  ffmc,
  dmc,
  dc,
  isi,
  soilMoisture,
  activePresetId,
  hazardResult,
  floraResult,
  onChangeParam,
  onSelectPreset,
}) => {
  const sliders = [
    {
      field: 'temp' as const,
      label: 'Temperature (temp)',
      code: 'input[0]',
      value: temp,
      min: 2.2,
      max: 33.3,
      step: 0.1,
      unit: '°C',
      mean: 18.89,
      std: 5.81,
      dataset: 'forestfires.csv (2.2 – 33.3°C)',
    },
    {
      field: 'rh' as const,
      label: 'Relative Humidity (RH)',
      code: 'input[1]',
      value: rh,
      min: 15.0,
      max: 100.0,
      step: 1,
      unit: '%',
      mean: 44.29,
      std: 16.32,
      dataset: 'forestfires.csv (15 – 100%)',
    },
    {
      field: 'wind' as const,
      label: 'Wind Speed (wind)',
      code: 'input[2]',
      value: wind,
      min: 0.4,
      max: 9.4,
      step: 0.1,
      unit: 'km/h',
      mean: 4.02,
      std: 1.79,
      dataset: 'forestfires.csv (0.4 – 9.4 km/h)',
    },
    {
      field: 'rain' as const,
      label: 'Outside Rain (rain)',
      code: 'input[3]',
      value: rain,
      min: 0.0,
      max: 6.4,
      step: 0.1,
      unit: 'mm/m²',
      mean: 0.02,
      std: 0.30,
      dataset: 'forestfires.csv (0.0 – 6.4 mm)',
    },
    {
      field: 'ffmc' as const,
      label: 'Fine Fuel Moisture (FFMC)',
      code: 'input[4]',
      value: ffmc,
      min: 18.7,
      max: 96.2,
      step: 0.1,
      unit: 'idx',
      mean: 90.64,
      std: 5.52,
      dataset: 'FWI Index (18.7 – 96.2)',
    },
    {
      field: 'dmc' as const,
      label: 'Duff Moisture Code (DMC)',
      code: 'input[5]',
      value: dmc,
      min: 1.1,
      max: 291.3,
      step: 0.5,
      unit: 'idx',
      mean: 110.87,
      std: 64.05,
      dataset: 'FWI Index (1.1 – 291.3)',
    },
    {
      field: 'soilMoisture' as const,
      label: 'Soil Moisture (Capacitive)',
      code: 'flora_in[2]',
      value: soilMoisture,
      min: 5.0,
      max: 95.0,
      step: 0.5,
      unit: '%',
      mean: 67.15,
      std: 17.56,
      dataset: 'flora-risk-dataset (Mean 67.15%)',
    },
  ];

  return (
    <section id="benchmarks" className="mt-8 space-y-6">
      {/* 1. Interactive C Header Model Simulator */}
      <div className="flora-card p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 mb-5 pb-4 border-b border-[#E4EBE0]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-[#597C00] uppercase tracking-widest block">
                Interactive C Header Kernel Simulator · Real-Time Inference
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#EAF4E8] text-[#22531A] border border-[#C4E1BF]">
                100 Decision Trees Active
              </span>
            </div>
            <h2 className="text-lg font-bold text-[#1B2408] font-display mt-0.5">
              Simulasi Parameter <code className="text-[#597C00] font-mono text-base">model_hazard.h</code> &amp;{' '}
              <code className="text-[#597C00] font-mono text-base">grenvis_sensor_model.h</code>
            </h2>
            <p className="text-xs text-[#617253] mt-0.5">
              Geser nilai fitur di bawah ini atau pilih preset sampel asli dari{' '}
              <code className="font-mono text-[#1B2408]">forestfires.csv</code> untuk mengeksekusi fungsi C{' '}
              <code className="font-mono text-[#597C00]">void score(double *input, double *output)</code> secara langsung.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {REAL_DATASET_PRESETS.map((preset) => {
              const isActive = activePresetId === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => onSelectPreset(preset.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                    isActive
                      ? 'bg-[#1E2805] text-white border-[#1E2805] shadow-xs ring-2 ring-[#9DB312]/50'
                      : 'bg-[#F4F7F2] text-[#1B2408] border-[#E4EBE0] hover:bg-[#EAF4E8] hover:border-[#C4E1BF]'
                  }`}
                >
                  {preset.shortName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sliders + Live Output Vector Split */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {sliders.map((s) => (
              <div key={s.field} className="bg-[#F4F7F2] border border-[#E4EBE0] rounded-xl p-3.5">
                <div className="flex justify-between items-center mb-1">
                  <div>
                    <span className="text-xs font-bold text-[#1B2408] block">{s.label}</span>
                    <span className="text-[10px] font-mono text-[#617253]">
                      {s.code} · {s.dataset}
                    </span>
                  </div>
                  <span className="text-sm font-bold font-tabular text-[#597C00] bg-white px-2.5 py-1 rounded-lg border border-[#E4EBE0]">
                    {s.value.toFixed(1)} {s.unit}
                  </span>
                </div>
                <input
                  type="range"
                  min={s.min}
                  max={s.max}
                  step={s.step}
                  value={s.value}
                  onChange={(e) => onChangeParam(s.field, parseFloat(e.target.value))}
                  className="w-full accent-[#597C00] cursor-pointer h-2 bg-[#E4EBE0] rounded-lg mt-2"
                />
                <div className="flex justify-between text-[10px] font-tabular text-[#617253] mt-1">
                  <span>Min: {s.min}</span>
                  <span>
                    Mean: {s.mean} (±{s.std})
                  </span>
                  <span>Max: {s.max}</span>
                </div>
              </div>
            ))}

            {/* Derived FWI DC & ISI readouts */}
            <div className="bg-[#F4F7F2] border border-[#E4EBE0] rounded-xl p-3.5 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-[#1B2408]">Derived FWI Indices (DC &amp; ISI)</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white border border-[#E4EBE0] text-[#597C00]">
                  Montesinho FWI
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 my-2">
                <div className="bg-white border border-[#E4EBE0] rounded-lg p-2">
                  <span className="text-[10px] text-[#617253] block">Drought Code (DC)</span>
                  <span className="text-sm font-bold font-tabular text-[#1B2408]">{dc.toFixed(1)}</span>
                  <span className="text-[9px] text-[#617253] block">Range: 7.9 – 860.6</span>
                </div>
                <div className="bg-white border border-[#E4EBE0] rounded-lg p-2">
                  <span className="text-[10px] text-[#617253] block">Initial Spread (ISI)</span>
                  <span className="text-sm font-bold font-tabular text-[#1B2408]">{isi.toFixed(1)}</span>
                  <span className="text-[9px] text-[#617253] block">Range: 0.0 – 56.1</span>
                </div>
              </div>
              <span className="text-[10px] text-[#617253]">
                Mean dataset: DC = 547.94 (±248.07) · ISI = 9.02 (±4.56)
              </span>
            </div>
          </div>

          {/* C Header Output Terminal Box */}
          <div className="bg-[#1E2805] text-white rounded-2xl p-5 border border-[#2C3B0E] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#334411] pb-3 mb-3.5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#9DB312] block">
                    Live C Model Execution
                  </span>
                  <h3 className="text-sm font-bold font-mono text-white mt-0.5">score(input, output)</h3>
                </div>
                <span
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                    hazardResult.riskLevel === 'HIGH'
                      ? 'bg-[#FEEAEA] text-[#961C1C] border-[#FCCECE]'
                      : hazardResult.riskLevel === 'MODERATE'
                      ? 'bg-[#FEF7E8] text-[#8A570C] border-[#FDE3B5]'
                      : 'bg-[#EAF4E8] text-[#22531A] border-[#C4E1BF]'
                  }`}
                >
                  {hazardResult.riskLevel} HAZARD
                </span>
              </div>

              <div className="bg-[#141D04] border border-[#2C3B0E] rounded-xl p-3 font-mono text-[11px] space-y-1.5 mb-4">
                <div className="text-[#C3D883] text-[10px]">// Input Ciri [temp, RH, wind, rain, FFMC, DMC]</div>
                <div className="text-white break-all">
                  double input[6] = &#123; {temp.toFixed(1)}, {rh.toFixed(1)}, {wind.toFixed(1)}, {rain.toFixed(1)},{' '}
                  {ffmc.toFixed(1)}, {dmc.toFixed(1)} &#125;;
                </div>
                <div className="text-[#C3D883] text-[10px] pt-1">// Output [P(High), P(Low), P(Moderate)]</div>
                <div className="text-[#9DB312] font-bold">
                  output[3] = &#123; {hazardResult.rawVector[0].toFixed(4)}, {hazardResult.rawVector[1].toFixed(4)},{' '}
                  {hazardResult.rawVector[2].toFixed(4)} &#125;;
                </div>
              </div>

              {/* Dual Model Comparison */}
              <div className="space-y-3">
                <div className="bg-[#141D04] border border-[#2C3B0E] rounded-xl p-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#C3D883] font-semibold">1. model_hazard.h (100 Trees RF)</span>
                    <span className="font-bold font-tabular text-white">{hazardResult.confidence.toFixed(1)}%</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 text-[10px] font-tabular mt-2">
                    <div className="bg-[#1E2805] p-1.5 rounded border border-[#2C3B0E] text-center">
                      <span className="text-[#FCA5A5] block">High [0]</span>
                      <strong className="text-white">{hazardResult.highProbability.toFixed(1)}%</strong>
                    </div>
                    <div className="bg-[#1E2805] p-1.5 rounded border border-[#2C3B0E] text-center">
                      <span className="text-[#86EFAC] block">Low [1]</span>
                      <strong className="text-white">{hazardResult.lowProbability.toFixed(1)}%</strong>
                    </div>
                    <div className="bg-[#1E2805] p-1.5 rounded border border-[#2C3B0E] text-center">
                      <span className="text-[#FDE68A] block">Mod [2]</span>
                      <strong className="text-white">{hazardResult.moderateProbability.toFixed(1)}%</strong>
                    </div>
                  </div>
                </div>

                <div className="bg-[#141D04] border border-[#2C3B0E] rounded-xl p-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#C3D883] font-semibold">2. grenvis_sensor_model.h (MLP)</span>
                    <span className="font-bold font-tabular text-[#9DB312]">
                      {floraResult.sensorRisk.toUpperCase()} ({floraResult.sensorConfidence.toFixed(1)}%)
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 text-[10px] font-tabular mt-2">
                    <div className="bg-[#1E2805] p-1.5 rounded border border-[#2C3B0E] text-center">
                      <span className="text-[#FCA5A5] block">High [0]</span>
                      <strong className="text-white">{floraResult.highProbability.toFixed(1)}%</strong>
                    </div>
                    <div className="bg-[#1E2805] p-1.5 rounded border border-[#2C3B0E] text-center">
                      <span className="text-[#86EFAC] block">Low [1]</span>
                      <strong className="text-white">{floraResult.lowProbability.toFixed(1)}%</strong>
                    </div>
                    <div className="bg-[#1E2805] p-1.5 rounded border border-[#2C3B0E] text-center">
                      <span className="text-[#FDE68A] block">Mod [2]</span>
                      <strong className="text-white">{floraResult.moderateProbability.toFixed(1)}%</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#334411] flex items-center justify-between text-xs">
              <span className="text-[#C3D883]">Kaggle Binary Class (0/1):</span>
              <span
                className={`px-2.5 py-0.5 rounded-md font-mono font-bold ${
                  hazardResult.kaggleBinaryPrediction === 'On Fire'
                    ? 'bg-[#DC2626] text-white'
                    : 'bg-[#367C29] text-white'
                }`}
              >
                {hazardResult.kaggleBinaryPrediction === 'On Fire' ? "1: 'On Fire'" : "0: 'safe'"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Kaggle Notebook & Dataset Official Benchmarks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
        {/* Left: Forest Fire Area Classification Notebook Metrics */}
        <div className="flora-card p-6 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex justify-between items-start gap-2 mb-4">
              <div>
                <span className="text-[10px] font-bold text-[#597C00] uppercase tracking-widest block">
                  Kaggle Reference 1 · Forest Fire Area Classification
                </span>
                <h3 className="text-base font-bold text-[#1B2408] font-display mt-0.5">
                  Classifier Benchmark &amp; Holdout Evaluation (517 Samples)
                </h3>
              </div>
              <a
                href={KAGGLE_FOREST_FIRE_STATS.notebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-[#597C00] bg-[#EAF4E8] hover:bg-[#DDF0D9] px-2.5 py-1 rounded-lg border border-[#C4E1BF] transition-colors shrink-0"
              >
                Kaggle Notebook ↗
              </a>
            </div>

            {/* Dataset Split Pill Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
              <div className="bg-[#F4F7F2] border border-[#E4EBE0] p-2.5 rounded-xl">
                <span className="text-[10px] font-bold text-[#617253] uppercase block">Total Rows</span>
                <span className="text-base font-bold font-tabular text-[#1B2408]">517</span>
                <span className="text-[10px] text-[#617253] block">361 Train / 156 Test</span>
              </div>
              <div className="bg-[#F4F7F2] border border-[#E4EBE0] p-2.5 rounded-xl">
                <span className="text-[10px] font-bold text-[#617253] uppercase block">Binary Label</span>
                <span className="text-base font-bold font-tabular text-[#1B2408]">270 / 247</span>
                <span className="text-[10px] text-[#617253] block">52.2% Fire · 47.8% Safe</span>
              </div>
              <div className="bg-[#F4F7F2] border border-[#E4EBE0] p-2.5 rounded-xl">
                <span className="text-[10px] font-bold text-[#617253] uppercase block">model_hazard.h</span>
                <span className="text-base font-bold font-tabular text-[#961C1C]">338 High</span>
                <span className="text-[10px] text-[#617253] block">146 Mod · 33 Low</span>
              </div>
              <div className="bg-[#F4F7F2] border border-[#E4EBE0] p-2.5 rounded-xl">
                <span className="text-[10px] font-bold text-[#617253] uppercase block">Max Burned Area</span>
                <span className="text-base font-bold font-tabular text-[#1B2408]">1090.84 ha</span>
                <span className="text-[10px] text-[#617253] block">Mean: 12.85 ha</span>
              </div>
            </div>

            {/* Holdout Table */}
            <div className="overflow-x-auto border border-[#E4EBE0] rounded-xl">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#F4F7F2] border-b border-[#E4EBE0] text-[10px] font-bold text-[#617253] uppercase">
                    <th className="py-2.5 px-3">Algorithm (test_size=0.3)</th>
                    <th className="py-2.5 px-2.5 text-right">Accuracy</th>
                    <th className="py-2.5 px-2.5 text-right">Precision</th>
                    <th className="py-2.5 px-2.5 text-right">Recall</th>
                    <th className="py-2.5 px-3 text-right">Confusion Matrix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4EBE0] font-tabular">
                  {KAGGLE_FOREST_FIRE_STATS.classifiersHoldout.map((clf) => (
                    <tr key={clf.name} className="hover:bg-[#F4F7F2]/60">
                      <td className="py-2 px-3 font-sans font-semibold text-[#1B2408]">{clf.name}</td>
                      <td className="py-2 px-2.5 text-right font-bold text-[#597C00]">{clf.accuracy.toFixed(2)}%</td>
                      <td className="py-2 px-2.5 text-right text-[#1B2408]">{clf.precision.toFixed(2)}%</td>
                      <td className="py-2 px-2.5 text-right text-[#1B2408]">{clf.recall.toFixed(2)}%</td>
                      <td className="py-2 px-3 text-right text-[11px] text-[#617253]">
                        {clf.confusionMatrix
                          ? `[[${clf.confusionMatrix[0][0]}, ${clf.confusionMatrix[0][1]}], [${clf.confusionMatrix[1][0]}, ${clf.confusionMatrix[1][1]}]]`
                          : 'Optimal K=19'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Official x_new test vector box */}
            <div className="mt-3.5 bg-[#F4F7F2] border border-[#E4EBE0] rounded-xl p-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#597C00]">
                  Notebook Test Sample (Cell 25, 27, 29, 30, 32)
                </span>
                <button
                  onClick={() => onSelectPreset('kaggle-xnew-benchmark')}
                  className="text-[10px] font-bold text-white bg-[#1E2805] hover:bg-[#2C3B0E] px-2 py-0.5 rounded cursor-pointer"
                >
                  Load x_new ke Simulator
                </button>
              </div>
              <code className="text-[11px] font-mono text-[#1B2408] block break-all">
                x_new = [[1, 4, 9, 1, 91.5, 130.1, 807.1, 7.5, 21.3, 35, 2.2, 0]] → Output: &apos;On Fire&apos; (63.68% High Risk)
              </code>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#E4EBE0] text-[11px] text-[#617253]">
            10-Fold Cross Validation (<code className="font-mono">seed=7</code>): SVM (0.4802) · KNN (0.4684) · MLP (0.4414) · CART (0.4373) · Bagging (0.4298) · GradientBoost (0.4279) · ExtraTrees (0.4086) · NB (0.3975) · AdaBoost (0.3969) · LR (0.3952) · RF (0.3911).
          </div>
        </div>

        {/* Right: FLORA Environmental Risk Dataset (9,000 Rows) & C Model Architecture */}
        <div className="flora-card p-6 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex justify-between items-start gap-2 mb-4">
              <div>
                <span className="text-[10px] font-bold text-[#597C00] uppercase tracking-widest block">
                  Kaggle Reference 2 · FLORA Environmental Risk Dataset
                </span>
                <h3 className="text-base font-bold text-[#1B2408] font-display mt-0.5">
                  Microclimate Sensor Distribution (9,000 Balanced Samples)
                </h3>
              </div>
              <a
                href={KAGGLE_FLORA_DATASET_STATS.datasetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-[#597C00] bg-[#EAF4E8] hover:bg-[#DDF0D9] px-2.5 py-1 rounded-lg border border-[#C4E1BF] transition-colors shrink-0"
              >
                Kaggle Dataset ↗
              </a>
            </div>

            <div className="grid grid-cols-3 gap-2.5 mb-4">
              <div className="bg-[#EAF4E8] border border-[#C4E1BF] p-3 rounded-xl text-center">
                <span className="text-[10px] font-bold text-[#22531A] uppercase block">Low Risk Class</span>
                <span className="text-lg font-bold font-tabular text-[#22531A]">3,000</span>
                <span className="text-[10px] text-[#22531A]/80 block">33.33% Balanced</span>
              </div>
              <div className="bg-[#FEF7E8] border border-[#FDE3B5] p-3 rounded-xl text-center">
                <span className="text-[10px] font-bold text-[#8A570C] uppercase block">Moderate Risk</span>
                <span className="text-lg font-bold font-tabular text-[#8A570C]">3,000</span>
                <span className="text-[10px] text-[#8A570C]/80 block">33.33% Balanced</span>
              </div>
              <div className="bg-[#FEEAEA] border border-[#FCCECE] p-3 rounded-xl text-center">
                <span className="text-[10px] font-bold text-[#961C1C] uppercase block">High Risk Class</span>
                <span className="text-lg font-bold font-tabular text-[#961C1C]">3,000</span>
                <span className="text-[10px] text-[#961C1C]/80 block">33.33% Balanced</span>
              </div>
            </div>

            <div className="space-y-2.5 mb-4">
              <div className="bg-[#F4F7F2] border border-[#E4EBE0] rounded-xl p-3 flex justify-between items-center">
                <div>
                  <span className="text-xs font-bold text-[#1B2408] block">
                    temperature_c · Suhu Udara Ambien (DHT22)
                  </span>
                  <span className="text-[11px] text-[#617253]">StandardScaler Normalization Parameter</span>
                </div>
                <div className="text-right font-tabular">
                  <span className="text-sm font-bold text-[#1B2408] block">Mean: 28.62 °C</span>
                  <span className="text-[11px] text-[#597C00] font-semibold">Std: ±4.91 °C</span>
                </div>
              </div>

              <div className="bg-[#F4F7F2] border border-[#E4EBE0] rounded-xl p-3 flex justify-between items-center">
                <div>
                  <span className="text-xs font-bold text-[#1B2408] block">
                    humidity_percent · Kelembapan Udara Relatif (DHT22)
                  </span>
                  <span className="text-[11px] text-[#617253]">StandardScaler Normalization Parameter</span>
                </div>
                <div className="text-right font-tabular">
                  <span className="text-sm font-bold text-[#1B2408] block">Mean: 59.83 %</span>
                  <span className="text-[11px] text-[#597C00] font-semibold">Std: ±14.31 %</span>
                </div>
              </div>

              <div className="bg-[#F4F7F2] border border-[#E4EBE0] rounded-xl p-3 flex justify-between items-center">
                <div>
                  <span className="text-xs font-bold text-[#1B2408] block">
                    soil_moisture_percent · Kelembapan Tanah (Capacitive)
                  </span>
                  <span className="text-[11px] text-[#617253]">StandardScaler Normalization Parameter</span>
                </div>
                <div className="text-right font-tabular">
                  <span className="text-sm font-bold text-[#1B2408] block">Mean: 67.15 %</span>
                  <span className="text-[11px] text-[#597C00] font-semibold">Std: ±17.56 %</span>
                </div>
              </div>
            </div>

            <div className="bg-[#F4F7F2] border border-[#E4EBE0] rounded-xl p-3.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#597C00] block mb-1">
                Dual Edge-AI Firmware Architecture (C Header Models)
              </span>
              <p className="text-xs text-[#1B2408] leading-relaxed m-0">
                Sistem menggabungkan <strong>model_hazard.h</strong> (100-Tree Random Forest <code className="font-mono">m2cgen</code>, 19.591 baris kode C untuk prediksi bahaya api <code className="font-mono">[temp, RH, wind, rain, FFMC, DMC]</code>) dan <strong>grenvis_sensor_model.h</strong> (TFLite Micro Neural Network 3→16→8→3 <code className="font-mono">2.988 bytes</code> untuk evaluasi stres mikroklimat tanah &amp; kanopi).
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#E4EBE0] text-[11px] text-[#617253]">
            Kedua model C header dieksekusi langsung di memori browser dengan bobot dan pohon keputusan asli tanpa pembulatan.
          </div>
        </div>
      </div>
    </section>
  );
};
