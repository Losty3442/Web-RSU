import React from 'react';
import { Card, CardContent } from '@/presentation/components/ui/card';
import { Badge } from '@/presentation/components/ui/badge';
import { Button } from '@/presentation/components/ui/button';
import { Users, Mail, MapPin, Phone } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  image: string;
  isDirector?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dra. Sara Luz Chunga Palomino",
    position: "Directora",
    department: "Dirección de Responsabilidad Social Universitaria – UNP",
    email: "schungap@unp.edu.pe",
    image: "/images/sara.jpg",
    isDirector: true
  },
  {
    id: 2,
    name: "Lic. Lucia Vallejo Mezones",
    position: "Jefa Administrativa encargado",
    department: "Dirección de Responsabilidad Social Universitaria – UNP",
    email: "lvallejom@unp.edu.pe",
    image: "/images/lucia.jpg"
  },
  {
    id: 3,
    name: "Pedro Ygnacio Bermejo Tocto",
    position: "Especialista en RSU",
    department: "Dirección de Responsabilidad Social Universitaria – UNP",
    email: "pbermejot@unp.edu.pe",
    image: "/images/pedro.jpg"
  },
  {
    id: 4,
    name: "Fiorella Cruz López",
    position: "Servidora Administrativa RSU – encargada de Voluntariado",
    department: "Dirección de Responsabilidad Social Universitaria – UNP",
    email: "fcruzl@unp.edu.pe",
    image: "/images/fiorella.jpg"
  },
  {
    id: 5,
    name: "Santos Zapata Chávez",
    position: "Servidor Administrativo RSU",
    department: "Dirección de Responsabilidad Social Universitaria – UNP",
    email: "szapatac@unp.edu.pe",
    image: "/images/santos.jpg"
  },
  {
    id: 6,
    name: "Juana Esther Purizaca Pazos",
    position: "Secretaria RSU",
    department: "Dirección de Responsabilidad Social Universitaria – UNP",
    email: "adm.rsu03@unp.edu.pe",
    image: "/images/juana.jpg"
  }
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <Card className={`group hover:shadow-lg transition-all duration-300 ${member.isDirector ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-white' : 'hover:border-blue-200'}`}>
    <CardContent className="p-6">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className={`relative ${member.isDirector ? 'w-32 h-32' : 'w-24 h-24'} rounded-full overflow-hidden border-4 ${member.isDirector ? 'border-blue-300' : 'border-gray-200'} group-hover:border-blue-300 transition-colors`}>
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20portrait%20of%20university%20administrator%20in%20business%20attire&image_size=square`;
            }}
          />
        </div>
        
        <div className="space-y-2">
          <h3 className={`font-bold text-gray-900 ${member.isDirector ? 'text-xl' : 'text-lg'}`}>
            {member.name}
          </h3>
          
          <div className="space-y-1">
            <Badge variant={member.isDirector ? "default" : "secondary"} className="text-xs">
              {member.position}
            </Badge>
            <p className="text-sm text-gray-600 leading-relaxed">
              {member.department}
            </p>
          </div>
        </div>
        
        <Button
          variant="outline"
          size="sm"
          className="w-full group-hover:bg-blue-50 group-hover:border-blue-300 transition-colors"
          onClick={() => window.open(`mailto:${member.email}`, '_blank')}
        >
          <Mail className="w-4 h-4 mr-2" />
          Contactar
        </Button>
      </div>
    </CardContent>
  </Card>
);

const TeamPage: React.FC = () => {
  const director = teamMembers.find(member => member.isDirector);
  const staff = teamMembers.filter(member => !member.isDirector);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Users className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nuestro Equipo
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Conoce al equipo profesional de la Dirección de Responsabilidad Social Universitaria
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Director Section */}
        {director && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Dirección</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <TeamMemberCard member={director} />
              </div>
            </div>
          </div>
        )}

        {/* Staff Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Equipo de Trabajo</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Profesionales comprometidos con el desarrollo de la responsabilidad social universitaria
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Información de Contacto</h3>
                <p className="text-blue-100">
                  Dirección de Responsabilidad Social Universitaria - UNP
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Dirección</p>
                    <p className="text-blue-100 text-sm">Jr. Callao Nº247, Piura</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Teléfono</p>
                    <p className="text-blue-100 text-sm">(073) 300357 - 323455</p>
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Correo</p>
                    <p className="text-blue-100 text-sm">drsu2023unp@gmail.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
