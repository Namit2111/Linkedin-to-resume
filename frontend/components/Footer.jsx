"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] flex flex-col lg:flex-row justify-around items-center p-8 space-y-8 lg:space-y-0 border-t border-gray-600 neon-border">
      <div className="w-full lg:w-1/5 flex items-center flex-col">
        <h1 className="julius text-2xl font-bold text-center text-[#F0F0F0] neon-text">
          Linkfolio
        </h1>
      </div>
      <div className="flex w-full lg:w-1/5 mt-4 flex-row text-[#B0C4DE] items-center justify-around flex-wrap space-x-4 neon-link-container">
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center h-[64px] hover:neon-icon transition duration-300"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          <p className="text-sm">Facebook</p>
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center h-[64px] hover:neon-icon transition duration-300"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <p className="text-sm">Instagram</p>
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center h-[64px] hover:neon-icon transition duration-300"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          <p className="text-sm">Twitter</p>
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center h-[64px] hover:neon-icon transition duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          <p className="text-sm">LinkedIn</p>
        </Link>
      </div>
      <div className="w-full lg:w-1/5 text-center lg:text-left">
        <h2 className="text-2xl mb-2 text-[#F0F0F0] neon-text">Contact Us</h2>
        <p className="text-[#B0C4DE]">iqlipse22@gmail.com</p>
      </div>

      <style jsx>{`
        .neon-text {
          color: #00c6ff;
          text-shadow: 0 0 5px #00c6ff, 0 0 10px #00c6ff, 0 0 15px #00c6ff;
        }
        .neon-icon:hover {
          color: #00c6ff;
          text-shadow: 0 0 5px #00c6ff, 0 0 10px #00c6ff, 0 0 15px #00c6ff;
        }
        .neon-link-container a {
          transition: color 0.3s, text-shadow 0.3s;
        }
        .neon-link-container a:hover {
          color: #00c6ff;
          text-shadow: 0 0 8px #00c6ff, 0 0 12px #00c6ff, 0 0 20px #00c6ff;
        }
        .neon-border {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default Footer;
