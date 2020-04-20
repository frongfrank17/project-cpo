let token = localStorage.getItem("token")
let authentication = localStorage.getItem("authentication")
//if(token != undefined || token != null || token != "")
const userState = authentication ? {loggedIn:true , authentication , token } : {};

export const LoginReducer = ( state=userState , action) => 
    {
        switch(action.type) {
            case "LOGIN_AUTH_ACTION":
                    return {
                        loggedIn :true , 
                        authentication: action.payload.success,
                        token: action.payload.token
                    }
            case "LOGOUT_ACTION" : 
                    return {
                        loggedIn: false , 
                        authentication: false ,
                        token: ""
                    }
            default : 
            return state

        }
    }