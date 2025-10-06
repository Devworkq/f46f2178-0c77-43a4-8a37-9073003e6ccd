import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Akinleye Oluwamuyiwa Favour",
    text: "I've been using quidax trading platform for about two years now and their reliability is actually top notch.",
    avatar: "A",
  },
  {
    name: "Odu James",
    text: "My life has been transformed financially via my association with Quidax Platform. Get on Board!!!",
    avatar: "O",
  },
  {
    name: "Chibueze Amuchie",
    text: "I can say that Quidax is the best Africa owned exchange and its completeness in trading experience is second to none.",
    avatar: "C",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Here's what our customers think</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border shadow-card hover:shadow-elevated transition-all duration-300">
              <CardContent className="pt-6">
                <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
