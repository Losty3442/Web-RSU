import React from 'react';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContactInfo';
import { ContactMap } from './components/ContactMap';
import { ContactSocial } from './components/ContactSocial';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            Contáctanos
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            
            <div className="space-y-8">
              <ContactInfo />
              <ContactMap />
              <ContactSocial />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
