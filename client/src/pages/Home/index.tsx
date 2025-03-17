import { useEffect, useState } from "react";
import { FaFacebook, FaFlask, FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../../../public/img/IMG_3794 3.png";
import bioengThesis from "../../../public/pdf/bioengThesisFinished.pdf";
import econThesis from "../../../public/pdf/econThesisFinished.pdf";
import "./Home.css";

const Home = () => {
  const [clicked, setClicked] = useState(false);
  const [showToast, setShowToast] = useState(true);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleDownload1 = () => {
    const link = document.createElement("a");
    link.href = bioengThesis;
    link.download = "Bioengineering_BSc_Thesis_HU.pdf";
    link.click();
  };

  const handleDownload2 = () => {
    const link = document.createElement("a");
    link.href = econThesis;
    link.download = "Economics_BSc_Thesis_EN.pdf";
    link.click();
  };

  const handleDownload3 = () => {
    window.open("https://www.bioversee.com/");
  };

  const handleLink1 = () => {
    window.open("https://www.linkedin.com/in/matemelcher/");
  };

  const handleLink2 = () => {
    window.open(
      "https://scholar.google.com/citations?user=udUgb-IAAAAJ&hl=hu&authuser=1"
    );
  };

  const handleLink3 = () => {
    window.open("https://github.com/MelcherMate");
  };

  const handleLink4 = () => {
    window.open("https://www.facebook.com/profile.php?id=100080118015753");
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <main className="home">
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
        <div className="infoBubbleContent infoBubbleContent1">
          <div className="profileContainer">
            <img src={profile} alt="Profile Image" className="profile" />
          </div>
        </div>
      </div>
      <div className={`infoBubble infoBubble2`}>
        <div className="infoBubbleContent">
          <h2 className="title">Bioengineering</h2>
          <p className="paragraph paragraph2">
            The jurney had it's ups and downs, but in 2023 I became a Biomedical
            Engineer.
          </p>
          <button className="download1" onClick={handleDownload1}>
            Download BSc Thesis
          </button>
        </div>
      </div>
      <div className={`infoBubble infoBubble3`}>
        <div className="infoBubbleContent">
          <h2 className="title">Economics</h2>
          <p className="paragraph paragraph3">
            Wanted to use my free time efficiently. Started studying economics
            in 2021.
          </p>
          <button className="download2" onClick={handleDownload2}>
            Download BSc Thesis
          </button>
        </div>
      </div>
      <div className={`infoBubble infoBubble4`}>
        <div className="infoBubbleContent">
          <h2 className="title">Software Development</h2>
          <p className="paragraph paragraph4">
            When I was a child I was a huge fan of LEGO. For me, softwares are
            like LEGO toys, except they don't lay all around in my room.
          </p>{" "}
          <button className="download3" onClick={handleDownload3}>
            Project Bioversee
          </button>
        </div>{" "}
      </div>
      <div className={`infoBubble infoBubble5`}>
        <div className="infoBubbleContent infoBubbleContent5">
          <button className="linkButton linkButton1" onClick={handleLink1}>
            <FaLinkedin className="socialIcon" />
            Linkedin
          </button>
          <button className="linkButton linkButton2" onClick={handleLink2}>
            <FaFlask className="socialIcon" />
            Google Scholar
          </button>
          <button className="linkButton linkButton3" onClick={handleLink3}>
            <FaGithub className="socialIcon" />
            GitHub
          </button>
          <button className="linkButton linkButton4" onClick={handleLink4}>
            <FaFacebook className="socialIcon" />
            Facebook
          </button>
        </div>
      </div>
      <div className={`infoBubble infoBubble6`}>
        <div className="infoBubbleContent infoBubbleContent6">
          <h2 className="title">Windsurf</h2>
          <p className="paragraph paragraph6">
            Following in my father's footsteps, I love spending time on the
            water when the weather is rugged.
          </p>
        </div>
      </div>
      <div className={`infoBubble infoBubble7`}>
        <div className="infoBubbleContent">
          <h2 className="title">Ski</h2>
          <p className="paragraph paragraph7">
            I was only 3 when I started. Scince there is almost no place in the
            Alpes I didn't tried.
          </p>
        </div>{" "}
      </div>

      <div className={`toast ${showToast ? "show" : "hide"}`}>
        Click on the Sun!
        <div className="progress-bar"></div>
      </div>
    </main>
  );
};

export default Home;
