import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Headphones
} from "lucide-react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import WaveSeparator from "../components/decorators/WaveSeparator";

const contactInfo = [
  { icon: Phone, label: "Teléfono", value: "+51 999 999 999" },
  { icon: Mail, label: "Email", value: "info@comunsat.pe" },
  { icon: MapPin, label: "Dirección", value: "Lima, Perú" },
  { icon: Clock, label: "Horario", value: "Lun - Sáb: 8am - 6pm" },
];

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log(formData);
  };

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
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium mb-6">
              Contáctanos
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Estamos para Ayudarte
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Comunícate con nosotros y recibe asesoría personalizada para tu proyecto.
            </p>
          </motion.div>
        </div>
        <WaveSeparator color="background" className="absolute bottom-0" />
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-6">
                Envíanos un Mensaje
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+51 999 999 999"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    rows={5}
                    required
                  />
                </div>

                <button className="w-full sm:w-auto">
                  <Send className="w-4 h-4" />
                  Enviar Mensaje
                </button>
              </form>
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
              <div className="bg-card rounded-3xl p-6 lg:p-8 shadow-card">
                <h3 className="text-xl font-display font-bold text-foreground mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-5">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-semibold text-foreground">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp Buttons */}
              <div className="bg-card rounded-3xl p-6 lg:p-8 shadow-card">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  WhatsApp Directo
                </h3>
                <p className="text-muted-foreground mb-6">
                  Comunícate directamente con nuestro equipo vía WhatsApp para una respuesta más rápida.
                </p>
                
                <div className="space-y-4">
                  <button className="w-full justify-center">
                    <a
                      href="https://wa.me/51999999999?text=Hola,%20me%20interesa%20información%20comercial"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp Comercial
                    </a>
                  </button>

                  <button className="w-full justify-center">
                    <a
                      href="https://wa.me/51888888888?text=Hola,%20necesito%20soporte%20técnico"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Headphones className="w-5 h-5" />
                      WhatsApp Post-venta / Rastreo
                    </a>
                  </button>
                  <button className="w-full justify-center">  
                    <a
                      href="https://wa.me/51888888888?text=Hola,%20necesito%20soporte%20técnico"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Headphones className="w-5 h-5" />
                      WhatsApp Post-venta / Rastreo
                    </a>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="relative">
        <WaveSeparator variant="top" color="muted" />
        <div className="bg-muted section-padding">
          <div className="container-wide mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-3xl shadow-elevated overflow-hidden"
            >
              <div className="aspect-video lg:aspect-21/9 bg-linear-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <p className="text-muted-foreground">Ubicación del Mapa</p>
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
