import React from 'react';
import { Card, CardContent } from '@/presentation/components/ui/card';

export const ContactMap: React.FC = () => {
  return (
    <Card className="shadow-lg">
      <CardContent className="p-0">
        <div className="w-full h-80 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15878.681604135546!2d-80.64757315!3d-5.19793105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902f928e0b0e5b7b%3A0x6b77202b2b115b80!2sJr.%20Callao%20247%2C%20Piura%2020001%2C%20Per%C3%BA!5e0!3m2!1ses!2s!4v1700000000000!5m2!1ses!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación DRSU - Jr. Callao 247, Piura"
          />
        </div>
      </CardContent>
    </Card>
  );
};
