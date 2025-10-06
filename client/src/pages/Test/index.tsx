import Menu from "../../components/Menu";
import "./Test.css";

function Testsite() {
  return (
    <div className="pageLayout">
      <aside className="side left"></aside>
      <main className="mainContent">
        <Menu />
      </main>
      <aside className="side right"></aside>
    </div>
  );
}

export default Testsite;
