import { useMemo, useState, useEffect } from "react";
import {
  ArrowRight,
  FolderGit2,
  Search,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { getProjects } from "../utils/api";

import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("Latest");
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.log("Failed to fetch projects: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
    return;
  }, []);

  const filteredProjects = useMemo(() => {
    let result = [...projects];

    // Search
    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter((project) => {
        const title = project.title?.toLowerCase() || "";
        const description = project.description?.toLowerCase() || "";

        const technologies = Array.isArray(project.technologies)
          ? project.technologies.join(" ").toLowerCase()
          : "";

        return (
          title.includes(query) ||
          description.includes(query) ||
          technologies.includes(query)
        );
      });
    }

    // Filter
    if (activeFilter === "Popular") {
      result.sort((a, b) => (b.likes ?? 0) - (a.likes ?? 0));
    }

    return result;
  }, [projects, search, activeFilter]);

  return (
    <div className="min-h-screen bg-[#08090d] text-white">
      <Navbar />

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-[10%] top-20 h-72 w-72 rounded-full bg-purple-700/10 blur-[120px]" />
        <div className="absolute right-[5%] top-[35%] h-80 w-80 rounded-full bg-blue-700/10 blur-[140px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-24 md:px-8">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-[#13131d] via-[#10111a] to-[#0b0c12] px-6 py-10 shadow-2xl shadow-black/30 md:px-10 md:py-14">
          {/* Decorative glow */}
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-600/20 blur-[100px]" />
          <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-blue-600/10 blur-[110px]" />

          <div className="relative max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-300">
              <Sparkles size={14} />
              Discover what your peers are building
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Explore.
              <span className="block bg-linear-to-r from-purple-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                Learn. Build.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
              Discover projects built by students, explore new technologies, get
              inspired and find ideas for your next build.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 px-4 py-3">
                <FolderGit2 size={18} className="text-purple-400" />
                <div>
                  <p className="text-sm font-semibold text-white">1200+</p>
                  <p className="text-[11px] text-gray-500">Projects</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 px-4 py-3">
                <Users size={18} className="text-blue-400" />
                <div>
                  <p className="text-sm font-semibold text-white">500+</p>
                  <p className="text-[11px] text-gray-500">Developers</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 px-4 py-3">
                <TrendingUp size={18} className="text-emerald-400" />
                <div>
                  <p className="text-sm font-semibold text-white">3K+</p>
                  <p className="text-[11px] text-gray-500">Interactions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feed controls */}
        <section className="mt-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-purple-400">
                Project Feed
              </p>

              <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                Explore Projects
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Fresh ideas from the developer community.
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full md:max-w-sm">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search projects, tech..."
                className="w-full rounded-2xl border border-white/10 bg-white/4 py-3.5 pl-11 pr-4 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-purple-500/40 focus:bg-white/6"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {["Latest", "Popular"].map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                    activeFilter === filter
                      ? "bg-white text-black"
                      : "border border-white/10 bg-white/3 text-gray-500 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <span className="text-xs text-gray-600">
              {filteredProjects.length} projects
            </span>
          </div>
        </section>

        {/* Feed */}
        <section className="mt-6">
          {filteredProjects.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project._id}
                  project={project}
                  onLike={() => console.log("Like project:", project._id)}
                />
              ))}
            </div>
          ) : (
            <div className="flex min-h-75 flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/2text-center">
              <Search size={28} className="text-gray-600" />

              <h3 className="mt-4 text-lg font-semibold text-white">
                No projects found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try searching for another project or technology.
              </p>
            </div>
          )}
        </section>

        {/* Bottom CTA */}
        <section className="mt-14 overflow-hidden rounded-3xl border border-purple-500/20 bg-linear-to-r from-purple-600/10 via-[#11121a] to-blue-600/10 p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-purple-400">
                Got something to share?
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                Turn your idea into something people can explore.
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Share your project and inspire another developer.
              </p>
            </div>

            <Link
              to="/projects/new"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition hover:opacity-90"
            >
              Share Project
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
