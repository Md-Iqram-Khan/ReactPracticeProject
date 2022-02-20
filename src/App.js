import "./App.css";
import Experts from "./components/experts/Experts";
import Services from "./components/Home/Services";

function App() {
  return (
    <div className="App">
      <div>
        <Services />
        <Experts />
      </div>
    </div>
  );
}

export default App;
