import "../../utils/img/Schoolar.png";
import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      <div className="layout">
        <aside className="asideLeft"></aside>
        <main>
          <div className="content">
            <div className="section" id="section1">
              <table>
                <tr>
                  <td>
                    <h2 id="hi">Hi I am</h2>
                    <h1 id="myName">Mate Melcher</h1>
                    <div className="separation"> </div>
                    <h3 className="text">
                      {" "}
                      I started out wanting to cure diseases. Then I wanted to
                      sell things. Now I just want my code working. I'm a
                      biochemical engineer/marketing specialist turned web
                      developer, currently working for a bank.{" "}
                    </h3>
                  </td>
                  <td>
                    <img src="../../utils/img/profNoBg.png"></img>
                  </td>
                </tr>
              </table>
            </div>
            <div className="linkContainer">
              <a
                href="https://www.linkedin.com/in/mate-melcher-5a16601bb/"
                className="linkButton"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://scholar.google.com/citations?user=udUgb-IAAAAJ&hl=hu&authuser=1"
                className="linkButton"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar
              </a>
              <a
                href="https://github.com/MelcherMate"
                className="linkButton"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="/utils/resume/ResumeENG.pdf"
                className="linkButton"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
            <div className="section" id="section2"></div>
            {/* <div className="section" id="section3"></div> */}
          </div>
        </main>
        <aside className="asideRight"></aside>
      </div>
    </>
  );
}

export default Portfolio;
