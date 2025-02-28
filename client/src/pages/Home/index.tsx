import { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [clicked, setClicked] = useState(false);
  const [showToast, setShowToast] = useState(true);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <main>
      <div className={`sun ${clicked ? "clicked" : ""}`} onClick={handleClick}>
        <div className="sunContent">Welcome</div>
      </div>

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

      <div className={`infoBubble infoBubble1`}>
        <div className="infoBubbleContent infoBubbleContent1">CV</div>
      </div>
      <div className={`infoBubble infoBubble2`}>
        <div className="infoBubbleContent infoBubbleContent2">
          Bioengineering
        </div>
      </div>
      <div className={`infoBubble infoBubble3`}>
        <div className="infoBubbleContent infoBubbleContent3">Economics</div>
      </div>
      <div className={`infoBubble infoBubble4`}>
        <div className="infoBubbleContent infoBubbleContent4">Programming</div>
      </div>
      <div className={`infoBubble infoBubble5`}>
        <div className="infoBubbleContent infoBubbleContent5">
          Links to my profiles
        </div>
      </div>
      <div className={`infoBubble infoBubble6`}>
        <div className="infoBubbleContent infoBubbleContent6">Windsurfing</div>
      </div>
      <div className={`infoBubble infoBubble7`}>
        <div className="infoBubbleContent infoBubbleContent7">Skiing</div>
      </div>

      <div className={`toast ${showToast ? "show" : "hide"}`}>
        Click on the Sun!
        <div className="progress-bar"></div>
      </div>
    </main>
  );
};

export default Home;
