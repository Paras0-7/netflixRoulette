import { Routes, Route } from "react-router-dom";
import { MovieData } from "../components/Movies/MovieData";
import { MoviesList } from "../components/Movies/MoviesList";

export const MainRoutes = function () {
  return (
    <Routes>
      <Route path="/" element={<MoviesList />} />

      <Route path="/movie/:id" element={<MovieData />} />
      {/* <Route path="*" element={<Error />} /> */}
    </Routes>
  );
};
