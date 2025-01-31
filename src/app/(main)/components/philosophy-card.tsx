/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface PhilosophyCardProps {
  className?: string
}

export const PhilosophyCard = ({ className }: PhilosophyCardProps) => {
  return (
    <Link
      href="#"
      className={cn(
        'overflow-hidden rounded-2xl border border-slate-5 px-8 py-10 text-center md:min-h-96 md:px-20 fullHoverCard w-full',
        className
      )}
    >
      <h2 className="font-display effect-font-styling text-[2.25rem] tracking-tight text-slate-12 mb-1 mt-2 text-center leading-none">
        Philosophy
      </h2>
      <p className="effect-font-styling text-[2.25rem] effect-font-gradient text-center font-sans leading-none tracking-tight opacity-50">
        How we work
      </p>
      <img
        src="/philosophy.webp"
        alt="philosophy"
        width={404}
        height={240}
        className="mx-auto mt-8 rotate-0"
      />
    </Link>
  )
}
