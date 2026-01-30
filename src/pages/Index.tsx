import { motion } from "framer-motion";
import { useRouter } from "../context/useRouter";
import { 
  MapPin, 
  Shield, 
  Zap, 
  BarChart3, 
  Clock, 
  Smartphone,
  ExternalLink,
  Navigation,
  Radio,
  Truck,
  Settings
} from "lucide-react";
import FloatingShapes from "../components/decorators/FloatingShapes";
import banner_comunsat from "../assets/banner_comunsat.webp"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const benefits = [
  { icon: MapPin, title: "Rastreo en Tiempo Real", description: "Monitorea tus vehículos 24/7 desde cualquier dispositivo" },
  { icon: Shield, title: "Seguridad Avanzada", description: "Protección anti-robo y alertas inmediatas" },
  { icon: Zap, title: "Respuesta Rápida", description: "Notificaciones instantáneas ante cualquier evento" },
  { icon: BarChart3, title: "Reportes Detallados", description: "Análisis completo de rutas y consumo" },
  { icon: Clock, title: "Historial Completo", description: "Accede al historial de rutas por 90 días" },
  { icon: Smartphone, title: "App Móvil", description: "Controla tu flota desde tu celular" },
];

const features = [
  { icon: Radio, title: "Telemetría Vehicular", description: "Datos en tiempo real del rendimiento" },
  { icon: Truck, title: "Gestión de Flotas", description: "Optimiza rutas y reduce costos" },
  { icon: Settings, title: "Integración API", description: "Conecta con tus sistemas existentes" },
];

const Index = () => {
  const { navigate } = useRouter();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
        <section className="relative h-[70vh] sm:h-[80vh] lg:h-[90vh] flex items-center overflow-hidden">
        
        {/* Background Image */}
          <div
            className="
              absolute inset-0
              bg-cover
              bg-position-[right_center]
              lg:bg-center
            "
            style={{ backgroundImage: `url(${banner_comunsat})` }}
            aria-hidden="true"
          />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black to-black/50" />
        {/* Decorative shapes */}
        <FloatingShapes variant="hero" />

        {/* Content */}
        <div className="container-wide mx-auto px-4 sm:px-6 py-20 lg:py-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left text-white"
            >
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-10">
                  {/* Primary CTA */}
                  <button
                    onClick={() => navigate('contacto')}
                    className="inline-flex items-center justify-center gap-3
                              px-8 py-4 text-lg font-semibold
                              rounded-xl border-2 border-white
                              text-white
                              hover:bg-white/10
                              transition-all duration-200"
                  >
                    Solicitar Cotización
                  </button>

                  {/* Secondary CTA – Desktop only */}
                  <button
                    onClick={() => navigate('productos')}
                    className="hidden lg:inline-flex items-center justify-center gap-3
                              px-8 py-4 text-lg font-semibold
                              rounded-x text-primary rounded-xl
                              hover:bg-white/10
                              transition-all duration-200"
                  >
                    Ver Productos
                  </button>
                </div>

                {/* External buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="https://plataforma.example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3
                              px-7 py-3.5 text-base font-semibold
                              rounded-xl text-white border border-white
                              hover:bg-white/10
                              transition-all duration-200 shadow-lg"
                  >
                    <MapPin className="w-5 h-5" />
                    Plataforma GPS
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  {/* Desktop only */}
                  <a
                    href="https://rastreo.example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:inline-flex items-center justify-center gap-3
                              px-7 py-3.5 text-base font-semibold
                              rounded-xl text-primary
                              hover:bg-white/30
                              transition-all duration-200"
                  >
                    <Navigation className="w-5 h-5" />
                    Rastreo GPS
                    <ExternalLink className="w-4 h-4" />
                  </a>

                </div>
            </motion.div>

            {/* Visual Element */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
            >
                <div className="relative w-full aspect-square max-w-lg mx-auto">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-2 border-dashed border-white/30"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 rounded-full border-2 border-dashed border-white/20"
                />

                <div className="absolute inset-16 rounded-full bg-[#ED8E20]/10 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center">
                    <Navigation className="w-20 h-20 text-white mx-auto mb-4" />
                    <p className="font-display font-bold text-3xl">GPS</p>
                    <p className="text-white/70 font-bold text-sm">Tracking</p>
                    </div>
                </div>
                </div>
            </motion.div>

            </div>
        </div>
        </section>


      {/* Benefits Section */}
      <section className="section-padding bg-[#F0F2F4] relative">
        <div className="container-wide mx-auto max-w-7xl px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#ED8E20]/10 text-[#F97316] text-sm font-medium mb-4">
              BENEFICIOS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#000000] mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-lg text-[#3b3a3a] max-w-2xl mx-auto">
              Tecnología de punta para la gestión eficiente de tu flota vehicular
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                className="group bg-[#FFFFFF] rounded-2xl p-6 lg:p-8 shadow-[#FFFFFF] hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-linear-to-br from-[#ED8E20] to-[#ED8E20] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-[#ffffff]" />
                </div>
                <h3 className="text-xl font-display font-bold text-[#1C242F] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-[#1C242F]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative">
        <div className="bg-[#0B2C6B] section-padding mx-auto px-6 py-16">
          <div className="container-wide mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 rounded-full bg-[#F97A1F]/10 text-[#F97A1F] text-sm font-medium mb-4">
                  PLATAFORMA
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#FFFFFF] mb-6">
                  Tecnología Avanzada PARA TU FLOTA VEHICULAR
                </h2>
                <p className="text-lg text-[#616F83] mb-8">
                  Nuestra plataforma integra todas las herramientas necesarias para el control total de tu flota.
                </p>

                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#F97A1F]/10 flex items-center justify-center shrink-0">
                        <feature.icon className="w-6 h-6 text-[#F97A1F]" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-[#ffffff] mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-[#616F83]">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <button onClick={() => navigate('servicios')} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#F97A1F] text-[#FFFFFF] hover:bg-[#F97A1F]/40 transition-colors">
                    Conoce Nuestros Servicios
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="bg-card rounded-3xl shadow-elevated p-8 lg:p-12">
                  <div className="aspect-video rounded-2xl bg-linear-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                        <BarChart3 className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <p className="text-muted-foreground">Segunda foto referente a la empresa</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-primary to-primary/80 rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden"
          >
            <FloatingShapes variant="section" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4">
                ¿Listo para Empezar?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Contáctanos hoy y descubre cómo podemos ayudarte a optimizar tu flota vehicular.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                {/* Primary CTA */}
                <button
                  onClick={() => navigate('contacto')}
                  className="inline-flex items-center justify-center gap-3
                            px-8 py-4 text-lg font-semibold
                            rounded-xl bg-[#F97A1F] text-white
                            hover:bg-[#ED8E20]
                            transition-all duration-200
                            shadow-lg hover:shadow-xl"
                >
                  Contactar Ahora
                </button>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/51999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3
                            px-8 py-4 text-lg font-semibold
                            rounded-xl border border-[#1C242F]
                            text-[#1C242F]
                            hover:bg-[#3f7e30]
                            transition-all duration-200"
                >
                  WhatsApp
                  <ExternalLink className="w-5 h-5" />
                </a>

              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
