import "./App.css";
import { Footer } from "./components/UI/Footer";
import { Header } from "./components/UI/Header";

import { BrowserRouter as Router } from "react-router-dom";
import { MainRoutes } from "./routes/MainRoutes";

function App() {
  return (
    <Router>
      <Header />
      <MainRoutes />
      <Footer />
    </Router>
  );
}

export default App;
