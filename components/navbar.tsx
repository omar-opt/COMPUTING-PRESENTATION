"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CloudIcon, ServerIcon, NetworkIcon, LayoutDashboardIcon, HomeIcon } from "lucide-react"

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon className="h-4 w-4 mr-2" />,
  },
  {
    name: "Cloud Computing",
    href: "/cloud",
    icon: <CloudIcon className="h-4 w-4 mr-2" />,
  },
  {
    name: "Edge Computing",
    href: "/edge",
    icon: <ServerIcon className="h-4 w-4 mr-2" />,
  },
  {
    name: "Fog Computing",
    href: "/fog",
    icon: <NetworkIcon className="h-4 w-4 mr-2" />,
  },
  {
    name: "Comparison",
    href: "/comparison",
    icon: <LayoutDashboardIcon className="h-4 w-4 mr-2" />,
  },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Distributed Computing</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === item.href ? "text-foreground" : "text-foreground/60",
                )}
              >
                <div className="flex items-center">
                  {item.icon}
                  {item.name}
                </div>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="md:hidden">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="font-bold">Distributed Computing</span>
                </Link>
                <div className="flex items-center space-x-2">
                  {navItems.map((item) => (
                    <Button key={item.href} variant={pathname === item.href ? "default" : "ghost"} size="icon" asChild>
                      <Link href={item.href}>{item.icon}</Link>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
