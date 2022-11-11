let initialState = {
    loading : false,
    error: false,
    token: ""
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
             token : payload.token,
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
