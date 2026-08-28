import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  fetchUser,
  getProjectsByUserId,
  deleteProjectById,
} from "../utils/api";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const [fetchedUser, setFetcheduser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userProjects, setUserProjects] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

  useEffect(() => {
    const fetchUserFromDB = async () => {
      try {
        setLoading(true);

        const userData = await fetchUser(currentUser.uid);

        setFetcheduser(userData);
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (currentUser?.uid) {
      fetchUserFromDB();
    }
  }, [currentUser]);

  useEffect(() => {
    const fetchUserProjectsFromDB = async () => {
      try {
        setLoading(true);

        const userProjectsFromDB = await getProjectsByUserId(fetchedUser._id);

        setUserProjects(userProjectsFromDB);
      } catch (error) {
        console.error("Failed to fetch user projects:", error);
      } finally {
        setLoading(false);
      }
    };
    if (fetchedUser?._id) {
      fetchUserProjectsFromDB();
    }
  }, [fetchedUser]);

  const deleteProjectOnProfile = async () => {
    try {
      await deleteProjectById(projectToDelete._id);

      setUserProjects((prevProjects) =>
        prevProjects.filter((project) => project._id !== projectToDelete._id),
      );

      setShowDeleteModal(false);
      setProjectToDelete(null);
    } catch (error) {
      console.error("Failed to delete project:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-28">
        {/* Profile Header */}
        <section className="border border-white/10 bg-[#0d0e13] rounded-2xl p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center text-3xl font-bold shadow-lg shadow-purple-500/20">
              {fetchedUser?.name.charAt(0)}
            </div>

            {/* User Details */}
            <div className="text-center sm:text-left flex-1">
              <h1 className="text-3xl font-bold">{fetchedUser?.name}</h1>

              <p className="text-gray-400 mt-2">{fetchedUser?.email}</p>

              <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-2">
                <span className="px-3 py-1 rounded-full text-sm bg-white/5 text-gray-400 border border-white/10">
                  ID: {fetchedUser?.userId}
                </span>

                <span className="px-3 py-1 rounded-full text-sm bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  Student
                </span>

                <span className="px-3 py-1 rounded-full text-sm bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  Developer
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">My Projects</h2>

              <p className="text-gray-400 text-sm mt-1">
                Projects you have created on PPH
              </p>
            </div>

            <button
              onClick={() => navigate("/projects/new")}
              className="px-4 py-2 rounded-lg bg-linear-to-r from-purple-600 to-blue-600 hover:opacity-90 transition font-medium"
            >
              + Create Project
            </button>
          </div>

          {/* Project Grid */}
          {userProjects?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userProjects.map((project) => (
                <div
                  key={project._id}
                  className="group border border-white/10 bg-[#0d0e13] rounded-2xl p-6 hover:border-purple-500/30 transition"
                >
                  {/* Title */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold group-hover:text-purple-400 transition">
                      {project.title}
                    </h3>

                    <span className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-400">
                      Project
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-6 mt-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-lg border border-white/10 bg-white/5 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={() => navigate(`/projects/${project._id}`)}
                      className="flex-1 px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition"
                    >
                      View Project
                    </button>

                    <button
                      onClick={() => navigate(`/projects/${project._id}/edit`)}
                      className="flex-1 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition"
                    >
                      Edit Project
                    </button>

                    <button
                      onClick={() => {
                        setProjectToDelete(project);
                        setShowDeleteModal(true);
                      }}
                      className="px-4 py-2 rounded-lg border border-red-500/20 text-red-400 hover:bg-red-500/10 transition"
                      title="Delete Project"
                    >
                      <FaTrash size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="border border-dashed border-white/10 rounded-2xl py-16 text-center">
              <h3 className="text-lg font-semibold">No projects yet</h3>

              <p className="text-gray-400 text-sm mt-2">
                Start by creating your first project.
              </p>

              <button
                onClick={() => navigate("/projects/new")}
                className="mt-5 px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 transition"
              >
                Create Project
              </button>
            </div>
          )}
        </section>
      </main>

      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0d0e13] p-6 shadow-2xl">
            <h2 className="text-xl font-semibold text-white">Delete Project</h2>

            <p className="mt-3 text-sm text-gray-400">
              Are you sure you want to delete this project?
            </p>

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setProjectToDelete(null);
                }}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={deleteProjectOnProfile}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
