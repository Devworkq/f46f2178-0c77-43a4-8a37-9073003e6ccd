import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroPhone from "@/assets/hero-phone.png";
import { Download } from "lucide-react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-purple-50/50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-black leading-tight text-foreground">
                Buy and sell crypto with ease
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Quidax makes it simple to buy and sell cryptocurrency. Join the squad and get started today.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
              <Input
                type="email"
                placeholder="Your e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 px-8"
              >
                Get Started
              </Button>
            </form>

            <div className="flex gap-4 items-center">
              <a href="#" className="block">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on App Store"
                  className="h-12"
                />
              </a>
              <a href="#" className="block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12"
                />
              </a>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={heroPhone}
                alt="Quidax Mobile App"
                className="w-full max-w-sm lg:max-w-md relative z-10 drop-shadow-2xl"
              />
              
              {/* Floating decorative elements */}
              <div className="absolute top-10 -left-10 w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 opacity-80 blur-sm animate-pulse"></div>
              <div className="absolute bottom-20 -right-10 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-80 blur-sm animate-pulse delay-75"></div>
              <div className="absolute top-1/2 -right-5 w-12 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 opacity-60 blur-sm animate-pulse delay-150"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
