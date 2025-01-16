import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Add scroll listener to toggle the navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sidebar toggle handler
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Close sidebar when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") {
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 z-40 w-full transition-all ${
          isScrolled ? "bg-white shadow-md" : "bg-white md:bg-transparent"
        }`}
      >
        <div className="w-full max-w-6xl flex items-center justify-between mx-auto py-4 px-4">
          {/* Left Section: Sidebar Button and Logo */}
          <div className="flex items-center space-x-4">
            {/* Sidebar Button */}
            <button
              onClick={toggleSidebar}
              className="p-2 text-gray-700 hover:text-gray-900"
              aria-label="Toggle Sidebar"
            >
              <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
            </button>

            {/* Logo */}
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-2"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Flowbite Logo"
                className="h-8"
              />
              <span className="text-2xl font-semibold dark:text-white">
                Flowbite
              </span>
            </a>
          </div>

          {/* Right Section: Navigation Links (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-8">
            <NavLink href="#" label="About" isActive />
            <NavLink href="#" label="How it works" />
            <NavLink href="#" label="Scholarships" />
            <NavLink href="#" label="Collaborate" />
            <NavLink href="#" label="Login" />
          </div>
        </div>
      </nav>

      {/* Sidebar and Overlay */}
      {isSidebarOpen && (
        <div
          id="overlay"
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={handleOverlayClick}
        >
          <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </div>
      )}
    </>
  );
};

const NavLink = ({ href, label, isActive }) => (
  <a
    href={href}
    className={`block py-2 px-3 rounded ${
      isActive
        ? "text-blue-700 bg-gray-100 md:bg-transparent font-bold"
        : "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 font-bold"
    }`}
  >
    {label}
  </a>
);

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } w-64 z-50`}
    >
      <div className="flex justify-between items-center p-4">
        <button
          onClick={onClose}
          className="text-gray-700 hover:text-gray-900 focus:outline-none"
          aria-label="Close Sidebar"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <nav className="space-y-2 p-4">
        <NavLink href="#" label="Home" />
        <NavLink href="#" label="About" />
        <NavLink href="#" label="Services" />
        <NavLink href="#" label="Pricing" />
        <NavLink href="#" label="Contact" />
      </nav>
    </div>
  );
};

export default Navbar;
