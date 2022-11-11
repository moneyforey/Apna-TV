import { Auth_Signup_Error, Auth_Signup_Loading, Auth_Signup_Success } from "./sign.type"

let initialState = {
    loading : false,
    error: false,
    
    
}

export const authSignupReducer = (state = initialState, {type, payload})=>{
   
    switch (type){
     case Auth_Signup_Loading:{
         return {
             ...state,
             loading: true,
             
         }
     }
     case Auth_Signup_Success: {
       
         return {
             ...state,
             loading: false,
             error:  false   
         }
     }
     case Auth_Signup_Error: {
         return{
             ...state,
             error: true,
             loading: false,
         }
     }
     
       default :{
         return state
       }
    }
}
