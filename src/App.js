import "./App.css";
import NavBar from "./Components/NavBar";
import MobileDropDown from "./Components/MobileMenu";
import ContentCard from "./Components/ContentCard";

function App() {
  return (
    <section>
      <NavBar />
      <MobileDropDown />
      <div className="Cards">
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </div>
    </section>
  );
}

export default App;
