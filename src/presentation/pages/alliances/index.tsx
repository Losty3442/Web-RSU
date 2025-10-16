import { Card, CardContent, CardHeader, CardTitle } from "@/presentation/components/ui/card";
import { Button } from "@/presentation/components/ui/button";
import { Badge } from "@/presentation/components/ui/badge";
import { 
  Handshake, 
  Building, 
  Users, 
  Globe,
  ExternalLink,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

interface Alliance {
  id: number;
  name: string;
  type: string;
  description: string;
  logo: string;
  website?: string;
  contact?: {
    address?: string;
    phone?: string;
    email?: string;
  };
  projects: string[];
  status: 'active' | 'pending' | 'completed';
}

const alliances: Alliance[] = [
  {
    id: 1,
    name: "Ministerio de Educación",
    type: "Institución Gubernamental",
    description: "Alianza estratégica para el desarrollo de políticas educativas y programas de responsabilidad social universitaria a nivel nacional.",
    logo: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=ministry%20education%20peru%20government%20logo%20official&image_size=square",
    website: "https://www.gob.pe/minedu",
    contact: {
      address: "Calle Del Comercio 193, San Borja, Lima",
      phone: "(01) 615-5800",
      email: "webmaster@minedu.gob.pe"
    },
    projects: ["Programa de Universidades Saludables", "Fortalecimiento de la RSU", "Capacitación Docente"],
    status: "active"
  },
  {
    id: 2,
    name: "Gobierno Regional de Piura",
    type: "Gobierno Regional",
    description: "Colaboración en proyectos de desarrollo regional y programas de impacto social en la región Piura.",
    logo: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=regional%20government%20piura%20peru%20coat%20arms&image_size=square",
    contact: {
      address: "Av. San Ramón s/n, Piura",
      phone: "(073) 284-600",
      email: "informes@regionpiura.gob.pe"
    },
    projects: ["Desarrollo Sostenible Regional", "Programas de Salud Comunitaria", "Educación Ambiental"],
    status: "active"
  },
  {
    id: 3,
    name: "Municipalidad Provincial de Piura",
    type: "Gobierno Local",
    description: "Trabajo conjunto en iniciativas de desarrollo urbano sostenible y programas sociales para la comunidad piurana.",
    logo: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=municipality%20piura%20city%20hall%20local%20government&image_size=square",
    contact: {
      address: "Jr. Ayacucho 377, Piura",
      phone: "(073) 320-021",
      email: "alcaldia@munipiura.gob.pe"
    },
    projects: ["Ciudad Saludable", "Gestión de Residuos", "Espacios Públicos Inclusivos"],
    status: "active"
  },
  {
    id: 4,
    name: "ESSALUD Piura",
    type: "Institución de Salud",
    description: "Alianza para el desarrollo de programas de salud preventiva y promoción del bienestar universitario.",
    logo: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=essalud%20peru%20health%20institution%20medical%20logo&image_size=square",
    website: "https://www.essalud.gob.pe",
    contact: {
      phone: "(073) 343-141",
      email: "piura@essalud.gob.pe"
    },
    projects: ["Universidad Saludable", "Campañas de Prevención", "Atención Médica Estudiantil"],
    status: "active"
  },
  {
    id: 5,
    name: "Cámara de Comercio de Piura",
    type: "Sector Privado",
    description: "Colaboración en programas de emprendimiento, prácticas profesionales y vinculación universidad-empresa.",
    logo: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=chamber%20commerce%20piura%20business%20organization&image_size=square",
    website: "https://www.camarapiura.org.pe",
    contact: {
      address: "Jr. Junín 840, Piura",
      phone: "(073) 336-174",
      email: "info@camarapiura.org.pe"
    },
    projects: ["Emprendimiento Universitario", "Prácticas Profesionales", "Responsabilidad Social Empresarial"],
    status: "active"
  },
  {
    id: 6,
    name: "ONG Paz y Esperanza",
    type: "Organización Civil",
    description: "Trabajo conjunto en programas de derechos humanos, justicia social y desarrollo comunitario.",
    logo: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=ngo%20peace%20hope%20social%20organization%20logo&image_size=square",
    website: "https://www.pazyesperanza.org",
    contact: {
      email: "info@pazyesperanza.org"
    },
    projects: ["Derechos Humanos", "Justicia Social", "Desarrollo Comunitario"],
    status: "active"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-green-100 text-green-800';
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'completed':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case 'active':
      return 'Activa';
    case 'pending':
      return 'En Proceso';
    case 'completed':
      return 'Completada';
    default:
      return 'Desconocido';
  }
};

export default function AlliancesPage() {
  const handleContactAlliance = (alliance: Alliance) => {
    console.log('Contactar alianza:', alliance.name);
  };

  const handleVisitWebsite = (website: string) => {
    window.open(website, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white bg-opacity-20 p-4 rounded-full">
              <Handshake className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Alianzas Estratégicas
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Fortaleciendo la responsabilidad social universitaria a través de colaboraciones estratégicas
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Construyendo Puentes para el Desarrollo
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nuestras alianzas estratégicas son fundamentales para amplificar el impacto de nuestros programas 
              de responsabilidad social universitaria. Trabajamos de la mano con instituciones gubernamentales, 
              organizaciones civiles, empresas privadas y organismos internacionales para crear un ecosistema 
              de colaboración que beneficie a toda la comunidad.
            </p>
          </div>
        </div>
      </section>

      {/* Alliances Grid */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alliances.map((alliance) => (
              <Card key={alliance.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <img
                      src={alliance.logo}
                      alt={`Logo ${alliance.name}`}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <Badge className={`${getStatusColor(alliance.status)} font-semibold`}>
                      {getStatusText(alliance.status)}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {alliance.name}
                  </CardTitle>
                  <Badge variant="outline" className="w-fit">
                    {alliance.type}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {alliance.description}
                  </p>
                  
                  {/* Contact Information */}
                  {alliance.contact && (
                    <div className="space-y-2">
                      {alliance.contact.address && (
                        <div className="flex items-start text-sm text-gray-500">
                          <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{alliance.contact.address}</span>
                        </div>
                      )}
                      {alliance.contact.phone && (
                        <div className="flex items-center text-sm text-gray-500">
                          <Phone className="w-4 h-4 mr-2" />
                          <span>{alliance.contact.phone}</span>
                        </div>
                      )}
                      {alliance.contact.email && (
                        <div className="flex items-center text-sm text-gray-500">
                          <Mail className="w-4 h-4 mr-2" />
                          <span>{alliance.contact.email}</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {/* Projects */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Proyectos Colaborativos:</h4>
                    <div className="flex flex-wrap gap-1">
                      {alliance.projects.slice(0, 3).map((project, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {project}
                        </Badge>
                      ))}
                      {alliance.projects.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{alliance.projects.length - 3} más
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex space-x-2 pt-4">
                    {alliance.website && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleVisitWebsite(alliance.website!)}
                        className="flex-1 hover:bg-blue-50 hover:border-blue-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Sitio Web
                      </Button>
                    )}
                    <Button
                      size="sm"
                      onClick={() => handleContactAlliance(alliance)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Contactar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Impacto de Nuestras Alianzas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Juntos hemos logrado crear un impacto significativo en la comunidad universitaria y la sociedad
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">{alliances.length}</h3>
              <p className="text-gray-600">Alianzas Activas</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">4</h3>
              <p className="text-gray-600">Sectores Involucrados</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">15,000+</h3>
              <p className="text-gray-600">Beneficiarios Directos</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">18</h3>
              <p className="text-gray-600">Proyectos Colaborativos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Interesado en Formar una Alianza?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Si tu organización comparte nuestros valores y objetivos de responsabilidad social, 
            nos encantaría explorar oportunidades de colaboración.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Mail className="w-5 h-5 mr-2" />
            Proponer Alianza
          </Button>
        </div>
      </section>
    </div>
  );
}
