import Book from "../../components/Book";
import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      <div className="layout">
        <aside className="asideLeft"></aside>
        <main>
          <Book />
        </main>
        <aside className="asideRight"></aside>
      </div>
    </>
  );
}

export default Portfolio;
