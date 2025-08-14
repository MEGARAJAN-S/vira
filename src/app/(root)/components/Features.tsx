import React from "react";
import { features } from "../constants/features";
import { BentoCard, BentoGrid } from "@/components/modules/BentoGrid";
import ShinyText from "@/components/modules/ShinyText";

const Features = () => {
  return (
    <section
      id="features"
      className="relative w-full bg-card text-card-foreground px-4 py-20"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10 mb-6">
        <ShinyText baseColor="rgb(59, 169, 255)"
          shineColor="rgb(255, 164, 164)"
          direction="left-to-right"
          speed={6} size="4xl" weight="bold">
          Why VIRA?
        </ShinyText>
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
