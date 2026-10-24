import { ArrowUpRight, Globe } from 'lucide-react';
import { Project } from '../types';
import { useNavigation } from '../context/NavigationContext';

interface ProjectCardProps {
  project: Project;
  featuredLayout?: boolean;
}

export default function ProjectCard({ project, featuredLayout = false }: ProjectCardProps) {
  const { navigate } = useNavigation();
  const color = project.colorIdentity;

  const displayDomain = project.liveUrl
    ? project.liveUrl.replace('https://', '')
    : `${project.slug}.design`;

  return (
    <article
      onClick={() => navigate('project-detail', { slug: project.slug })}
      className={`group relative flex flex-col justify-between bg-[#22242A] border border-[#34353A] rounded-xl overflow-hidden hover:border-[#B9BBC2]/50 transition-all duration-300 cursor-pointer ${
        featuredLayout ? 'lg:col-span-2' : 'col-span-1'
      }`}
    >
      {/* Browser Window Chrome */}
      <div className="px-4 py-2.5 bg-[#17181C] border-b border-[#34353A] flex items-center justify-between text-xs select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-[#101114] border border-[#34353A]/80 text-[11px] font-mono text-[#B9BBC2] max-w-[200px] truncate">
          <Globe className="w-3 h-3 text-[#C6FF4D] shrink-0" />
          <span className="truncate">{displayDomain}</span>
        </div>
        <span className="text-[10px] font-mono text-[#C6FF4D] font-semibold tracking-wider uppercase">
          Studio Project
        </span>
      </div>

      {/* Image Container with Real Website Viewport */}
      <div className="relative aspect-16/10 overflow-hidden bg-[#101114]">
        <img
          src={project.image}
          alt={`Real Web Design of ${project.title}`}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          onError={(e) => {
            const target = e.currentTarget;
            target.style.display = 'none';
            if (target.parentElement) {
              target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'p-8');
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#22242A]/90 via-transparent to-black/20 opacity-70 group-hover:opacity-30 transition-opacity pointer-events-none" />

        {/* Top Floating Badge Bar with Project's Distinct Color Identity */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs font-medium drop-shadow-md pointer-events-none">
          <span
            style={{
              backgroundColor: color.badgeBg,
              color: color.badgeText,
              borderColor: color.border,
            }}
            className="px-2.5 py-0.5 rounded text-[10px] font-semibold border tracking-wider uppercase backdrop-blur-sm"
          >
            {project.projectType}
          </span>
          <span className="bg-[#101114]/90 backdrop-blur-md px-2 py-0.5 rounded text-[#F5F4EF] text-[11px] font-mono border border-[#34353A]">
            {project.year}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
        <div>
          {/* Metadata: Unboxed Text with Separators */}
          <div className="flex items-center gap-2 text-xs text-[#B9BBC2] mb-3">
            <span style={{ color: color.accent }} className="font-semibold">
              {project.category}
            </span>
            <span aria-hidden="true">·</span>
            <span>{project.brandName}</span>
          </div>

          <h3 className="font-display text-xl md:text-2xl font-bold text-[#F5F4EF] group-hover:text-white transition-colors mb-2 leading-snug">
            {project.title}
          </h3>

          <p className="text-sm text-[#B9BBC2] line-clamp-2 leading-relaxed mb-6 font-light">
            {project.shortDescription}
          </p>
        </div>

        <div>
          {/* Technologies used — clean text format */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#B9BBC2]/80 mb-6 font-mono">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span key={tech} className="flex items-center">
                <span>{tech}</span>
                {idx < Math.min(project.technologies.length, 4) - 1 && (
                  <span className="ml-2 text-[#34353A]">/</span>
                )}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#34353A] flex items-center justify-between text-xs font-medium text-[#F5F4EF] group-hover:text-white transition-colors">
            <span className="group-hover:underline">View Case Study</span>
            <div
              style={{ borderColor: color.border }}
              className="w-7 h-7 rounded-full bg-[#101114] border flex items-center justify-center transition-colors"
            >
              <ArrowUpRight
                style={{ color: color.accent }}
                className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
