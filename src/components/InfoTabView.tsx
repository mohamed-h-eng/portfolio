import React, { useState } from 'react';
import { Check, Copy, Github, LayoutGrid, Linkedin, Mail, Rows2 } from 'lucide-react';
import {
  CAPABILITIES,
  PROFILE,
  PROJECTS,
  ProjectItem,
  TECH_STACK,
  TIMELINE,
} from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { WatermarkBanner } from './WatermarkBanner';
import { DownloadCvButton } from './DownloadCvButton';
import { ProfileAvatar } from './ProfileAvatar';
import { TechIcon } from './TechIcon';

interface InfoTabViewProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenWorkTab: () => void;
}

export const InfoTabView: React.FC<InfoTabViewProps> = ({
  onSelectProject,
  onOpenWorkTab,
}) => {
  const [gridLayout, setGridLayout] = useState<'two-col' | 'detailed'>('two-col');
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const featuredProjects = PROJECTS.filter((p) => p.featured);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullName = `${formState.firstName} ${formState.lastName}`.trim();
    const subjectLine =
      formState.subject.trim() || `Portfolio Inquiry from ${fullName || 'Website Visitor'}`;
    const bodyLines = [
      `Name: ${fullName || 'N/A'}`,
      `Email: ${formState.email}`,
      '',
      formState.message,
    ].join('\n');

    const mailtoHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(bodyLines)}`;

    window.location.href = mailtoHref;
    setSubmitted(true);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  return (
    <div className="py-8 sm:py-12 px-5 sm:px-8 lg:px-12 max-w-[980px]">
      {/* <!-- Hero section --> */}
      <section aria-label="Hero">
        <p className="font-mono-code text-[11.5px] text-[#6b6b6b] mb-4">
          {'<!-- Hero section -->'}
        </p>

        <h1 className="font-display font-bold text-[38px] sm:text-[56px] lg:text-[66px] leading-[1.04] tracking-[-0.03em]">
          <span className="block text-[#f3f3f3]">{PROFILE.heroTitleWhite}</span>
          <span className="block text-[#8a8a8a] mt-1">{PROFILE.heroTitleMuted}</span>
        </h1>

        <p className="mt-6 max-w-2xl font-mono-code text-[13px] sm:text-[13.5px] leading-[1.75] text-[#c6c6c6]">
          {PROFILE.heroSubtitle}
        </p>
      </section>

      {/* <!-- Featured work --> */}
      <section id="work" className="mt-16 sm:mt-20 scroll-mt-16">
        <div className="flex items-center justify-between mb-5">
          <p className="font-mono-code text-[11.5px] text-[#6b6b6b]">
            {'<!-- Featured work -->'}
          </p>

          {/* Grid layout switcher matching Image 1 */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setGridLayout('two-col')}
              aria-label="Two-column gallery layout"
              className={`p-1.5 border transition-colors cursor-pointer ${
                gridLayout === 'two-col'
                  ? 'border-[#3c3c3c] bg-[#242424] text-[#f2f2f2]'
                  : 'border-[#242424] bg-[#181818] text-[#6f6f6f] hover:text-[#bcbcbc]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setGridLayout('detailed')}
              aria-label="Detailed cards layout"
              className={`p-1.5 border transition-colors cursor-pointer ${
                gridLayout === 'detailed'
                  ? 'border-[#3c3c3c] bg-[#242424] text-[#f2f2f2]'
                  : 'border-[#242424] bg-[#181818] text-[#6f6f6f] hover:text-[#bcbcbc]'
              }`}
            >
              <Rows2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div
          className={`grid gap-5 ${
            gridLayout === 'two-col' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
          }`}
        >
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              compact={gridLayout === 'detailed'}
              onSelect={onSelectProject}
            />
          ))}
        </div>

        {/* Right-aligned View all works block matching Image 3 */}
        <div className="mt-7 flex flex-col items-end text-right gap-3">
          <p className="max-w-xs font-mono-code text-[11px] leading-relaxed text-[#7c7c7c]">
            Explore full-stack platforms, atomic wallets, and AI workflows built end to end.
          </p>
          <button
            type="button"
            onClick={onOpenWorkTab}
            className="px-5 py-2.5 bg-[#f2f2f2] hover:bg-white text-[#121212] font-mono-code font-medium text-[12px] transition-colors cursor-pointer"
          >
            View all works
          </button>
        </div>
      </section>

      {/* SINCE 2023 Watermark Divider */}
      <WatermarkBanner topWord="SINCE" bottomWord={PROFILE.sinceYear} />

      {/* <!-- About me section --> */}
      <section id="about" className="scroll-mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-8">
            <p className="font-mono-code text-[11.5px] text-[#6b6b6b] mb-3">
              {'<!-- About me section -->'}
            </p>

            <h2 className="font-display font-bold text-[30px] sm:text-[38px] leading-[1.12] tracking-[-0.025em]">
              <span className="text-[#f3f3f3]">Inside My </span>
              <span className="text-[#8a8a8a]">Engineering Core</span>
            </h2>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono-code text-[12.5px] leading-[1.78] text-[#c2c2c2]">
              <p>
                I&apos;m a{' '}
                <span className="code-highlight">Full-Stack Software Developer</span>{' '}
                experienced in building web applications with React, Node.js, Express, and
                MongoDB — with a focus on secure APIs, relational &amp; document data
                integrity, and maintainable architecture.
              </p>
              <p>
                I enjoy collaborating with teams, solving real systems problems, and{' '}
                <span className="code-highlight">integrating AI workflows</span> such as
                document chunking and n8n batch pipelines into reliable full-stack solutions.
              </p>
            </div>

            <div className="mt-7">
              <DownloadCvButton />
            </div>
          </div>

          {/* Portrait + Follow me card matching Image 2 & Image 3 */}
          <div className="lg:col-span-4 w-full max-w-[240px] lg:ml-auto">
            <div className="border border-[#272727] bg-[#141414]">
              <ProfileAvatar size="lg" className="w-full aspect-[4/4.3]" />
              <div className="px-4 py-3 border-t border-[#262626] flex items-center justify-between font-mono-code text-[12px] text-[#d4d4d4]">
                <span>Follow me:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={PROFILE.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="text-[#b5b5b5] hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="text-[#b5b5b5] hover:text-white transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    aria-label="Send email"
                    className="text-[#b5b5b5] hover:text-white transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- In a previous life --> */}
      <section id="experience" className="mt-20 sm:mt-24 scroll-mt-16">
        <p className="font-mono-code text-[11.5px] text-[#6b6b6b] mb-6">
          {'<!-- In a previous life -->'}
        </p>

        <div className="divide-y divide-[#232323] border-b border-[#232323]">
          {TIMELINE.map((item) => (
            <div
              key={`${item.period}-${item.organization}`}
              className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline"
            >
              <div className="sm:col-span-3 font-mono-code font-semibold text-[13.5px] text-[#ededed]">
                {item.period}
              </div>

              <div className="sm:col-span-5">
                <h3 className="font-display font-semibold text-[15px] text-[#f2f2f2]">
                  {item.role}
                </h3>
                <p className="mt-1 font-mono-code text-[11.5px] leading-relaxed text-[#888888]">
                  {item.summary}
                </p>
              </div>

              <div className="sm:col-span-4 sm:text-right font-mono-code text-[13px] text-[#bdbdbd]">
                {item.organizationUrl ? (
                  <a
                    href={item.organizationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white underline decoration-[#3b3b3b] underline-offset-4 transition-colors"
                  >
                    {item.organization}
                  </a>
                ) : (
                  item.organization
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <!-- What I do --> */}
      <section id="services" className="mt-20 sm:mt-24 scroll-mt-16">
        <p className="font-mono-code text-[11.5px] text-[#6b6b6b] mb-6">
          {'<!-- What I do -->'}
        </p>

        <div className="divide-y divide-[#232323]">
          {CAPABILITIES.map((group) => (
            <div key={group.number} className="py-7 first:pt-0 last:pb-0">
              <h3 className="font-display font-semibold text-[17px] text-[#f2f2f2] mb-4">
                {group.number}. {group.title}
              </h3>

              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono-code text-[12px] leading-relaxed text-[#a8a8a8] flex items-start gap-2"
                  >
                    <span className="text-[#666666]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* <!-- My tech stack --> */}
      <section id="stack" className="mt-20 sm:mt-24 scroll-mt-16">
        <p className="font-mono-code text-[11.5px] text-[#6b6b6b] mb-6">
          {'<!-- My tech stack -->'}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.id}
              className="aspect-square bg-[#1b1b1b] border border-[#262626] hover:border-[#3c3c3c] p-3 flex flex-col justify-between transition-colors"
            >
              <span className="font-mono-code text-[11px] text-[#a0a0a0] truncate">
                {tech.name}
              </span>
              <div className="flex items-center justify-center my-auto">
                <TechIcon id={tech.id} />
              </div>
              <span className="font-mono-code text-[9.5px] text-[#666666] text-right">
                {tech.tag}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* KEEP GOING Watermark Divider matching Image 3 */}
      <WatermarkBanner topWord="KEEP" bottomWord="GOING" invertColumns />

      {/* <!-- Get in touch --> */}
      <section id="contact" className="pb-10 scroll-mt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <p className="font-mono-code text-[11.5px] text-[#6b6b6b] mb-3">
              {'<!-- Get in touch -->'}
            </p>

            <h2 className="font-display font-bold text-[34px] sm:text-[42px] leading-[1.08] tracking-[-0.025em]">
              <span className="block text-[#f3f3f3]">Let&apos;s Work</span>
              <span className="block text-[#8a8a8a]">Together</span>
            </h2>

            <p className="mt-5 font-mono-code text-[12px] leading-relaxed text-[#9e9e9e]">
              Have a project, role, or backend/full-stack challenge in mind? Fill out the
              form to message me directly at{' '}
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-[#e2e2e2] underline decoration-[#444444] underline-offset-4 hover:text-white"
              >
                {PROFILE.email}
              </a>
              .
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="md:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="sr-only">
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  required
                  placeholder="First name"
                  value={formState.firstName}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, firstName: e.target.value }))
                  }
                  className="w-full bg-transparent border-b border-[#2e2e2e] focus:border-[#e5e5e5] py-3 font-mono-code text-[12.5px] text-[#f0f0f0] placeholder:text-[#6f6f6f] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="sr-only">
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  value={formState.lastName}
                  onChange={(e) =>
                    setFormState((s) => ({ ...s, lastName: e.target.value }))
                  }
                  className="w-full bg-transparent border-b border-[#2e2e2e] focus:border-[#e5e5e5] py-3 font-mono-code text-[12.5px] text-[#f0f0f0] placeholder:text-[#6f6f6f] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Email address"
                value={formState.email}
                onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                className="w-full bg-transparent border-b border-[#2e2e2e] focus:border-[#e5e5e5] py-3 font-mono-code text-[12.5px] text-[#f0f0f0] placeholder:text-[#6f6f6f] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                required
                placeholder="Subject"
                value={formState.subject}
                onChange={(e) => setFormState((s) => ({ ...s, subject: e.target.value }))}
                className="w-full bg-transparent border-b border-[#2e2e2e] focus:border-[#e5e5e5] py-3 font-mono-code text-[12.5px] text-[#f0f0f0] placeholder:text-[#6f6f6f] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                placeholder="Message"
                value={formState.message}
                onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                className="w-full bg-transparent border-b border-[#2e2e2e] focus:border-[#e5e5e5] py-3 font-mono-code text-[12.5px] text-[#f0f0f0] placeholder:text-[#6f6f6f] focus:outline-none resize-y transition-colors"
              />
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="px-6 py-2.5 bg-[#f2f2f2] hover:bg-white text-[#121212] font-mono-code font-medium text-[12px] transition-colors cursor-pointer"
              >
                Send message
              </button>

              {submitted && (
                <div className="flex flex-wrap items-center gap-3 font-mono-code text-[11.5px] text-[#a3d977]">
                  <span>Opening your mail client to {PROFILE.email}</span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-[#2f2f2f] bg-[#1c1c1c] text-[#dcdcdc] hover:text-white cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-[#4ade80]" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy email</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
