import React from "react";
import testimonials from "../constants/testimonial"
import { Marquee } from "@/components/modules/Marquee";
import TestimonialCard from "@/components/modules/TestimonialCard";
import ShinyText from "@/components/modules/ShinyText";


const Testimonials = () => {
  return (
    <section id="testimonials" className="relative w-full bg-background py-20 overflow-hidden">
      <div className="text-center mb-14">
        <ShinyText baseColor="rgb(59, 169, 255)"
          shineColor="rgb(255, 164, 164)"
          direction="left-to-right"
          speed={10} size="4xl" weight="bold">What Our Users Say</ShinyText>
        <p className="text-muted-foreground mt-2">
          Real stories from people who made VIRA part of their well-being journey.
        </p>
      </div>
      <div className="relative flex flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:25s] mb-6">
          {testimonials.map((review) => (
            <TestimonialCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:25s]">
          {testimonials.map((review) => (
            <TestimonialCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
};

export default Testimonials;
