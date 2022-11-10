import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";
import { Login } from "./Login";
import { SignUP } from "./Signup";

const AllRoutes=()=>{
    return(
        <Routes>
        <Route path="/" element={
            <>
            <Navbar />
            <Home />
            </>

        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUP />} />
      </Routes>
    )
        
}

export default AllRoutes;