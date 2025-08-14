// components/HeroSection.tsx
"use client";

import { BorderBeam } from "@/components/modules/BorderBeam";
import { Particles } from "@/components/modules/Particles";
import { PulsatingButton } from "@/components/modules/PulsatingButton";
import ShinyText from "@/components/modules/ShinyText";
import { SparklesText } from "@/components/modules/Sparkle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="h-svh z-10 bg-background text-foreground pt-10 px-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 w-full z-[-1] overflow-hidden">
                <Particles />
            </div>
            <span><SparklesText className="responsive-heading inset-0 overflow-hidden">VIRA</SparklesText></span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Your thoughts deserve to be heard —
                <span> <ShinyText baseColor="rgb(59, 169, 255)"
                    shineColor="rgb(255, 164, 164)"
                    direction="left-to-right"
                    speed={6} size="5xl" weight="bold">
                    let VIRA listen
                </ShinyText></span>
            </h1>

            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Speak or type your thoughts. VIRA listens, understands, and supports your emotional journey.<br />
                Whether you're journaling, venting, or reflecting — VIRA is here to help you feel better.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <PulsatingButton pulseColor="#ffa4a4" className="px-0 py-0">
                    <Button
                        asChild
                        className="bg-primary text-primary-foreground px-6 py-3 text-base"
                    >
                        <Link href="/signup">
                            Start Talking
                        </Link>
                    </Button>
                </PulsatingButton>
                <Button variant="outline" className="px-6 py-3 text-base">
                    <a href="#features">View Features</a>
                </Button>
            </div>
            <div className="relative w-full max-w-[1100px] mx-auto mt-10">
                <Image
                    src="/calm-ai.png"
                    alt="VIRA AI mental wellness visual"
                    width={1100}
                    height={1000}
                    className="responsive-image border-2 border-border shadow-2xl"
                />
                <BorderBeam
                    className="border-2 from-transparent via-[#A5B4FC] to-transparent" />
            </div>
        </section>
    );
}

export default Hero