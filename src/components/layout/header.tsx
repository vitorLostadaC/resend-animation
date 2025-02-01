import { ChevronDownIcon, ChevronRightIcon, MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

interface NavItem {
  name: string
  href: string
  hasChildren?: boolean // just for this demo
}

const navItems: NavItem[] = [
  { name: 'Features', href: '#', hasChildren: true },
  { name: 'Company', href: '#', hasChildren: true },
  { name: 'Resources', href: '#', hasChildren: true },
  { name: 'Docs', href: '#', hasChildren: true },
  { name: 'Pricing', href: '#' }
]

export const Header = () => {
  return (
    <header
      className="sticky top-0 z-40 border-b border-transparent mx-auto w-full max-w-5xl px-6 md:max-w-7xl flex justify-between items-center h-[58px]"
      aria-label="Main"
      data-orientation="horizontal"
      dir="ltr"
    >
      <div className=" lg:w-[225px]">
        <img src="/logo.svg" alt="logo" className="h-[17px] w-auto " />
      </div>

      <div className="hidden items-center gap-7 md:flex ">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-1 text-muted-foreground text-sm font-bold py-2"
          >
            {item.name}
            {item.hasChildren && (
              <ChevronDownIcon className="size-4" strokeWidth={1} />
            )}
          </Link>
        ))}
      </div>

      <div className="items-center gap-4 hidden md:flex">
        <Button variant="ghost" className="text-muted-foreground font-semibold">
          Sign in
        </Button>
        <Button className="font-bold">
          Get Started <ChevronRightIcon className="size-4" strokeWidth={1.5} />
        </Button>
      </div>

      <Button className="md:hidden rounded-md" size={'icon'} variant={'ghost'}>
        <MenuIcon className="size-4" />
      </Button>
    </header>
  )
}
