import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import Admin from "./admin/Admin";
import AdminAdd from "./admin/AdminAdd";
import AdminMovies from "./admin/AdminMovies";
import AdminSingle from "./admin/AdminSingle";
import AdminUsers from "./admin/AdminUsers";
import ModalUsers from "./admin/ModalUsers";


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
        <Route path="/admin/:id" element={<AdminSingle/>} />
        <Route path="admin/addMovie" element={<AdminAdd/>} />
        <Route path="/admin/allUsers/update/:id"  element={<ModalUsers/>}  />
        <Route path="/admin/update/:id" element={<AdminAdd/>}/>
        <Route index   element={<AdminMovies />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
