import React, { useState } from 'react';
import { Send, Shield } from 'lucide-react';
import { Button } from '@/presentation/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/presentation/components/ui/card';
import { Input } from '@/presentation/components/ui/input';
import { Label } from '@/presentation/components/ui/label';
import { Textarea } from '@/presentation/components/ui/textarea';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por contactarnos! Te responderemos en un plazo de 48 horas.');
    setFormData({
      nombre: '',
      apellido: '',
      email: '',
      asunto: '',
      mensaje: ''
    });
  };

  return (
    <Card className="shadow-lg">
      <CardHeader className="text-center">
        <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          <Send className="w-8 h-8 text-blue-600" />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-800">
          Envíanos un mensaje
        </CardTitle>
        <p className="text-gray-600 mt-2">
          Comparte información sobre nuestras actividades y/o necesidades. Te responderemos en un plazo no mayor de 48 horas.
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">
                Nombre <span className="text-red-500">*</span>
              </Label>
              <Input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Ingrese su nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="apellido">
                Apellido <span className="text-red-500">*</span>
              </Label>
              <Input
                id="apellido"
                name="apellido"
                type="text"
                placeholder="Ingrese su apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="correo@ejemplo.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="asunto">
              Asunto <span className="text-red-500">*</span>
            </Label>
            <Input
              id="asunto"
              name="asunto"
              type="text"
              placeholder="Asunto del mensaje"
              value={formData.asunto}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensaje">
              Mensaje <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="mensaje"
              name="mensaje"
              rows={6}
              placeholder="Ingrese su mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
              className="w-full resize-none"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
          >
            <Send className="w-5 h-5 mr-2" />
            Enviar mensaje
          </Button>

          <p className="text-sm text-gray-500 text-center flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" />
            Protegemos tu{' '}
            <a href="/privacy-policy" className="text-blue-600 hover:underline">
              Privacidad
            </a>
          </p>
        </form>
      </CardContent>
    </Card>
  );
};
