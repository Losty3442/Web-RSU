import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/card';

export const ContactSocial: React.FC = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://www.facebook.com/people/Direcci%C3%B3n-de-Responsabilidad-Social-Universitaria-UNP/100094165500120/',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: '#', // dejar sin link por ahora
      color: 'bg-pink-600 hover:bg-pink-700'
    },
    {
      name: 'TikTok',
      // usaremos un icono inline en lugar de import
      icon: undefined,
      href: 'https://www.tiktok.com/@drsu_unp',
      color: 'bg-black hover:opacity-90'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: 'https://www.youtube.com/@direccionrsu_unp/featured',
      color: 'bg-red-600 hover:bg-red-700'
    }
  ];

  return (
    <Card className="shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-xl font-bold text-gray-800">
          Síguenos en nuestras redes
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((social) => {
            const IconComponent = social.icon as any;
            return (
              <a
                key={social.name}
                href={social.href}
                target={social.href && social.href !== '#' ? '_blank' : undefined}
                rel={social.href && social.href !== '#' ? 'noopener noreferrer' : undefined}
                className={`${social.color} text-white p-4 rounded-lg flex items-center gap-3 transition-colors duration-200 hover:scale-105 transform`}
              >
                {social.name === 'TikTok' ? (
                  // icono simple de TikTok inline
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M9 3v10a4 4 0 1 0 4-4V5a6 6 0 1 1-4  -?" />
                  </svg>
                ) : (
                  IconComponent && <IconComponent className="w-6 h-6" />
                )}
                <span className="font-medium">{social.name}</span>
              </a>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
