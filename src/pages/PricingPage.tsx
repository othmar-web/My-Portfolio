import { useState } from 'react';
import { ArrowUpRight, Check, AlertCircle, Info } from 'lucide-react';
import { STUDIO_PRICING } from '../data/config';
import { useNavigation } from '../context/NavigationContext';

export default function PricingPage() {
  const { navigate } = useNavigation();
  const [activeTab, setActiveTab] = useState<'all' | 'one-time' | 'recurring'>('all');

  const filteredPricing = STUDIO_PRICING.filter((item) => {
    if (activeTab === 'all') return true;
    return item.pricingType === activeTab;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C6FF4D]">
          <span>Pricing Transparency</span>
          <span className="text-[#34353A]" aria-hidden="true">/</span>
          <span className="text-[#B9BBC2] font-normal">USD Estimates</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F5F4EF] tracking-tight leading-tight">
          Transparent Project Ranges & Retainers
        </h1>
        <p className="text-base sm:text-lg text-[#B9BBC2] leading-relaxed font-light">
          We believe in upfront scope visibility. Our rates are structured around clear deliverables, technical complexity, and measurable business outcomes.
        </p>
      </div>

      {/* Guide Disclaimer Callout */}
      <div className="p-6 bg-[#22242A] border border-[#34353A] rounded-xl flex items-start gap-4 text-xs text-[#B9BBC2]">
        <Info className="w-5 h-5 text-[#C6FF4D] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-semibold text-[#F5F4EF] block">
            How to read this pricing guide
          </span>
          <p className="leading-relaxed">
            Our pricing depends on your requirements, project complexity, features, integrations, and delivery scope. The ranges below provide an initial guide. We confirm the final quotation after understanding your project. No payment is collected through these cards.
          </p>
        </div>
      </div>

      {/* Type Filter Buttons */}
      <div className="flex items-center gap-2 p-1 bg-[#22242A] border border-[#34353A] rounded-lg w-fit">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'all'
              ? 'bg-[#C6FF4D] text-[#101114] font-semibold'
              : 'text-[#B9BBC2] hover:text-[#F5F4EF]'
          }`}
        >
          All Offerings ({STUDIO_PRICING.length})
        </button>
        <button
          onClick={() => setActiveTab('one-time')}
          className={`px-4 py-2 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'one-time'
              ? 'bg-[#C6FF4D] text-[#101114] font-semibold'
              : 'text-[#B9BBC2] hover:text-[#F5F4EF]'
          }`}
        >
          One-Time Projects
        </button>
        <button
          onClick={() => setActiveTab('recurring')}
          className={`px-4 py-2 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'recurring'
              ? 'bg-[#C6FF4D] text-[#101114] font-semibold'
              : 'text-[#B9BBC2] hover:text-[#F5F4EF]'
          }`}
        >
          Monthly Retainers
        </button>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPricing.map((item) => (
          <div
            key={item.id}
            className={`p-8 bg-[#22242A] border rounded-2xl flex flex-col justify-between space-y-6 transition-colors ${
              item.badge === 'Most Popular'
                ? 'border-[#C6FF4D]'
                : 'border-[#34353A] hover:border-[#B9BBC2]/50'
            }`}
          >
            <div className="space-y-4">
              {item.badge && (
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#C6FF4D] font-semibold">
                  {item.badge}
                </div>
              )}

              <h2 className="font-display text-2xl font-bold text-[#F5F4EF]">
                {item.title}
              </h2>

              {/* Price Tag */}
              <div className="pt-2 pb-1 border-b border-[#34353A]">
                <div className="font-display text-3xl font-extrabold text-[#F5F4EF]">
                  {item.customPriceDisplay
                    ? item.customPriceDisplay
                    : `$${item.startingPrice.toLocaleString()}${
                        item.upperPrice ? ` – $${item.upperPrice.toLocaleString()}` : '+'
                      }`}
                </div>
                <div className="text-xs text-[#B9BBC2] mt-1">
                  {item.subPriceNote
                    ? item.subPriceNote
                    : item.pricingType === 'recurring'
                    ? 'USD per month'
                    : 'USD estimated project range'}
                </div>
              </div>

              <p className="text-xs text-[#B9BBC2] leading-relaxed">
                {item.description}
              </p>

              {/* Deliverables List */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#F5F4EF] block">
                  Typical Deliverables:
                </span>
                <ul className="space-y-2 text-xs text-[#B9BBC2]">
                  {item.deliverables.map((deliv, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C6FF4D] shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Scope Influencers */}
              <div className="space-y-2 pt-2 border-t border-[#34353A]/60">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B9BBC2] block">
                  Cost Influencing Factors:
                </span>
                <ul className="space-y-1 text-[11px] text-[#B9BBC2]/80">
                  {item.scopeFactors.map((factor, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#C6FF4D] font-bold">·</span>
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Request a Quote CTA */}
            <div className="pt-4 border-t border-[#34353A]">
              <button
                onClick={() => navigate('contact', { service: item.title })}
                className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs font-semibold text-[#101114] bg-[#C6FF4D] hover:bg-[#d4ff6e] transition-colors rounded-md cursor-pointer"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Enterprise / Multi-Service Callout */}
      <div className="p-8 md:p-12 bg-[#101114] border border-[#34353A] rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h3 className="font-display text-2xl font-bold text-[#F5F4EF]">
            Need a custom package or multi-phase scope?
          </h3>
          <p className="text-sm text-[#B9BBC2] leading-relaxed">
            If your project involves combining brand identity, custom web application architecture, and cinematic launch animations, we can structure a bundled milestone proposal.
          </p>
        </div>
        <button
          onClick={() => navigate('contact')}
          className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold text-[#101114] bg-[#C6FF4D] hover:bg-[#d4ff6e] transition-colors rounded-md cursor-pointer whitespace-nowrap shrink-0"
        >
          <span>Start Project Discussion</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
