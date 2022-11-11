import { Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import Admin from "./admin/Admin";
import AdminMovies from "./admin/AdminMovies";
import AdminUsers from "./admin/AdminUsers";

import BuyPlans from "./BuyPlan";

import Home from "./Home";
import { Login } from "./Login";
import { SignUP } from "./Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUP />} />
      <Route path="/buy" element={<BuyPlans />} />
      <Route path="/admin" element={<Admin />}>
        <Route path="/admin/allUsers" element={<AdminUsers />} />
        <Route index   element={<AdminMovies />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
