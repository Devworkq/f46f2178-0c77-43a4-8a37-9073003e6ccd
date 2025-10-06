import { Zap, Shield, Layers, Headphones } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Fast Transactions",
    description: "No long steps here, just straightforward ways to trade crypto.",
  },
  {
    icon: Shield,
    title: "Safe and Secure",
    description: "You can rest easy knowing that your crypto is safe with us anytime!",
  },
  {
    icon: Layers,
    title: "Tons of Options",
    description: "We list new cryptocurrencies regularly so that you can buy them easily.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Even if the sky is falling or our favorite show is on, we're always here to help.",
  },
];

const WhyQuidax = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Quidax?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Depending on where you are, the stress of buying crypto could drive you nuts. We're here to change that.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border shadow-card hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyQuidax;
