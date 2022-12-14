import logo from "./logo.svg";
import "./App.css";

// components
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mcontent">
        <Navigation />
        <Main />
      </div>
    </div>
  );
}

export default App;
