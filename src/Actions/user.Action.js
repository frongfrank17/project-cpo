import { Production } from '../Configs/ConfigEmergency'
import { history } from '../helpers/history'
import Axios from 'axios'

const LoginAction = (payload) =>({
    type:"LOGIN_AUTH_ACTION" , 
    payload
}) 
const LogoutAction = () =>({
    type:"LOGOUT_ACTION" ,
   
})
//const headers ={ "headers":{ "Content-Type" : "application/json"} }
export const Login_Action  = (username,password) => {
    return dispatch => {
          let objectLogin = {"username":username , "password":password}

    Axios.post( Production+"api/station/manager/v1/staff/login" , objectLogin , { "headers" : {"Content-Type" : "application/json"} })
        .then(
            response => {
                
                let data = response.data 
                localStorage.setItem("token" , data.token) 
                localStorage.setItem("authentication" , data.success)     
                dispatch(LoginAction(data))   
                history.push('/manager'); 
            }
        )
    }
}

export const Logout_Action = () => {
    return dispatch => {
        localStorage.removeItem("token") 
        localStorage.removeItem("authentication" )    
        dispatch(LogoutAction())
        history.push('/');
    }
}

