// src/components/Footer.tsx
import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
} from "lucide-react";
import {
  COMPANY_LINKS,
  RESOURCE_LINKS,
  SOCIAL_LINKS,
} from "../constants/footerConstants";
import { useNavigate } from "react-router-dom";

// ─────────────────────────────────────────────────────────
// Shared helpers
type NavLink = { label: string; path: string };
const iconMap: Record<string, JSX.Element> = {
  twitter: <TwitterIcon size={20} />,
  github: <GithubIcon size={20} />,
  linkedin: <LinkedinIcon size={20} />,
  instagram: <InstagramIcon size={20} />,
};

// ─────────────────────────────────────────────────────────
// Footer (single component)
export const Footer = () => {
  const navigate = useNavigate();

  // Small inline renderers to keep JSX tidy
  const renderLinks = (title: string, links: NavLink[]) => (
    <div>
      <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">
        {title}
      </h3>
      <ul className="mt-4 space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <p
              onClick={() => navigate(link.path)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderSocialIcons = () => (
    <div className="mt-6 flex space-x-6">
      {SOCIAL_LINKS.map((link, idx) => (
        <p
          key={idx}
          onClick={() =>
            link.path.startsWith("http")
              ? window.open(link.path, "_blank")
              : navigate(link.path)
          }
          className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
        >
          {iconMap[link.icon]}
        </p>
      ))}
    </div>
  );

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand + socials */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              CodeQuiz
            </h2>
            <p className="mt-4 text-gray-300 max-w-md">
              Test your coding knowledge with our interactive quizzes. Improve
              your skills and track your progress.
            </p>
            {renderSocialIcons()}
          </div>

          {/* Resources + Company */}
          {renderLinks("Resources Utilized", RESOURCE_LINKS)}
          {renderLinks("Company", COMPANY_LINKS)}
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} CodeQuiz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
