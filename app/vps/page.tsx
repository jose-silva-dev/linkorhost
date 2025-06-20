import type { Metadata } from "next"
import { VPSHeroSection } from "@/components/vps-hero-section"
import { VPSPlansSection } from "@/components/vps-plans-section"
import { VPSFeaturesSection } from "@/components/vps-features-section"
import { VPSOperatingSystemsSection } from "@/components/vps-operating-systems-section"
import { VPSFirewallSection } from "@/components/vps-firewall-section"

export const metadata: Metadata = {
  title: "Servidores VPS no Brasil",
  description:
    "Escolha o plano ideal para seu negócio e evolua conforme suas necessidades. VPS com AMD Ryzen, SSD NVMe e proteção DDoS inclusa.",
  keywords: "vps brasil, servidor vps, vps gamer, vps amd ryzen, vps ssd nvme, vps ddos protection",
  openGraph: {
    title: "Servidores VPS no Brasil | Linkor",
    description:
      "Escolha o plano ideal para seu negócio e evolua conforme suas necessidades. VPS com AMD Ryzen, SSD NVMe e proteção DDoS inclusa.",
    type: "website",
  },
}

export default function VPSPage() {
  return (
    <div className="flex flex-col">
      <VPSHeroSection />
      <VPSPlansSection />
      <VPSFeaturesSection />
      <VPSOperatingSystemsSection />
      <VPSFirewallSection />
    </div>
  )
}
