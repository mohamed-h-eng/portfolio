import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { PROFILE, PROJECTS, ProjectItem } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

interface WorkTabViewProps {
  onSelectProject: (project: ProjectItem) => void;
  onBackToInfo: () => void;
}

const CATEGORIES = [
  'All',
  'Full-Stack MERN',
  'Fintech & Security',
  'AI & Automation',
  'Database & Frontend',
] as const;

export const WorkTabView: React.FC<WorkTabViewProps> = ({
  onSelectProject,
  onBackToInfo,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filtered =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-8 sm:py-12 px-5 sm:px-8 lg:px-12 max-w-[980px]">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <p className="font-mono-code text-[11.5px] text-[#6b6b6b]">
          {'<!-- work.done • Repository & project archive -->'}
        </p>

        <button
          type="button"
          onClick={onBackToInfo}
          className="inline-flex items-center gap-1.5 font-mono-code text-[11.5px] text-[#9e9e9e] hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to {PROFILE.tabInfo}</span>
        </button>
      </div>

      <h1 className="font-display font-bold text-[34px] sm:text-[48px] leading-[1.06] tracking-[-0.03em]">
        <span className="text-[#f3f3f3]">Selected &amp; Archive </span>
        <span className="text-[#8a8a8a]">Projects</span>
      </h1>

      <p className="mt-4 max-w-2xl font-mono-code text-[13px] leading-[1.7] text-[#bdbdbd]">
        Curated full-stack systems, fintech wallets, AI document pipelines, relational
        databases, and security labs built across my GitHub repositories. Click any card to
        inspect its architecture.
      </p>

      {/* Filter pills */}
      <div className="mt-7 flex flex-wrap items-center gap-2">
        {CATEGORIES.map((cat) => {
          const active = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 font-mono-code text-[11.5px] border transition-colors cursor-pointer ${
                active
                  ? 'bg-[#f2f2f2] text-[#121212] border-[#f2f2f2] font-medium'
                  : 'bg-[#181818] text-[#9e9e9e] border-[#282828] hover:border-[#3d3d3d] hover:text-[#e5e5e5]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Project Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            compact
            onSelect={onSelectProject}
          />
        ))}
      </div>

      {/* GitHub profile archive bar */}
      <div className="mt-12 p-6 border border-[#262626] bg-[#141414] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="font-mono-code text-[11px] text-[#777777]">
            {'<!-- More repositories on GitHub -->'}
          </p>
          <p className="mt-1 font-mono-code text-[13px] text-[#dcdcdc]">
            Explore all 39 public repositories, C++ data structures, and DevOps labs on
            GitHub.
          </p>
        </div>

        <a
          href={PROFILE.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#f2f2f2] hover:bg-white text-[#121212] font-mono-code font-medium text-[12px] shrink-0 transition-colors"
        >
          <Github className="w-3.5 h-3.5" />
          <span>@mohamed-h-eng</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
