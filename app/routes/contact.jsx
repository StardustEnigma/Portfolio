import Navbar from "../components/Navbar";
import Toast from "../components/Toast";   // The Toast component as described before
import { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
  };

  // Scroll to Feedback section
  const goToForm = () => formRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#12023a] via-[#1a0940] to-[#24126A] text-white overflow-x-hidden">
      {/* Navbar on top */}
      <Navbar />

      {/* Snap scroll container */}
      <div
        className="h-screen snap-y snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/********* PAGE 1: Contact Ways *********/}
        <section className="snap-start min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 pt-24 pb-10 relative">
          {/* Subtle background blobs */}
          <div className="pointer-events-none absolute top-0 left-0 w-52 h-52 sm:w-72 sm:h-72 bg-cyan-400 opacity-10 rounded-full blur-2xl -translate-x-1/3 -translate-y-1/3" />
          <div className="pointer-events-none absolute bottom-0 right-0 w-52 h-52 sm:w-72 sm:h-72 bg-purple-500 opacity-10 rounded-full blur-2xl translate-x-1/4 translate-y-1/4" />

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
            Contact Me
          </h1>
          <p className="mb-10 text-cyan-200 font-light text-base sm:text-lg text-center max-w-md">
            Let’s connect on your favorite platform or reach out directly!
          </p>

          {/* Contact Options Grid */}
          <div className="z-10 w-full max-w-lg grid grid-cols-2 sm:grid-cols-3 gap-5 mb-10">
            {/* Github */}
            <a
              href="https://github.com/AtharvaMandle"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 rounded-2xl px-4 py-8 flex flex-col items-center transition shadow-lg hover:scale-105 hover:shadow-cyan-300/40 backdrop-blur-lg border border-white/20"
            >
              <FaGithub className="text-3xl sm:text-4xl mb-2 text-[#38bdf8] group-hover:text-white transition" />
              <span className="font-semibold text-xs sm:text-sm">GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/atharva-mandle-5214312aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 rounded-2xl px-4 py-8 flex flex-col items-center transition shadow-lg hover:scale-105 hover:shadow-purple-400/40 backdrop-blur-lg border border-white/20"
            >
              <FaLinkedin className="text-3xl sm:text-4xl mb-2 text-[#6e21e5] group-hover:text-white transition" />
              <span className="font-semibold text-xs sm:text-sm">LinkedIn</span>
            </a>

            {/* Email */}
            <a
              href="mailto:atharvamandle@gmail.com"
              className="group bg-white/10 rounded-2xl px-4 py-8 flex flex-col items-center transition shadow-lg hover:scale-105 hover:shadow-pink-400/40 backdrop-blur-lg border border-white/20"
            >
              <FaEnvelope className="text-3xl sm:text-4xl mb-2 text-pink-400 group-hover:text-white transition" />
              <span className="font-semibold text-xs sm:text-sm">Email</span>
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/atharvamandlexyz"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 rounded-2xl px-4 py-8 flex flex-col items-center transition shadow-lg hover:scale-105 hover:shadow-blue-400/40 backdrop-blur-lg border border-white/20"
            >
              <FaTwitter className="text-3xl sm:text-4xl mb-2 text-[#38bdf8] group-hover:text-white transition" />
              <span className="font-semibold text-xs sm:text-sm">Twitter</span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/atharvamandle"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 rounded-2xl px-4 py-8 flex flex-col items-center transition shadow-lg hover:scale-105 hover:shadow-pink-500/40 backdrop-blur-lg border border-white/20"
            >
              <FaInstagram className="text-3xl sm:text-4xl mb-2 text-[#f472b6] group-hover:text-white transition" />
              <span className="font-semibold text-xs sm:text-sm">Instagram</span>
            </a>

            {/* Personal Website */}
            <a
              href="https://atharvamandle.me"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 rounded-2xl px-4 py-8 flex flex-col items-center transition shadow-lg hover:scale-105 hover:shadow-cyan-200/40 backdrop-blur-lg border border-white/20"
            >
              <svg
                width={36}
                height={36}
                viewBox="0 0 24 24"
                fill="none"
                className="mb-2 text-cyan-300 group-hover:text-white transition"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M12 2a15 15 0 000 20M2 12h20" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="font-semibold text-xs sm:text-sm">Website</span>
            </a>
          </div>

          {/* Button to scroll to Feedback */}
          <button
            onClick={goToForm}
            className="mt-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-[#12023a] font-bold px-7 py-3 rounded-full shadow-lg hover:bg-gradient-to-l hover:from-purple-400 hover:to-cyan-400 hover:text-white transition"
          >
            Leave Feedback ↓
          </button>
        </section>

        {/********* PAGE 2: Feedback *********/}
        <section
          ref={formRef}
          className="snap-start min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 pt-24 pb-10 relative"
        >
          {/* Subtle blobs */}
          <div className="pointer-events-none absolute top-0 left-0 w-52 h-52 sm:w-72 sm:h-72 bg-cyan-400 opacity-10 rounded-full blur-2xl -translate-x-1/3 -translate-y-1/3" />
          <div className="pointer-events-none absolute bottom-0 right-0 w-52 h-52 sm:w-72 sm:h-72 bg-purple-500 opacity-10 rounded-full blur-2xl translate-x-1/4 translate-y-1/4" />

          {/* Feedback Title */}
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Feedback & Suggestions
          </h2>
          <p className="mb-7 text-cyan-200 font-light text-center max-w-xl">
            Share your thoughts, feedback or just say hi — I read everything!
          </p>

          {/* Feedback Form */}
          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const formData = new FormData(e.target);
              try {
                const response = await fetch("https://formspree.io/f/xgvzpklp", {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                  },
                  body: formData,
                });

                if (response.ok) {
                  showToast("Thank you for your feedback!");
                  e.target.reset();
                } else {
                  showToast("Oops! There was a problem submitting your form.");
                }
              } catch (error) {
                showToast("Oops! There was a problem submitting your form.");
              }
            }}
            className="w-full max-w-xl bg-white/10 p-8 sm:p-10 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-lg flex flex-col gap-5"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                required
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 border-0 focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-300 outline-none"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Your email"
                autoComplete="email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 border-0 focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-300 outline-none"
              />
            </div>
            <textarea
              required
              name="message"
              placeholder="Your feedback or message..."
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border-0 focus:ring-2 focus:ring-purple-400 text-white placeholder-gray-300 outline-none resize-none"
            />
            <input type="text" name="_gotcha" style={{ display: "none" }} /> {/* Spam trap */}
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
      <Toast
        message={toastMessage}
        show={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}
