import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div
        className="max-w-7xl mx-auto px-6
          py-8 flex flex-col md:flex-row
          items-center justify-between gap-4"
      >
        <p className="text-sm text-gray-600">© 2026 Peer Project Hub</p>

        <div className="flex gap-6 text-sm text-gray-600">
          <Link to="/home" className="hover:text-gray-300 transition">
            Explore
          </Link>

          <Link to="/login" className="hover:text-gray-300 transition">
            Login
          </Link>

          <Link to="/signup" className="hover:text-gray-300 transition">
            Sign Up
          </Link>
        </div>
      </div>
    </footer>
  );
}
