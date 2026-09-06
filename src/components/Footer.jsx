import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import translations from "../translations/translations";
import logo from "../assets/logo.png";

import "./Footer.css";

function Footer({ onLegalClick }) {
  const { language } = useLanguage();
  const t = translations[language];

  const currentYear = new Date().getFullYear();

  const yearLocaleMap = {
    en: "en-US",
    bn: "bn-BD",
    ar: "ar-SA",
    ms: "ms-MY",
  };

  const localizedYear = new Intl.NumberFormat(
    yearLocaleMap[language] || "en-US",
    {
      useGrouping: false,
    }
  ).format(currentYear);

  return (
    <footer className="footer">

      {/* Main Footer */}
      <div className="footer-container">

        {/* Column 1 - Company */}
        <div className="footer-column footer-company">

          <a href="#home" className="footer-logo">
            <img
              src={logo}
              alt="TrustLink Logo"
            />

            <div className="footer-logo-text">
              <strong>{t.footerCompanyName}</strong>
            </div>
          </a>

          <p className="footer-description">
            {t.footerDescription}
          </p>

          <div className="iso-badge">
            <ShieldCheck size={24} />

            <div>
              <strong>{t.footerCertified}</strong>
              <span>{t.footerCertifiedText}</span>
            </div>
          </div>

        </div>


        {/* Column 2 - Quick Links */}
        <div className="footer-column">

          <h3>{t.footerQuickLinks}</h3>

          <div className="footer-links">

            <a href="#about">
              {t.about}
              <ArrowUpRight size={14} />
            </a>

            <a href="#services">
              {t.services}
              <ArrowUpRight size={14} />
            </a>

            <a href="#testimonials">
              {t.footerSuccessStories}
              <ArrowUpRight size={14} />
            </a>

            <a href="#contact">
              {t.footerCareerOpportunities}
              <ArrowUpRight size={14} />
            </a>

          </div>

        </div>


        {/* Column 3 - Our Services */}
        <div className="footer-column">

          <h3>{t.footerOurServices}</h3>

          <div className="footer-links">

            <a href="#services">
              {t.recruitmentTitle}
              <ArrowUpRight size={14} />
            </a>

            <a href="#services">
              {t.documentationTitle}
              <ArrowUpRight size={14} />
            </a>

            <a href="#services">
              {t.visaTitle}
              <ArrowUpRight size={14} />
            </a>

            <a href="#services">
              {t.trainingTitle}
              <ArrowUpRight size={14} />
            </a>

          </div>

        </div>


        {/* Column 4 - Get in Touch */}
        <div className="footer-column footer-contact">

          <h3>{t.footerGetInTouch}</h3>

          <div className="footer-contact-list">

            <a
              href={`tel:${t.contactPhoneLink}`}
              className="footer-contact-item"
            >
              <Phone size={18} />
              <span>{t.contactPhone}</span>
            </a>

            <a
              href="mailto:info@dahmashigroup.com"
              className="footer-contact-item"
            >
              <Mail size={18} />
              <span>{t.contactEmail}</span>
            </a>

            <a
              href="https://maps.app.goo.gl/mK1se6uFgX3iGXb68"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-item"
            >
              <MapPin size={18} />
              <span>{t.contactOfficeLocation}</span>
            </a>

            <div className="footer-contact-item">
              <Clock size={18} />
              <span>{t.footerSupport}</span>
            </div>

          </div>

        </div>

      </div>


      {/* Footer Bottom */}
      <div className="footer-bottom">

        <div className="footer-bottom-container">

          {/* Follow Us */}
          <div className="footer-social">

            <span>{t.footerFollowUs}</span>

            <div className="social-icons">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <span className="social-facebook">f</span>
              </a>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <span className="social-linkedin">in</span>
              </a>


              {/* WhatsApp */}
              <a
                href="https://www.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>

            </div>

          </div>


          {/* Copyright */}
          <div className="footer-copyright">

            <div>
              © {localizedYear} {t.footerCompanyName}. {t.footerRights}
            </div>

            {/* Developer Credit */}
            <div
              id="developer"
              className="footer-developer"
            >
              <strong>
                {t.developedBy} {t.developerName}
              </strong>

              <span> | </span>

              <a href="tel:+8801688544489">
                <Phone size={14} />
                {t.developerPhone}
              </a>
            </div>

          </div>


          {/* Legal Links */}
          <div className="footer-legal">

            <button
              type="button"
              onClick={() => onLegalClick("privacy")}
            >
              {t.footerPrivacy}
            </button>

            <span></span>

            <button
              type="button"
              onClick={() => onLegalClick("terms")}
            >
              {t.footerTerms}
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;