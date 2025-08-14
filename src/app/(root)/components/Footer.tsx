import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import ShinyText from "@/components/modules/ShinyText";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo and About */}
        <div>
          <h2 className="mb-4">
            <ShinyText baseColor="rgb(255, 255, 255)"
              shineColor="rgb(20, 22, 27)"
              direction="top-to-bottom"
              speed={8} size="2xl" weight="bold">
              VIRA
            </ShinyText>
          </h2>
          <p className="text-sm">
            Your AI-powered companion for mental wellness. Available 24/7 to listen, support, and guide you.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-primary-foreground mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#features" className="hover:text-secondary">Features</a></li>
            <li><a href="#how-it-works" className="hover:text-secondary">How It Works</a></li>
            <li><a href="#testimonials" className="hover:text-secondary">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-secondary">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-primary-foreground mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-secondary">Help Center</a></li>
            <li><a href="#" className="hover:text-secondary">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-secondary">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-primary-foreground mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-secondary"><Facebook size={20} /></a>
            <a href="#" className="hover:text-secondary"><Twitter size={20} /></a>
            <a href="#" className="hover:text-secondary"><Instagram size={20} /></a>
            <a href="#" className="hover:text-secondary"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-primary-foreground">
        © {new Date().getFullYear()} VIRA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
