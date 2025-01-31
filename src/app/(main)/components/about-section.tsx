'use client'

import { PhilosophyCard } from './philosophy-card'

export const AboutSection = () => {
  return (
    <div className="mt-16 flex gap-8 max-w-5xl mx-auto items-center justify-center px-6 pb-6">
      <div className="relative md:w-1/2 flex items-center justify-center">
        <PhilosophyCard />

        <div className="absolute md:w-full flex mask overflow-hidden rounded-2xl">
          <PhilosophyCard className="[&>img]:invert [&>p]:invert" />
        </div>
      </div>
    </div>
  )
}
