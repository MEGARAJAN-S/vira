import { DotPattern } from "@/components/modules/DotPattern";
import useData from "../constants/use";
import React from "react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const Use = () => {
  return (
    <section
      id="how-it-works"
      className="relative w-full overflow-hidden bg-background px-4 py-20"
    >
      <div className="absolute inset-0">
        <DotPattern
          className="[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] text-primary/40"
          cr={2.5}
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A simple, clear process to help you get started quickly.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {useData.map((step, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="mb-4 text-primary">{step.icon}</div>
              <CardTitle className="text-lg font-semibold mb-2">
                {step.title}
              </CardTitle>
              <CardDescription>{step.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Use;
