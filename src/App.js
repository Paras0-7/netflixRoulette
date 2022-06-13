import "./App.css";
import { Footer } from "./components/UI/Footer";
import { Header } from "./components/UI/Header";
import { SearchPanel } from "./components/SearchPanel/SearchPanel";
import { SearchResults } from "./components/SearchPanel/SearchResults";

function App() {
  return (
    <>
      <Header />
      <SearchResults />
      <Footer />
    </>
  );
}

export default App;
