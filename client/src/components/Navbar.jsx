import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiCompass,
  FiUser,
  FiPlus,
  FiLogOut,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50
        border-b border-white/10
        bg-[#050507]/80 backdrop-blur-xl"
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 h-20
          flex items-center justify-between"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-violet-600 to-blue-600 flex items-center justify-center font-bold text-lg">
            &lt;/&gt;
          </div>

          <div>
            <h1 className="font-bold tracking-tight">PPH</h1>

            <p className="text-[9px] tracking-[0.25em] text-gray-500">
              PEER PROJECT HUB
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-gray-300 bg-white/4 border border-white/8 backdrop-blur-md hover:bg-white/9 hover:border-white/15 hover:text-white transition-all duration-300"
          >
            <FiHome className="text-base" />
            <span>Home</span>
          </Link>

          <Link
            to="/home"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-gray-300 bg-white/4 border border-white/8 backdrop-blur-md hover:bg-white/9 hover:border-white/15 hover:text-white transition-all duration-300"
          >
            <FiCompass className="text-base" />
            <span>Explore Projects</span>
          </Link>

          <Link
            to="/profile/:userId"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-gray-300 bg-white/4 border border-white/8 backdrop-blur-md hover:bg-white/9 hover:border-white/15 hover:text-white transition-all duration-300"
          >
            <FiUser className="text-base" />
            <span>Profile</span>
          </Link>

          <Link
            to="/projects/new"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-gray-300 bg-white/4 border border-white/8 backdrop-blur-md hover:bg-white/9 hover:border-white/15 hover:text-white transition-all duration-300"
          >
            <FiPlus className="text-base" />
            <span>Create Project</span>
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {currentUser ? (
            <button
              onClick={logout}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-gray-300 bg-white/4 border border-white/8 backdrop-blur-md hover:bg-white/9 hover:border-white/15 hover:text-white transition-all duration-300"
            >
              <FiLogOut className="text-base" />
              <span>Sign out</span>
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="px-5 py-2.5 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5 transition"
              >
                Log in
              </Link>

              <Link
                to="/signup"
                className="px-5 py-2.5 rounded-xl bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
              >
                Sign up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <FiX className="text-xl" />
          ) : (
            <FiMenu className="text-xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#08080b]/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-2">
            {/* Home */}
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5 transition"
            >
              <FiHome />
              <span>Home</span>
            </Link>

            {/* Explore */}
            <Link
              to="/home"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5 transition"
            >
              <FiCompass />
              <span>Explore Projects</span>
            </Link>

            {/* Profile */}
            <Link
              to="/profile/:userId"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5 transition"
            >
              <FiUser />
              <span>Profile</span>
            </Link>

            {/* Create Project */}
            <Link
              to="/projects/new"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5 transition"
            >
              <FiPlus />
              <span>Create Project</span>
            </Link>

            {/* Divider */}
            <div className="border-t border-white/10 my-2" />

            {/* Mobile Auth */}
            {currentUser ? (
              <button
                onClick={() => {
                  logout();
                  closeMenu();
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-gray-300 hover:text-white hover:bg-white/5 transition"
              >
                <FiLogOut />
                <span>Sign out</span>
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="flex items-center justify-center px-4 py-3 rounded-xl text-sm text-gray-300 border border-white/10 hover:bg-white/5 transition"
                >
                  Log in
                </Link>

                <Link
                  to="/signup"
                  onClick={closeMenu}
                  className="flex items-center justify-center px-4 py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
