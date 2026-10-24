import { ArrowUpRight, CheckCircle2, Shield, Sparkles, Terminal, Users } from 'lucide-react';
import { STUDIO_CONFIG, STUDIO_TEAM, WHY_CHOOSE_US } from '../data/config';
import { useNavigation } from '../context/NavigationContext';

export default function AboutPage() {
  const { navigate } = useNavigation();

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20 space-y-20">
      {/* Header */}
      <div className="space-y-6 max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C6FF4D]">
          <span>About Othmar Creative Studio</span>
          <span className="text-[#34353A]" aria-hidden="true">/</span>
          <span className="text-[#B9BBC2] font-normal">Identity & Craft</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F5F4EF] tracking-tight leading-tight">
          We Design and Build Digital Experiences That Move Businesses Forward.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[#B9BBC2] leading-relaxed font-light">
          Othmar Creative Studio is an independent creative design and digital solutions studio. We bridge the gap between creative visual art direction and modern engineering to build high-performing digital presences for ambitious businesses.
        </p>
      </div>

      {/* Studio Philosophy & Dual Discipline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 md:p-12 bg-[#22242A] border border-[#34353A] rounded-2xl space-y-4">
          <span className="font-mono text-xs text-[#C6FF4D] uppercase tracking-wider">
            Creative Strategy
          </span>
          <h2 className="font-display text-2xl font-bold text-[#F5F4EF]">
            Visual Art Direction With Purpose
          </h2>
          <p className="text-sm text-[#B9BBC2] leading-relaxed">
            A website should never be an afterthought or a generic template. We design digital touchpoints that establish immediate authority, articulate value propositions with crystalline clarity, and command respect in your market.
          </p>
        </div>

        <div className="p-8 md:p-12 bg-[#22242A] border border-[#34353A] rounded-2xl space-y-4">
          <span className="font-mono text-xs text-[#C6FF4D] uppercase tracking-wider">
            Engineering Precision
          </span>
          <h2 className="font-display text-2xl font-bold text-[#F5F4EF]">
            Production-Grade Execution
          </h2>
          <p className="text-sm text-[#B9BBC2] leading-relaxed">
            Beautiful visual designs fail if they lag, crash, or break on mobile devices. We engineer every experience with clean, maintainable TypeScript, robust accessibility standards, and aggressive performance optimization.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="space-y-10">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#C6FF4D]">
            Studio Core
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#F5F4EF]">
            Leadership & Core Team
          </h2>
          <p className="text-sm md:text-base text-[#B9BBC2] leading-relaxed">
            Direct collaboration with the minds shaping your digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STUDIO_TEAM.map((member) => (
            <div
              key={member.id}
              className="p-8 md:p-10 bg-[#22242A] border border-[#34353A] rounded-2xl space-y-6"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Genuine Photo Container / Initial Monogram Slot */}
                <div className="w-24 h-24 rounded-xl bg-[#101114] border border-[#34353A] flex items-center justify-center shrink-0 overflow-hidden relative shadow-inner">
                  {member.photoUrl ? (
                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="text-center p-2">
                      <span className="font-display text-3xl font-bold text-[#C6FF4D] block">
                        {member.placeholderInitials}
                      </span>
                      <span className="text-[9px] text-[#B9BBC2] uppercase tracking-wider block mt-0.5">
                        Photo Slot
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-2xl font-bold text-[#F5F4EF]">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono text-[#C6FF4D]">
                    {member.role}
                  </p>
                  <p className="text-xs text-[#B9BBC2]">
                    Othmar Creative Studio
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#B9BBC2] leading-relaxed border-t border-[#34353A] pt-4">
                {member.bio}
              </p>

              <div className="flex items-center gap-2 text-xs text-[#B9BBC2]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C6FF4D]" />
                <span>{member.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Future Growth Scalability Note */}
        <div className="p-6 bg-[#101114] border border-[#34353A] rounded-xl flex items-center justify-between text-xs text-[#B9BBC2]">
          <span>
            Studio Architecture: Engineered for modular growth and specialized collaborators as project requirements scale.
          </span>
          <span className="font-mono text-[#C6FF4D]">Est. Independent</span>
        </div>
      </div>

      {/* Working Standards */}
      <div className="space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#C6FF4D]">
            Standards
          </span>
          <h2 className="font-display text-3xl font-bold text-[#F5F4EF]">
            How We Work With Clients
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#22242A] border border-[#34353A] rounded-xl space-y-2"
            >
              <h3 className="font-display text-base font-bold text-[#F5F4EF]">
                {item.title}
              </h3>
              <p className="text-xs text-[#B9BBC2] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="p-10 md:p-14 bg-[#22242A] border border-[#34353A] rounded-2xl text-center space-y-6">
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F5F4EF]">
          Ready to Work Together?
        </h3>
        <p className="text-sm md:text-base text-[#B9BBC2] max-w-lg mx-auto">
          Share your project details with our team. We will review your goals and provide architectural guidance.
        </p>
        <button
          onClick={() => navigate('contact')}
          className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold text-[#101114] bg-[#C6FF4D] hover:bg-[#d4ff6e] transition-colors rounded-md cursor-pointer"
        >
          <span>Start a Project Discussion</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
