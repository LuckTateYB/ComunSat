import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../ui/button";
import { Menu, X, ExternalLink, MapPin, Navigation } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "../../context/useRouter";
import comunsat_logo from "../../assets/comunsat_logo.webp"

const navItems = [
  { path: "/", label: "Inicio" },
  { path: "/empresa", label: "Empresa" },
  { path: "/productos", label: "Productos" },
  { path: "/servicios", label: "Servicios" },
  { path: "/contacto", label: "Contacto" },
];

const Header = () => {
  const location = useLocation();
  const rrNavigate = useNavigate();
  const { navigate } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathToRoute = (p: string) => {
    switch (p) {
      case '/':
        return 'inicio';
      case '/empresa':
        return 'empresa';
      case '/productos':
        return 'productos';
      case '/servicios':
        return 'servicios';
      case '/contacto':
        return 'contacto';
      default:
        return 'inicio';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav
            className={`glass rounded-3xl px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white ${
              scrolled ? "shadow-lg" : "shadow-md"
            }`}
          >
            {/* Logo (always left) */}
            <button onClick={() => navigate('inicio')} className="flex items-center gap-1">
              <img src={comunsat_logo} alt="ComunSat Logo" className="w-28 h-18" />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    const route = pathToRoute(item.path);
                    setIsMenuOpen(false);
                    navigate(route);
                    rrNavigate(item.path);
                  }}
                  className="relative px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-primary-foreground/10 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop External Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href="https://plataforma.example.com" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-4 h-4" />
                Plataforma GPS
                <ExternalLink className="w-3 h-3" />
              </a>
            </Button>
            <Button variant="accent" size="sm" asChild>
              <a href="https://rastreo.example.com" target="_blank" rel="noopener noreferrer">
                <Navigation className="w-4 h-4" />
                Rastreo GPS
                <ExternalLink className="w-3 h-3" />
              </a>
            </Button>
          </div>

            <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-secondary/95 backdrop-blur-md"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-6"
            >
              {/* Close button */}
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute top-6 right-6 p-2 text-secondary-foreground/80 hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
              </motion.button>

              {/* Mascot */}

              {/* Nav Items */}
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 30, opacity: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      const route = pathToRoute(item.path);
                      setIsMenuOpen(false);
                      navigate(route);
                      rrNavigate(item.path);
                    }}
                    className={`text-2xl font-semibold transition-colors ${
                      location.pathname === item.path ? "text-accent" : "text-secondary-foreground/80 hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
