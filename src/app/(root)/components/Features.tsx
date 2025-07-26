import React from 'react';
import { Sparkles, Mic, HeartPulse, BrainCog } from 'lucide-react'; // Optional: use icons from lucide-react

const features = [
  {
    title: 'Voice Journaling',
    description: 'Talk freely. Let AI summarize your emotions.',
    icon: <Mic className="w-6 h-6 text-primary icon-animated" />,
  },
  {
    title: 'Mood Tracker',
    description: 'Daily check-ins help you reflect and improve.',
    icon: <HeartPulse className="w-6 h-6 text-primary icon-animated" />,
  },
  {
    title: 'Self-Help Tools',
    description: 'Breathing, affirmations, and personalized coping.',
    icon: <BrainCog className="w-6 h-6 text-primary icon-animated" />,
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="min-h-screen w-full bg-card text-card-foreground px-4 py-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-primary">Why VIRA?</h2>
        <p className="text-muted-foreground text-lg mb-12">
          Discover tools designed to support your mental well-being.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-background border border-border rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-[1.02]"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
