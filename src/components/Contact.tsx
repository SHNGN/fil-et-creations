import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4 text-gradient">
            Commandes Sur Mesure
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Vous avez quelque chose de spécial en tête ? Nous serions ravies de donner vie à votre vision ! 
            Partagez vos idées et nous créerons une pièce personnalisée rien que pour vous.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-pink-100 shadow-lg bg-gradient-to-br from-rose-200 to-pink-300">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-center text-pink-600">
                Parlez-nous de votre projet
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Prénom
                  </label>
                  <Input placeholder="Votre prénom" className="border-white/30 bg-white/80 text-black placeholder:text-gray-500 focus:border-white" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Nom
                  </label>
                  <Input placeholder="Votre nom" className="border-white/30 bg-white/80 text-black placeholder:text-gray-500 focus:border-white" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  Adresse Email
                </label>
                <Input type="email" placeholder="votre@email.com" className="border-white/30 bg-white/80 text-black placeholder:text-gray-500 focus:border-white" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  Type de Projet
                </label>
                <Input placeholder="ex: Robe sur mesure, Décoration maison, Vêtements bébé" className="border-white/30 bg-white/80 text-black placeholder:text-gray-500 focus:border-white" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
                  Détails du Projet
                </label>
                <Textarea 
                  placeholder="Parlez-nous de votre vision, couleurs préférées, taille, délais, et toute exigence particulière..."
                  className="border-white/30 bg-white/80 text-black placeholder:text-gray-500 focus:border-white min-h-[120px]"
                />
              </div>
              
              <Button 
                className="w-full bg-white text-pink-600 hover:bg-white/90 py-3 rounded-full text-lg font-medium hover-scale"
              >
                <Heart className="h-5 w-5 mr-2" />
                Envoyer ma Demande
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-pink-100 shadow-lg bg-gradient-to-br from-rose-200 to-pink-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold mb-6 text-pink-600">
                  Contactez-nous
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/80 rounded-full">
                      <Mail className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600">Filetcreations91@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-white/80 rounded-full">
                      <Phone className="h-6 w-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Téléphone</h3>
                      <p className="text-gray-600">06 61 04 05 38</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-pink-100 shadow-lg bg-gradient-to-br from-pink-50 to-rose-50">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-serif font-semibold mb-3 text-gray-800">
                  Processus de Commande Sur Mesure
                </h3>
                <div className="text-left space-y-3 text-gray-700">
                  <p className="flex items-start">
                    <span className="font-bold text-pink-600 mr-2">1.</span>
                    Partagez votre vision avec nous
                  </p>
                  <p className="flex items-start">
                    <span className="font-bold text-pink-600 mr-2">2.</span>
                    Nous discutons des détails et fournissons un devis
                  </p>
                  <p className="flex items-start">
                    <span className="font-bold text-pink-600 mr-2">3.</span>
                    La création commence avec des mises à jour régulières
                  </p>
                  <p className="flex items-start">
                    <span className="font-bold text-pink-600 mr-2">4.</span>
                    Votre magnifique pièce sur mesure est livrée
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
