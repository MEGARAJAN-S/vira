import React from "react";
import testimonials from "../constants/testimonial"
import { Marquee } from "@/components/modules/Marquee";
import TestimonialCard from "@/components/modules/TestimonialCard";

const Testimonials = () => {
  return (
    <section className="relative w-full bg-background py-20 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary">What Our Users Say</h2>
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
