import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { ProjectVisual } from './ProjectVisual';

interface ProjectCardProps {
  project: ProjectItem;
  compact?: boolean;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  compact = false,
  onSelect,
}) => {
  return (
    <article
      onClick={() => onSelect(project)}
      className="group border border-[#272727] bg-[#141414] hover:border-[#3d3d3d] transition-colors cursor-pointer flex flex-col overflow-hidden"
    >
      {/* Top header strip matching Image 1 & Image 3 */}
      <div className="px-4 py-3 border-b border-[#252525] flex items-center justify-between gap-3 bg-[#151515]">
        <h3 className="font-mono-code text-[12.5px] font-medium text-[#ececec] truncate">
          {project.shortTitle}
        </h3>
        <a
          href={project.liveUrl ?? project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`Open ${project.shortTitle}`}
          className="text-[#b5b5b5] group-hover:text-white transition-transform duration-200 group-hover:translate-x-0.5 shrink-0"
        >
          {project.liveUrl ? (
            <ArrowUpRight className="w-4 h-4" />
          ) : (
            <ArrowRight className="w-4 h-4" />
          )}
        </a>
      </div>

      {/* Preview Visual */}
      <div
        className={`relative w-full overflow-hidden ${
          compact ? 'h-52 sm:h-56' : 'aspect-[4/3]'
        }`}
      >
        <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.02]">
          <ProjectVisual projectId={project.id} />
        </div>
      </div>

      {/* Subtle footer metadata in compact / archive mode */}
      {compact && (
        <div className="p-4 border-t border-[#232323] flex-1 flex flex-col justify-between gap-3 bg-[#151515]">
          <p className="font-mono-code text-[11.5px] leading-relaxed text-[#a8a8a8]">
            {project.summary}
          </p>
          <div className="flex flex-wrap items-center gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-[#1d1d1d] border border-[#2a2a2a] font-mono-code text-[10px] text-[#c8c8c8]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};
