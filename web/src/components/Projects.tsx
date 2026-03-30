import { projects } from '../data/projects'
import type { Project } from '../data/projects'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-transform duration-300 hover:-translate-y-1 hover:border-white/20">
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0 z-10 rounded-2xl"
        aria-label={`${project.title} - open project link`}
      />

      <div className="relative z-0">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/20">
          <img
            src={project.imageSrc}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        </div>

        <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/75">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-gradient-to-r from-fuchsia-500/15 via-violet-500/10 to-cyan-400/10 px-3 py-1 text-xs text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs text-white/60">Open link</span>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:bg-white/10">
            <span className="text-white/80">↗</span>
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-r from-fuchsia-500/20 via-violet-500/20 to-cyan-400/15 blur-2xl" />
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0a0a0a] py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Projects
          </h2>
          <p className="max-w-prose text-base leading-relaxed text-white/75">
            项目展示：截图、标题、描述与技术栈标签一目了然。
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

