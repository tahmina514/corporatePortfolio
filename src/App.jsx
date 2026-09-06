import { useLanguage } from "./context/LanguageContext";
import translations from "./translations/translations";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Developer from "./pages/Developer";
import heroImage from "./assets/banner.jpg";
import { useEffect, useState, useRef } from "react";

import {
  Routes,
  Route,
} from "react-router-dom";

import {
  Star,
  Play,
  Users,
  Building2,
  Trophy,
  Search,
  TriangleAlert,
  Lightbulb,
  TrendingUp,
  BriefcaseBusiness,
  FileText,
  Plane,
  GraduationCap,
  ArrowRight,
  Phone,
  Rocket,
  Mail,
  MapPin,
  Clock
} from "lucide-react";

import "./App.css";

const convertNumber = (value, language) => {
  const localeMap = {
    bn: "bn-BD",
    en: "en-US",
    ar: "ar-SA",
    ms: "ms-MY",
  };

  const locale = localeMap[language];

  return value.replace(/\d+/g, (number) => {
    return new Intl.NumberFormat(locale).format(Number(number));
  });
};


function Home({ darkMode, setDarkMode }) {

  const { language } = useLanguage();
  const t = translations[language];

  // Service modal state
  const [selectedService, setSelectedService] = useState(null);
  const modalRef = useRef(null);

  // Service details based on selected service
  const serviceDetails = {
    recruitment: {
      title: t.recruitmentTitle,
      details: t.recruitmentDetails,
      icon: Users,
    },
    documentation: {
      title: t.documentationTitle,
      details: t.documentationDetails,
      icon: FileText,
    },
    visa: {
      title: t.visaTitle,
      details: t.visaDetails,
      icon: Plane,
    },
    training: {
      title: t.trainingTitle,
      details: t.trainingDetails,
      icon: GraduationCap,
    },
    flight: {
      title: t.flightTitle,
      details: t.flightDetails,
      icon: Plane,
    },
  };

  // Close modal when clicking outside the modal content
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        selectedService &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setSelectedService(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [selectedService]);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  const handleModalContact = () => {
    setSelectedService(null);

    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const selectedServiceData =
    selectedService ? serviceDetails[selectedService] : null;

  const SelectedServiceIcon =
    selectedServiceData?.icon;


  return (
    <div className={darkMode ? "dark" : ""}>

      {/* Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>

        {/* =========================
            HERO SECTION
        ========================= */}
        <section id="home" className="hero">

          <img
            src={heroImage}
            alt="Company Banner"
            className="hero-bg"
          />

          <div className="hero-overlay">

            <div className="hero-content">

              <div className="hero-trust">
                <Star size={18} fill="currentColor" />
                <span>{t.heroTrust}</span>
              </div>

              <h1>{t.heroTitle}</h1>

              <p>{t.heroDescription}</p>

              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                <Play size={16} fill="currentColor" />
                <span>{t.heroButton}</span>
              </button>

              <div className="hero-stats">

                <div className="stat-card">
                  <Users size={28} />
                  <span>{convertNumber(t.heroStat1, language)}</span>
                </div>

                <div className="stat-card">
                  <Building2 size={28} />
                  <span>{convertNumber(t.heroStat2, language)}</span>
                </div>

                <div className="stat-card">
                  <Trophy size={28} />
                  <span>{convertNumber(t.heroStat3, language)}</span>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =========================
            ABOUT SECTION
        ========================= */}
        <section id="about">

          <div className="about-header">

            <div className="about-label">
              <Building2 size={18} />
              <span>{t.aboutTitle}</span>
            </div>

            <h2>{t.aboutHeading}</h2>

            <p>{t.aboutDescription}</p>

          </div>


          <div className="about-cards">

            <div className="about-card">

              <div className="about-card-title">
                <Search size={24} />
                <h3>{t.aboutChallengeTitle}</h3>
              </div>

              <p>{t.aboutChallenge}</p>

            </div>


            <div className="about-card">

              <div className="about-card-title">
                <TriangleAlert size={24} />
                <h3>{t.aboutRealityTitle}</h3>
              </div>

              <p>{t.aboutReality}</p>

            </div>


            <div className="about-card">

              <div className="about-card-title">
                <Lightbulb size={24} />
                <h3>{t.aboutSolutionTitle}</h3>
              </div>

              <p>{t.aboutSolution}</p>

            </div>


            <div className="about-card">

              <div className="about-card-title">
                <TrendingUp size={24} />
                <h3>{t.aboutImpactTitle}</h3>
              </div>

              <p>{t.aboutImpact}</p>

            </div>

          </div>


          <div className="about-stats">

            <div className="about-stat-card">
              <span>
                {convertNumber(t.aboutStat1Number, language)}
              </span>
              <small>{t.aboutStat1Text}</small>
            </div>

            <div className="about-stat-card">
              <span>
                {convertNumber(t.aboutStat2Number, language)}
              </span>
              <small>{t.aboutStat2Text}</small>
            </div>

            <div className="about-stat-card">
              <span>
                {convertNumber(t.aboutStat3Number, language)}
              </span>
              <small>{t.aboutStat3Text}</small>
            </div>

          </div>

        </section>


        {/* =========================
            SERVICES SECTION
        ========================= */}
        <section id="services">

          <div className="services-header">

            <div className="services-label">
              <BriefcaseBusiness size={18} />
              <span>{t.whatWeOffer}</span>
            </div>

            <h2>{t.servicesHeading}</h2>

            <p>{t.servicesDescription}</p>

          </div>


          <div className="services-cards">

            <div className="service-card">

              <div className="service-icon">
                <Users size={28} />
              </div>

              <h3>{t.recruitmentTitle}</h3>

              <p>{t.recruitmentDescription}</p>

              <button
                className="service-learn"
                onClick={() => handleServiceClick("recruitment")}
              >
                <span>{t.learnMore}</span>
                <ArrowRight size={18} />
              </button>

            </div>


            <div className="service-card">

              <div className="service-icon">
                <FileText size={28} />
              </div>

              <h3>{t.documentationTitle}</h3>

              <p>{t.documentationDescription}</p>

              <button
                className="service-learn"
                onClick={() => handleServiceClick("documentation")}
              >
                <span>{t.learnMore}</span>
                <ArrowRight size={18} />
              </button>

            </div>


            <div className="service-card">

              <div className="service-icon">
                <Plane size={28} />
              </div>

              <h3>{t.visaTitle}</h3>

              <p>{t.visaDescription}</p>

              <button
                className="service-learn"
                onClick={() => handleServiceClick("visa")}
              >
                <span>{t.learnMore}</span>
                <ArrowRight size={18} />
              </button>

            </div>


            <div className="service-card">

              <div className="service-icon">
                <GraduationCap size={28} />
              </div>

              <h3>{t.trainingTitle}</h3>

              <p>{t.trainingDescription}</p>

              <button
                className="service-learn"
                onClick={() => handleServiceClick("training")}
              >
                <span>{t.learnMore}</span>
                <ArrowRight size={18} />
              </button>

            </div>


            <div className="service-card">

              <div className="service-icon">
                <Plane size={28} />
              </div>

              <h3>{t.flightTitle}</h3>

              <p>{t.flightDescription}</p>

              <button
                className="service-learn"
                onClick={() => handleServiceClick("flight")}
              >
                <span>{t.learnMore}</span>
                <ArrowRight size={18} />
              </button>

            </div>

          </div>


          <div className="services-cta">

            <p>{t.servicesCta}</p>

            <button
              className="services-contact-btn"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <Phone size={18} />
              <span>{t.contactTeam}</span>
            </button>

          </div>

        </section>


        {/* =========================
            TESTIMONIALS SECTION
        ========================= */}
        <section id="testimonials">

          <div className="section-heading">

            <span className="section-label">
              {t.testimonialsLabel}
            </span>

            <h2>{t.testimonialsHeading}</h2>

            <p>{t.testimonialsDescription}</p>

          </div>


          <div className="testimonial-container">

            {/* Testimonial Card 1 */}
            <div className="testimonial-card">

              <p className="testimonial-text">
                "{t.testimonial1Text}"
              </p>

              <div className="testimonial-rating">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>

              <div className="testimonial-user">

                <div className="profile-wrapper">

                  <img
                    src="https://i.pravatar.cc/100?img=12"
                    alt={t.testimonial1Name}
                  />

                  <span className="online-dot"></span>

                </div>

                <div className="user-info">

                  <h3>{t.testimonial1Name}</h3>

                  <p>{t.testimonial1Job}</p>

                  <span>
                    🇸🇦 {t.testimonial1Country}
                  </span>

                </div>

              </div>

            </div>


            {/* Testimonial Card 2 */}
            <div className="testimonial-card">

              <p className="testimonial-text">
                "{t.testimonial2Text}"
              </p>

              <div className="testimonial-rating">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>

              <div className="testimonial-user">

                <div className="profile-wrapper">

                  <img
                    src="https://i.pravatar.cc/100?img=33"
                    alt={t.testimonial2Name}
                  />

                  <span className="online-dot"></span>

                </div>

                <div className="user-info">

                  <h3>{t.testimonial2Name}</h3>

                  <p>{t.testimonial2Job}</p>

                  <span>
                    🇦🇪 {t.testimonial2Country}
                  </span>

                </div>

              </div>

            </div>


            {/* Testimonial Card 3 */}
            <div className="testimonial-card">

              <p className="testimonial-text">
                "{t.testimonial3Text}"
              </p>

              <div className="testimonial-rating">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>

              <div className="testimonial-user">

                <div className="profile-wrapper">

                  <img
                    src="https://i.pravatar.cc/100?img=47"
                    alt={t.testimonial3Name}
                  />

                  <span className="online-dot"></span>

                </div>

                <div className="user-info">

                  <h3>{t.testimonial3Name}</h3>

                  <p>{t.testimonial3Job}</p>

                  <span>
                    🇲🇾 {t.testimonial3Country}
                  </span>

                </div>

              </div>

            </div>

          </div>


          {/* Testimonial CTA */}
          <div className="testimonial-cta">

            <h2>{t.testimonialCtaTitle}</h2>

            <div className="testimonial-buttons">

              <a
                href="#contact"
                className="testimonial-btn"
              >
                <Rocket />
                {t.testimonialGetStarted}
              </a>

              <a
                href="#contact"
                className="testimonial-btn"
              >
                <Phone />
                {t.testimonialTalkTeam}
              </a>

            </div>

          </div>

        </section>


        {/* =========================
            CONTACT SECTION
        ========================= */}
        <section id="contact">

          <div className="contact-header">

            <span className="contact-label">
              <Phone />
              {t.contactLabel}
            </span>

            <h2>{t.contactHeading}</h2>

            <p>
              {t.contactDescription}
            </p>

          </div>


          <div className="contact-cards">

            {/* Call Us Now */}
            <div className="contact-card">

              <div className="contact-icon">
                <Phone />
              </div>

              <h3>{t.contactPhoneTitle}</h3>

              <p>
                {t.contactPhoneDescription}
              </p>

              <a
                href={`tel:${t.contactPhoneLink}`}
                className="contact-link"
              >
                {t.contactPhone}
              </a>

              <span className="contact-info">
                {t.contactPhoneHours}
              </span>

            </div>


            {/* Email Us */}
            <div className="contact-card">

              <div className="contact-icon">
                <Mail />
              </div>

              <h3>{t.contactEmailTitle}</h3>

              <p>
                {t.contactEmailDescription}
              </p>

              <a
                href="mailto:info@dahmashigroup.com"
                className="contact-link"
              >
                info@dahmashigroup.com
              </a>

              <span className="contact-info">
                {t.contactEmailResponse}
              </span>

            </div>


            {/* Visit Our Office */}
            <div className="contact-card">

              <div className="contact-icon">
                <MapPin />
              </div>

              <h3>{t.contactOfficeTitle}</h3>

              <p>
                {t.contactOfficeDescription}
              </p>

              <a
                href="https://maps.app.goo.gl/mK1se6uFgX3iGXb68"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                {t.contactOfficeLocation}
              </a>

              <span className="contact-info">
                {t.contactOfficeInfo}
              </span>

            </div>


            {/* Business Hours */}
            <div className="contact-card">

              <div className="contact-icon">
                <Clock />
              </div>

              <h3>{t.contactHoursTitle}</h3>

              <p>
                {t.contactHoursDescription}
              </p>

              <span className="contact-link">
                {t.contactHours}
              </span>

              <span className="contact-info">
                {t.contactClosed}
              </span>

            </div>

          </div>


          <div className="contact-cta">

            <p>
              {t.contactCta}
            </p>

            <div className="contact-buttons">

              <a
                href="tel:+8801733777788"
                className="contact-btn contact-call-btn"
              >
                <Phone />
                {t.contactCallButton}
              </a>

              <a
                href="mailto:info@dahmashigroup.com"
                className="contact-btn contact-mail-btn"
              >
                <Mail />
                {t.contactMailButton}
              </a>

            </div>

          </div>

        </section>

      </main>

      {/* Service Details Modal */}
      {selectedServiceData && (
        <div className="service-modal-overlay">

          <div
            className="service-modal"
            ref={modalRef}
            dir={language === "ar" ? "rtl" : "ltr"}
          >

            <button
              className="service-modal-close"
              onClick={closeServiceModal}
              aria-label={t.serviceModalClose}
            >
              ×
            </button>

            <div className="service-modal-icon">
              <SelectedServiceIcon size={30} />
            </div>

            <span className="service-modal-label">
              {t.serviceDetailsTitle}
            </span>

            <h2>{selectedServiceData.title}</h2>

            <p>{selectedServiceData.details}</p>

            <button
              className="service-modal-contact"
              onClick={handleModalContact}
            >
              <Phone size={18} />
              <span>{t.serviceModalContact}</span>
            </button>

          </div>

        </div>
      )}

      {/* Footer */}
      <Footer />

    </div>
  );
}


function App() {

  // =========================
  // GLOBAL DARK MODE STATE
  // =========================
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>

      <Routes>

        <Route
          path="/"
          element={
            <Home
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />

        <Route
          path="/developer"
          element={<Developer />}
        />

      </Routes>

    </div>
  );
}

export default App;