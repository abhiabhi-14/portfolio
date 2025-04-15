// components/Footer.jsx
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-300 py-10 mt-16 rounded-t-2xl shadow-inner">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div>
          <h1 className="text-2xl font-bold text-white">ABHISHEK</h1>
          <p className="text-sm mt-2">
            Creating impact through code and creativity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Quick Links</h2>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#Edu" className="hover:underline">
                Edu
              </a>
            </li>
            <li>
              <a href="#por" className="hover:underline">
                POR
              </a>
            </li>
            <li>
              <a href="#Slider" className="hover:underline">
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Connect</h2>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://github.com/abhiabhi-14"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-white transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishek-pant-5921a1257/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-white transition" />
            </a>
            <a
              href="https://instagram.com/abhishek_pant__"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Abhishek. All rights reserved.
      </div>
    </footer>
  );
}
