import { ExternalLink, Github, Layers3, UserRound } from "lucide-react";

export default function ProjectInfo({ project }) {
  if (!project) return null;

  const techStack = project.techStack || [];

  const ownerName =
    typeof project.owner === "object"
      ? project.owner?.name ||
        project.owner?.displayName ||
        project.owner?.email ||
        "Developer"
      : "Developer";

  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-[#11121a]/90 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
      {/* Title */}
      <div className="flex flex-col gap-5 border-b border-white/10 pb-7 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="mb-4 flex items-center gap-2 text-sm text-purple-300">
            <Layers3 size={16} />
            <span>Project Showcase</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            {project.title}
          </h1>

          <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
            <UserRound size={15} />
            <span>Created by {ownerName}</span>
          </div>
        </div>

        <div className="flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-gray-300 transition hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
            >
              <Github size={17} />
              GitHub
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
            >
              <ExternalLink size={17} />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="pt-7">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
          About this project
        </h2>

        <p className="mt-4 max-w-4xl text-base leading-8 text-gray-400">
          {project.description}
        </p>
      </div>

      {/* Tech stack */}
      <div className="pt-7">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
          Technology Stack
        </h2>

        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="rounded-xl border border-purple-500/20 bg-purple-500/10 px-3 py-2 text-sm text-purple-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
          <p className="text-xs text-gray-500">Likes</p>
          <p className="mt-1 text-xl font-semibold text-white">
            {project.likes ?? 0}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/3 p-4">
          <p className="text-xs text-gray-500">Technologies</p>
          <p className="mt-1 text-xl font-semibold text-white">
            {techStack.length}
          </p>
        </div>

        <div className="col-span-2 rounded-2xl border border-white/10 bg-white/3 p-4 md:col-span-1">
          <p className="text-xs text-gray-500">Status</p>
          <p className="mt-1 text-xl font-semibold text-emerald-400">
            Published
          </p>
        </div>
      </div>
    </section>
  );
}
