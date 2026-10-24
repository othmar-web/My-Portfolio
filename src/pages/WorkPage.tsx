import { useState, useMemo } from 'react';
import { Search, ArrowUpRight } from 'lucide-react';
import { STUDIO_PROJECTS } from '../data/config';
import ProjectCard from '../components/ProjectCard';
import { useNavigation } from '../context/NavigationContext';

const FILTER_CATEGORIES: { label: string; value: string }[] = [
  { label: 'All Projects', value: 'all' },
  { label: 'Business Websites', value: 'Business Websites' },
  { label: 'Cinematic & Premium', value: 'Cinematic & Premium Websites' },
  { label: 'Web Apps & Dashboards', value: 'Web Applications & SaaS Dashboards' },
  { label: 'E-commerce', value: 'E-commerce' },
  { label: 'SaaS Landing Pages', value: 'SaaS Landing Pages' },
  { label: 'Creator Portfolios & Kits', value: 'Creator Portfolios & Media Kits' },
];

export default function WorkPage() {
  const { navigate } = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return STUDIO_PROJECTS.filter((project) => {
      // Category match
      let matchesCategory = true;
      if (selectedFilter !== 'all') {
        matchesCategory = project.category === selectedFilter;
      }

      // Search query match
      let matchesQuery = true;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        matchesQuery =
          project.title.toLowerCase().includes(query) ||
          project.brandName.toLowerCase().includes(query) ||
          project.shortDescription.toLowerCase().includes(query) ||
          project.technologies.some((t) => t.toLowerCase().includes(query));
      }

      return matchesCategory && matchesQuery;
    });
  }, [selectedFilter, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-20 space-y-12">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C6FF4D]">
          <span>Portfolio Archive</span>
          <span className="text-[#34353A]" aria-hidden="true">/</span>
          <span className="text-[#B9BBC2] font-normal">Curated Works</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F5F4EF] tracking-tight leading-tight">
          Selected Works & Digital Case Studies
        </h1>
        <p className="text-base sm:text-lg text-[#B9BBC2] leading-relaxed font-light">
          Explore our production-grade digital builds across corporate business websites, cinematic platforms, complex web applications, and creator media kits.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4 pt-4 border-t border-[#34353A]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Segmented Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#22242A] border border-[#34353A] rounded-lg">
            {FILTER_CATEGORIES.map((cat) => {
              const isActive = selectedFilter === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedFilter(cat.value)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#C6FF4D] text-[#101114] font-semibold shadow-xs'
                      : 'text-[#B9BBC2] hover:text-[#F5F4EF]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B9BBC2]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, brand, or stack..."
              className="w-full pl-9 pr-4 py-2 bg-[#22242A] border border-[#34353A] rounded-lg text-xs text-[#F5F4EF] placeholder-[#B9BBC2]/60 focus:border-[#C6FF4D] transition-colors"
            />
          </div>
        </div>

        {/* Count Indicator */}
        <div className="flex items-center justify-between text-xs text-[#B9BBC2]">
          <span>
            Showing <strong className="text-[#F5F4EF] font-mono">{filteredProjects.length}</strong> of{' '}
            <strong className="text-[#F5F4EF] font-mono">{STUDIO_PROJECTS.length}</strong> projects
          </span>
          <span className="text-[11px] text-[#B9BBC2]/80 hidden sm:inline">
            All projects include dedicated technical stack & architectural analysis
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              featuredLayout={idx === 0 && selectedFilter === 'all'}
            />
          ))}
        </div>
      ) : (
        <div className="p-16 text-center bg-[#22242A] border border-[#34353A] rounded-2xl space-y-4">
          <p className="font-display text-xl font-bold text-[#F5F4EF]">
            No projects matched your criteria.
          </p>
          <p className="text-sm text-[#B9BBC2]">
            Try adjusting your search query or reset your category filter.
          </p>
          <button
            onClick={() => {
              setSelectedFilter('all');
              setSearchQuery('');
            }}
            className="px-5 py-2 text-xs font-semibold text-[#101114] bg-[#C6FF4D] rounded-md transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Bottom Conversion Prompt */}
      <div className="mt-16 p-8 md:p-12 bg-[#22242A] border border-[#34353A] rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h3 className="font-display text-2xl font-bold text-[#F5F4EF]">
            Have a project with similar requirements?
          </h3>
          <p className="text-sm text-[#B9BBC2] leading-relaxed">
            We can discuss your technical architecture, provide preliminary feasibility feedback, and prepare an itemized scope for your team.
          </p>
        </div>
        <button
          onClick={() => navigate('contact')}
          className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-[#101114] bg-[#C6FF4D] hover:bg-[#d4ff6e] transition-colors rounded-md cursor-pointer whitespace-nowrap shrink-0"
        >
          <span>Start a Project</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
