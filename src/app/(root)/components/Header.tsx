// components/Header.tsx
"use client";

import ShinyText from "@/components/modules/ShinyText";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-muted backdrop-blur-md border-b border-border px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2 font-bold text-lg text-foreground">
        <Link href="/" className="flex items-center">
          <Home className="w-5 h-5 self-center" />
          <span><ShinyText baseColor="rgb(0, 0, 0)"
            shineColor="rgb(20, 22, 27)"
            direction="top-to-bottom"
            speed={10} size="2xl" weight="bold">
            VIRA
          </ShinyText></span>
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
        <a href="#features" className="hover:text-primary transition">Features</a>
        <a href="#how-it-works" className="hover:text-primary transition">How It Works</a>
        <a href="#testimonials" className="hover:text-primary transition">Testimonial</a>
      </nav>

      <div className="flex gap-3">
        <Link href="/login">
          <Button variant="outline">Log In</Button>
        </Link>
        <Link href="/signup">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Sign Up</Button>
        </Link>
      </div>
    </header >
  );
}

export default Header