import React from "react";
import { features } from "../constants/features";
import { BentoCard, BentoGrid } from "@/components/modules/BentoGrid";

const Features = () => {
  return (
    <section
      id="features"
      className="relative h-svh w-full bg-card text-card-foreground px-4 py-20"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6 text-primary">Why VIRA?</h2>
        <p className="text-muted-foreground text-lg mb-12">
          Discover tools designed to support your mental well-being.
        </p>

        <BentoGrid className="lg:grid-rows-3 md:grid-rows-2 gap-6 max-w-6xl mx-auto">
          {features.map(
            ({ Icon, name, description, cta, className, href }, idx) => (
              <BentoCard
                key={idx}
                Icon={Icon}
                name={name}
                description={description}
                cta={cta}
                className={className}
                href={href}
                background={undefined}
              />
            )
          )}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Features;
