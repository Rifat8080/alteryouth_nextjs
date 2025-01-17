import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

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
              className="p-2 text-white "
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
          <div className="hidden md:flex space-x-8 text-white">
            <NavLink href="#" label="About" context="navbar" isActive={activeLink === "About"} onClick={() => setActiveLink("About")} />
            <NavLink href="#" label="How it works" context="navbar" isActive={activeLink === "How it works"} onClick={() => setActiveLink("How it works")} />
            <NavLink href="#" label="Scholarships" context="navbar" isActive={activeLink === "Scholarships"} onClick={() => setActiveLink("Scholarships")} />
            <NavLink href="#" label="Collaborate" context="navbar" isActive={activeLink === "Collaborate"} onClick={() => setActiveLink("Collaborate")} />
            <NavLink href="#" label="Login" context="navbar" isActive={activeLink === "Login"} onClick={() => setActiveLink("Login")} />
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
          <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} activeLink={activeLink} setActiveLink={setActiveLink} />
        </div>
      )}
    </>
  );
};

const NavLink = ({ href, label, context, isActive, onClick }) => {
  const navbarStyle = `relative block py-2 px-3 rounded ${
    isActive
      ? "text-white font-bold text-base"
      : "text-white font-bold text-base"
  } group`;

  const sidebarStyle = `block py-2 px-3 mt-5 rounded font-medium text-base ${
    isActive
      ? "text-white bg-lightGreen"
      : "text-gray-500 hover:text-lightGreen"
  }`;

  return (
    <a href={href} className={context === "navbar" ? navbarStyle : sidebarStyle} onClick={onClick}>
      {label}
      <span className="inline-block absolute left-0 bottom-0 w-full h-0.5 bg-lightGreen scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </a>
  );
};

const Sidebar = ({ isOpen, onClose, activeLink, setActiveLink }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } w-64 max-w-xs z-50`}
    >
      <div className="flex justify-between items-center p-4">
        <button
          onClick={onClose}
          className="text-lightGreen hover:text-gray-900 focus:outline-none"
          aria-label="Close Sidebar"
        >
          <FontAwesomeIcon icon={faTimes} className="w-6 h-6 md:hidden" />
        </button>
      </div>
      <nav className="space-y-2 p-4">
        <NavLink href="#" label="Home" context="sidebar" isActive={activeLink === "Home"} onClick={() => setActiveLink("Home")} />
        <NavLink href="#" label="How it works" context="sidebar" isActive={activeLink === "How it works"} onClick={() => setActiveLink("How it works")} />
        <NavLink href="#" label="About" context="sidebar" isActive={activeLink === "About"} onClick={() => setActiveLink("About")} />
        <NavLink href="#" label="Collaborate" context="sidebar" isActive={activeLink === "Collaborate"} onClick={() => setActiveLink("Collaborate")} />
        <NavLink href="#" label="Scholarship Policy" context="sidebar" isActive={activeLink === "Scholarship Policy"} onClick={() => setActiveLink("Scholarship Policy")} />
        <NavLink href="#" label="Get in touch" context="sidebar" isActive={activeLink === "Get in touch"} onClick={() => setActiveLink("Get in touch")} />
        <NavLink href="#" label="Get the app" context="sidebar" isActive={activeLink === "Get the app"} onClick={() => setActiveLink("Get the app")} />
        <NavLink href="#" label="Login" context="sidebar" isActive={activeLink === "Login"} onClick={() => setActiveLink("Login")} />
      </nav>
    </div>
  );
};

export default Navbar;