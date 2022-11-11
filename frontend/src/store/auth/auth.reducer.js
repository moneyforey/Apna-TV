import { Auth_Error, Auth_Loading, Auth_Logout, Auth_Success } from "./auth.type"

let tokens = JSON.parse(localStorage.getItem("tolen")) || ""
const initialState = {
    loading: false,
    error: false,
    token: tokens, 

}

export const authReducer = (state = initialState, {type, payload})=>{
    
    switch(type){
        case Auth_Loading:{
            return {
                ...state,
                loading: true,
                error:  false
            }
        }
        case Auth_Success: {
            if(payload.token){
                localStorage.setItem("token",payload.token)
            }
             return {
                ...state,
                loading: false,
                token : payload.token,
                error:  false
            }
        }
        case Auth_Error: {
           return{
                ...state,
                token: "",
                error: true,
                loading: false,
            }
        }
        case Auth_Logout:{
            localStorage.removeItem("token")
            return{
                ...state,
                token : "",
                loading: false,
                error: false,
            }
        }
        default :{
            return state
          }
    }

}