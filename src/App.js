import "./App.css";
import Banner from "./components/Banner/Banner";
import Experts from "./components/experts/Experts";
import Services from "./components/Home/Services";
import HomeBar from "./components/Navbar/HomeBar";

function App() {
  return (
    <div className="App">
      <div>
        <HomeBar />
        <Banner />
        <Services />
        <Experts />
      </div>
    </div>
  );
}

export default App;
