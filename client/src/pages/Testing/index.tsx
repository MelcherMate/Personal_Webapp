import { useState } from "react";
import "./Testsite.css";

function Testsite() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

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
        <div className="infoBubble infoBubble1"></div>
        <div className="infoBubble infoBubble2"></div>
        <div className="infoBubble infoBubble3"></div>
        <div className="infoBubble infoBubble4"></div>
        <div className="infoBubble infoBubble5"></div>
        <div className="infoBubble infoBubble6"></div>
        <div className="infoBubble infoBubble7"></div>
        <div className="infoBubble infoBubble8"></div>
        <div className="infoBubble infoBubble9"></div>
        <div className="infoBubble infoBubble10"></div>
        <div className="infoBubble infoBubble11"></div>
      </main>
    </>
  );
}

export default Testsite;
