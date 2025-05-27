import { Heart, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-50 to-purple-50 py-12 border-t border-pink-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-pink-500 fill-current" />
              <h3 className="text-xl font-serif font-bold text-gradient">
                Fil&Créations
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Créer de magnifiques pièces artisanales qui apportent de la joie à votre vie, 
              un point à la fois.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-pink-100 rounded-full hover:bg-pink-200 transition-colors">
                <Facebook className="h-4 w-4 text-pink-600" />
              </a>
              <a href="#" className="p-2 bg-pink-100 rounded-full hover:bg-pink-200 transition-colors">
                <Instagram className="h-4 w-4 text-pink-600" />
              </a>
              <a href="#" className="p-2 bg-pink-100 rounded-full hover:bg-pink-200 transition-colors">
                <Twitter className="h-4 w-4 text-pink-600" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-gray-800 mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-600 hover:text-pink-500 transition-colors">Accueil</a></li>
              <li><a href="#products" className="text-gray-600 hover:text-pink-500 transition-colors">Produits</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-pink-500 transition-colors">À Propos</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-pink-500 transition-colors">Commandes Sur Mesure</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-serif font-semibold text-gray-800 mb-4">Catégories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Vêtements</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Décoration Maison</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Accessoires</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">Articles Bébé</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-gray-800 mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-600">
              <li>bonjour@fil-et-creations.com</li>
              <li>+33 1 23 45 67 89</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pink-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            © 2024 Fil&Créations. Fait avec <Heart className="h-4 w-4 text-pink-500 fill-current inline mx-1" /> et beaucoup de fil.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
