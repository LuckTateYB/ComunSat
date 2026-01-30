import { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { Route } from '../types';

interface RouterContextType {
  currentRoute: Route;
  navigate: (route: Route) => void;
}

/* eslint-disable react-refresh/only-export-components */
export const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigateFunc = useNavigate();
  const [currentRoute, setCurrentRoute] = useState<Route>('inicio');

  useEffect(() => {
    const routeMap: Record<string, Route> = {
      '/': 'inicio',
      '/empresa': 'empresa',
      '/productos': 'productos',
      '/servicios': 'servicios',
      '/contacto': 'contacto',
    };
    setCurrentRoute(routeMap[location.pathname] || 'inicio');
  }, [location.pathname]);

  const navigate = (route: Route) => {
    const pathMap: Record<Route, string> = {
      'inicio': '/',
      'empresa': '/empresa',
      'productos': '/productos',
      'servicios': '/servicios',
      'contacto': '/contacto',
      'clientes': '/clientes', // assuming
    };
    navigateFunc(pathMap[route]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentRoute, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}
