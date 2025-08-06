import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";
import productImage from "@/assets/product-plants.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Indoor Garden Starter",
      price: 49.99,
      originalPrice: 65.99,
      rating: 4.8,
      reviews: 124,
      image: productImage,
      badge: "Best Seller",
      description: "Perfect for beginners"
    },
    {
      id: 2,
      name: "Premium Herb Collection",
      price: 89.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 89,
      image: productImage,
      badge: "Premium",
      description: "Aromatic wellness blend"
    },
    {
      id: 3,
      name: "Zen Garden Kit",
      price: 129.99,
      originalPrice: 149.99,
      rating: 4.7,
      reviews: 156,
      image: productImage,
      badge: "New",
      description: "Complete tranquility set"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured <span className="text-primary">Collections</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked selections for the modern plant enthusiast. Each collection is carefully curated for optimal growth and wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant="secondary" 
                      className="bg-white/90 text-primary border-0 shadow-sm"
                    >
                      {product.badge}
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white text-primary"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button 
                      size="sm"
                      className="bg-gradient-to-r from-primary to-teal hover:from-primary/90 hover:to-teal/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;