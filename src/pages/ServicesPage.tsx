import { Check, ArrowUpRight, AlertCircle } from 'lucide-react';
import { STUDIO_SERVICES } from '../data/config';
import { useNavigation } from '../context/NavigationContext';

export default function ServicesPage() {
  const { navigate } = useNavigation();

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C6FF4D]">
          <span>Service Capabilities</span>
          <span className="text-[#34353A]" aria-hidden="true">/</span>
          <span className="text-[#B9BBC2] font-normal">End-to-End Solutions</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F5F4EF] tracking-tight leading-tight">
          Comprehensive Design & Digital Engineering
        </h1>
        <p className="text-base sm:text-lg text-[#B9BBC2] leading-relaxed font-light">
          We combine visual art direction, responsive design, and modern web architecture to help businesses stand out and convert qualified clients.
        </p>
      </div>

      {/* Scope Disclaimer Banner */}
      <div className="p-6 bg-[#22242A] border border-[#34353A] rounded-xl flex items-start gap-4 text-xs text-[#B9BBC2]">
        <AlertCircle className="w-5 h-5 text-[#C6FF4D] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-semibold text-[#F5F4EF] block">
            Pricing & Scope Transparency
          </span>
          <p className="leading-relaxed">
            All prices indicated below are initial guide ranges based on typical complexity. Final project quotes are calculated after assessing your specific requirements, unique layouts, third-party integrations, and timeline. No binding commitments are made through pricing cards.
          </p>
        </div>
      </div>

      {/* Services List Breakdown */}
      <div className="space-y-12">
        {STUDIO_SERVICES.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="p-8 md:p-12 bg-[#22242A] border border-[#34353A] rounded-2xl space-y-8"
          >
            {/* Top row */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#34353A]">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#C6FF4D]">
                  Capability {service.number}
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F5F4EF]">
                  {service.title}
                </h2>
                <p className="text-sm md:text-base text-[#B9BBC2] max-w-2xl leading-relaxed">
                  {service.detailedDescription}
                </p>
              </div>

              <div className="md:text-right shrink-0">
                <span className="block text-xs uppercase tracking-wider text-[#B9BBC2] mb-1">
                  Estimated Guide Range
                </span>
                <span className="font-display text-2xl md:text-3xl font-bold text-[#C6FF4D]">
                  {service.priceRange}
                </span>
                <span className="block text-[11px] text-[#B9BBC2] mt-1">
                  USD · Subject to specification
                </span>
              </div>
            </div>

            {/* 4-column detail breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
              {/* Deliverables */}
              <div className="space-y-3">
                <h3 className="font-semibold uppercase tracking-wider text-[#F5F4EF]">
                  Typical Deliverables
                </h3>
                <ul className="space-y-2 text-[#B9BBC2]">
                  {service.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C6FF4D] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suitable For */}
              <div className="space-y-3">
                <h3 className="font-semibold uppercase tracking-wider text-[#F5F4EF]">
                  Who This Suits
                </h3>
                <ul className="space-y-2 text-[#B9BBC2]">
                  {service.suitableFor.map((s, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#C6FF4D] font-bold">·</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Scope Factors */}
              <div className="space-y-3">
                <h3 className="font-semibold uppercase tracking-wider text-[#F5F4EF]">
                  Cost Influencing Factors
                </h3>
                <ul className="space-y-2 text-[#B9BBC2]">
                  {service.scopeFactors.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#B9BBC2] font-bold">—</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What is Excluded */}
              <div className="space-y-3">
                <h3 className="font-semibold uppercase tracking-wider text-[#F5F4EF]">
                  Standard Exclusions
                </h3>
                <ul className="space-y-2 text-[#B9BBC2]">
                  {service.exclusions.map((e, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">✕</span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Row CTA */}
            <div className="pt-6 border-t border-[#34353A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs text-[#B9BBC2]">
                Have a specific project in mind for this service?
              </span>
              <button
                onClick={() => navigate('contact', { service: service.title })}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-[#101114] bg-[#C6FF4D] hover:bg-[#d4ff6e] transition-colors rounded-md cursor-pointer whitespace-nowrap"
              >
                <span>Request a Quote for {service.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Ongoing Maintenance & Support Section */}
      <div className="p-8 md:p-12 bg-[#101114] border border-[#34353A] rounded-2xl space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="font-mono text-xs text-[#C6FF4D]">
            Post-Launch Stability
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#F5F4EF]">
            Website Maintenance & Technical Troubleshooting
          </h2>
          <p className="text-sm text-[#B9BBC2] leading-relaxed">
            In addition to new project builds, we provide ongoing monthly retainers ($100–$500/month) and rapid diagnostic troubleshooting ($50–$100/hr or $100–$250 flat) to keep your web infrastructure performant, updated, and secure.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <button
            onClick={() => navigate('contact', { service: 'Website Maintenance Retainer' })}
            className="px-6 py-2.5 text-xs font-semibold text-[#101114] bg-[#C6FF4D] hover:bg-[#d4ff6e] transition-colors rounded-md cursor-pointer"
          >
            Inquire About Maintenance
          </button>
          <button
            onClick={() => navigate('contact', { service: 'Website Troubleshooting & Repairs' })}
            className="px-6 py-2.5 text-xs font-semibold text-[#F5F4EF] bg-[#22242A] border border-[#34353A] hover:border-[#C6FF4D] transition-colors rounded-md cursor-pointer"
          >
            Emergency Troubleshooting
          </button>
        </div>
      </div>
    </div>
  );
}
