import { useRouter } from './context/useRouter';
import Header from './components/layout/Header';
import Index from "./pages/Index";
import Empresa from "./pages/Empresa";
import Productos from "./pages/Productos";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

function App() {
  const { currentRoute } = useRouter();

  const renderView = () => {
    switch (currentRoute) {
      case 'inicio':
        return <Index />;
      case 'empresa':
        return <Empresa />;
      case 'productos':
        return <Productos />;
      case 'servicios':
        return <Servicios />;
      case 'contacto':
        return <Contacto />;
      default:
        return <NotFound />;
    }
  };

return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{renderView()}</main>
    </div>
  );
}

export default App;