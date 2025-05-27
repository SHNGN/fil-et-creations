
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Star, Gift, Flower } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Fait avec Amour",
      description: "Chaque point est placé avec soin et attention aux détails"
    },
    {
      icon: Star,
      title: "Qualité Premium",
      description: "Nous utilisons uniquement les tissus et matériaux les plus fins"
    },
    {
      icon: Gift,
      title: "Commandes Sur Mesure",
      description: "Donnez vie à votre vision unique avec notre service personnalisé"
    },
    {
      icon: Flower,
      title: "Éco-Responsable",
      description: "Pratiques durables et matériaux respectueux de l'environnement"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-gradient">
              Notre Histoire
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Ce qui a commencé comme un passe-temps s'est épanoui en une passion pour créer de magnifiques 
              pièces artisanales qui apportent de la joie dans la vie des gens. Chaque article de notre collection 
              est soigneusement confectionné en utilisant des techniques de couture traditionnelles transmises à travers les générations.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nous croyons en la beauté des objets faits main et à la touche personnelle qui accompagne 
              chaque pièce. Qu'il s'agisse d'une robe sur mesure pour une occasion spéciale ou d'un 
              édredon douillet pour votre maison, nous mettons notre cœur dans chaque création.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-pink-100 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <feature.icon className="h-8 w-8 text-pink-500 mx-auto mb-3" />
                    <h3 className="font-serif font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in">
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-rose-200 to-pink-300 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Flower className="h-24 w-24 text-white/80 mx-auto mb-4 animate-float" />
                  <p className="text-2xl font-serif text-white/90">
                    Confectionné à la Main
                  </p>
                  <p className="text-lg text-white/80 mt-2">
                    Fait avec Passion
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-8 left-8 w-16 h-16 bg-white/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-8 right-8 w-20 h-20 bg-white/15 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-1/2 right-8 w-12 h-12 bg-white/25 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
