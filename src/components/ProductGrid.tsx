import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Robe d'Été Florale",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      description: "Robe en coton fait main avec broderie florale délicate"
    },
    {
      id: 2,
      name: "Pull Tricoté Douillet",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      description: "Pull en laine douce parfait pour les soirées fraîches"
    },
    {
      id: 3,
      name: "Coussins Style Vintage",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop",
      description: "Magnifiques coussins décoratifs pour votre maison"
    },
    {
      id: 4,
      name: "Sac Cabas Brodé",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
      description: "Sac écologique avec fleurs brodées à la main"
    },
    {
      id: 5,
      name: "Ensemble Barboteuse Bébé",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      description: "Adorables barboteuses en coton bio pour les petits"
    },
    {
      id: 6,
      name: "Art Mural Matelassé",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      description: "Œuvre d'art matelassée unique pour illuminer tout espace"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-gradient">
            Notre Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Chaque pièce est confectionnée de manière unique avec attention aux détails et amour. Cela vous plaît ? Alors commandez nous une pièce sur mesure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl transition-all duration-300 border-pink-100 hover:border-pink-200 hover-scale bg-gradient-to-br from-rose-200 to-pink-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold mb-2 text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {product.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
