import { Link } from "react-router-dom";
import { FiHome, FiCompass, FiUser, FiPlus } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50
        border-b border-white/10
        bg-[#050507]/80 backdrop-blur-xl"
    >
      <div
        className="max-w-7xl mx-auto px-6 h-20
          flex items-center justify-between"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl
              bg-linear-to-br from-violet-600 to-blue-600
              flex items-center justify-center
              font-bold text-lg"
          >
            &lt;/&gt;
          </div>

          <div>
            <h1 className="font-bold tracking-tight">PPH</h1>

            <p className="text-[9px] tracking-[0.25em] text-gray-500">
              PEER PROJECT HUB
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 rounded-xl
    text-sm text-gray-300
    bg-white/4 border border-white/8
    backdrop-blur-md
    hover:bg-white/9 hover:border-white/15
    hover:text-white
    transition-all duration-300"
          >
            <FiHome className="text-base" />
            <span>Home</span>
          </Link>

          <Link
            to="/home"
            className="flex items-center gap-2 px-4 py-2 rounded-xl
    text-sm text-gray-300
    bg-white/4 border border-white/8
    backdrop-blur-md
    hover:bg-white/9 hover:border-white/15
    hover:text-white
    transition-all duration-300"
          >
            <FiCompass className="text-base" />
            <span>Explore Projects</span>
          </Link>

          <Link
            to="/profile/:userId"
            className="flex items-center gap-2 px-4 py-2 rounded-xl
    text-sm text-gray-300
    bg-white/4 border border-white/8
    backdrop-blur-md
    hover:bg-white/9 hover:border-white/15
    hover:text-white
    transition-all duration-300"
          >
            <FiUser className="text-base" />
            <span>Profile</span>
          </Link>

          <Link
            to="/projects/new"
            className="flex items-center gap-2 px-4 py-2 rounded-xl
    text-sm text-gray-300
    bg-white/4 border border-white/8
    backdrop-blur-md
    hover:bg-white/9 hover:border-white/15
    hover:text-white
    transition-all duration-300"
          >
            <FiPlus className="text-base" />
            <span>Create Project</span>
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-5 py-2.5 rounded-xl
                text-sm text-gray-300
                hover:text-white hover:bg-white/5
                transition"
          >
            Log in
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2.5 rounded-xl
                bg-white text-black
                text-sm font-medium
                hover:bg-gray-200 transition"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}
