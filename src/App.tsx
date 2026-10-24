/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';

function AppContent() {
  const { currentPage, currentSlug } = useNavigation();

  // Clean, non-invasive UTM parameter capture for outreach campaign attribution
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get('utm_source');
    const utmCampaign = params.get('utm_campaign');
    const utmMedium = params.get('utm_medium');

    if (utmSource || utmCampaign || utmMedium) {
      sessionStorage.setItem(
        'othmar_outreach_campaign',
        JSON.stringify({
          source: utmSource || '',
          campaign: utmCampaign || '',
          medium: utmMedium || '',
          timestamp: new Date().toISOString(),
        })
      );
    }
  }, []);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'work':
        return <WorkPage />;
      case 'project-detail':
        return <ProjectDetailPage slug={currentSlug || ''} />;
      case 'services':
        return <ServicesPage />;
      case 'pricing':
        return <PricingPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#101114] text-[#F5F4EF]">
      <Navbar />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
