"use client";
import UserLink from "./../components/UserLink";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-dvh">
      <h1
        className="quicksand text-3xl font-bold text-[#474747] text-center mt-8 tracking-wider running-text-animation"
      >
        Link. Generate. Shine.
      </h1>
      <h2
        className="quicksand text-4xl font-bold text-[#474747] text-center pt-3 p-8 tracking-wide futuristic-text"
      >
        Make a <span className="text-[#405dbb] font-semibold glass-effect">LINKFOLIO</span>
      </h2>
      <UserLink />

      <style jsx>{`
        /* Text animation for "Link. Generate. Shine." */
        .running-text-animation {
          display: inline-block;
          animation: slide 3s ease forwards, glow 3s infinite alternate;
          position: relative;
          overflow: hidden;
        }

        /* Reveal effect for "Make a LINKFOLIO" */
        .futuristic-text {
          animation: letterReveal 2s ease forwards;
          position: relative;
          overflow: hidden;
        }

        /* Animation for each character */
        @keyframes letterReveal {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }
          50% {
            opacity: 0.5;
            transform: translateY(-10%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Slide-in animation */
        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        /* Glass effect */
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.2em 0.4em;
          border-radius: 5px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: #405dbb;
        }
      `}</style>
    </div>
  );
}
