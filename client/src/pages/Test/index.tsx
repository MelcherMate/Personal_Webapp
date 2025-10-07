import { useState } from "react";
import { FaFacebookF, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import Menu from "../../components/Menu";
import "./Test.css";

function Testsite() {
  const [activeIndex, setActiveIndex] = useState(2); // Default "Home"

  const pdfFiles = [
    {
      title: "Bioengineering Thesis (HU)",
      path: "/pdf/bioengThesisFinished.pdf",
    },
    { title: "Economics Thesis (ENG)", path: "/pdf/econThesisFinished.pdf" },
    { title: "Resume (ENG)", path: "/pdf/ResumeENG.pdf" },
  ];

  return (
    <div className="pageLayout">
      <aside className="side left"></aside>

      <main className="mainContent">
        <Menu activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

        <div className={`metroCards layout-${activeIndex}`}>
          {/* =================== CARD 1 =================== */}
          <div className="metroCard card1">
            <div className="cardContent visible">
              {activeIndex === 0 ? (
                <>
                  <h3 className="cardTitle">Máté Melcher</h3>
                  <p className="cardText">
                    melchermate28@gmail.com <br />
                    +36 20 283 7172 <br />
                    Hungary, 3529 Miskolc – 16/a Aulich Lajos Street <br />
                    Austria, 6020 Innsbruck – 3 Richard-Wagner Street
                  </p>
                </>
              ) : activeIndex === 2 ? (
                <>
                  <h3 className="cardTitle">Mate Melcher</h3>
                  <p className="cardText">
                    Welcome to my portfolio. Here you can explore my projects
                    and work.
                  </p>
                </>
              ) : activeIndex === 3 ? (
                <>
                  <FaFilePdf size={48} color="#E74C3C" />
                  <h3 className="cardTitle">{pdfFiles[0].title}</h3>
                  <a className="downloadBtn" href={pdfFiles[0].path} download>
                    Download
                  </a>
                </>
              ) : activeIndex === 4 ? (
                <>
                  <h3 className="cardTitle">First Chapter</h3>
                  <p className="cardText">
                    This section contains the first chapter of my latest work.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="cardTitle">Card 1</h3>
                  <p className="cardText">Default content</p>
                </>
              )}
            </div>
          </div>

          {/* =================== CARD 2 (Layout 0 → Social Buttons) =================== */}
          <div className="metroCard card2">
            <div className="cardContent visible">
              {activeIndex === 0 ? (
                <div className="social-buttons">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn facebook"
                  >
                    <FaFacebookF className="social-icon" />
                    <span className="social-text fb-font">facebook</span>
                  </a>
                  <a
                    href="https://github.com/MelcherMate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn github"
                  >
                    <FaGithub className="social-icon" />
                    <span className="social-text gh-font">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/matemelcher/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn linkedin"
                  >
                    <FaLinkedin className="social-icon" />
                    <span className="social-text li-font">LinkedIn</span>
                  </a>
                </div>
              ) : activeIndex === 3 ? (
                <>
                  <FaFilePdf size={48} color="#E74C3C" />
                  <h3 className="cardTitle">{pdfFiles[1].title}</h3>
                  <a className="downloadBtn" href={pdfFiles[1].path} download>
                    Download
                  </a>
                </>
              ) : (
                <>
                  <h3 className="cardTitle">Card 2</h3>
                  <p className="cardText">Default content</p>
                </>
              )}
            </div>
          </div>

          {/* =================== CARD 3 =================== */}
          <div className="metroCard card3">
            <div className="cardContent visible">
              {activeIndex === 3 ? (
                <>
                  <FaFilePdf size={48} color="#E74C3C" />
                  <h3 className="cardTitle">{pdfFiles[2].title}</h3>
                  <a className="downloadBtn" href={pdfFiles[2].path} download>
                    Download
                  </a>
                </>
              ) : (
                <>
                  <h3 className="cardTitle">Card 3</h3>
                  <p className="cardText">Default content</p>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <aside className="side right"></aside>
    </div>
  );
}

export default Testsite;
