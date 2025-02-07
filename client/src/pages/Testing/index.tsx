import { useEffect, useState } from "react";
import "react-icons";
import {
  FaAndroid,
  FaApple,
  FaBeer,
  FaBicycle,
  FaBus,
  FaCar,
  FaCoffee,
  FaPlane,
  FaRocket,
  FaShip,
  FaTrain,
} from "react-icons/fa";
import "./Testsite.css";

function Testsite() {
  const [clicked, setClicked] = useState(false);
  const [popupContent, setPopupContent] = useState<string | null>(null);
  const [closing, setClosing] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleBubbleClick = (content: string) => {
    setPopupContent(content);
    setClosing(false);
  };

  const handleClosePopup = () => {
    setClosing(true);
    setTimeout(() => {
      setPopupContent(null);
    }, 500); // Match the duration of the closing animation
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      popupContent &&
      !(event.target as HTMLElement).closest(".popup") &&
      !(event.target as HTMLElement).closest(".infoBubble")
    ) {
      handleClosePopup();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [popupContent]);

  const icons = [
    <FaBeer />,
    <FaCoffee />,
    <FaApple />,
    <FaAndroid />,
    <FaCar />,
    <FaBicycle />,
    <FaBus />,
    <FaTrain />,
    <FaPlane />,
    <FaShip />,
    <FaRocket />,
  ];

  return (
    <>
      <main className="testPage">
        <div
          className={`centerContainer ${clicked ? "clicked" : ""}`}
          onClick={handleClick}
        >
          <div className="menuLine menuLine1"></div>
          <div className="menuLine menuLine2"></div>
          <div className="menuLine menuLine3"></div>
          <div className="menuLine menuLine4"></div>
        </div>
        {[...Array(11)].map((_, index) => (
          <div
            key={index}
            className={`infoBubble infoBubble${index + 1}`}
            onClick={() => handleBubbleClick(`Content for bubble ${index + 1}`)}
          >
            {icons[index]}
          </div>
        ))}
        {popupContent && (
          <div className={`popup ${closing ? "popupClosing" : ""}`}>
            {/* <div className="popupClose" onClick={handleClosePopup}>
              &times;
            </div> */}
            <div className="popupContent">{popupContent}</div>
          </div>
        )}
      </main>
    </>
  );
}

export default Testsite;
