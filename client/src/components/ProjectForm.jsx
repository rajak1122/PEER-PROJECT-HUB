import { useEffect, useState } from "react";
import { Code2, FileText, Globe, Layers3, Save } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const emptyForm = {
  title: "",
  description: "",
  techStack: "",
  githubUrl: "",
  liveUrl: "",
};

export default function ProjectForm({
  initialData = {},
  onSubmit,
  loading = false,
  submitLabel = "Create Project",
}) {
  const [formData, setFormData] = useState({
    ...emptyForm,
    ...initialData,
    techStack: Array.isArray(initialData.techStack)
      ? initialData.techStack.join(", ")
      : initialData.techStack || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedData = {
      ...formData,
      techStack: formData.techStack
        .split(",")
        .map((tech) => tech.trim())
        .filter(Boolean),
    };

    const success = await onSubmit(formattedData);

    if (success) {
      setFormData({
        title: "",
        description: "",
        techStack: "",
        githubUrl: "",
        liveUrl: "",
      });
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-purple-500/50 focus:bg-white/[0.06] focus:ring-2 focus:ring-purple-500/10";

  return (
    <form
      onSubmit={handleSubmit}
      className="overflow-hidden rounded-3xl border border-white/10 bg-[#11121a]/90 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8"
    >
      {/* Heading */}
      <div className="mb-8">
        <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-purple-600/20 to-blue-600/20 text-purple-300">
          <Code2 size={21} />
        </div>

        <h2 className="text-2xl font-bold text-white">
          {submitLabel === "Create Project"
            ? "Share your project"
            : "Update your project"}
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Showcase what you built and help other developers discover it.
        </p>
      </div>

      <div className="space-y-5">
        {/* Title */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Project Title
          </label>

          <div className="relative">
            <Code2
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
            />

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. AI Resume Builder"
              required
              className={`${inputClass} pl-11`}
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Description
          </label>

          <div className="relative">
            <FileText
              size={17}
              className="absolute left-4 top-4 text-gray-600"
            />

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell the community what your project does..."
              rows={5}
              required
              className={`${inputClass} resize-none pl-11`}
            />
          </div>
        </div>

        {/* Tech stack */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Technology Stack
          </label>

          <div className="relative">
            <Layers3
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
            />

            <input
              type="text"
              name="techStack"
              value={formData.techStack}
              onChange={handleChange}
              placeholder="React, Node.js, MongoDB"
              required
              className={`${inputClass} pl-11`}
            />
          </div>

          <p className="mt-2 text-xs text-gray-600">
            Separate technologies with commas.
          </p>
        </div>

        {/* GitHub */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            GitHub Repository
          </label>

          <div className="relative">
            <FaGithub
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
            />

            <input
              type="url"
              name="githubUrl"
              value={formData.githubUrl}
              onChange={handleChange}
              placeholder="https://github.com/username/project"
              required
              className={`${inputClass} pl-11`}
            />
          </div>
        </div>

        {/* Live URL */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Live Demo
            <span className="ml-2 text-xs text-gray-600">(optional)</span>
          </label>

          <div className="relative">
            <Globe
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
            />

            <input
              type="url"
              name="liveUrl"
              value={formData.liveUrl}
              onChange={handleChange}
              placeholder="https://your-project.vercel.app"
              className={`${inputClass} pl-11`}
            />
          </div>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Save size={17} />

        {loading ? "Saving..." : submitLabel}
      </button>
    </form>
  );
}
