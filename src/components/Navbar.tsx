import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { NAV_ITEMS } from "../constants/globalConstants";
import codeQuizIcon from "../assets/png/codeQuizIcon.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsOpen(false); // Close mobile menu after navigation
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand */}
          <div className="flex-shrink-0 flex items-center gap-[10px] cursor-pointer" onClick={() => handleNavClick("/")}>
            <img
              src={codeQuizIcon}
              alt="Code Quiz Icon"
              className="w-12 h-12 object-contain"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              CodeQuiz
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {NAV_ITEMS.map((item) => (
                <p
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className={`px-3 py-2 rounded-md text-sm font-medium  cursor-pointer transition-colors duration-200 text-gray-300 hover:text-cyan-400 ${item.name === "Home" ? "text-white" : ""
                    }`}
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
          {NAV_ITEMS.map((item) => (
            <p
              key={item.name}
              onClick={() => handleNavClick(item.path)}
              className="block px-3 py-2 cursor-pointer rounded-md text-base font-medium text-gray-300 hover:text-white"
            >
              {item.name}
            </p>
          ))}
        </div>
      )}
    </nav>
  );
};
