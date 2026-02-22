import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Headphones
} from "lucide-react";

import WaveSeparator from "../components/decorators/WaveSeparator";

const contactInfo = [
  { icon: Phone, label: "WhatsApp", value: "+51 926 953 141", whatsapp: "51998624596" },
  { icon: Phone, label: "WhatsApp 2", value: "+51 998 624 596", whatsapp: "51998624596" },
  { icon: Mail, label: "Email", value: "info@comunsat.pe" },
  { icon: MapPin, label: "Dirección", value: "Av. Los Héroes 395-B SJM, Perú" },
  { icon: Clock, label: "Horario", value: "Lun - Vie: 10am - 6pm" },
];

const Contacto = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-[#0B2C6B] to-[#0B2C6B] py-20 lg:py-32">
        <div className="container-wide mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#F97A1F]/10 text-[#F97A1F]/90 text-sm font-medium mb-6">
              CONTÁCTANOS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              ESTAMOS <span className="text-[#F97A1F]">PARA AYUDARTE</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#b6b0b0]/80 max-w-3xl mx-auto">
              Comunícate con nosotros y recibe asesoría personalizada para tu proyecto.
            </p>
          </motion.div>
        </div>
        <WaveSeparator color="background" className="absolute bottom-0" />
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-[#F8F9FA] py-12 md:py-15">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20 px-4 sm:px-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-5 sm:mb-6">
                Envíanos un Mensaje
              </h2>

              {/* WhatsApp Buttons */}
              <div className="bg-linear-to-br from-[#0B2C6B] to-[#123A5F] rounded-3xl p-5 sm:p-6 lg:p-8 shadow-lg">
                <h3 className="text-xl font-display font-bold text-[#FFFFFF] mb-2">
                  Soporte Técnico 24/7
                </h3>
                <p className="text-[#b6b0b0]/80 mb-6">
                  Nuestro equipo está disponible todo el día para ayudarte con cualquier inconveniente.
                </p>
                
                <a
                  href="https://wa.me/51937656538?text=Hola,%20necesito%20soporte%20técnico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3
                            w-full px-4 sm:px-6 py-4 sm:py-5 text-base sm:text-lg font-semibold text-center
                            rounded-xl
                            text-white bg-[#F97A1F]
                            hover:bg-[#ED8E20] hover:shadow-lg hover:shadow-[#F97A1F]/30
                            hover:scale-105
                            transition-all duration-300"
                >
                  <Headphones className="w-5 h-5 shrink-0" />
                  WhatsApp Soporte (24/7)
                </a>
              </div>
            </motion.div>

            {/* Contact Info & WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Contact Info */}
              <div className="bg-card rounded-3xl p-5 sm:p-6 lg:p-8 shadow-[#ffff]">
                <h3 className="text-xl font-display font-bold text-[#1A2738] mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-5">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#123A5F]/10 flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-[#123A5F]" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm text-[#5C6B7A]">{info.label}</p>
                        {info.whatsapp ? (
                          <a
                            href={`https://wa.me/${info.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-[#1A2738] hover:text-[#F97A1F] transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-semibold text-[#1A2738] wrap-break-words">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;

