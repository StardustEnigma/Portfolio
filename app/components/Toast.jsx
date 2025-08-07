import { useEffect } from "react";

export default function Toast({ message, show, onClose, duration = 3000 }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, onClose, duration]);

  return (
    <>
      {show && (
        <div
          className="
            fixed bottom-6 left-1/2 transform -translate-x-1/2
            bg-cyan-500 text-white px-6 py-3 rounded-lg shadow-lg z-50
            opacity-90
            flex items-center space-x-3
          "
          role="alert"
          aria-live="assertive"
        >
          {/* You can add an icon here */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span>{message}</span>
        </div>
      )}
    </>
  );
}
