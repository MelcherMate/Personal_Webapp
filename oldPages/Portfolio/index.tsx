import bvLogo from "../../../public/img/bvLogo.png";
import profNoBg from "../../../public/img/profNoBg.png";
import udLogoWhite from "../../../public/img/udLogoWhite.png";
import ResumeENG from "../../../public/pdf/ResumeENG.pdf";
import InfoCard from "../../client/src/components/infoCard";
// import "./Portfolio.css";

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
              >
                Resume
              </a>
            </div>
            <div className="section" id="section2">
              {" "}
              <InfoCard
                title="Biochemical Engineering"
                imagePath={udLogoWhite}
                subtitle="Where it all began"
                content="When I was a kid, I dreamed of being a doctor—until I realized I was more fascinated by machines! Instead of giving up on biology, I decided to mix it with my love for engineering. That’s how I ended up diving headfirst into the awesome world of Bioengineering."
                backContent="Work in progress ..."
              />
              <InfoCard
                title="Commerce and Marketing"
                imagePath={udLogoWhite}
                subtitle="A new path"
                content="I think being a rockstar engineer isn’t just about crafting brilliant, sustainable, and ethical products that hit the sweet spot of market demand—it’s also about teaming up with the business crew to keep the company thriving and the profits rolling in."
                backContent="Work in progress ..."
              />{" "}
              <InfoCard
                title="Software Engineering"
                imagePath={bvLogo}
                subtitle="Entepreneurship"
                content="To put my engineering and marketing skills to the ultimate test, I launched my own company, Bioversee. Now, I’m diving into exciting projects with clients, building an interactive web application for industrial PLC control systems—and loving every minute of the challenge."
                backContent="Work in progress ..."
              />
            </div>
            {/* <div className="infoContainer"></div> */}
            <div className="section" id="section3"></div>
          </div>
        </main>
        <aside className="asideRight"></aside>
      </div>
    </>
  );
}

export default Portfolio;
