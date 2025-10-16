import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/card';

export const ContactSocial: React.FC = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: '#',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: '#',
      color: 'bg-pink-600 hover:bg-pink-700'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: '#',
      color: 'bg-sky-500 hover:bg-sky-600'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: '#',
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
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                className={`${social.color} text-white p-4 rounded-lg flex items-center gap-3 transition-colors duration-200 hover:scale-105 transform`}
              >
                <IconComponent className="w-6 h-6" />
                <span className="font-medium">{social.name}</span>
              </a>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
