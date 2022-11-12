import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";

import BuyPlans from "./BuyPlan";
import DetailPage from "./DetailPage";

import Home from "./Home";
import { Login } from "./Login";
import { SignUP } from "./Signup";

const AllRoutes=()=>{
    return(
        <Routes>
        <Route path="/" element={
            <div>
            <Navbar />
            <Home />
            <Footer />
            </div>

        } />
        <Route path='/' element={<DetailPage/>}/>      
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUP />} />
        <Route path="/buy" element={<BuyPlans />} />
      </Routes>
    )
        
}

export default AllRoutes;