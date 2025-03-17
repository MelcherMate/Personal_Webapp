import { useEffect, useRef, useState } from "react";
import "./NavBar.css"; // Feltételezve, hogy a CSS fájl neve Navigation.css

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeBgRef = useRef(null);
  const buttonRefs = useRef([]);

  const navigationItems = [
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
        activeBg.style.top = `${
          rect.top + (rect.height - activeBg.offsetHeight) / 2
        }px`;
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

  return (
    <header className="wrapper">
      {navigationItems.map((item, index) => (
        <div
          key={index}
          className={`naviButton ${index === activeIndex ? "active" : ""}`}
          data-index={index}
          onClick={() => handleButtonClick(index)}
          ref={(el) => (buttonRefs.current[index] = el)}
        >
          {item}
        </div>
      ))}
      <div className="active-bg" ref={activeBgRef}></div>
    </header>
  );
};

export default Navbar;
