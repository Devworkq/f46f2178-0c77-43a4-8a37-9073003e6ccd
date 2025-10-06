import { Card } from "@/components/ui/card";

const promoCards = [
  {
    title: "Welcome to the New Quidax",
    subtitle: "Get the new app today",
    color: "from-primary to-purple-700",
  },
  {
    title: "Quidax ❤️ Tether",
    subtitle: "Partnership announcement",
    color: "from-slate-800 to-slate-900",
  },
  {
    title: "Lower Rates, Better Trades",
    subtitle: "Save more on every trade",
    color: "from-purple-600 to-purple-800",
  },
  {
    title: "Buy or Sell over 20 Cryptos with USDT",
    subtitle: "Trade with stability",
    color: "from-indigo-700 to-purple-700",
  },
];

const PromoCards = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-4 min-w-max">
            {promoCards.map((card, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden rounded-2xl p-8 min-w-[300px] bg-gradient-to-br ${card.color} text-white border-0 shadow-elevated hover:scale-105 transition-transform cursor-pointer`}
              >
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-sm opacity-90">{card.subtitle}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoCards;
