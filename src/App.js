import "./App.css";
import { Footer } from "./components/UI/Footer";
import { Header } from "./components/UI/Header";

import { SearchResults } from "./components/SearchPanel/SearchResults";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "./redux/actions/fetchMovies";
import { MoviesList } from "./components/Movies/MoviesList";

function App() {
  const dispatch = useDispatch();
  useEffect(
    function () {
      dispatch(fetchMovies());
    },
    [dispatch]
  );
  return (
    <>
      <Header />
      <SearchResults />
      <MoviesList />
      <Footer />
    </>
  );
}

export default App;
