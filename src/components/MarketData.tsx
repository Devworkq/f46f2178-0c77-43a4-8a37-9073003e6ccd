import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown } from "lucide-react";

const marketData = [
  { name: "Bitcoin", symbol: "BTC", pair: "BTC/NGN", price: "50,234,500", change: "+5.67%", positive: true },
  { name: "Ethereum", symbol: "ETH", pair: "ETH/NGN", price: "3,456,780", change: "+3.45%", positive: true },
  { name: "Tether", symbol: "USDT", pair: "USDT/NGN", price: "1,520", change: "+0.12%", positive: true },
  { name: "Cardano", symbol: "ADA", pair: "ADA/NGN", price: "589", change: "-1.23%", positive: false },
  { name: "Ripple", symbol: "XRP", pair: "XRP/NGN", price: "823", change: "+2.34%", positive: true },
  { name: "Polkadot", symbol: "DOT", pair: "DOT/NGN", price: "7,890", change: "-0.56%", positive: false },
  { name: "Litecoin", symbol: "LTC", pair: "LTC/NGN", price: "98,765", change: "+4.12%", positive: true },
  { name: "Chainlink", symbol: "LINK", pair: "LINK/NGN", price: "12,345", change: "+1.89%", positive: true },
];

const MarketData = () => {
  const [activeTab, setActiveTab] = useState("spot");

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">What's the market saying?</h2>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="spot">Spot</TabsTrigger>
            <TabsTrigger value="newly-listed">Newly Listed</TabsTrigger>
            <TabsTrigger value="top-gainers">Top Gainers</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4 font-semibold text-sm">Name</th>
                    <th className="text-left py-4 px-4 font-semibold text-sm">Coin Pair</th>
                    <th className="text-right py-4 px-4 font-semibold text-sm">Last Price</th>
                    <th className="text-right py-4 px-4 font-semibold text-sm">24H Change</th>
                    <th className="text-right py-4 px-4 font-semibold text-sm">Trade</th>
                  </tr>
                </thead>
                <tbody>
                  {marketData.map((coin, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xs">
                            {coin.symbol.charAt(0)}
                          </div>
                          <span className="font-medium">{coin.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">{coin.pair}</td>
                      <td className="py-4 px-4 text-right font-semibold">₦{coin.price}</td>
                      <td className="py-4 px-4 text-right">
                        <span className={`flex items-center justify-end gap-1 ${coin.positive ? "text-green-600" : "text-red-600"}`}>
                          {coin.positive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                          {coin.change}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                          Buy
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-center">
              <Button variant="link" className="text-primary">
                See more markets →
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MarketData;
