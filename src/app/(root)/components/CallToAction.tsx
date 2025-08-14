import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ShinyText from "@/components/modules/ShinyText";

const CallToAction = () => {
  return (
    <section className="relative w-full bg-primary py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
          <ShinyText baseColor="rgb(255, 255, 255)"
            shineColor="rgb(20, 22, 27)"
            direction="left-to-right"
            speed={8} size="4xl" weight="bold">
            Start Your Journey to Better Mental Wellness Today
          </ShinyText>
        </h2>
        <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
          Connect with our AI-powered mental health assistant and take your first step towards a
          healthier mind. It's free, secure, and available 24/7.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="text-base"
        >
          <Link href="/signup">
            Get Started Now
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
