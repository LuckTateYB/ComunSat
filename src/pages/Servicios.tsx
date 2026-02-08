import { motion } from "framer-motion";
import { useRouter } from "../context/useRouter";
import { 
  MapPin, 
  Radio, 
  Truck, 
  Fuel, 
  Bell, 
  Headphones,
  BarChart3,
  Settings,
  ArrowRight
} from "lucide-react";
import Button from "../components/ui/button";
import FloatingShapes from "../components/decorators/FloatingShapes";
import WaveSeparator from "../components/decorators/WaveSeparator";

const services = [
  {
    icon: MapPin,
    title: "Rastreo en Tiempo Real",
    description: "Monitorea la ubicación exacta de tus vehículos las 24 horas del día, los 7 días de la semana.",
    features: [
      "Actualización cada 10 segundos",
      "Mapas satelitales HD",
      "Múltiples vehículos simultáneos"
    ]
  },
  {
    icon: Radio,
    title: "Telemetría Vehicular",
    description: "Obtén datos precisos sobre el rendimiento y estado de cada vehículo de tu flota.",
    features: [
      "Velocidad promedio y máxima",
      "Tiempo de motor encendido",
      "Odómetro virtual",
    ]
  },
  {
    icon: Truck,
    title: "Gestión de Flotas",
    description: "Administra eficientemente todos los vehículos de tu empresa desde una sola plataforma.",
    features: [
      "Dashboard centralizado",
      "Asignación de conductores",
      "Control de mantenimientos",
    ]
  },
  {
    icon: Fuel,
    title: "Control de Combustible",
    description: "Monitorea el consumo de combustible y detecta posibles fugas o robos.",
    features: [
      "Sensor de nivel de tanque",
      "Alertas de consumo anormal",
      "Reportes de gasto",
    ]
  },
  {
    icon: Bell,
    title: "Sistema de Alertas",
    description: "Recibe notificaciones instantáneas sobre eventos importantes de tu flota.",
    features: [
      "Exceso de velocidad",
      "Encendido fuera de horario",
      "Botón de pánico"
    ]
  },
  {
    icon: Headphones,
    title: "Soporte Técnico 24/7",
    description: "Equipo de profesionales disponibles para asistirte en cualquier momento.",
    features: [
      "Atención telefónica",
      "Soporte vía WhatsApp",
      "Capacitación incluida"
    ]
  },
  {
    icon: BarChart3,
    title: "Reportes y Análisis",
    description: "Genera reportes detallados para tomar mejores decisiones operativas.",
    features: [
      "Exportación Excel/PDF",
      "Gráficos interactivos",
      "Comparativas mensuales"
    ]
  },
  {
    icon: Settings,
    title: "Integración API",
    description: "Conecta nuestra plataforma con tus sistemas existentes de manera sencilla.",
    features: [
      "API REST documentada",
      "Webhooks en tiempo real",
      "Soporte técnico dedicado"
    ]
  }
];

const Servicios = () => {
  const { navigate } = useRouter();
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
              SERVICIOS PROFESIONALES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              NUESTROS <span className="text-[#F97A1F]">SERVICIOS</span> 
            </h1>
            <p className="text-lg sm:text-xl text-[#b6b0b0]/80 max-w-3xl mx-auto">
              Soluciones completas de rastreo GPS y telemetría para optimizar la gestión de tu flota.
            </p>
          </motion.div>
        </div>
        <WaveSeparator color="background" className="absolute bottom-0" />
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-[#F8F9FA] py-16 md:py-20">
        <div className="container-max px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex bg-[#ffffff] rounded-2xl border-2 border-[#c76219] p-6 shadow-[0_10px_20px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F97A1F]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-[#F97A1F]" />
                </div>
                
                <h3 className="text-lg font-display font-bold text-[#000000] mb-2">
                  {service.title}
                </h3>
                
                <p className="text-[#525252] text-sm mb-4 grow">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[#858585]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F97A1F] shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" size="sm" className="w-full mt-auto border-0" onClick={() => navigate('contacto')}>
                  Más Información
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="bg-[#0B2C6B] text-center">
          <div className="container-narrow mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-linear-to-br from-primary to-primary/80 rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden"
            >
              <FloatingShapes variant="hero" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#FFFFFF] mb-4">
                  ¿Necesitas un servicio personalizado?
                </h2>
                <p className="text-lg text-[#858585] mb-8 max-w-2xl mx-auto">
                  Contáctanos y diseñaremos una solución a la medida de las necesidades de tu empresa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={() => navigate('contacto')} 
                          className="inline-flex items-center justify-center gap-3
                            px-8 py-4 text-lg font-semibold
                            rounded-xl bg-[#F97A1F] text-white
                            hover:bg-[#ED8E20]/80
                            transition-all duration-200
                            shadow-lg hover:shadow-xl">
                    Solicitar Cotización
                  </Button>
                  <Button size="lg" variant="accent" asChild>
                    <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-4
                                px-8 py-4 text-lg font-semibold
                                rounded-xl border border-[#1C242F]
                                text-[#1C242F] bg-[#3bce1e]
                                hover:bg-[#5eaf4a]
                                transition-all duration-200"
                    >
                      WhatsApp Comercial
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
