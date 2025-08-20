import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-plants.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-sage/10" />
      
      {/* Floating Elements */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 opacity-20">
        <Leaf className="h-8 w-8 sm:h-12 md:h-16 text-teal float-gentle" />
      </div>
      <div className="absolute top-20 sm:top-40 right-4 sm:right-20 opacity-15">
        <Leaf className="h-6 w-6 sm:h-8 md:h-12 text-primary float-delayed" />
      </div>
      <div className="hidden sm:block absolute bottom-20 left-1/4 opacity-10">
        <Leaf className="h-12 w-12 md:h-20 text-sage float-gentle" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Content */}
        <div className="space-y-6 lg:space-y-8 slide-up text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Cultivate Your{" "}
              <span className="bg-gradient-to-r from-primary to-teal bg-clip-text text-transparent">
                Green Paradise
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Discover premium plants and everything you need to create a thriving indoor garden. 
              Natural wellness starts here.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-teal hover:from-primary/90 hover:to-teal/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Shop Plants
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Learn More
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-teal pulse-soft" />
              <span>Organic Growth</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary pulse-soft" />
              <span>Expert Care</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-sage pulse-soft" />
              <span>Natural Wellness</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative fade-in-slow mt-8 lg:mt-0">
          <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-primary/20 rounded-2xl lg:rounded-3xl transform rotate-2 lg:rotate-3" />
          <img
            src={heroImage}
            alt="Premium plants collection"
            className="relative rounded-2xl lg:rounded-3xl shadow-2xl w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
          />
          <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white rounded-full p-2 sm:p-4 shadow-lg">
            <Leaf className="h-4 w-4 sm:h-6 lg:h-8 text-teal" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;