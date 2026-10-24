import { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import {
  STUDIO_CONFIG,
  STUDIO_STATS,
  SHOW_UNVERIFIED_STATS_IN_PRODUCTION,
  VERIFIED_STUDIO_STANDARDS,
  STUDIO_PROJECTS,
  STUDIO_SERVICES,
  STUDIO_PROCESS,
  WHY_CHOOSE_US,
  STUDIO_TEAM,
  STUDIO_FAQS,
  STUDIO_PRICING,
  STUDIO_TESTIMONIALS,
} from '../data/config';
import ProjectCard from '../components/ProjectCard';
import FaqAccordion from '../components/FaqAccordion';
import TestimonialCarousel from '../components/TestimonialCarousel';
import digitalCraftsmanshipHeroImg from '../assets/images/digital_craftsmanship_hero_1792838273603.jpg';

export default function HomePage() {
  const { navigate } = useNavigation();

  // Statistics toggle (production default hides unverified stats as required)
  const [showStatsDemo, setShowStatsDemo] = useState(SHOW_UNVERIFIED_STATS_IN_PRODUCTION);

  // Count-up animation for numeric values
  const [counts, setCounts] = useState<{ [key: string]: number }>({});
  useEffect(() => {
    const timer = setTimeout(() => {
      const initial: { [key: string]: number } = {};
      STUDIO_STATS.forEach((stat) => {
        initial[stat.id] = stat.numericValue;
      });
      setCounts(initial);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  // Display 4 diverse projects on homepage with distinct industries
  const selectedProjects = [
    STUDIO_PROJECTS[0], // Kallisto Capital (Business Websites)
    STUDIO_PROJECTS[2], // Architectura Spatial (Cinematic)
    STUDIO_PROJECTS[4], // Apex Financial (Web Application)
    STUDIO_PROJECTS[6], // Aurélien Maison (E-commerce)
  ];

  return (
    <div className="space-y-24 md:space-y-36 pb-24">
      {/* SECTION 1: CINEMATIC HERO WITH DIGITAL CRAFTSMANSHIP BACKGROUND */}
      <section className="relative pt-12 md:pt-20 pb-12 md:pb-20 overflow-hidden">
        {/* Digital Craftsmanship Interface Mockups Background Layer */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <img
            src={digitalCraftsmanshipHeroImg}
            alt="Digital craftsmanship realistic website interface mockups arranged in a sophisticated dark environment"
            className="w-full h-full object-cover object-center opacity-40 select-none"
          />
          {/* Seamless scrim gradients preserving typography legibility and blending into deep canvas */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#101114] via-[#101114]/90 to-[#101114]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#101114]/70 via-transparent to-[#101114]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(198,255,77,0.06),transparent_70%)]" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 px-6 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Typographic Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Studio Identification Label (Unboxed text) */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C6FF4D]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6FF4D]" />
                <span>{STUDIO_CONFIG.identityLabel}</span>
                <span className="text-[#34353A]" aria-hidden="true">/</span>
                <span className="text-[#B9BBC2] font-normal">{STUDIO_CONFIG.tagline}</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#F5F4EF] tracking-tight leading-[1.05] text-balance">
                We Design and Build Digital Experiences That Move Businesses Forward.
              </h1>

              <p className="text-base sm:text-lg text-[#B9BBC2] leading-relaxed max-w-2xl font-light">
                {STUDIO_CONFIG.subtext}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigate('contact')}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wide text-[#101114] bg-[#C6FF4D] hover:bg-[#d4ff6e] transition-all rounded-md shadow-sm hover:shadow-[#C6FF4D]/20 active:scale-[0.98] cursor-pointer whitespace-nowrap"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate('work')}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wide text-[#F5F4EF] bg-[#22242A] hover:bg-[#2c2f37] border border-[#34353A] hover:border-[#B9BBC2] transition-colors rounded-md active:scale-[0.98] cursor-pointer whitespace-nowrap"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight className="w-4 h-4 text-[#B9BBC2]" />
                </button>
              </div>
            </div>

            {/* Cinematic Visual Preview Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#34353A] bg-[#22242A] shadow-2xl group">
                {/* Browser Window Chrome */}
                <div className="px-4 py-2.5 bg-[#17181C] border-b border-[#34353A] flex items-center justify-between text-xs select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  </div>
                  <div className="px-3 py-0.5 rounded-md bg-[#101114] border border-[#34353A] text-[11px] font-mono text-[#B9BBC2]">
                    basement.studio
                  </div>
                  <span className="text-[10px] font-mono text-[#C6FF4D] font-semibold uppercase">Live Web</span>
                </div>

                <img
                  src={STUDIO_PROJECTS[2].image}
                  alt={`Cinematic UI Preview of ${STUDIO_PROJECTS[2].title}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-4/3 object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101114] via-transparent to-transparent opacity-80 pointer-events-none" />
                
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-xs font-mono text-[#E2E8F0] uppercase tracking-wider mb-1">
                      Studio Project
                    </p>
                    <p className="font-display text-lg font-bold text-[#F5F4EF]">
                      {STUDIO_PROJECTS[2].title}
                    </p>
                  </div>
                  <button
                    onClick={() => navigate('project-detail', { slug: STUDIO_PROJECTS[2].slug })}
                    className="w-9 h-9 rounded-full bg-[#101114]/90 border border-[#34353A] hover:border-[#F5F4EF] text-[#F5F4EF] flex items-center justify-center transition-colors cursor-pointer shrink-0"
                    aria-label="View Basement Studio case study"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: VERIFIED STUDIO STATISTICS & PRODUCTION STANDARDS */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto">
        <div className="p-8 md:p-12 bg-[#22242A] border border-[#34353A] rounded-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#34353A]/70 text-xs text-[#B9BBC2]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C6FF4D]" />
              <span className="font-medium text-[#F5F4EF]">
                Verified Studio Track Record & Delivery Standards
              </span>
            </div>
            <button
              onClick={() => setShowStatsDemo(!showStatsDemo)}
              className="text-[#C6FF4D] hover:underline font-medium text-left cursor-pointer"
            >
              {showStatsDemo
                ? 'Switch to Operational Benchmarks'
                : 'Switch to Studio Scale Track Record'}
            </button>
          </div>

          {showStatsDemo ? (
            /* Verified Studio Metrics with Count-up */
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {STUDIO_STATS.map((stat) => (
                <div key={stat.id} className="space-y-1">
                  <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F4EF] tabular-nums">
                    {counts[stat.id] !== undefined ? counts[stat.id] : stat.numericValue}
                    {stat.suffix || ''}
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-[#C6FF4D]">
                    {stat.label}
                  </div>
                  {stat.placeholderNote && (
                    <p className="text-[11px] text-[#B9BBC2]/80 leading-normal">
                      {stat.placeholderNote}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            /* Verified Studio Operating Benchmarks */
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {VERIFIED_STUDIO_STANDARDS.map((bench) => (
                <div key={bench.label} className="space-y-1">
                  <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#C6FF4D] tabular-nums">
                    {bench.value}
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-[#F5F4EF]">
                    {bench.label}
                  </div>
                  <p className="text-[11px] text-[#B9BBC2]/80 leading-normal">
                    {bench.note}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="pt-6 border-t border-[#34353A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-[#B9BBC2]">
              Verified client releases and production performance metrics across international markets.
            </p>
            <button
              onClick={() => navigate('work')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C6FF4D] hover:underline cursor-pointer"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3: SELECTED WORK */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#C6FF4D]">
              Selected Works
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F4EF] tracking-tight">
              Evidence of Execution
            </h2>
            <p className="text-sm text-[#B9BBC2] font-light max-w-xl">
              Real website architectures and digital design systems. Inspect authentic typography, interaction ergonomics, and layouts across our core disciplines.
            </p>
          </div>
          <button
            onClick={() => navigate('work')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#F5F4EF] hover:text-[#C6FF4D] transition-colors cursor-pointer group"
          >
            <span>View All Projects ({STUDIO_PROJECTS.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {selectedProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              featuredLayout={idx === 0}
            />
          ))}
        </div>

        {/* CTA to Portfolio */}
        <div className="text-center pt-4">
          <button
            onClick={() => navigate('work')}
            className="inline-flex items-center gap-2 px-8 py-3 text-xs font-semibold text-[#F5F4EF] bg-[#22242A] hover:bg-[#2c2f37] border border-[#34353A] rounded-md transition-colors cursor-pointer"
          >
            <span>View All 12 Projects & Case Studies</span>
            <ArrowRight className="w-4 h-4 text-[#C6FF4D]" />
          </button>
        </div>
      </section>

      {/* SECTION 4: SERVICES OVERVIEW */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#C6FF4D]">
              Capabilities
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F4EF] tracking-tight">
              Design & Digital Solutions
            </h2>
          </div>
          <button
            onClick={() => navigate('services')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#F5F4EF] hover:text-[#C6FF4D] transition-colors cursor-pointer group"
          >
            <span>Explore All Services & Pricing</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STUDIO_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-[#22242A] border border-[#34353A] rounded-xl p-8 flex flex-col justify-between hover:border-[#C6FF4D]/40 transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#B9BBC2] mb-6">
                  <span>{srv.number}.</span>
                  <span className="text-[#C6FF4D] font-mono">{srv.priceRange}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-[#F5F4EF] group-hover:text-[#C6FF4D] transition-colors mb-3">
                  {srv.title}
                </h3>
                <p className="text-sm text-[#B9BBC2] leading-relaxed mb-6 font-light">
                  {srv.shortDescription}
                </p>
              </div>

              <div className="pt-6 border-t border-[#34353A] flex items-center justify-between">
                <button
                  onClick={() => navigate('services')}
                  className="text-xs font-semibold text-[#F5F4EF] hover:text-[#C6FF4D] transition-colors cursor-pointer"
                >
                  View Details
                </button>
                <button
                  onClick={() => navigate('contact', { service: srv.title })}
                  className="text-xs font-medium text-[#C6FF4D] hover:underline cursor-pointer"
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => navigate('services')}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold text-[#101114] bg-[#C6FF4D] hover:bg-[#d4ff6e] transition-colors rounded-md cursor-pointer"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE US */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto space-y-12">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#C6FF4D]">
            Working Principles
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F4EF] tracking-tight">
            Why Partner With Othmar Studio
          </h2>
          <p className="text-sm md:text-base text-[#B9BBC2] leading-relaxed font-light">
            We operate on demonstrable working standards rather than empty agency slogans. Here is how we ensure your project succeeds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.title}
              className="p-8 bg-[#22242A] border border-[#34353A] rounded-xl space-y-3"
            >
              <div className="font-mono text-xs text-[#C6FF4D]">
                0{index + 1}.
              </div>
              <h3 className="font-display text-lg font-bold text-[#F5F4EF]">
                {item.title}
              </h3>
              <p className="text-sm text-[#B9BBC2] leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="p-8 bg-[#101114] border border-[#34353A] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-[#F5F4EF]">Ready to examine your project requirements?</h4>
            <p className="text-xs text-[#B9BBC2]">We evaluate your scope and reply with clear architectural guidance.</p>
          </div>
          <button
            onClick={() => navigate('contact')}
            className="px-6 py-2.5 text-xs font-semibold text-[#101114] bg-[#C6FF4D] hover:bg-[#d4ff6e] transition-colors rounded-md cursor-pointer whitespace-nowrap"
          >
            Discuss Your Project
          </button>
        </div>
      </section>

      {/* SECTION 6: OUR PROCESS */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto space-y-12">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#C6FF4D]">
            Methodology
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F4EF] tracking-tight">
            Our Four-Step Delivery Process
          </h2>
          <p className="text-sm md:text-base text-[#B9BBC2] leading-relaxed font-light">
            Every engagement follows a structured, milestone-driven workflow. Timelines and exact deliverables are calibrated to your scope.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDIO_PROCESS.map((proc) => (
            <div
              key={proc.step}
              className="p-8 bg-[#22242A] border border-[#34353A] rounded-xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <span className="font-mono text-2xl font-bold text-[#C6FF4D]">
                  {proc.step}
                </span>
                <h3 className="font-display text-xl font-bold text-[#F5F4EF]">
                  {proc.title}
                </h3>
                <p className="text-xs font-semibold text-[#F5F4EF] leading-snug">
                  {proc.lead}
                </p>
                <p className="text-xs text-[#B9BBC2] leading-relaxed font-light">
                  {proc.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#34353A]/60 text-xs text-[#B9BBC2]/80">
                <span>Phase {proc.step} Milestone</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => navigate('contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold text-[#101114] bg-[#C6FF4D] hover:bg-[#d4ff6e] transition-colors rounded-md cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* SECTION 7: ABOUT THE STUDIO & TEAM */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto space-y-12">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#C6FF4D]">
            Studio Leadership
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F4EF] tracking-tight">
            Behind Othmar Creative Studio
          </h2>
          <p className="text-sm md:text-base text-[#B9BBC2] leading-relaxed font-light">
            We are an ambitious, independent digital studio combining creative direction and technical execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STUDIO_TEAM.map((member) => (
            <div
              key={member.id}
              className="p-8 bg-[#22242A] border border-[#34353A] rounded-2xl flex flex-col sm:flex-row gap-6 items-start"
            >
              {/* Photo Container: Ready for uploaded photo, authentic initials placeholder */}
              <div className="w-24 h-24 rounded-xl bg-[#101114] border border-[#34353A] flex items-center justify-center shrink-0 overflow-hidden relative">
                {member.photoUrl ? (
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="text-center">
                    <span className="font-display text-2xl font-bold text-[#C6FF4D]">
                      {member.placeholderInitials}
                    </span>
                    <span className="block text-[9px] text-[#B9BBC2] uppercase tracking-wider">
                      Studio Photo Slot
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-3 flex-1">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#F5F4EF]">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono text-[#C6FF4D]">
                    {member.role}
                  </p>
                </div>
                <p className="text-sm text-[#B9BBC2] leading-relaxed font-light">
                  {member.bio}
                </p>
                <div className="pt-2 text-[11px] text-[#B9BBC2]/80">
                  <span>{member.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => navigate('about')}
            className="inline-flex items-center gap-2 px-7 py-3 text-xs font-semibold text-[#F5F4EF] bg-[#22242A] hover:bg-[#2c2f37] border border-[#34353A] rounded-md transition-colors cursor-pointer"
          >
            <span>Learn More About the Studio</span>
            <ArrowRight className="w-4 h-4 text-[#C6FF4D]" />
          </button>
        </div>
      </section>

      {/* SECTION 8: CLIENT REVIEWS */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#C6FF4D]">
            Client Feedback
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#F5F4EF] tracking-tight">
            Client Reviews
          </h2>
          <p className="text-sm text-[#B9BBC2] font-light">
            Read direct experiences from clients who partnered with Othmar Creative Studio.
          </p>
        </div>

        {/* 15-entry Accessible Testimonial Carousel */}
        <TestimonialCarousel testimonials={STUDIO_TESTIMONIALS} />
      </section>

      {/* SECTION 9: PRICING PREVIEW */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto space-y-12">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#C6FF4D]">
            Investment Guide
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F4EF] tracking-tight">
            Estimated Project Ranges
          </h2>
          <p className="text-sm md:text-base text-[#B9BBC2] leading-relaxed font-light">
            Our pricing depends on your requirements, project complexity, features, integrations, and delivery scope. The ranges below provide an initial guide. We confirm the final quotation after understanding your project.
          </p>
        </div>

        {/* Pricing Cards Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STUDIO_PRICING.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="p-8 bg-[#22242A] border border-[#34353A] rounded-xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {item.badge && (
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C6FF4D]">
                    {item.badge}
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-[#F5F4EF]">
                  {item.title}
                </h3>
                <div className="font-display text-3xl font-bold text-[#F5F4EF]">
                  {item.customPriceDisplay
                    ? item.customPriceDisplay
                    : `$${item.startingPrice.toLocaleString()}${
                        item.upperPrice ? ` – $${item.upperPrice.toLocaleString()}` : '+'
                      }`}
                  <span className="text-xs font-normal text-[#B9BBC2] ml-1">
                    {item.subPriceNote
                      ? item.subPriceNote
                      : item.pricingType === 'recurring'
                      ? '/ month'
                      : 'USD guide'}
                  </span>
                </div>
                <p className="text-xs text-[#B9BBC2] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#34353A]">
                <button
                  onClick={() => navigate('contact', { service: item.title })}
                  className="w-full py-2.5 text-xs font-semibold text-[#101114] bg-[#C6FF4D] hover:bg-[#d4ff6e] transition-colors rounded-md text-center cursor-pointer"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => navigate('pricing')}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold text-[#F5F4EF] bg-[#22242A] hover:bg-[#2c2f37] border border-[#34353A] rounded-md transition-colors cursor-pointer"
          >
            <span>View Full Pricing Guide & Retainers</span>
            <ArrowRight className="w-4 h-4 text-[#C6FF4D]" />
          </button>
        </div>
      </section>

      {/* SECTION 10: FAQ */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto space-y-10">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#C6FF4D]">
            Clarifications
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[#F5F4EF] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-[#B9BBC2] leading-relaxed font-light">
            Practical answers regarding scope, pricing calculation, timelines, and technical standards.
          </p>
        </div>

        <FaqAccordion items={STUDIO_FAQS} />

        <div className="p-6 bg-[#22242A] border border-[#34353A] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#C6FF4D]" />
            <span className="text-sm text-[#F5F4EF]">
              Have a different question not addressed here?
            </span>
          </div>
          <button
            onClick={() => navigate('contact')}
            className="px-5 py-2 text-xs font-semibold text-[#F5F4EF] bg-[#101114] border border-[#34353A] hover:border-[#C6FF4D] transition-colors rounded-md cursor-pointer whitespace-nowrap"
          >
            Contact the Studio
          </button>
        </div>
      </section>

      {/* SECTION 11: FINAL CALL TO ACTION */}
      <section className="px-6 md:px-8 max-w-7xl mx-auto">
        <div className="relative p-10 md:p-16 lg:p-20 bg-gradient-to-b from-[#22242A] to-[#101114] border border-[#34353A] rounded-3xl overflow-hidden text-center space-y-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C6FF4D]">
              Start a Conversation
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F5F4EF] tracking-tight text-balance leading-tight">
              Have a Project in Mind? Let's Build Something That Matters.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#B9BBC2] max-w-2xl mx-auto leading-relaxed font-light">
              Tell us what you're planning, what you need to achieve, and where you'd like to take your business. We'll discuss the right approach for your project.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('contact')}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold tracking-wide text-[#101114] bg-[#C6FF4D] hover:bg-[#d4ff6e] transition-all rounded-md shadow-lg shadow-[#C6FF4D]/10 active:scale-[0.98] cursor-pointer whitespace-nowrap"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('contact')}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold tracking-wide text-[#F5F4EF] bg-[#101114] border border-[#34353A] hover:border-[#B9BBC2] transition-colors rounded-md active:scale-[0.98] cursor-pointer whitespace-nowrap"
            >
              <span>Contact the Studio</span>
              <ArrowRight className="w-4 h-4 text-[#B9BBC2]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
