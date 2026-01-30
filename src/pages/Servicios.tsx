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
import WaveSeparator from "../components/decorators/WaveSeparator";

const services = [
  {
    icon: MapPin,
    title: "Rastreo en Tiempo Real",
    description: "Monitorea la ubicación exacta de tus vehículos las 24 horas del día, los 7 días de la semana.",
    features: [
      "Actualización cada 10 segundos",
      "Historial de rutas 90 días",
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
      "Diagnóstico de fallas"
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
      "Reportes automatizados"
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
      "Detección de sifones"
    ]
  },
  {
    icon: Bell,
    title: "Sistema de Alertas",
    description: "Recibe notificaciones instantáneas sobre eventos importantes de tu flota.",
    features: [
      "Exceso de velocidad",
      "Entrada/salida de geocercas",
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
      "Instalación profesional",
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
      "KPIs personalizables",
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
      "SDK disponible",
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
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium mb-6">
              Servicios Profesionales
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Soluciones completas de rastreo GPS y telemetría para optimizar la gestión de tu flota.
            </p>
          </motion.div>
        </div>
        <WaveSeparator color="background" className="absolute bottom-0" />
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 grow">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" size="sm" className="w-full mt-auto" onClick={() => navigate('contacto')}>
                  Más Información
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative">
        <WaveSeparator variant="top" color="muted" />
        <div className="bg-muted section-padding">
          <div className="container-narrow mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
                ¿Necesitas un servicio personalizado?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contáctanos y diseñaremos una solución a la medida de las necesidades de tu empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => navigate('contacto')}>
                  Solicitar Cotización
                </Button>
                <Button size="lg" variant="accent" asChild>
                  <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer">
                    WhatsApp Comercial
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
