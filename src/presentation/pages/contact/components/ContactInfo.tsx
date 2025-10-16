import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/card';

export const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <MapPin className="w-8 h-8 text-red-600" />
          </div>
          <CardTitle className="text-xl font-bold text-gray-800">
            Ubícanos en
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-800">Dirección:</p>
              <p className="text-gray-600">Jr. Callao N°247 - Piura</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-800">E-mail:</p>
              <a 
                href="mailto:drsu2023unp@gmail.com" 
                className="text-blue-600 hover:underline"
              >
                drsu2023unp@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-800">Teléfono:</p>
              <a 
                href="tel:+51073300357" 
                className="text-blue-600 hover:underline"
              >
                (073) 300357 - 323455
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Clock className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-xl font-bold text-gray-800">
            Horario de Atención
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-800">Lunes a Viernes:</span>
            <span className="text-gray-600">8:00 AM - 5:00 PM</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-800">Sábados:</span>
            <span className="text-gray-600">9:00 AM - 1:00 PM</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-800">Domingos:</span>
            <span className="text-gray-600">Cerrado</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
