import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-gradient-to-br from-primary to-teal flex items-center justify-center">
            <span className="text-xs font-bold text-white">123</span>
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight">123ID0892</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Plants
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Accessories
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Care Guide
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <ShoppingCart className="h-4 w-4" />
            <span className="ml-1 text-xs bg-primary text-primary-foreground rounded-full px-1">
              0
            </span>
          </Button>
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
            <a href="#" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Plants
            </a>
            <a href="#" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Accessories
            </a>
            <a href="#" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Care Guide
            </a>
            <a href="#" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;