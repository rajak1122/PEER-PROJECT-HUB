import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Landing() {
  return (
    <div className="min-h-screen bg-[#050507] text-white">
      <Navbar />
      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen
        flex items-center overflow-hidden
        pt-20 mt-5"
      >
        {/* Background Glow */}
        <div
          className="absolute inset-0
          bg-[radial-gradient(circle_at_50%_35%,rgba(124,58,237,0.18),transparent_45%)]"
        />

        <div
          className="relative z-10 max-w-7xl
          mx-auto px-6 w-full"
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Small Badge */}
            <div
              className="inline-flex items-center gap-2
              px-4 py-2 rounded-full
              border border-white/10
              bg-white/3
              text-sm text-gray-400"
            >
              <span className="w-2 h-2 rounded-full bg-violet-500" />A community
              for student developers
            </div>

            {/* Heading */}
            <h2
              className="mt-8 text-6xl md:text-7xl
              font-semibold tracking-tight leading-[1.05]"
            >
              Build.
              <span className="text-gray-500"> Share.</span>
              <br />
              <span
                className="text-transparent
                bg-clip-text
                bg-linear-to-r
                from-violet-500
                via-purple-400
                to-blue-500"
              >
                Grow Together.
              </span>
            </h2>

            {/* Description */}
            <p
              className="mt-7 max-w-2xl mx-auto
              text-lg text-gray-400 leading-relaxed"
            >
              Discover projects built by your peers, showcase what you've
              created and learn from a community of developers.
            </p>

            {/* CTA */}
            <div
              className="mt-10 flex items-center
              justify-center gap-4"
            >
              <Link
                to="/home"
                className="px-7 py-3.5 rounded-xl
                  bg-linear-to-r
                  from-violet-600 to-blue-600
                  font-medium
                  shadow-lg shadow-violet-900/20
                  hover:from-violet-500
                  hover:to-blue-500
                  transition"
              >
                Explore Projects →
              </Link>

              <Link
                to="/signup"
                className="px-7 py-3.5 rounded-xl
                  border border-white/10
                  bg-white/3
                  text-gray-300
                  hover:bg-white/[0.07]
                  hover:text-white
                  transition"
              >
                Start Building
              </Link>
            </div>
          </div>

          {/* ================= PROJECT PREVIEW ================= */}

          <div className="mt-24 relative">
            {/* Glow */}
            <div
              className="absolute
              left-1/2 -translate-x-1/2
              w-150 h-40
              bg-violet-600/20
              blur-3xl"
            />

            <div
              className="relative grid
              md:grid-cols-3 gap-5
              max-w-5xl mx-auto mb-5"
            >
              {/* Project Card 1 */}
              <div
                className="p-6 rounded-2xl
                border border-white/10
                bg-white/[0.035]
                backdrop-blur-xl
                hover:-translate-y-2
                transition duration-300"
              >
                <div
                  className="flex items-center
                  justify-between"
                >
                  <div
                    className="w-11 h-11 rounded-xl
                    bg-violet-500/10
                    flex items-center justify-center
                    text-violet-400"
                  >
                    ✦
                  </div>

                  <span
                    className="text-xs
                    text-gray-600"
                  >
                    2h ago
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  AI Resume Builder
                </h3>

                <p
                  className="mt-2 text-sm
                  text-gray-500 leading-relaxed"
                >
                  An intelligent resume builder powered by AI.
                </p>

                <div className="mt-5 flex gap-2 flex-wrap">
                  <span
                    className="px-2.5 py-1
                    rounded-full
                    bg-violet-500/10
                    text-violet-400 text-xs"
                  >
                    React
                  </span>

                  <span
                    className="px-2.5 py-1
                    rounded-full
                    bg-blue-500/10
                    text-blue-400 text-xs"
                  >
                    AI
                  </span>
                </div>

                <div
                  className="mt-6 pt-4
                  border-t border-white/10
                  flex items-center
                  justify-between"
                >
                  <span className="text-xs text-gray-500">@alex</span>

                  <span
                    className="text-xs
                    text-gray-600"
                  >
                    ♡ 24
                  </span>
                </div>
              </div>

              {/* Project Card 2 */}
              <div
                className="p-6 rounded-2xl
                border border-white/10
                bg-white/[0.035]
                backdrop-blur-xl
                hover:-translate-y-2
                transition duration-300"
              >
                <div
                  className="flex items-center
                  justify-between"
                >
                  <div
                    className="w-11 h-11 rounded-xl
                    bg-blue-500/10
                    flex items-center justify-center
                    text-blue-400"
                  >
                    ◈
                  </div>

                  <span
                    className="text-xs
                    text-gray-600"
                  >
                    5h ago
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold">PeerConnect</h3>

                <p
                  className="mt-2 text-sm
                  text-gray-500 leading-relaxed"
                >
                  Real-time collaboration platform for developers.
                </p>

                <div className="mt-5 flex gap-2 flex-wrap">
                  <span
                    className="px-2.5 py-1
                    rounded-full
                    bg-blue-500/10
                    text-blue-400 text-xs"
                  >
                    React
                  </span>

                  <span
                    className="px-2.5 py-1
                    rounded-full
                    bg-cyan-500/10
                    text-cyan-400 text-xs"
                  >
                    Socket.io
                  </span>
                </div>

                <div
                  className="mt-6 pt-4
                  border-t border-white/10
                  flex items-center
                  justify-between"
                >
                  <span className="text-xs text-gray-500">@karthik</span>

                  <span
                    className="text-xs
                    text-gray-600"
                  >
                    ♡ 41
                  </span>
                </div>
              </div>

              {/* Project Card 3 */}
              <div
                className="p-6 rounded-2xl
                border border-white/10
                bg-white/[0.035]
                backdrop-blur-xl
                hover:-translate-y-2
                transition duration-300"
              >
                <div
                  className="flex items-center
                  justify-between"
                >
                  <div
                    className="w-11 h-11 rounded-xl
                    bg-emerald-500/10
                    flex items-center justify-center
                    text-emerald-400"
                  >
                    ◉
                  </div>

                  <span
                    className="text-xs
                    text-gray-600"
                  >
                    1d ago
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold">Campus Events</h3>

                <p
                  className="mt-2 text-sm
                  text-gray-500 leading-relaxed"
                >
                  Discover and manage events happening around campus.
                </p>

                <div className="mt-5 flex gap-2 flex-wrap">
                  <span
                    className="px-2.5 py-1
                    rounded-full
                    bg-emerald-500/10
                    text-emerald-400 text-xs"
                  >
                    MERN
                  </span>

                  <span
                    className="px-2.5 py-1
                    rounded-full
                    bg-orange-500/10
                    text-orange-400 text-xs"
                  >
                    MongoDB
                  </span>
                </div>

                <div
                  className="mt-6 pt-4
                  border-t border-white/10
                  flex items-center
                  justify-between"
                >
                  <span className="text-xs text-gray-500">@rahul</span>

                  <span
                    className="text-xs
                    text-gray-600"
                  >
                    ♡ 18
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY PPH ================= */}

      <section
        className="border-t border-white/10
        py-28"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p
              className="text-violet-400 text-sm
              tracking-widest uppercase"
            >
              Why Peer Project Hub?
            </p>

            <h2
              className="mt-4 text-4xl
              font-semibold"
            >
              More than just a project showcase.
            </h2>

            <p
              className="mt-4 text-gray-500
              max-w-xl mx-auto"
            >
              A place to discover, learn, collaborate and grow alongside other
              developers.
            </p>
          </div>

          <div
            className="grid md:grid-cols-3
            gap-5 mt-16"
          >
            <div
              className="p-7 rounded-2xl
              border border-white/10
              bg-white/2"
            >
              <div className="text-2xl text-violet-400">◇</div>

              <h3 className="mt-5 text-lg font-semibold">Showcase</h3>

              <p
                className="mt-3 text-sm
                text-gray-500 leading-relaxed"
              >
                Put your projects in front of a community of peers.
              </p>
            </div>

            <div
              className="p-7 rounded-2xl
              border border-white/10
              bg-white/2"
            >
              <div className="text-2xl text-blue-400">◎</div>

              <h3 className="mt-5 text-lg font-semibold">Discover</h3>

              <p
                className="mt-3 text-sm
                text-gray-500 leading-relaxed"
              >
                Explore how other students solve real development problems.
              </p>
            </div>

            <div
              className="p-7 rounded-2xl
              border border-white/10
              bg-white/2"
            >
              <div className="text-2xl text-emerald-400">✦</div>

              <h3 className="mt-5 text-lg font-semibold">Collaborate</h3>

              <p
                className="mt-3 text-sm
                text-gray-500 leading-relaxed"
              >
                Connect with people building interesting things.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="border-t border-white/10 py-28">
        <div
          className="max-w-4xl mx-auto
          px-6 text-center"
        >
          <h2
            className="text-4xl md:text-5xl
            font-semibold"
          >
            Your next project
            <br />
            could inspire someone.
          </h2>

          <p className="mt-5 text-gray-500">
            Explore the community or create your own project today.
          </p>

          <div className="mt-8">
            <Link
              to="/home"
              className="inline-flex px-7 py-3.5
                rounded-xl
                bg-white text-black
                font-medium
                hover:bg-gray-200
                transition"
            >
              Explore Projects →
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Landing;
