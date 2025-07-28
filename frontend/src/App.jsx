import "./App.css";
import Header from "./components/Header";
import RFIDLogInterface from "./components/Logs";
import Researchfield from "./components/Researchfield";
import Subheader from "./components/Subheader";

const App = () => {
  const getLogs = () => {
    fetch("http://localhost:3000/logs")
      .then(res => console.log(res))
      .catch(err => console.error(err));
  };

  return (
    <div className="app-container">
      <Header />
      <Subheader />
      <Researchfield />
      <RFIDLogInterface />
    </div>
  );
}

export default App;