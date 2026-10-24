import { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, ExternalLink, Globe, Maximize2 } from 'lucide-react';
import { STUDIO_PROJECTS } from '../data/config';
import { useNavigation } from '../context/NavigationContext';

interface ProjectDetailPageProps {
  slug: string;
}

export default function ProjectDetailPage({ slug }: ProjectDetailPageProps) {
  const { navigate } = useNavigation();
  const [isFullScrollMode, setIsFullScrollMode] = useState(false);

  const projectIndex = STUDIO_PROJECTS.findIndex((p) => p.slug === slug);
  const project = STUDIO_PROJECTS[projectIndex] || STUDIO_PROJECTS[0];
  const color = project.colorIdentity;

  const nextProject =
    STUDIO_PROJECTS[(projectIndex + 1) % STUDIO_PROJECTS.length];

  const displayDomain = project.liveUrl
    ? project.liveUrl.replace('https://', '')
    : `${project.slug}.design`;

  return (
    <article className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16 space-y-16">
      {/* Back Button */}
      <div>
        <button
          onClick={() => navigate('work')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#B9BBC2] hover:text-[#F5F4EF] transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Works</span>
        </button>
      </div>

      {/* Case Study Header with Project's Distinct Color Identity */}
      <div className="space-y-6 max-w-4xl">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#B9BBC2]">
          <span style={{ color: color.accent }} className="font-semibold">
            {project.category}
          </span>
          <span aria-hidden="true">·</span>
          <span
            style={{
              backgroundColor: color.badgeBg,
              color: color.badgeText,
              borderColor: color.border,
            }}
            className="px-2 py-0.5 rounded text-[11px] font-semibold border uppercase tracking-wider"
          >
            {project.projectType}
          </span>
          <span aria-hidden="true">·</span>
          <span className="font-mono text-[#F5F4EF]">{project.year}</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F5F4EF] tracking-tight leading-tight">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-[#B9BBC2] leading-relaxed font-light">
          {project.shortDescription}
        </p>

        {/* Project Meta Bar */}
        <div className="pt-6 border-t border-[#34353A] grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
          <div>
            <span className="block text-[#B9BBC2] uppercase tracking-wider mb-1">
              Brand / Entity
            </span>
            <span className="text-[#F5F4EF] font-medium">{project.brandName}</span>
          </div>

          <div>
            <span className="block text-[#B9BBC2] uppercase tracking-wider mb-1">
              Discipline
            </span>
            <span className="text-[#F5F4EF] font-medium">{project.category}</span>
          </div>

          <div>
            <span className="block text-[#B9BBC2] uppercase tracking-wider mb-1">
              Release Year
            </span>
            <span className="text-[#F5F4EF] font-mono">{project.year}</span>
          </div>

          <div>
            <span className="block text-[#B9BBC2] uppercase tracking-wider mb-1">
              Project Type
            </span>
            <span className="text-[#F5F4EF] font-semibold uppercase tracking-wider">
              {project.projectType}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Visual Asset with Real Browser Chrome */}
      <div className="rounded-2xl overflow-hidden border border-[#34353A] bg-[#22242A] shadow-2xl">
        {/* Browser Top Navigation Bar */}
        <div className="px-4 sm:px-6 py-3 bg-[#17181C] border-b border-[#34353A] flex flex-wrap items-center justify-between gap-3 text-xs select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
            <span className="w-3 h-3 rounded-full bg-[#F59E0B]" />
            <span className="w-3 h-3 rounded-full bg-[#10B981]" />
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#101114] border border-[#34353A] font-mono text-xs text-[#B9BBC2]">
            <Globe className="w-3.5 h-3.5 text-[#C6FF4D] shrink-0" />
            <span className="text-[#F5F4EF] truncate max-w-[220px] sm:max-w-xs">{displayDomain}</span>
            <span className="text-[10px] text-[#C6FF4D] uppercase font-semibold hidden sm:inline ml-2">Studio Architecture</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFullScrollMode(!isFullScrollMode)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#101114] border border-[#34353A] hover:border-[#C6FF4D] text-[11px] font-mono text-[#F5F4EF] transition-colors cursor-pointer"
            >
              <Maximize2 className="w-3 h-3 text-[#C6FF4D]" />
              <span>{isFullScrollMode ? 'Fit Viewport' : 'Scroll Full Page'}</span>
            </button>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#C6FF4D]/10 border border-[#C6FF4D]/40 text-[#C6FF4D] hover:bg-[#C6FF4D]/20 text-[11px] font-medium transition-colors cursor-pointer"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        {/* Viewport View vs Full Scrollable Viewport */}
        <div
          className={`relative bg-[#101114] transition-all duration-300 ${
            isFullScrollMode
              ? 'max-h-[800px] overflow-y-auto'
              : 'aspect-16/10 overflow-hidden'
          }`}
        >
          <img
            src={project.image}
            alt={`Studio Web Design of ${project.title}`}
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover object-top"
          />
        </div>
      </div>

      {/* Narrative Section: Challenge, Approach, Solution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        {/* The Challenge */}
        <div className="p-8 bg-[#22242A] border border-[#34353A] rounded-xl space-y-4">
          <div
            style={{ color: color.accent }}
            className="text-xs font-mono uppercase tracking-wider font-semibold"
          >
            01 / Problem & Context
          </div>
          <h2 className="font-display text-xl font-bold text-[#F5F4EF]">
            Commercial Bottlenecks
          </h2>
          <p className="text-sm text-[#B9BBC2] leading-relaxed font-light">
            {project.challenge}
          </p>
        </div>

        {/* The Approach */}
        <div className="p-8 bg-[#22242A] border border-[#34353A] rounded-xl space-y-4">
          <div
            style={{ color: color.accent }}
            className="text-xs font-mono uppercase tracking-wider font-semibold"
          >
            02 / Strategic Direction
          </div>
          <h2 className="font-display text-xl font-bold text-[#F5F4EF]">
            Art Direction & Structure
          </h2>
          <p className="text-sm text-[#B9BBC2] leading-relaxed font-light">
            {project.approach}
          </p>
        </div>

        {/* The Solution */}
        <div className="p-8 bg-[#22242A] border border-[#34353A] rounded-xl space-y-4">
          <div
            style={{ color: color.accent }}
            className="text-xs font-mono uppercase tracking-wider font-semibold"
          >
            03 / Engineered Solution
          </div>
          <h2 className="font-display text-xl font-bold text-[#F5F4EF]">
            Technical Resolution
          </h2>
          <p className="text-sm text-[#B9BBC2] leading-relaxed font-light">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Features & Technical Stack */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Core Implementation Features */}
        <div className="p-8 bg-[#22242A] border border-[#34353A] rounded-xl space-y-6">
          <h3 className="font-display text-xl font-bold text-[#F5F4EF]">
            Key Architecture Features
          </h3>
          <ul className="space-y-3.5">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-[#B9BBC2]">
                <div
                  style={{ borderColor: color.border }}
                  className="w-5 h-5 rounded-full bg-[#101114] border flex items-center justify-center shrink-0 mt-0.5"
                >
                  <Check style={{ color: color.accent }} className="w-3 h-3" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology Stack */}
        <div className="p-8 bg-[#22242A] border border-[#34353A] rounded-xl space-y-6">
          <h3 className="font-display text-xl font-bold text-[#F5F4EF]">
            Technologies & Frameworks
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 bg-[#101114] border border-[#34353A] rounded-md text-xs font-mono text-[#F5F4EF]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-[#34353A] text-xs text-[#B9BBC2] leading-relaxed">
            <p>
              Engineered with clean component boundaries, modular states, strict typography scales, and zero unnecessary script bloat.
            </p>
          </div>
        </div>
      </div>



      {/* Action Strip: Next Case Study + Inquire */}
      <div className="pt-8 border-t border-[#34353A] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs text-[#B9BBC2] block mb-1">Next Case Study</span>
          <button
            onClick={() => navigate('project-detail', { slug: nextProject.slug })}
            className="font-display text-lg font-bold text-[#F5F4EF] hover:text-white transition-colors text-left cursor-pointer"
          >
            {nextProject.title} →
          </button>
        </div>

        <button
          onClick={() => navigate('contact', { service: project.category })}
          className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#101114] bg-[#C6FF4D] hover:bg-[#d4ff6e] transition-colors rounded-md cursor-pointer whitespace-nowrap"
        >
          <span>Discuss a Similar Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
}
