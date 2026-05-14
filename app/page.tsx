import { Hero } from "@/components/home/hero"
import { TacticsPreview } from "@/components/home/tactics-preview"
import { HistoryPreview } from "@/components/home/history-preview"
import { FactsSection } from "@/components/home/facts-section"
import { GlovesSection } from "@/components/home/gloves-section"
import { EquipmentSection } from "@/components/home/equipment-section"
import { MartialArtsTypes } from "@/components/home/martial-arts-types"
import { RulesPreview } from "@/components/home/rules-preview"
import { BlogPreview } from "@/components/home/blog-preview"

export default function HomePage() {
  return (
    <>
      <Hero />
      <TacticsPreview />
      <FactsSection />
      <HistoryPreview />
      <MartialArtsTypes />
      <GlovesSection />
      <RulesPreview />
      <EquipmentSection />
      <BlogPreview />
    </>
  )
}
