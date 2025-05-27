import { Button } from '@/components/ui/button';
import { Heart, Flower } from 'lucide-react';

const Hero = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Flower className="h-8 w-8 text-pink-400 mr-2 animate-float" />
              <span className="text-pink-500 font-medium">Fait Main avec Amour</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              <span className="text-gradient">Magnifiques</span>
              <span className="text-gradient block">Créations</span>
              <span className="text-gradient block">Artisanales</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Chaque pièce est confectionnée avec amour à la main en utilisant des techniques de couture traditionnelles. 
              Des vêtements sur mesure aux accessoires uniques, nous donnons vie à vos rêves avec du fil et de la passion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-4 rounded-full text-lg font-medium hover-scale"
                onClick={(e) => handleClick(e, 'products')}
              >
                Voir la Collection
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-gradient-to-br from-rose-200 to-pink-300 hover:from-rose-300 hover:to-pink-400 text-pink-600 hover:text-pink-600 border-pink-200 px-8 py-4 rounded-full text-lg font-medium hover-scale"
                onClick={(e) => handleClick(e, 'contact')}
              >
                Commandes Sur Mesure
              </Button>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative animate-fade-in">
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-pink-200 to-purple-200 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="h-20 w-20 text-pink-400 fill-current mx-auto mb-4 animate-float" />
                  <p className="text-2xl font-serif text-pink-600">
                    Fait avec Amour
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-10 right-10 w-20 h-20 bg-white/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/2 left-10 w-12 h-12 bg-white/25 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
