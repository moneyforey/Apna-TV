import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

 
 export const PrivateRoute  = ({children})=>{
    const {token}  = useSelector((store)=>store.auth)
     
    if(!token){
     
      return <Navigate to="/login" />

    }
  
    return children
 }