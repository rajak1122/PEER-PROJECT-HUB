import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    try {
      setLoading(true);
      await login(formData.email, formData.password);
      navigate("/home");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("No account found with this email. Please sign up.");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else if (error.code === "auth/invalid-credential") {
        setError("Invalid email or password. Please try again.");
      } else if (error.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050507] text-white flex">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden border-r border-white/10">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(124,58,237,0.18),transparent_55%)]" />

        <div className="relative z-10 w-full p-10 flex flex-col">
          {/* Logo */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              <span className="text-violet-500">&lt;&gt;</span> PPH
            </h1>

            <p className="text-xs tracking-[0.25em] text-gray-400">
              PEER PROJECT HUB
            </p>
          </div>

          {/* Hero Content */}
          <div className="mt-10">
            <p className="text-violet-400 text-sm font-medium tracking-wide">
              WELCOME BACK
            </p>

            <h2 className="mt-4 text-5xl font-semibold leading-tight">
              Continue
              <br />
              Building.
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-500 to-blue-500">
                Keep Growing.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-gray-400 text-lg leading-relaxed">
              Your projects are waiting. Jump back into the community, explore
              new ideas and keep creating.
            </p>
          </div>

          {/* Floating Project Cards */}
          <div className="relative flex-1 mt-12">
            {/* Card 1 */}
            <div
              className="absolute top-2 right-10 w-64 p-5 rounded-2xl
              bg-white/4 border border-white/10
              backdrop-blur-xl rotate-3 shadow-2xl"
            >
              <div
                className="w-10 h-10 rounded-xl
                bg-violet-600/20 flex items-center justify-center
                text-violet-400 text-xl"
              >
                ✦
              </div>

              <h3 className="mt-4 font-semibold">Build Something</h3>

              <p className="text-sm text-gray-500 mt-2">
                Turn your ideas into projects worth sharing.
              </p>

              <span
                className="inline-block mt-4 px-3 py-1 rounded-full
                bg-violet-500/10 text-violet-400 text-xs"
              >
                CREATE
              </span>
            </div>

            {/* Card 2 */}
            <div
              className="absolute left-4 w-60 p-5 rounded-2xl
              bg-white/4 border border-white/10
              backdrop-blur-xl -rotate-3"
            >
              <div
                className="w-10 h-10 rounded-xl
                bg-blue-600/20 flex items-center justify-center
                text-blue-400 text-xl"
              >
                ◈
              </div>

              <h3 className="mt-4 font-semibold">Discover Projects</h3>

              <p className="text-sm text-gray-500 mt-2">
                Explore what other developers are building.
              </p>

              <span
                className="inline-block mt-4 px-3 py-1 rounded-full
                bg-blue-500/10 text-blue-400 text-xs"
              >
                EXPLORE
              </span>
            </div>

            {/* Glow */}
            <div
              className="absolute bottom-16 left-1/2 -translate-x-1/2
              w-72 h-24 rounded-full
              bg-linear-to-r from-violet-600/30 to-blue-600/30
              blur-2xl"
            />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-xl">
          {/* Top Navigation */}
          <div className="flex items-center justify-between mb-14">
            <Link
              to="/"
              className="w-11 h-11 rounded-full
              border border-white/10
              flex items-center justify-center
              text-gray-400
              hover:text-white hover:bg-white/5
              transition"
            >
              ←
            </Link>

            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="ml-2 text-violet-400
                hover:text-violet-300 transition"
              >
                Sign up
              </Link>
            </p>
          </div>

          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-4xl font-semibold">Welcome Back</h2>

            <p className="mt-3 text-gray-500">
              Log in to continue your journey with Peer Project Hub.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="text-sm text-gray-400">Email Address</label>

              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                required
                placeholder="you@example.com"
                className="mt-2 w-full h-14 px-5 rounded-xl
                bg-white/3
                border border-white/10
                text-white
                placeholder:text-gray-600
                outline-none
                focus:border-violet-500/60
                focus:ring-1 focus:ring-violet-500/30
                transition"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-400">Password</label>

                <button
                  type="button"
                  className="text-xs text-violet-400
                  hover:text-violet-300 transition"
                >
                  Forgot password?
                </button>
              </div>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                value={formData.password}
                required
                placeholder="Enter your password"
                className="mt-2 w-full h-14 px-5 rounded-xl
                bg-white/3
                border border-white/10
                text-white
                placeholder:text-gray-600
                outline-none
                focus:border-violet-500/60
                focus:ring-1 focus:ring-violet-500/30
                transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-16 md:right-28 translate-y-6 text-sm text-gray-500 hover:text-white"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4 accent-violet-600" />

              <span className="text-sm text-gray-500">Remember me</span>
            </div>

            {error && (
              <div
                className="px-4 py-3 rounded-xl
                bg-red-500/10 border border-red-500/20
                text-red-400 text-sm"
              >
                {error}
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 rounded-xl
                bg-linear-to-r from-violet-600 to-blue-600
                hover:from-violet-500 hover:to-blue-500
                disabled:opacity-50 disabled:cursor-not-allowed
                font-medium text-white
                shadow-lg shadow-violet-900/20
                transition flex items-center justify-center gap-3"
            >
              {loading ? "Loging in..." : "Log in"}
              {!loading && <span className="text-xl">→</span>}
            </button>
          </form>

          {/* Bottom Message */}
          <div className="mt-10 text-center">
            <p className="text-xs text-gray-600">
              Your projects. Your community.
              <span className="text-violet-400"> Your journey.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
