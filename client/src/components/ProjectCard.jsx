import { Code2, UserRound } from "lucide-react";
import ProjectActions from "./ProjectActions";

export default function ProjectCard({
  project,
  isOwner = false,
  onLike,
  onEdit,
  onDelete,
}) {
  const techStack = project?.techStack || [];

  const ownerName =
    typeof project?.owner === "object"
      ? project.owner?.name ||
        project.owner?.displayName ||
        project.owner?.email ||
        "Developer"
      : "Developer";

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#11121a]/90 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-purple-950/20">
      {/* Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-purple-600/10 blur-3xl transition duration-500 group-hover:bg-purple-600/20" />

      {/* Header */}
      <div className="relative flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-purple-600/20 to-blue-600/20 text-purple-300 ring-1 ring-white/10">
            <Code2 size={20} />
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-lg font-semibold text-white">
              {project?.title}
            </h2>

            <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
              <UserRound size={13} />
              <span className="truncate">{ownerName}</span>
            </div>
          </div>
        </div>

        <span className="shrink-0 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-[11px] font-medium text-purple-300">
          Project
        </span>
      </div>

      {/* Description */}
      <p className="relative mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
        {project?.description}
      </p>

      {/* Tech stack */}
      {techStack.length > 0 && (
        <div className="relative mt-5 flex flex-wrap gap-2">
          {techStack.slice(0, 5).map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="rounded-lg border border-white/10 bg-white/4 px-2.5 py-1 text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}

          {techStack.length > 5 && (
            <span className="rounded-lg bg-white/4 px-2.5 py-1 text-xs text-gray-500">
              +{techStack.length - 5}
            </span>
          )}
        </div>
      )}

      <ProjectActions
        project={project}
        isOwner={isOwner}
        onLike={onLike}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </article>
  );
}
