import {
  Code2,
  Phone,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";

import lectureliaLogo from "../assets/lecturelia-logo.jpeg";

import "./Developer.css";

function Developer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main className="developer-page">

      {/* Developer Header */}
      <section className="developer-header">

        <div className="developer-icon">
          <Code2 size={36} />
        </div>

        <span className="developer-label">
          {t.developerLabel}
        </span>

        <h1>
          {t.developerTitle}
        </h1>

        <p>
          {t.developerDescription}
        </p>

      </section>


      {/* Developer Card */}
      <section className="developer-card">

        <div className="developer-profile">

          <div className="developer-avatar">
            <img
              src={lectureliaLogo}
              alt="Lecturelia Logo"
            />
          </div>

          <div className="developer-info">

            <span className="developer-role">
              {t.developerRole}
            </span>

            <h2>
              {t.developerName}
            </h2>

            <p>
              {t.developerIntro}
            </p>

          </div>

        </div>


        {/* Contact Buttons */}
        <div className="developer-contact-buttons">

          <a
            href="tel:+8801688544489"
            className="developer-contact-btn"
          >
            <Phone size={20} />
            <span>{t.developerCall}</span>
          </a>

          <a
            href="https://wa.me/8801688544489"
            target="_blank"
            rel="noopener noreferrer"
            className="developer-contact-btn"
          >
            <MessageCircle size={20} />
            <span>{t.developerWhatsApp}</span>
          </a>

        </div>


        {/* Back to Home */}
        <a
          href="/"
          className="developer-back-btn"
        >
          <ArrowLeft size={18} />
          <span>{t.developerBackHome}</span>
        </a>

      </section>

    </main>
  );
}

export default Developer;