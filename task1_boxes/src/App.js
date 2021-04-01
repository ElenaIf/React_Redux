import Header from "./components/Header";
import MAIN_ROUTER from "./components/Main_router";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <MAIN_ROUTER />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
