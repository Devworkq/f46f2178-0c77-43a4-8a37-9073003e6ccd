import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coins, Repeat, BookOpen, Building2, Code, Users } from "lucide-react";

const products = [
  {
    icon: Coins,
    title: "QDX Token",
    description: "Our cryptocurrency, QDX, makes trading a little more interesting.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Repeat,
    title: "Instant Swap",
    description: "If you blink, you might miss it! That's the magic of our instant buy and sell feature. Try it yourself!",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: BookOpen,
    title: "Order Book",
    description: "Want to buy or sell a coin the moment it hits a sweet price? Then you'll love our order book.",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Building2,
    title: "OTC Desk",
    description: "Are you looking to diversify some of your company's assets by investing a chunk of money in Bitcoin?",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Code,
    title: "API",
    description: "Building full-featured cryptocurrency apps has never been easier! Our API gives you all you need and so much more.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: Users,
    title: "P2P",
    description: "Deposit local currencies and trade crypto at the best prices with verified merchants.",
    color: "from-rose-500 to-pink-600",
  },
];

const Products = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get familiar with our products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A complete suite of the most helpful cryptocurrency products at your fingertips.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="border shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden">
              <CardHeader>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">{product.description}</CardDescription>
                <Button variant="link" className="px-0 text-primary">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
