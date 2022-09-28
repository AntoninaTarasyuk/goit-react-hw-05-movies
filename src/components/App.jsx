import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from "./GlobalStyles";
import { SharedLayout } from "components/SharedLayout/SharedLayout";

const Home = lazy(() => import("../pages/Home/Home"));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./MovieCast/Cast"));
const Reviews = lazy(() => import("./MovieReviews/Reviews"));

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
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyles />
    </>
  );
};
