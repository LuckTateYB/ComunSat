import { useRouter } from "../../context/useRouter";
import type { Route } from "../../types";
import { Navigation, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const { navigate } = useRouter();
  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => navigate('inicio')} className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Navigation className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-background">
                Comunsat Perú
              </span>
            </button>
            <p className="text-background/70 text-sm leading-relaxed">
              Soluciones de rastreo GPS y telemetría vehicular para empresas en todo el Perú.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Enlaces</h4>
            <ul className="space-y-2">
              {[
                { route: "empresa", label: "Empresa" },
                { route: "productos", label: "Productos" },
                { route: "servicios", label: "Servicios" },
                { route: "clientes", label: "Clientes" },
                { route: "contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.route}>
                  <button
                    onClick={() => navigate(link.route as Route)}
                    className="text-background/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Rastreo en tiempo real</li>
              <li>Telemetría vehicular</li>
              <li>Gestión de flotas</li>
              <li>Control de combustible</li>
              <li>Soporte técnico 24/7</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="w-4 h-4 text-accent" />
                +51 999 999 999
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="w-4 h-4 text-accent" />
                info@comunsat.pe
              </li>
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                Lima, Perú
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Comunsat Perú. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-background/50 hover:text-background transition-colors">
              Términos
            </a>
            <a href="#" className="text-sm text-background/50 hover:text-background transition-colors">
              Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
