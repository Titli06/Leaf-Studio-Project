import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, Menu, Leaf } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-gradient-to-br from-primary to-teal flex items-center justify-center">
            <Leaf className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight">GoGreen</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/shop" className="text-sm font-medium hover:text-primary transition-colors">
            Shop
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <a href="#care-guide" className="text-sm font-medium hover:text-primary transition-colors">
            Care Guide
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <Search className="h-4 w-4" />
          </Button>
          <Link to="/cart">
            <Button variant="ghost" size="sm">
              <ShoppingCart className="h-4 w-4" />
              <span className="ml-1 text-xs bg-primary text-primary-foreground rounded-full px-1">
                {state.itemCount}
              </span>
            </Button>
          </Link>
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

        {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 sm:px-6 py-4 space-y-2">
            <Link to="/shop" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Shop
            </Link>
            <Link to="/about" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <a href="#care-guide" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Care Guide
            </a>
            <a href="#contact" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;