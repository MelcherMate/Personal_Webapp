import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import "./NavBar.css";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeBgRef = useRef(null);
  const buttonRefs = useRef([]);
  const [language, setLanguage] = useState("HU");

  const navigationItems1 = [
    "ajánlatok",
    "aláírandók",
    "üzenetek",
    "beállítások",
  ];
  const navigationItems2 = [
    "tranzakciók",
    "kártyák, számlák",
    "megtakarítások",
    "hitelek",
    "dokumentumok",
    "biztosítások",
  ];

  useEffect(() => {
    const updateActiveBg = (index) => {
      if (buttonRefs.current[index] && activeBgRef.current) {
        const button = buttonRefs.current[index];
        const rect = button.getBoundingClientRect();
        const activeBg = activeBgRef.current;

        activeBg.style.left = `${rect.left - rect.height / 2}px`;
        activeBg.style.width = `${rect.width + rect.height}px`;
        activeBg.style.top = `${rect.height - activeBg.offsetHeight + 30}px`;
      }
    };

    updateActiveBg(activeIndex);

    const handleResize = () => {
      updateActiveBg(activeIndex);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeIndex]);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  const handleLanguageToggle = () => {
    setLanguage(language === "HU" ? "EN" : "HU");
  };

  return (
    <>
      <header>
        <div className="mainLogo">
          <p className="mainLogoText">K&H</p>
        </div>
        <div className="wrapper1">
          <div className="container1">
            <p className="title">lakossági e-bank</p>
            <div className="dropdown">
              <select className="dropdown-select">
                <option value="melcher">Melcher Máté</option>
                <option value="bioversee">Bioversee Kft.</option>
                <option value="kh">K&H Bank Zrt.</option>
              </select>
            </div>
            <div className="naviContainer1">
              {navigationItems1.map((item, index) => (
                <div className="naviButton1" data-index={index}>
                  {item}
                </div>
              ))}
            </div>
            <input type="text" className="search" placeholder="Keresés..." />
            <button className="language" onClick={handleLanguageToggle}>
              {language}
            </button>
          </div>
        </div>
        <div className="wrapper2">
          <div className="container2">
            <div className="naviContainer2">
              {navigationItems2.map((item, index) => (
                <div
                  key={index}
                  className={`naviButton2 ${
                    index === activeIndex ? "active" : ""
                  }`}
                  data-index={index}
                  onClick={() => handleButtonClick(index)}
                  ref={(el) => (buttonRefs.current[index] = el)}
                >
                  {item}
                </div>
              ))}
              <div className="active-bg" ref={activeBgRef}></div>
            </div>
            <div className="logoutButton">
              <FontAwesomeIcon icon={faPowerOff} size="lg" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
