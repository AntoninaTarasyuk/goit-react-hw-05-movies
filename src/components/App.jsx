import { Routes, Route } from "react-router-dom";
// import { lazy } from "react";

import { GlobalStyles } from "./GlobalStyles";
import { Home } from "pages/Home/Home";
import { Movies } from "pages/Movies/Movies";
import { MovieDetails } from "pages/MovieDetails/MovieDetails";
import { SharedLayout } from "components/SharedLayout/SharedLayout"
import { Cast } from "components/MovieCast/Cast";
import { Reviews } from "components/MovieReviews/Reviews";

// const createAsyncComponent = (path) => lazy(() => import(path));
// const Home = createAsyncComponent("../pages/Home/Home");
// const Movies = lazy(() => import("../pages/Movies/Movies"))
// const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
// const Cast = lazy(() => import("./MovieCast/Cast"));
// const Reviews = lazy(() => import("./MovieReviews/Reviews"));

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
    <GlobalStyles />
    </>
  );
};
