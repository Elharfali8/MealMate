import Hero from "@/components/Hero"
import MenuSection from "@/components/MenuSection"

export default function Home() {
  return (
    <main className="mt-[72px]">
      <div className="bg-white">
        <Hero />
      </div>
        <MenuSection />
    </main>
  )
}