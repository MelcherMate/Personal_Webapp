import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Menu from "../../components/Menu";
import "./Test.css";

const layouts = {
  0: ["div1", "div2", "div3"],
  1: ["div1", "div2", "div3", "div4"],
  2: ["div1", "div2", "div3", "div4", "div5", "div6", "div7"],
  3: ["div1"],
  4: ["div1", "div2", "div3", "div4", "div5", "div6", "div7", "div8", "div9"],
};

const layoutsContent: Record<number, Record<string, JSX.Element | string>> = {
  0: {
    div1: <span>Content for div1 in layout 0</span>,
    div2: <span>Content for div2 in layout 0</span>,
    div3: <span>Content for div3 in layout 0</span>,
  },
  1: {
    div1: <span>Content for div1 in layout 1</span>,
    div2: <span>Content for div2 in layout 1</span>,
    div3: <span>Content for div3 in layout 1</span>,
    div4: <span>Content for div4 in layout 1</span>,
  },
  2: {
    div1: (
      <blockquote className="buzzQuote">
        "Neil Armstrong was the first man to walk on the moon. I am the first
        man to piss his pants on the moon."
        <footer>― Buzz Aldrin</footer>
      </blockquote>
    ),
    div2: <span>Some other content for div2</span>,
    div3: <span>Another content for div3</span>,
    div4: <span className="mateMelcher">Mate Melcher</span>,
    div5: <span>Content 5</span>,
    div6: (
      <div className="pdfButtons">
        <a href="/pdf/ResumeENG.pdf" download>
          <button>Download Resume</button>
        </a>
        <a href="/pdf/econThesisFinished.pdf" download>
          <button>Download Econ Thesis</button>
        </a>
      </div>
    ),
    div7: <span>Content 7</span>,
  },
  3: {
    div1: <span>Only one div in layout 3</span>,
  },
  4: {
    div1: <span>Layout 4 div1 content</span>,
    div2: <span>Layout 4 div2 content</span>,
    div3: <span>Layout 4 div3 content</span>,
    div4: <span>Layout 4 div4 content</span>,
    div5: <span>Layout 4 div5 content</span>,
    div6: <span>Layout 4 div6 content</span>,
    div7: <span>Layout 4 div7 content</span>,
    div8: <span>Layout 4 div8 content</span>,
    div9: <span>Layout 4 div9 content</span>,
  },
};

function Testsite() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="pageLayout">
      <aside className="side left"></aside>

      <main className="mainContent">
        <Menu activeIndex={activeIndex} setActiveIndex={setActiveIndex} />

        <div className={`parent layout-${activeIndex}`}>
          <AnimatePresence>
            {layouts[activeIndex].map((id) => (
              <motion.div
                key={id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={id}
              >
                {layoutsContent[activeIndex][id]}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>

      <aside className="side right"></aside>
    </div>
  );
}

export default Testsite;
