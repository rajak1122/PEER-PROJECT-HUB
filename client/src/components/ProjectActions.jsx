import { ExternalLink, Heart, Pencil, Trash2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ProjectActions({
  project,
  isOwner = false,
  onClick,
  onEdit,
  onDelete,
}) {
  const navigate = useNavigate();

  const projectId = project?._id || project?.id;

  return (
    <div className="flex mt-3 items-center justify-between gap-3 pt-4 border-t border-white/10">
      {/* Like */}
      <button
        type="button"
        onClick={onClick}
        className="group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-gray-400 transition hover:bg-white/5 hover:text-pink-400"
      >
        <Heart
          size={18}
          className="transition-transform duration-200 group-hover:scale-110"
        />
        <span>{project?.likes ?? 0}</span>
      </button>

      <div className="flex items-center gap-2">
        {/* GitHub */}
        {project?.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:border-purple-500/40 hover:bg-purple-500/10 hover:text-white"
            title="GitHub"
          >
            <FaGithub size={18} />
          </a>
        )}

        {/* Live Demo */}
        {project?.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
            title="Live Demo"
          >
            <ExternalLink size={17} />
          </a>
        )}

        {/* Owner actions */}
        {isOwner && (
          <>
            <button
              type="button"
              onClick={onEdit}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400"
              title="Edit project"
            >
              <Pencil size={16} />
            </button>

            <button
              type="button"
              onClick={onDelete}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-400"
              title="Delete project"
            >
              <Trash2 size={16} />
            </button>
          </>
        )}

        {/* Details */}
        <button
          type="button"
          onClick={() => navigate(`/projects/${projectId}`)}
          className="rounded-xl bg-linear-to-r from-purple-600 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-purple-900/20 transition hover:scale-[1.02] hover:shadow-purple-900/40"
        >
          View
        </button>
      </div>
    </div>
  );
}
