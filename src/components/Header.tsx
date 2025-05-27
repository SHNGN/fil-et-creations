import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-pink-500 fill-current" />
            <h1 className="text-2xl font-serif font-bold text-gradient">
              Fil&Créations
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" onClick={(e) => handleClick(e, 'home')} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Accueil
            </a>
            <a href="#products" onClick={(e) => handleClick(e, 'products')} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Produits
            </a>
            <a href="#about" onClick={(e) => handleClick(e, 'about')} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              À Propos
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleClick(e, 'contact')} 
              className="bg-gradient-to-br from-rose-200 to-pink-300 hover:from-rose-300 hover:to-pink-400 text-pink-600 px-6 py-2 rounded-full font-medium transition-all duration-300"
            >
              Commandes Sur Mesure
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700 hover:text-pink-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-pink-100">
            <div className="flex flex-col space-y-4">
              <a href="#home" onClick={(e) => handleClick(e, 'home')} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                Accueil
              </a>
              <a href="#products" onClick={(e) => handleClick(e, 'products')} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                Produits
              </a>
              <a href="#about" onClick={(e) => handleClick(e, 'about')} className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
                À Propos
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleClick(e, 'contact')} 
                className="bg-gradient-to-br from-rose-200 to-pink-300 hover:from-rose-300 hover:to-pink-400 text-pink-600 px-6 py-2 rounded-full font-medium transition-all duration-300 text-center"
              >
                Commandes Sur Mesure
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
