import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectForm from "../components/ProjectForm";
import { createProject } from "../utils/api";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateProject() {
  const { currentUser } = useAuth();

  const navigate = useNavigate();

  const [modal, setModal] = useState({
    show: false,
    type: "",
    message: "",
    projectId: null,
  });

  const handleCreateProject = async (formData) => {
    try {
      const projectData = {
        ...formData,
        firebaseUid: currentUser.uid,
      };

      console.log("PROJECT DATA:", projectData);

      const project = await createProject(projectData);

      console.log("PROJECT CREATED:", project);

      setModal({
        show: true,
        type: "success",
        message: "Project created successfully!",
        projectId: project._id,
      });

      return true;

    } catch (error) {
      console.error("CREATE PROJECT ERROR:", error);

      setModal({
        show: true,
        type: "error",
        message:
          error.response?.data?.message ||
          "Failed to create project. Please try again.",
        projectId: null,
      });

      return false;
      
    }
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-white">
      <Navbar />

      <main className="relative overflow-hidden pt-20">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 -top-45 h-105 w-175 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-45 top-100 h-87.5 w-87.5 rounded-full bg-blue-600/10 blur-[120px]" />

        <section className="relative mx-auto max-w-5xl px-5 pb-20 pt-14 md:px-8 md:pt-20">
          {/* Page heading */}
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/6 px-4 py-2 text-xs font-medium text-purple-300">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              Share something you built
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Create Your{" "}
              <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Project
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
              Showcase your work, share what you learned, and let other
              developers discover what you&apos;ve built.
            </p>
          </div>

          {/* Form */}
          <div className="mx-auto max-w-3xl">
            <ProjectForm
              onSubmit={handleCreateProject}
              // loading={loading}
              submitLabel="Create Project"
            />
          </div>

          {/* Bottom note */}
          <div className="mx-auto mt-6 flex max-w-3xl items-center justify-center gap-2 text-center text-xs text-gray-600">
            <span className="h-px w-8 bg-white/10" />
            Your project will be visible to the developer community
            <span className="h-px w-8 bg-white/10" />
          </div>
          {modal.show && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
              <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#111118] p-6 shadow-2xl">
                {modal.type === "success" ? (
                  <>
                    <h2 className="text-xl font-semibold text-white">
                      Project created successfully 🎉
                    </h2>

                    <p className="mt-2 text-sm text-gray-400">
                      Your project has been published successfully.
                    </p>

                    <div className="mt-6 flex justify-end gap-3">
                      <button
                        onClick={() => setModal({ ...modal, show: false })}
                        className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300"
                      >
                        Close
                      </button>

                      <button
                        onClick={() => navigate("/home")}
                        className="rounded-lg bg-linear-to-r from-purple-500 to-blue-500 px-4 py-2 text-sm font-medium text-white"
                      >
                        See your project
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-xl font-semibold text-white">
                      Something went wrong
                    </h2>

                    <p className="mt-2 text-sm text-gray-400">
                      {modal.message}
                    </p>

                    <div className="mt-6 flex justify-end">
                      <button
                        onClick={() => setModal({ ...modal, show: false })}
                        className="rounded-lg bg-linear-to-r from-purple-500 to-blue-500 px-4 py-2 text-sm font-medium text-white"
                      >
                        Try Again
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
