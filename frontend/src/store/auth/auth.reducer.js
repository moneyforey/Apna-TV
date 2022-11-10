import { Auth_Error, Auth_Loading, Auth_Logout, Auth_Success } from "./auth.type"

const initialState = {
    loading: false,
    error: false,
    token: "", 

}

export const authReducer = (state = initialState, {type, payload})=>{
    
    switch(type){
        case Auth_Loading:{
            return {
                ...state,
                loading: true,
                
            }
        }
        case Auth_Success: {
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
                error: true,
                loading: false,
            }
        }
        case Auth_Logout:{
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