import {
  faHouse,
  faMessage,
  faSheetPlastic,
  faSquarePollHorizontal,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("home");
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
    setActiveMenuItem(sectionId);
  };

  useEffect(() => {
    const sectionIds = ["home", "about", "work", "projects", "contact"];

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveMenuItem(entry.target.id);
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup observer
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <div className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
        <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[73px] lg:h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center">
          <Link
            to="/"
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${
              activeMenuItem === 'home' ? 'active' : ''
            }`}
            onClick={() => scrollToSection('home')}
          >
            <FontAwesomeIcon icon={faHouse} />
          </Link>
          <Link
            to="/"
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${
              activeMenuItem === 'about' ? 'active' : ''
            }`}
            onClick={() => scrollToSection('about')}
          >
            <FontAwesomeIcon icon={faUserAlt} />
          </Link>
          <Link
            to="/"
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${
              activeMenuItem === 'work' ? 'active' : ''
            }`}
            onClick={() => scrollToSection('work')}
          >
            <FontAwesomeIcon icon={faSheetPlastic} />
          </Link>
          <Link
            to="/"
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${
              activeMenuItem === 'projects' ? 'active' : ''
            }`}
            onClick={() => scrollToSection('projects')}
          >
            <FontAwesomeIcon icon={faSquarePollHorizontal} />
          </Link>
          <Link
            to="/"
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${
              activeMenuItem === 'contact' ? 'active' : ''
            }`}
            onClick={() => scrollToSection('contact')}
          >
            <FontAwesomeIcon icon={faMessage} />
          </Link>
        </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
