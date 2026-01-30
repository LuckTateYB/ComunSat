import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  TrendingUp 
} from "lucide-react";
import WaveSeparator from "../components/decorators/WaveSeparator";

const values = [
  { icon: Target, title: "Compromiso", description: " Acompañamos a nuestros clientes 24/7" },
  { icon: Award, title: "Seguridad", description: "Protegemos lo que mueve tu negocio" },
  { icon: Users, title: "Confiabilidad", description: "Información precisa y sistema estables" },
  { icon: TrendingUp, title: "Responsabilidad", description: "Actuamos con rapidez y profesionalismo" },
];

const Empresa = () => {
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
              NUESTRA HISTORIA
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#FFFFFF] mb-6">
              Conoce <span className="text-[#F97A1F]">Comunsat Perú</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#b6b0b0] max-w-3xl mx-auto">
              Líderes en soluciones de rastreo GPS y telemetría vehicular para empresas en todo el Perú.
            </p>
          </motion.div>
        </div>
        <WaveSeparator color="background" className="absolute bottom-0" />
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-[#F8F9FA]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1C242F] mb-6">
                ¿Quiénes Somos?
              </h2>
              <div className="space-y-4 text-[#616F83] leading-relaxed">
                <p>
                  Somos una empresa especializada en servicio de GPS y monitoreo vehicular satelital 24/7, dedicada a brindar seguridad, control y tranquilidad a personas y empresas.
                </p>
                <p>
                  Monitoreamos cada unidad en tiempo real, respondiendo de manera inmediata ante alertas y ofreciendo información clave para una gestión más eficiente de vehículos y flotas.
                </p>
                <p>
                  Nuestro compromiso es claro: proteger lo que más importa, optimizar operaciones y acompañar a nuestros clientes las 24 horas del día, los 7 días de la semana.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-3xl bg-linear-to-br from-[#0E3B9A]/20 to-[#F97316]/20 flex items-center justify-center">
                <Users className="w-24 h-24 text-[#0E3B9A]/40" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative bg-[#0B2C6B]">
        <div className="container-wide mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-14">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#FFFFFF] rounded-3xl p-10 lg:p-12 shadow-[0_20px_40px_-20px_rgba(15,23,41,0.15)]
                            hover:shadow-[0_30px_60px_-20px_rgba(15,23,41,0.2)]
                            transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#0E3B9A] to-[#1D4ED8] flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-[#F8FAFC]" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-display font-bold text-[#0F1729] mb-4">
                  Nuestra Misión
                </h3>
                <p className="text-[#64748B] leading-relaxed text-base lg:text-lg">
                  Brindar un servicio de excelencia y monitoreo las 24 horas del día garantizando seguridad, control y eficiencia, acompañando a nuestros clientes con tecnología confiable y atención constante
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-[#FFFFFF] rounded-3xl p-10 lg:p-12 shadow-[0_20px_40px_-20px_rgba(15,23,41,0.15)]
                            hover:shadow-[0_30px_60px_-20px_rgba(15,23,41,0.2)]
                            transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#0E3B9A] to-[#1D4ED8] flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-[#F8FAFC]" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-display font-bold text-[#0F1729] mb-4">
                  Nuestra Visión
                </h3>
                <p className="text-[#64748B] leading-relaxed text-base lg:text-lg">
                  Ser una empresa referente en soluciones de rastreo satelital y monitoreo vehicular, reconocida por su confiabilidad, innovación y compromiso con la seguridad de nuestros clientes.
                </p>
              </motion.div>
          </div>
        </div>
        <WaveSeparator color="background" className="absolute bottom-0" />
      </section>

      {/* Values Section */}
      <section className="bg-[#F8F9FA]">
        <div className="container-wide mx-auto px-4 sm:px-6 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block px-5 py-2 rounded-full bg-[#F97A1F]/10 text-[#F97A1F]/90 text-sm font-medium mb-5">
              NOS DEFINEN
            </span>
            <h2 className="text-4xl sm:text-4xl font-display font-bold text-[#000000]">
              NUESTROS VALORES
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#FFFFFF] rounded-3xl p-12 shadow-[0_16px_32px_-20px_rgba(15,23,41,0.15)]
                            hover:-translate-y-1
                            hover:shadow-[#616F83]
                            transition-all duration-300
                            text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#F97A1F]/30 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-[#F97A1F]" />
                </div>
                <h3 className="text-lg font-display font-bold text-[#0F1729] mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Empresa;
