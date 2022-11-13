import { Auth_Error, Auth_Loading, Auth_Logout, Auth_Success } from "./auth.type"
import axios from "axios";

  
  export const loginUser = (creds)=> async (dispatch)=> {
      dispatch({type: Auth_Loading});
      try{
         let res = await axios({
            url: "https://zeebackend-production.up.railway.app/login",
            method: "post",
            data: creds
          });
           dispatch({type: Auth_Success, payload: res.data})
          return res.data
      } catch(e){
        // console.log(e.message);
        dispatch({type: Auth_Error});
      }  
    
    

  }

export const logout = ()=> (dispatch)=>{
   dispatch({type: Auth_Logout})
}