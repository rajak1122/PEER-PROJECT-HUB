import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserRound } from "lucide-react";
import {
  getProjectById,
  getCommentsByProjectId,
  createComment,
} from "../utils/api";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CommentForm from "../components/CommentForm";
import CommentList from "../components/CommentList";

export default function ProjectDetails() {
  const { id } = useParams();
  console.log("Project ID:", id);
  const { currentUser } = useAuth();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [commentLoading, setCommentLoading] = useState(false);
  const [loggeduser, setLoggeduser] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getProjectById(id);
        setProject(data);
      } catch (error) {
        console.error("Failed to fetch project:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentData = await getCommentsByProjectId(id);
        setComments(commentData);
      } catch (error) {
        console.error("Failed to fetch comments for this project:", error);
      }
    };

    fetchComments();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  console.log(project);

  const formatTimeAgo = (date) => {
    const diffInSeconds = Math.floor((new Date() - new Date(date)) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds}s ago`;
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);

    if (diffInMinutes < 60) {
      return `${diffInMinutes} min ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);

    if (diffInHours < 24) {
      return `${diffInHours} hr ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays < 30) {
      return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
    }

    const diffInMonths = Math.floor(diffInDays / 30);

    if (diffInMonths < 12) {
      return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
    }

    const diffInYears = Math.floor(diffInDays / 365);

    return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
  };

  const handleAddComment = async (commentText) => {
    try {
      if (!currentUser?.uid) {
        setLoggeduser(false);
        console.error("User not available");
        return;
      }
      const newComment = await createComment(id, currentUser.uid, commentText);

      setComments((prevComments) => [...prevComments, newComment]);
    } catch (error) {
      console.error("Failed to add comment:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-white">
      <Navbar />

      <main className="mx-auto max-w-5xl px-5 py-28">
        <h1 className="text-4xl font-bold">{project.title}</h1>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-gray-500">
          {/* Owner */}
          <span className="inline-flex items-center gap-2 rounded-xl border border-gray-700/70 bg-gray-900/60 px-3 py-2 text-gray-300">
            <UserRound className="h-4 w-4 shrink-0 text-gray-400" />

            <span className="text-[12px] sm:text-sm">
              Posted by{" "}
              <span className="font-medium text-gray-200">
                {project.owner?.name || "Unknown User"}
              </span>
            </span>
          </span>

          {/* Posted time */}
          <span className="hidden sm:inline text-gray-600">•</span>

          <span className="whitespace-nowrap text-xs sm:text-sm">
            Posted {formatTimeAgo(project.createdAt)}
          </span>

          {/* Updated time */}
          {project.updatedAt && (
            <>
              <span className="hidden sm:inline text-gray-600">•</span>

              <span className="whitespace-nowrap text-xs sm:text-sm">
                Updated {formatTimeAgo(project.updatedAt)}
              </span>
            </>
          )}
        </div>

        <p className="mt-4 text-gray-400">{project.description}</p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack?.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-white/10 px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-8 flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-white/10 px-4 py-2"
            >
              GitHub
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-purple-600 px-4 py-2"
            >
              Live Demo
            </a>
          )}
        </div>

        {/* Comments */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-white">Comments</h2>

          <p className="mt-1 text-sm text-gray-500">
            What do you think about this project?
          </p>

          {/* Add Comment */}
          <div className="mt-6">
            <CommentForm
              loggeduser={loggeduser}
              onSubmit={handleAddComment}
              loading={commentLoading}
            />
          </div>

          {/* Comments */}
          <div className="mt-6">
            <CommentList comments={comments} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
