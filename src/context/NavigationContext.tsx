import React, { createContext, useContext, useEffect, useState } from 'react';

export type RoutePage = 'home' | 'work' | 'project-detail' | 'services' | 'pricing' | 'about' | 'contact' | 'privacy';

interface NavigationContextType {
  currentPage: RoutePage;
  currentSlug?: string;
  selectedService?: string;
  navigate: (page: RoutePage, options?: { slug?: string; service?: string; scrollTo?: string }) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState<RoutePage>('home');
  const [currentSlug, setCurrentSlug] = useState<string | undefined>(undefined);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  // Parse path & search params from current window location
  const parseLocation = () => {
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get('service') || undefined;

    if (path === '/' || path === '') {
      setCurrentPage('home');
      setCurrentSlug(undefined);
    } else if (path === '/work' || path === '/portfolio') {
      setCurrentPage('work');
      setCurrentSlug(undefined);
    } else if (path.startsWith('/work/')) {
      const slug = path.replace('/work/', '');
      setCurrentPage('project-detail');
      setCurrentSlug(slug);
    } else if (path === '/services') {
      setCurrentPage('services');
      setCurrentSlug(undefined);
    } else if (path === '/pricing') {
      setCurrentPage('pricing');
      setCurrentSlug(undefined);
    } else if (path === '/about') {
      setCurrentPage('about');
      setCurrentSlug(undefined);
    } else if (path === '/contact') {
      setCurrentPage('contact');
      setCurrentSlug(undefined);
      if (serviceParam) setSelectedService(serviceParam);
    } else if (path === '/privacy') {
      setCurrentPage('privacy');
      setCurrentSlug(undefined);
    } else {
      // Fallback: check hash (e.g., #/work, #/contact)
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (hash.startsWith('work/')) {
        setCurrentPage('project-detail');
        setCurrentSlug(hash.replace('work/', ''));
      } else if (['work', 'services', 'pricing', 'about', 'contact', 'privacy'].includes(hash)) {
        setCurrentPage(hash as RoutePage);
      } else {
        setCurrentPage('home');
      }
    }
  };

  useEffect(() => {
    parseLocation();
    const handlePopState = () => parseLocation();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (
    page: RoutePage,
    options?: { slug?: string; service?: string; scrollTo?: string }
  ) => {
    let newPath = '/';
    if (page === 'work') newPath = '/work';
    else if (page === 'project-detail' && options?.slug) newPath = `/work/${options.slug}`;
    else if (page === 'services') newPath = '/services';
    else if (page === 'pricing') newPath = '/pricing';
    else if (page === 'about') newPath = '/about';
    else if (page === 'contact') {
      newPath = options?.service ? `/contact?service=${encodeURIComponent(options.service)}` : '/contact';
    } else if (page === 'privacy') newPath = '/privacy';

    window.history.pushState({}, '', newPath);
    setCurrentPage(page);
    setCurrentSlug(options?.slug);
    if (options?.service) {
      setSelectedService(options.service);
    }

    if (options?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(options.scrollTo!);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        currentSlug,
        selectedService,
        navigate,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
