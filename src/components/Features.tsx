import { Card, CardContent } from "@/components/ui/card";
import { Truck, Shield, Leaf, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Complimentary delivery on orders over $50. Your plants arrive safely with our eco-friendly packaging."
    },
    {
      icon: Shield,
      title: "Growth Guarantee",
      description: "30-day happiness promise. If your plants don't thrive, we'll replace them or refund your purchase."
    },
    {
      icon: Leaf,
      title: "Organic Quality",
      description: "Sustainably sourced and organically grown. Pure, natural wellness for your home and mind."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Connect with our plant specialists. Get personalized care advice and cultivation tips."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-sage/5 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why Choose <span className="text-primary">123ID0892</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing exceptional quality and service for your botanical journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="text-center border-0 bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 group slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-teal rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;