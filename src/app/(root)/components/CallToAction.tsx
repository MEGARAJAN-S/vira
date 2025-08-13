import React from "react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="relative w-full bg-primary text-primary-foreground py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Your Journey to Better Mental Wellness Today
        </h2>
        <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
          Connect with our AI-powered mental health assistant and take your first step towards a
          healthier mind. It's free, secure, and available 24/7.
        </p>
        <Button
          size="lg"
          className="bg-background text-primary hover:bg-background/90 font-semibold"
        >
          Get Started Now
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
