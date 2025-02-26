import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [clicked, setClicked] = useState(false);
  const [bubble1Clicked, setBubble1Clicked] = useState(false);
  const [bubble2Clicked, setBubble2Clicked] = useState(false);
  const [bubble3Clicked, setBubble3Clicked] = useState(false);
  const [bubble4Clicked, setBubble4Clicked] = useState(false);
  const [bubble5Clicked, setBubble5Clicked] = useState(false);
  const [bubble6Clicked, setBubble6Clicked] = useState(false);
  const [bubble7Clicked, setBubble7Clicked] = useState(false);
  const [bubble8Clicked, setBubble8Clicked] = useState(false);
  const [bubble9Clicked, setBubble9Clicked] = useState(false);
  const [bubble10Clicked, setBubble10Clicked] = useState(false);
  const [bubble11Clicked, setBubble11Clicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <main>
      <div
        className={`sun ${clicked ? "clicked" : ""}`}
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
        className={`infoBubble infoBubble1 ${bubble1Clicked ? "clicked" : ""}`}
        onClick={() => setBubble1Clicked(!bubble1Clicked)}
      >
        1
      </div>
      <div
        className={`infoBubble infoBubble2 ${bubble2Clicked ? "clicked" : ""}`}
        onClick={() => setBubble2Clicked(!bubble2Clicked)}
      >
        2
      </div>
      <div
        className={`infoBubble infoBubble3 ${bubble3Clicked ? "clicked" : ""}`}
        onClick={() => setBubble3Clicked(!bubble3Clicked)}
      >
        3
      </div>
      <div
        className={`infoBubble infoBubble4 ${bubble4Clicked ? "clicked" : ""}`}
        onClick={() => setBubble4Clicked(!bubble4Clicked)}
      >
        4
      </div>
      <div
        className={`infoBubble infoBubble5 ${bubble5Clicked ? "clicked" : ""}`}
        onClick={() => setBubble5Clicked(!bubble5Clicked)}
      >
        5
      </div>
      <div
        className={`infoBubble infoBubble6 ${bubble6Clicked ? "clicked" : ""}`}
        onClick={() => setBubble6Clicked(!bubble6Clicked)}
      >
        6
      </div>
      <div
        className={`infoBubble infoBubble7 ${bubble7Clicked ? "clicked" : ""}`}
        onClick={() => setBubble7Clicked(!bubble7Clicked)}
      >
        7
      </div>
      <div
        className={`infoBubble infoBubble8 ${bubble8Clicked ? "clicked" : ""}`}
        onClick={() => setBubble8Clicked(!bubble8Clicked)}
      >
        8
      </div>
      <div
        className={`infoBubble infoBubble9 ${bubble9Clicked ? "clicked" : ""}`}
        onClick={() => setBubble9Clicked(!bubble9Clicked)}
      >
        9
      </div>
      <div
        className={`infoBubble infoBubble10 ${
          bubble10Clicked ? "clicked" : ""
        }`}
        onClick={() => setBubble10Clicked(!bubble10Clicked)}
      >
        10
      </div>
      <div
        className={`infoBubble infoBubble11 ${
          bubble11Clicked ? "clicked" : ""
        }`}
        onClick={() => setBubble11Clicked(!bubble11Clicked)}
      >
        11
      </div>
    </main>
  );
};

export default Home;
