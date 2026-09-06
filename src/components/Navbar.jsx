import { useState, useEffect, useRef } from "react";
import { Languages, Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar({ darkMode, setDarkMode }) {
  const [showLanguages, setShowLanguages] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const { language, setLanguage } = useLanguage();

  const t = translations[language];

  const languages = [
    { code: "bn", name: "বাংলা", flag: "🇧🇩" },
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "ms", name: "Bahasa Melayu", flag: "🇲🇾" },
  ];

  const handleLanguageChange = (code) => {
    setLanguage(code);
    setShowLanguages(false);
  };

  const handleMenuClick = () => {
    setShowMenu(false);
  };

  // Close the mobile menu when clicking or touching outside it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        showMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [showMenu]);

  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* =========================
            MOBILE MENU BUTTON
        ========================= */}
        <button
          ref={menuButtonRef}
          className="mobile-menu-btn"
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle menu"
          aria-expanded={showMenu}
        >
          {showMenu ? <X size={26} /> : <Menu size={26} />}
        </button>


        {/* =========================
            LOGO
        ========================= */}
        <div className="logo">

          <img
            src={logo}
            alt="Company Logo"
          />

          <span>{t.footerCompanyName}</span>

        </div>


        {/* =========================
            NAVIGATION MENU
        ========================= */}
        <div
          ref={menuRef}
          className={`nav-menu ${showMenu ? "active" : ""}`}
        >

          <a href="#home" onClick={handleMenuClick}>
            {t.home}
          </a>

          <a href="#about" onClick={handleMenuClick}>
            {t.about}
          </a>

          <a href="#services" onClick={handleMenuClick}>
            {t.services}
          </a>

          <a href="#testimonials" onClick={handleMenuClick}>
            {t.testimonials}
          </a>

          <a href="#contact" onClick={handleMenuClick}>
            {t.contact}
          </a>

          <Link
            to="/developer"
            onClick={handleMenuClick}
          >
            {t.contactDeveloper}
          </Link>

        </div>


        {/* =========================
            LANGUAGE & CUSTOMIZE
        ========================= */}
        <div className="nav-options">

          {/* Language */}
          <div className="language-wrapper">

            <button
              className="language-btn"
              onClick={() =>
                setShowLanguages(!showLanguages)
              }
              aria-label="Select language"
            >
              <Languages size={20} />
            </button>


            {/* Language Dropdown */}
            {showLanguages && (
              <div className="language-dropdown">

                {languages.map((lang) => (

                  <button
                    key={lang.code}
                    onClick={() =>
                      handleLanguageChange(lang.code)
                    }
                  >
                    {lang.flag} {lang.name}
                  </button>

                ))}

              </div>
            )}

          </div>


          {/* Customize / Theme */}
          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;