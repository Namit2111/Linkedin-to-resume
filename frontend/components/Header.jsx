"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex flex-row items-center justify-between p-4 py-8 transition-all duration-300 
      ${isScrolled ? 'backdrop-blur-md shadow-lg border-b border-indigo-500' : ''} 
      bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]`}
    >
      <h1 className="julius text-3xl font-bold text-center text-[#F0F0F0] neon-text">
        Linkfolio
      </h1>
      <nav>
        <ul className="quicksand flex justify-center text-[#B0C4DE] space-x-6">
          <li>
            <Link href="/" className="relative hover:text-[#F0F0F0] hover:neon-link">
              Home
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#00c6ff] transition-transform scale-x-0 hover:scale-x-100 origin-left"></span>
            </Link>
          </li>
          <li>
            <Link href="/about" className="relative hover:text-[#F0F0F0] hover:neon-link">
              About
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#00c6ff] transition-transform scale-x-0 hover:scale-x-100 origin-left"></span>
            </Link>
          </li>
          <li>
            <Link href="/contact" className="relative hover:text-[#F0F0F0] hover:neon-link">
              Contact Us
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#00c6ff] transition-transform scale-x-0 hover:scale-x-100 origin-left"></span>
            </Link>
          </li>
          <li>
            <Link href="/login" className="relative hover:text-[#F0F0F0] hover:neon-link">
              Login/Signup
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#00c6ff] transition-transform scale-x-0 hover:scale-x-100 origin-left"></span>
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>{`
        .neon-text {
          text-shadow: 0 0 5px #00c6ff, 0 0 10px #00c6ff, 0 0 15px #00c6ff, 0 0 20px #00c6ff;
        }

        .neon-link:hover {
          color: #00c6ff;
          text-shadow: 0 0 5px #00c6ff, 0 0 10px #00c6ff, 0 0 15px #00c6ff;
        }

        .scale-x-100 {
          transform: scaleX(1);
        }
        .scale-x-0 {
          transform: scaleX(0);
        }
      `}</style>
    </div>
  );
};

export default Header;
