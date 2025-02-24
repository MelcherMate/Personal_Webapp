import { useEffect, useState } from "react";
import "./Home.css";

function Home() {
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
    }, 500);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popupContent]);

  return (
    <>
      <main>
        <div
          className={`centerContainer ${clicked ? "clicked" : ""}`}
          onClick={handleClick}
        ></div>
        <div className="orbit mercury-orbit">
          <div className="planet mercury"></div>
        </div>
        <div className="orbit venus-orbit">
          <div className="planet venus"></div>
        </div>
        <div className="orbit earth-orbit">
          <div className="planet earth">
            <div className="moon-orbit">
              <div className="moon"></div>
            </div>
          </div>
        </div>
        <div className="orbit mars-orbit">
          <div className="planet mars"></div>
        </div>
        <div className="orbit jupiter-orbit">
          <div className="planet jupiter"></div>
        </div>
        <div className="orbit saturn-orbit">
          <div className="planet saturn">
            <div className="saturn-ring1"></div>
            <div className="saturn-ring2"></div>
          </div>
        </div>
        <div className="orbit uranus-orbit">
          <div className="planet uranus"></div>
        </div>
        <div className="orbit neptune-orbit">
          <div className="planet neptune"></div>
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

export default Home;
