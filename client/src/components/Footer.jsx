import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Footer() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const loggedUser = !!currentUser;

  return (
    <footer className="border-t border-white/10">
      <div
        className="max-w-7xl mx-auto px-6
          py-8 flex flex-col md:flex-row
          items-center justify-between gap-4"
      >
        <p className="text-sm text-gray-600">© 2026 Peer Project Hub</p>

        <div className="flex gap-6 text-sm text-gray-600">
          <button
            onClick={() => navigate("/home")}
            className="hover:text-gray-300 transition"
          >
            Explore
          </button>

          <button
            disabled={loggedUser}
            onClick={() => navigate("/login")}
            className="hover:text-gray-300 transition disabled:cursor-not-allowed disabled:opacity-40"
          >
            Login
          </button>

          <button
            disabled={loggedUser}
            onClick={() => navigate("/signup")}
            className="hover:text-gray-300 transition disabled:cursor-not-allowed disabled:opacity-40"
          >
            Sign Up
          </button>
        </div>
      </div>
    </footer>
  );
}
