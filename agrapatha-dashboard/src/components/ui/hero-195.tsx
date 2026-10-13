import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { BorderBeam } from "@/components/ui/border-beam"
import { Flame, Cpu, Radio, Droplets, Sun, Sprout, CloudRain } from "lucide-react"

export const Hero195 = () => {
  return (
    <div className="relative w-full overflow-hidden py-10 px-6 sm:px-12 bg-[#0F0F0F] text-[#F8F8F8] rounded-2xl border border-[rgba(93,214,44,0.2)] shadow-2xl">
      <BorderBeam size={280} duration={12} colorFrom="#5DD62C" colorTo="#337418" borderWidth={2} />
      
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(93,214,44,0.15)] border border-[#5DD62C] text-[#5DD62C] text-xs font-mono font-bold tracking-wide">
          <Flame size={14} className="animate-pulse" />
          <span>AGRAPATHA EDGE SURVEILLANCE v2.4</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F8F8F8] max-w-3xl">
          Sistem Deteksi Dini Karhutla & Mekatronika Rel Otonom
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-[#a3a3a3] max-w-2xl leading-relaxed">
          Mengintegrasikan Random Forest <span className="font-mono text-[#5DD62C]">model_hazard.h</span> pada firmware ESP32, 
          motor slider rel L298N, dan algoritma multi-modal sensor fusion untuk perlindungan hutan terdepan.
        </p>

        {/* Interactive Tabs Showcase */}
        <div className="w-full max-w-3xl mt-4">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="bg-[#202020] border border-[rgba(93,214,44,0.25)] text-[#d4d4d4] p-1 rounded-xl">
              <TabsTrigger value="overview" className="data-[state=active]:bg-[#5DD62C] data-[state=active]:text-[#0F0F0F] font-bold rounded-lg transition-all">
                Ikhtisar Sistem
              </TabsTrigger>
              <TabsTrigger value="sensors" className="data-[state=active]:bg-[#5DD62C] data-[state=active]:text-[#0F0F0F] font-bold rounded-lg transition-all">
                5 Sensor Lingkungan
              </TabsTrigger>
              <TabsTrigger value="edge" className="data-[state=active]:bg-[#5DD62C] data-[state=active]:text-[#0F0F0F] font-bold rounded-lg transition-all">
                Firmware model_hazard.h
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card className="bg-[#202020] border-[rgba(93,214,44,0.3)] text-[#F8F8F8] mt-4 text-left relative overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-[#5DD62C]">
                    <Radio size={20} /> Arsitektur Multi-Modal AGRAPATHA
                  </CardTitle>
                  <CardDescription className="text-[#a3a3a3]">
                    Fusi cerdas antara inferensi edge mikroklimat tanah dan vision kamera rel.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-[#d4d4d4]">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg bg-[#181818] border border-[rgba(93,214,44,0.2)]">
                      <div className="text-xs text-[#a3a3a3]">Vision AI Bobot</div>
                      <div className="text-lg font-bold font-mono text-[#5DD62C]">45%</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#181818] border border-[rgba(93,214,44,0.2)]">
                      <div className="text-xs text-[#a3a3a3]">Edge Random Forest</div>
                      <div className="text-lg font-bold font-mono text-[#5DD62C]">35%</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#181818] border border-[rgba(93,214,44,0.2)]">
                      <div className="text-xs text-[#a3a3a3]">Hidrologi Tanah</div>
                      <div className="text-lg font-bold font-mono text-[#5DD62C]">20%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sensors">
              <Card className="bg-[#202020] border-[rgba(93,214,44,0.3)] text-[#F8F8F8] mt-4 text-left">
                <CardHeader>
                  <CardTitle className="text-xl text-[#5DD62C]">5 Parameter Kritis Terintegrasi</CardTitle>
                  <CardDescription className="text-[#a3a3a3]">
                    Sensor dipantau secara real-time untuk mendeteksi indeks kekeringan dan sulutan api.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center text-xs font-mono">
                    <div className="p-2.5 rounded-lg bg-[#181818] border border-[rgba(93,214,44,0.2)] flex flex-col items-center gap-1">
                      <Droplets size={16} className="text-[#5DD62C]" />
                      <span>Suhu & RH</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#181818] border border-[rgba(93,214,44,0.2)] flex flex-col items-center gap-1">
                      <Sun size={16} className="text-[#5DD62C]" />
                      <span>Cahaya (Lux)</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#181818] border border-[rgba(93,214,44,0.2)] flex flex-col items-center gap-1">
                      <Sprout size={16} className="text-[#5DD62C]" />
                      <span>Tanah (% ADC)</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#181818] border border-[rgba(93,214,44,0.2)] flex flex-col items-center gap-1">
                      <CloudRain size={16} className="text-[#5DD62C]" />
                      <span>Curah Hujan</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#181818] border border-[rgba(93,214,44,0.2)] flex flex-col items-center gap-1">
                      <Cpu size={16} className="text-[#5DD62C]" />
                      <span>FFMC & DMC</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="edge">
              <Card className="bg-[#202020] border-[rgba(93,214,44,0.3)] text-[#F8F8F8] mt-4 text-left">
                <CardHeader>
                  <CardTitle className="text-xl text-[#5DD62C] font-mono">score(input, output)</CardTitle>
                  <CardDescription className="text-[#a3a3a3]">
                    100 Decision Trees diekspor ke C-Header dan dijalankan langsung di memori ESP32 tanpa cloud latency.
                  </CardDescription>
                </CardHeader>
                <CardContent className="font-mono text-xs text-[#a3a3a3] bg-[#141414] p-3 rounded-lg border border-[rgba(93,214,44,0.15)]">
                  <code>
                    input[6] = &#123;temp, RH, wind, rain, FFMC, DMC&#125;;<br/>
                    output[3] = &#123;P_Aman, P_Waspada, P_Bahaya&#125;;
                  </code>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Hero195
