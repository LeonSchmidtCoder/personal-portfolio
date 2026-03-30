import projects from "../data/projects";
import type { Project } from "../data/projects";

/** 单张项目卡片 */
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 transition-colors hover:border-purple-500/50">
      {/* 项目截图 */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* hover 遮罩 + 链接 */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-purple-500 px-4 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90"
            >
              在线预览
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-neutral-500 px-4 py-2 text-xs font-medium text-neutral-200 transition-colors hover:border-white hover:text-white"
            >
              源代码
            </a>
          )}
        </div>
      </div>

      {/* 卡片内容 */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-lg font-semibold text-white">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-400">
          {project.description}
        </p>

        {/* 技术栈标签 */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/** 项目展示区块 */
const Projects = () => {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* 标题 */}
        <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            项目展示
          </span>
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-neutral-400">
          精选部分个人项目，涵盖前端、全栈与 AI 方向。
        </p>

        {/* 项目网格 */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
