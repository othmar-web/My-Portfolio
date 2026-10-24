import { ArrowUpRight, Mail } from 'lucide-react';
import { STUDIO_CONFIG, STUDIO_SERVICES } from '../data/config';
import { useNavigation } from '../context/NavigationContext';

export default function Footer() {
  const { navigate } = useNavigation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#101114] border-t border-[#34353A] pt-16 pb-12 text-[#B9BBC2]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Column 1: Studio Wordmark & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => navigate('home')}
              className="text-left cursor-pointer group"
            >
              <span className="font-display text-xl font-bold tracking-tight text-[#F5F4EF] group-hover:text-[#C6FF4D] transition-colors">
                OTHMAR
              </span>{' '}
              <span className="font-display text-lg text-[#B9BBC2]">
                CREATIVE STUDIO
              </span>
            </button>
            <p className="text-sm text-[#B9BBC2] leading-relaxed max-w-sm font-light">
              {STUDIO_CONFIG.positioning} Combining creative thinking, aesthetic distinction, and technical precision for ambitious businesses.
            </p>
            <div className="pt-2 flex flex-col gap-2.5 text-xs">
              <a
                href={`mailto:${STUDIO_CONFIG.contact.email}`}
                className="inline-flex items-center gap-2 text-[#F5F4EF] hover:text-[#C6FF4D] transition-colors w-fit font-mono"
              >
                <Mail className="w-3.5 h-3.5 text-[#C6FF4D]" />
                <span>{STUDIO_CONFIG.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#F5F4EF]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-light">
              <li>
                <button
                  onClick={() => navigate('home')}
                  className="hover:text-[#F5F4EF] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('work')}
                  className="hover:text-[#F5F4EF] transition-colors cursor-pointer"
                >
                  Selected Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('services')}
                  className="hover:text-[#F5F4EF] transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('pricing')}
                  className="hover:text-[#F5F4EF] transition-colors cursor-pointer"
                >
                  Pricing Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('about')}
                  className="hover:text-[#F5F4EF] transition-colors cursor-pointer"
                >
                  About Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('contact')}
                  className="hover:text-[#F5F4EF] transition-colors cursor-pointer"
                >
                  Contact & Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Disciplines */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#F5F4EF]">
              Disciplines
            </h3>
            <ul className="space-y-2.5 text-sm font-light">
              {STUDIO_SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => navigate('services')}
                    className="hover:text-[#F5F4EF] transition-colors text-left cursor-pointer"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Studio Connect */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-[#F5F4EF]">
              Network
            </h3>
            <ul className="space-y-2.5 text-sm font-light">
              <li>
                <a
                  href={STUDIO_CONFIG.contact.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#F5F4EF] transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[#B9BBC2]" />
                </a>
              </li>
              <li>
                <a
                  href={STUDIO_CONFIG.contact.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#F5F4EF] transition-colors"
                >
                  <span>X (Twitter)</span>
                  <ArrowUpRight className="w-3 h-3 text-[#B9BBC2]" />
                </a>
              </li>
              <li>
                <a
                  href={STUDIO_CONFIG.contact.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#F5F4EF] transition-colors"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#B9BBC2]" />
                </a>
              </li>
              <li>
                <a
                  href={STUDIO_CONFIG.contact.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#F5F4EF] transition-colors"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-[#B9BBC2]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-[#34353A]/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B9BBC2]">
          <p>© {currentYear} {STUDIO_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate('privacy')}
              className="hover:text-[#F5F4EF] transition-colors cursor-pointer"
            >
              Privacy Notice
            </button>
            <span aria-hidden="true">·</span>
            <span>Independent Creative & Engineering Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
