import { useEffect, useState } from "react";
import "./Testsite.css";

function Testsite() {
  const [clicked, setClicked] = useState(false);
  const [popupContent, setPopupContent] = useState<React.ReactNode | null>(
    null
  );
  const [closing, setClosing] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleBubbleClick = (content: React.ReactNode) => {
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
        <div
          className="infoBubble infoBubble1"
          onClick={() => handleBubbleClick("Content for bubble 1")}
        ></div>
        <div
          className="infoBubble infoBubble2"
          onClick={() => handleBubbleClick("Content for bubble 2")}
        ></div>
        <div
          className="infoBubble infoBubble3"
          onClick={() => handleBubbleClick("Content for bubble 3")}
        ></div>
        <div
          className="infoBubble infoBubble4"
          onClick={() => handleBubbleClick("Content for bubble 4")}
        ></div>
        <div
          className="infoBubble infoBubble5"
          onClick={() => handleBubbleClick("Content for bubble 5")}
        ></div>
        <div
          className="infoBubble infoBubble6"
          onClick={() => handleBubbleClick("Content for bubble 6")}
        ></div>
        <div
          className="infoBubble infoBubble7"
          onClick={() => handleBubbleClick("Content for bubble 7")}
        ></div>
        <div
          className="infoBubble infoBubble8"
          onClick={() => handleBubbleClick("Content for bubble 8")}
        ></div>
        <div
          className="infoBubble infoBubble9"
          onClick={() => handleBubbleClick("Content for bubble 9")}
        ></div>
        <div
          className="infoBubble infoBubble10"
          onClick={() => handleBubbleClick("Content for bubble 10")}
        ></div>
        <div
          className="infoBubble infoBubble11"
          onClick={() => handleBubbleClick("Content for bubble 11")}
        ></div>
        {popupContent && (
          <div className={`popup ${closing ? "popupClosing" : ""}`}>
            <div className="popupContent">{popupContent}</div>
          </div>
        )}
      </main>
    </>
  );
}

export default Testsite;
