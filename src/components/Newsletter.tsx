import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf, Mail } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-teal/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <Leaf className="h-24 w-24 text-primary float-gentle" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <Leaf className="h-32 w-32 text-teal float-delayed" />
      </div>
      <div className="absolute top-1/2 left-1/4 opacity-5">
        <Leaf className="h-40 w-40 text-sage float-gentle" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-teal rounded-full flex items-center justify-center mb-6">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Stay <span className="text-primary">Connected</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Get exclusive access to new arrivals, care tips, and special offers. 
              Join our community of plant enthusiasts.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-primary/20 focus:border-primary"
              required
            />
            <Button 
              type="submit"
              className="bg-gradient-to-r from-primary to-teal hover:from-primary/90 hover:to-teal/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Subscribe
            </Button>
          </form>

          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-teal pulse-soft" />
              <span>Weekly Tips</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary pulse-soft" />
              <span>Exclusive Offers</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-sage pulse-soft" />
              <span>New Arrivals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;