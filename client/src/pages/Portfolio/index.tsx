import profNoBg from "../../../public/img/profNoBg.png";
import ResumeENG from "../../../public/pdf/ResumeENG.pdf";
import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      <div className="layout">
        <aside className="asideLeft"></aside>
        <main>
          <div className="content">
            <div className="section" id="section1">
              <table className="table1">
                <tr className="table1Row">
                  <td className="table1LeftCell">
                    <h2 id="hi">Hi I am</h2>
                    <h1 id="myName">Mate Melcher</h1>
                    <div className="separation"> </div>
                    <h3 className="intro">
                      {" "}
                      I started out wanting to cure diseases. Then I wanted to
                      sell things. Now I just want my code working. I'm a
                      biochemical engineer/marketing specialist turned web
                      developer, currently working for a bank and for my own
                      company.{" "}
                    </h3>
                  </td>
                  <td className="table1RightCell">
                    <img src={profNoBg}></img>
                  </td>
                </tr>
              </table>
              <div className="backgroundCircles"></div>
            </div>
            <div className="linkContainer">
              <a
                href="https://www.linkedin.com/in/mate-melcher-5a16601bb/"
                className="linkButton"
                id="linedinButton"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                href="https://scholar.google.com/citations?user=udUgb-IAAAAJ&hl=hu&authuser=1"
                className="linkButton"
                id="scholarButton"
                target="_blank"
              >
                Google Scholar
              </a>
              <a
                href="https://github.com/MelcherMate"
                className="linkButton"
                id="githubButton"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href={ResumeENG}
                className="linkButton"
                id="resumeButton"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
            <div className="section" id="section2">
              <table className="table2">
                <tr className="table2Row">
                  <td className="table2LeftCell">
                    <div className="infoContainer"></div>
                  </td>
                  <td className="table2CenterCell">
                    <div className="infoContainer"></div>
                  </td>
                  <td className="table2RightCell">
                    <div className="infoContainer"></div>
                  </td>
                </tr>
              </table>
            </div>
            {/* <div className="section" id="section3"></div> */}
          </div>
        </main>
        <aside className="asideRight"></aside>
      </div>
    </>
  );
}

export default Portfolio;
