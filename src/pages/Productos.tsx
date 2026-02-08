import { motion } from "framer-motion";
import { useRouter } from "../context/useRouter";
import { 
  ArrowRight
} from "lucide-react";
import baanool from "../assets/BAANOOL 403B.webp";
import voltak from "../assets/voltak gs900.webp";
import sitorack901 from "../assets/sinotrack st901 4G.webp";
import sinotrack905 from "../assets/sinotrack st905L.webp";
import FloatingShapes from "../components/decorators/FloatingShapes";
import WaveSeparator from "../components/decorators/WaveSeparator";

const products = [
  {
    id: "baanool-403b",
    name: "BAANOOL 403B",
    category: "GPS Tracker",
    features: [
      "Rastreo en tiempo real",
      "Corte de motor remoto",
      "Alarma de velocidad",
      "Geovallas ilimitadas",
      "Batería de respaldo",
      "Resistente al agua IP65"
    ],
    specs: {
      connectivity: "2G/4G",
      battery: "Batería de respaldo",
      accuracy: "5-10 metros"
    }
  },
  {
    id: "volttak-gs900",
    name: "Volttak GS900",
    category: "GPS Avanzado",
    features: [
      "4G conectividad",
      "Sensor de combustible",
      "Monitoreo de temperatura",
      "Alertas personalizables",
      "Historial 90 días",
      "API de integración"
    ],
    specs: {
      connectivity: "4G",
      battery: "Batería de respaldo",
      accuracy: "2.5 metros"
    }
  },
  {
    id: "sinotrack-st901l",
    name: "SinoTrack ST901L",
    category: "GPS Compacto",
    features: [
      "Diseño ultra compacto",
      "Instalación oculta",
      "Bajo consumo energía",
      "Alertas de movimiento",
      "Compatible con motos",
      "Precio accesible"
    ],
    specs: {
      connectivity: "2G/4G",
      battery: "Batería de respaldo",
      accuracy: "5 metros"
    }
  },
  {
    id: "sinotrack-st905l",
    name: "SinoTrack ST905L",
    category: "GPS Premium",
    features: [
      "Pantalla LED integrada",
      "Micrófono oculto",
      "Botón de pánico",
      "Sensor de impacto",
      "Modo ahorro energía",
      "Cobertura nacional"
    ],
    specs: {
      connectivity: "4G",
      battery: "Batería de larga duración",
      accuracy: "3 metros"
    }
  }
];

const productImages: Record<string, string> = {
  'baanool-403b': baanool,
  'volttak-gs900': voltak,
  'sinotrack-st901l': sitorack901,
  'sinotrack-st905l': sinotrack905,
};

const Productos = () => {
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
              PRODUCTOS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white font-bold mb-6">
              Dispositivos <span className="text-[#F97A1F]">GPS</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#b6b0b0]/80 max-w-3xl mx-auto">
              Equipos de rastreo GPS de alta calidad para todo tipo de vehículos y necesidades.
            </p>
          </motion.div>
        </div>
        <WaveSeparator color="background" className="absolute bottom-0" />
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#F97A1F]/10 text-[#F97A1F]/90 text-sm font-medium mb-5">
              CATÁLOGO
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#000000]">
              Nuestros Equipos GPS
            </h2>
            <p className="text-[#616F83] max-w-2xl mx-auto mt-4">
              Equipos de rastreo GPS de alta calidad para todo tipo de vehículos y necesidades.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 ">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-[#ffffff] rounded-3xl shadow-[0_20px_40px_-20px_rgba(15,23,41,0.15)] hover:shadow-[0_30px_60px_-20px_rgba(15,23,41,0.2)] transition-all duration-300 overflow-hidden"
              >
                {/* Product Image (full cover) */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={productImages[product.id]}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 lg:p-8">
                  <h3 className="text-2xl font-display font-bold text-[#1C242F] mb-4">
                    {product.name}
                  </h3>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B68DA]/10 text-[#0B68DA] text-sm">
                      {product.specs.connectivity}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F97A1F]/10 text-[#F97A1F] text-sm">
                      {product.specs.battery}
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#000000]/10 text-[#353030] text-sm">
                      {product.specs.accuracy}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="grid grid-cols-1 gap-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-[#616F83]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F97A1F]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => navigate('contacto')}
                    className="inline-flex items-center justify-center gap-3
                            px-8 py-4 text-sm font-semibold
                            rounded-xl border border-[#0E3B9A]
                            text-[#0E3B9A]
                            hover:bg-[#0E3B9A] hover:text-white
                            transition-all duration-200"
                >
                  Solicitar Información
                  <ArrowRight className="w-5 h-5" />
                </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#0B2C6B]">
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#FFFFFF] mb-4">
                ¿No encuentras lo que buscas?
              </h2>
              <p className="text-lg text-[#F8FAFC]/70 mb-8 max-w-2xl mx-auto">
                Contáctanos y te asesoraremos para encontrar el dispositivo GPS perfecto para tus necesidades.
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
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Productos;
