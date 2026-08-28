import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import ProjectForm from "../components/ProjectForm";

import { getProjectById, updateProjectById } from "../utils/api";

export default function EditProject() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Fetch existing project
  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getProjectById(projectId);

        setProject(data);
      } catch (error) {
        console.error("Failed to fetch project:", error);
        setError("Failed to load project.");
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      fetchProject();
    }
  }, [projectId]);

  // Update project
  const handleUpdateProject = async (formData) => {
    try {
      setSaving(true);
      setError("");

      await updateProjectById(projectId, formData);

      // Go to project details after successful update
      navigate(`/projects/${projectId}`);

      return true;
    } catch (error) {
      console.error("Failed to update project:", error);

      setError(
        error.response?.data?.message ||
          "Failed to update project. Please try again.",
      );

      return false;
    } finally {
      setSaving(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-[#08090d] text-white">
        <Navbar />

        <main className="mx-auto flex max-w-3xl items-center justify-center px-6 py-20">
          <div className="text-center">
            <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-purple-500" />

            <p className="text-sm text-gray-500">Loading project...</p>
          </div>
        </main>
      </div>
    );
  }

  // Project not found / fetch error
  if (error && !project) {
    return (
      <div className="min-h-screen bg-[#08090d] text-white">
        <Navbar />

        <main className="mx-auto max-w-3xl px-6 py-20">
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 text-center">
            <p className="text-sm text-red-400">{error}</p>

            <button
              onClick={() => navigate(-1)}
              className="mt-5 rounded-xl bg-white/10 px-5 py-2.5 text-sm text-white transition hover:bg-white/15"
            >
              Go Back
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#08090d] text-white">
      <Navbar />

      <main className="mx-auto max-w-3xl px-6 py-10 md:py-14">
        {/* Page Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-purple-400">
            Project Settings
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-white">
            Edit Project
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Update your project details and keep your showcase up to date.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-5 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3">
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}

        {/* Project Form */}
        {project && (
          <ProjectForm
            initialData={project}
            onSubmit={handleUpdateProject}
            loading={saving}
            submitLabel="Update Project"
          />
        )}
      </main>
    </div>
  );
}
