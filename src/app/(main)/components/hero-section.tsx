import { Button } from '@/components/ui/button'

export const HeroSection = () => {
  return (
    <div className="mb-3 mt-24 text-center pt-16 mx-auto w-full max-w-5xl px-6 md:max-w-7xl">
      <h1 className="font-display effect-font-styling text-[4rem] md:text-7xl leading-[4.35rem] md:leading-[5rem] tracking-tight effect-font-gradient effect-font-hero -mt-16 text-center">
        Join the team
      </h1>
      <p className="text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal text-balance mb-6 text-muted-foreground">
        We&apos;re creating something special here, and we&apos;re looking{' '}
        <br /> for people who care deeply about quality to build it with us.
      </p>
      <Button className="h-12 px-5 font-semibold text-base">
        See open positions
      </Button>
    </div>
  )
}
