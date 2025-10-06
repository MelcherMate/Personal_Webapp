import Menu from "../../components/Menu";
import "./Test.css";

function Testsite() {
  return (
    <div className="pageLayout">
      <aside className="side left"></aside>
      <main className="mainContent">
        <Menu />
        <div className="metroCards">
          <div className="metroCard card1">Card 1</div>
          <div className="metroCard card2">Card 2</div>
          <div className="metroCard card3">Card 3</div>
        </div>
      </main>
      <aside className="side right"></aside>
    </div>
  );
}

export default Testsite;
