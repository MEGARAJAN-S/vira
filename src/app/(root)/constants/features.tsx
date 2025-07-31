// constants/features.tsx
import { Mic, HeartPulse, NotebookText, Radar } from "lucide-react";

export const features = [
  {
    Icon: Mic,
    name: "Voice Journaling",
    description: "Speak freely. Let VIRA summarize your thoughts into clear, emotional insights — no typing needed.",
    cta: "Learn more",
    href: "#", // Optional if not used
    className: "col-span-3 lg:col-span-1",
  },
  {
    Icon: HeartPulse,
    name: "Mood Tracker",
    description: "Track your emotional journey with daily check-ins and friendly visual trends to build mindfulness.",
    cta: "Learn more",
    href: "#",
    className: "col-span-3 lg:col-span-2",
  },
  {
    Icon: NotebookText,
    name: "AI Journal Summarizer",
    description: "Your journal entries are automatically summarized and categorized for easy emotional tracking.",
    cta: "Learn more",
    href: "#",
    className: "col-span-3 lg:col-span-2",
  },
  {
    Icon: Radar,
    name: "Crisis Support Detection",
    description: "Detects critical emotional cues and offers real-time support options with care and empathy.",
    cta: "Learn more",
    href: "#",
    className: "col-span-3 lg:col-span-1",
  },
];
