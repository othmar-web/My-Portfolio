import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export default function Navbar() {
  const { currentPage, navigate } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', page: 'work' as const },
    { label: 'Services', page: 'services' as const },
    { label: 'Pricing', page: 'pricing' as const },
    { label: 'About', page: 'about' as const },
    { label: 'Contact', page: 'contact' as const },
  ];

  const handleNavClick = (page: typeof navLinks[number]['page']) => {
    navigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#101114]/90 backdrop-blur-md border-b border-[#34353A]/60 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => navigate('home')}
          className="group flex items-center text-left text-lg md:text-xl font-bold tracking-tight text-[#F5F4EF] hover:text-[#C6FF4D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <span className="font-display">OTHMAR</span>
          <span className="font-display text-[#B9BBC2] group-hover:text-[#F5F4EF] transition-colors ml-1.5 font-normal text-base md:text-lg">
            CREATIVE STUDIO
          </span>
        </button>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#B9BBC2]"
        >
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`relative py-1 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-[#F5F4EF] font-semibold'
                    : 'text-[#B9BBC2] hover:text-[#F5F4EF]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C6FF4D] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => navigate('contact')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide text-[#101114] bg-[#C6FF4D] hover:bg-[#d4ff6e] transition-all rounded-md shadow-sm hover:shadow-[#C6FF4D]/10 active:scale-[0.98] cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F5F4EF] hover:text-[#C6FF4D] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#101114] border-b border-[#34353A] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`flex items-center justify-between py-2 text-base font-medium transition-colors text-left ${
                    isActive ? 'text-[#C6FF4D]' : 'text-[#F5F4EF] hover:text-[#C6FF4D]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="text-xs text-[#C6FF4D]">Current</span>}
                </button>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-[#34353A]/80">
            <button
              onClick={() => {
                navigate('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#101114] bg-[#C6FF4D] hover:bg-[#d4ff6e] transition-colors rounded-md cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
