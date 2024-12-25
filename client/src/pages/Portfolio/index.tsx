import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      <div className="layout">
        <aside className="asideLeft"></aside>
        <main>
          <div className="content">
            <div className="section" id="section1">
              <h1 id="myName">Mate Melcher</h1>
            </div>
            <div className="section" id="section2"></div>
            <div className="section" id="section3"></div>
          </div>
        </main>
        <aside className="asideRight"></aside>
      </div>
    </>
  );
}

export default Portfolio;
