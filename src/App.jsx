// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DefaultLayout from "./layouts/DefaultLayout";
import FilmIndexPage from "./pages/movies/FilmIndexPage";
import FilmShowPage from "./pages/movies/FilmShowPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />} path="/">
          <Route index element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>

          <Route path="movies">
            <Route index element={<FilmIndexPage />}></Route>
            <Route path=":id" element={<FilmShowPage />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
