import React, { useEffect } from 'react';
import { ArrowUpRight, Github, X } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { ProjectVisual } from './ProjectVisual';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#161616] border border-[#2e2e2e] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal IDE Header */}
        <div className="px-5 py-3.5 bg-[#121212] border-b border-[#262626] flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-[11px] font-mono-code text-[#6f6f6f]">
              {`<!-- ${project.category} • ${project.period} -->`}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="p-1 text-[#8f8f8f] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-5">
          <div className="h-56 sm:h-64 border border-[#262626] overflow-hidden">
            <ProjectVisual projectId={project.id} />
          </div>

          <div>
            <h3
              id="modal-project-title"
              className="font-display font-bold text-xl sm:text-2xl text-[#f4f4f4] tracking-tight"
            >
              {project.title}
            </h3>
            <p className="mt-2 font-mono-code text-[12.5px] leading-relaxed text-[#bdbdbd]">
              {project.summary}
            </p>
          </div>

          <div>
            <p className="font-mono-code text-[11px] text-[#787878] mb-2.5">
              {'<!-- Engineering highlights -->'}
            </p>
            <ul className="space-y-2">
              {project.highlights.map((bullet) => (
                <li
                  key={bullet}
                  className="font-mono-code text-[12px] leading-relaxed text-[#cfcfcf] flex items-start gap-2.5"
                >
                  <span className="text-[#b8c96c] mt-0.5">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-[#1e1e1e] border border-[#2d2d2d] font-mono-code text-[11px] text-[#d6d6d6]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-[#252525] flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#f2f2f2] hover:bg-white text-[#121212] font-mono-code font-medium text-[12px] transition-colors"
              >
                <span>Open Live App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1d1d1d] hover:bg-[#262626] border border-[#323232] text-[#efefef] font-mono-code text-[12px] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View GitHub Repo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
