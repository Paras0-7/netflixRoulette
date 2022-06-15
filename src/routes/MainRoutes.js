import { Routes, Route } from "react-router-dom";

import { MoviesList } from "../components/Movies/MoviesList";

export const MainRoutes = function () {
  return (
    <Routes>
      <Route path="/" element={<MoviesList />} />
      <Route path="/search/:query" element={<MoviesList />} />
      <Route path="/movie/:id" element={<MoviesList />} />
      {/* <Route path="*" element={<Error />} /> */}
    </Routes>
  );
};
