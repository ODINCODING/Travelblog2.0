import "./App.css";
import NavBar from "./Components/NavBar";
import MobileDropDown from "./Components/MobileMenu";
import ContentCard from "./Components/CCParis";
import CCDUbai from "./Components/CCDubai";
import CCParis from "./Components/CCParis";

function App() {
  return (
    <section>
      <NavBar />
      <div></div>
      <MobileDropDown />
      <CCParis />
      <CCDUbai />
    </section>
  );
}

export default App;
