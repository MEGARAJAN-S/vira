import { Mic, Bot, BarChart4, ShieldCheck } from "lucide-react";

const use = [
  {
    title: "Talk Freely",
    description: "Start a voice session anytime. No judgment, just your voice.",
    icon: <Mic className="w-8 h-8 text-primary" />,
  },
  {
    title: "AI Understands You",
    description: "Our AI detects emotion through tone and transcribes thoughts.",
    icon: <Bot className="w-8 h-8 text-primary" />,
  },
  {
    title: "Reflect & Improve",
    description: "Visual mood trends and personalized tips help you grow.",
    icon: <BarChart4 className="w-8 h-8 text-primary" />,
  },
  {
    title: "Stay Supported",
    description: "When needed, VIRA offers crisis mode or peer support options.",
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
  },
];

export default use;