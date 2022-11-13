import axios  from "axios";
import { Auth_Signup_Loading, Auth_Signup_Success } from "./sign.type";

   export const signUp = (creds)=> async(dispatch)=>{
      // console.log(creds, "creds")
      dispatch({type: Auth_Signup_Loading})
      try{
        let res  = await axios({
            url: `http://localhost:8080/register`,
            method: "post",
            data: creds 
        });
    
       dispatch({type: Auth_Signup_Success})
       alert("Register Sucessfully")
      return(res.data)
          
      }catch(e){
       
           alert("User Already Exist")
           
      }

   }