import Hero from "@/components/Hero"
import MenuSection from "@/components/MenuSection"
import RandomRecipes from "@/components/RandomRecipes"

export default function Home() {
  return (
    <main className="mt-[72px]">
        <Hero />
      <div className="bg-gray-200">
        <MenuSection />
      </div>
      <RandomRecipes />
    </main>
  )
}