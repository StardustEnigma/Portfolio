import Navbar from "../components/Navbar";
import Toast from "../components/Toast";
import { useRef, useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef(null);
  const canvasRef = useRef(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
  };

  const goToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  // --- Particle animation effect (same as About page) ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3
    }));

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }
    animate();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#0e0220] via-[#14062e] to-[#1a0940] text-white overflow-x-hidden">
      <Navbar />

      {/* Blurred floating blobs (same as About) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[200px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[200px] rounded-full animate-pulse pointer-events-none" />

      {/* Particle canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />

      {/* Snap scroll container */}
      <div className="h-screen snap-y snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth relative z-10">
        
        {/* PAGE 1: Contact Methods */}
        <section className="snap-start min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 pt-24 pb-10 relative">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
            Contact Me
          </h1>
          <p className="mb-10 text-cyan-200 font-light text-base sm:text-lg text-center max-w-md">
            Let’s connect on your favorite platform or reach out directly!
          </p>

          {/* Contact Links Grid */}
          <div className="z-10 w-full max-w-lg grid grid-cols-2 sm:grid-cols-3 gap-5 mb-10">
            <a href="https://github.com/AtharvaMandle" target="_blank" rel="noopener noreferrer"
              className="group bg-white/10 rounded-2xl px-4 py-8 flex flex-col items-center hover:scale-105 transition shadow-lg hover:shadow-cyan-300/40 backdrop-blur-lg border border-white/20"
            >
              <FaGithub className="text-3xl sm:text-4xl mb-2 text-[#38bdf8] group-hover:text-white transition" />
              <span className="font-semibold text-xs sm:text-sm">GitHub</span>
            </a>

            <a href="https://www.linkedin.com/in/atharva-mandle-5214312aa/"
              target="_blank" rel="noopener noreferrer"
              className="group bg-white/10 rounded-2xl px-4 py-8 flex flex-col items-center hover:scale-105 transition shadow-lg hover:shadow-purple-400/40 backdrop-blur-lg border border-white/20"
            >
              <FaLinkedin className="text-3xl sm:text-4xl mb-2 text-[#6e21e5] group-hover:text-white transition" />
              <span className="font-semibold text-xs sm:text-sm">LinkedIn</span>
            </a>

            <a href="mailto:atharvamandle@gmail.com"
              className="group bg-white/10 rounded-2xl px-4 py-8 flex flex-col items-center hover:scale-105 transition shadow-lg hover:shadow-pink-400/40 backdrop-blur-lg border border-white/20"
            >
              <FaEnvelope className="text-3xl sm:text-4xl mb-2 text-pink-400 group-hover:text-white transition" />
              <span className="font-semibold text-xs sm:text-sm">Email</span>
            </a>

            <a href="https://twitter.com/atharvamandlexyz" target="_blank" rel="noopener noreferrer"
              className="group bg-white/10 rounded-2xl px-4 py-8 flex flex-col items-center hover:scale-105 transition shadow-lg hover:shadow-blue-400/40 backdrop-blur-lg border border-white/20"
            >
              <FaTwitter className="text-3xl sm:text-4xl mb-2 text-[#38bdf8] group-hover:text-white transition" />
              <span className="font-semibold text-xs sm:text-sm">Twitter</span>
            </a>

            <a href="https://instagram.com/atharvamandle" target="_blank" rel="noopener noreferrer"
              className="group bg-white/10 rounded-2xl px-4 py-8 flex flex-col items-center hover:scale-105 transition shadow-lg hover:shadow-pink-500/40 backdrop-blur-lg border border-white/20"
            >
              <FaInstagram className="text-3xl sm:text-4xl mb-2 text-[#f472b6] group-hover:text-white transition" />
              <span className="font-semibold text-xs sm:text-sm">Instagram</span>
            </a>

            <a href="https://atharvamandle.me" target="_blank" rel="noopener noreferrer"
              className="group bg-white/10 rounded-2xl px-4 py-8 flex flex-col items-center hover:scale-105 transition shadow-lg hover:shadow-cyan-200/40 backdrop-blur-lg border border-white/20"
            >
              <svg width={36} height={36} viewBox="0 0 24 24" fill="none"
                className="mb-2 text-cyan-300 group-hover:text-white transition"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M12 2a15 15 0 000 20M2 12h20" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="font-semibold text-xs sm:text-sm">Website</span>
            </a>
          </div>

          <button
            onClick={goToForm}
            className="mt-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-[#12023a] font-bold px-7 py-3 rounded-full shadow-lg hover:bg-gradient-to-l hover:from-purple-400 hover:to-cyan-400 hover:text-white transition"
          >
            Leave Feedback ↓
          </button>
        </section>

        {/* PAGE 2: Feedback */}
        <section
          ref={formRef}
          className="snap-start min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 pt-24 pb-10 relative"
        >
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Feedback & Suggestions
          </h2>
          <p className="mb-7 text-cyan-200 font-light text-center max-w-xl">
            Share your thoughts, feedback or just say hi — I read everything!
          </p>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              try {
                const response = await fetch("https://formspree.io/f/xgvzpklp", {
                  method: "POST",
                  headers: { Accept: "application/json" },
                  body: formData,
                });
                if (response.ok) {
                  showToast("Thank you for your feedback!");
                  e.target.reset();
                } else {
                  showToast("Oops! There was a problem submitting your form.");
                }
              } catch {
                showToast("Oops! There was a problem submitting your form.");
              }
            }}
            className="w-full max-w-xl bg-white/10 p-8 sm:p-10 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-lg flex flex-col gap-5"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" name="name" placeholder="Your name" required
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 border-0 focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-300 outline-none"
              />
              <input type="email" name="email" placeholder="Your email" required
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 border-0 focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-300 outline-none"
              />
            </div>
            <textarea name="message" placeholder="Your feedback or message..." rows={5} required
              className="w-full px-4 py-3 rounded-lg bg-white/20 border-0 focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-300 outline-none resize-none"
            />
            <input type="text" name="_gotcha" style={{ display: "none" }} /> {/* spam trap */}
            <button
              type="submit"
              className="mt-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-[#12023a] font-bold px-7 py-3 rounded-full shadow-lg hover:bg-gradient-to-l hover:from-purple-400 hover:to-cyan-400 hover:text-white transition"
            >
              Send Feedback
            </button>
          </form>
        </section>
      </div>

      {/* Toast Notification */}
      <Toast message={toastMessage} show={toastVisible} onClose={() => setToastVisible(false)} />
    </div>
  );
}
