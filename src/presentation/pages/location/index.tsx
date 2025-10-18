import React from 'react';
import { Card } from '@/presentation/components/ui/card';
import { Badge } from '@/presentation/components/ui/badge';
import { MapPin, Building, Phone, Mail } from 'lucide-react';

const LocationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <MapPin className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ubicación</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Conoce la ubicación organizacional de la Dirección de Responsabilidad Social Universitaria
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Organizational Chart */}
        <Card className="p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Organigrama Institucional</h2>
            <p className="text-gray-600">
              Estructura organizacional de la Universidad Nacional de Piura
            </p>
          </div>

          <div className="org-chart-container">
            {/* University Logo */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-blue-200">
                <img 
                  src="/images/unplogo.png" 
                  alt="Logo UNP" 
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
            </div>

            {/* Level 1 - Asamblea Universitaria */}
            <div className="flex flex-col items-center mb-6">
              <div className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold">
                Asamblea Universitaria
              </div>
              <div className="w-px h-8 bg-gray-300 my-2"></div>
            </div>

            {/* Level 2 - Consejo Universitario */}
            <div className="flex flex-col items-center mb-6">
              <div className="flex items-center gap-8">
                <div className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md font-semibold">
                  Consejo Universitario
                </div>
                <Card className="p-4 bg-gradient-to-r from-blue-100 to-green-100">
                  <h3 className="font-bold text-sm mb-2">Niveles Organizacionales</h3>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="default" className="w-6 h-6 rounded-full p-0 flex items-center justify-center text-xs">1</Badge>
                    <span className="text-xs">Primer Nivel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="w-6 h-6 rounded-full p-0 flex items-center justify-center text-xs">2</Badge>
                    <span className="text-xs">Segundo Nivel</span>
                  </div>
                </Card>
              </div>
              <div className="w-px h-8 bg-gray-300 my-2"></div>
            </div>

            {/* Level 3 - Rector */}
            <div className="flex flex-col items-center mb-6">
              <div className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold">
                Rector
              </div>
              <div className="w-px h-8 bg-gray-300 my-2"></div>
            </div>

            {/* Level 4 - Vicerrectorados */}
            <div className="flex flex-col items-center mb-6">
              <div className="flex gap-8 flex-wrap justify-center">
                <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md font-semibold">
                  Vicerrectorado Académico
                </div>
                <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md font-semibold">
                  Vicerrectorado de Investigación
                </div>
              </div>
              <div className="w-px h-8 bg-gray-300 my-2"></div>
            </div>

            {/* Level 5 - Direcciones */}
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl">
                <div className="bg-lime-400 text-gray-800 px-4 py-3 rounded-lg shadow-md font-semibold text-center">
                  Dirección de Servicios Académicos
                </div>
                <div className="bg-lime-500 text-white px-4 py-3 rounded-lg shadow-md font-semibold text-center">
                  Dirección de Admisión
                </div>
                <div className="bg-lime-400 text-gray-800 px-4 py-3 rounded-lg shadow-md font-semibold text-center">
                  Dirección de Bienestar Universitario
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-3 rounded-lg shadow-lg font-semibold text-center border-4 border-yellow-400">
                    Dirección de Responsabilidad Social Universitaria
                  </div>
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-blue-200">
                    <img 
                      src="/images/logo.png" 
                      alt="Logo DRSU" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact Information */}
        <Card className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Información de Contacto</h2>
            <p className="text-gray-600">
              Dirección de Responsabilidad Social Universitaria - UNP
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Dirección</h3>
              <p className="text-gray-600">Jr. Callao Nº247, Piura</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Teléfono</h3>
              <p className="text-gray-600">(073) 300357 - 323455</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Correo Electrónico</h3>
              <p className="text-gray-600">drsu2023unp@gmail.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Ubicación</h3>
              <p className="text-gray-600">Universidad Nacional de Piura</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LocationPage;
