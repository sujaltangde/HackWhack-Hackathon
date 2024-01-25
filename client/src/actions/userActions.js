import {loginRequest, loginSuccess, loginFail, 
    registerRequest, registerSuccess, registerFail,
    isLoginRequest, isLoginSuccess, isLoginFail
    } from '../slices/UserSlice' ;
import {toast} from 'react-toastify'
import axios from 'axios'




export const loginUser = (userData) => async (dispatch) =>{
    try{
        dispatch(loginRequest())
        

        const {data} = await axios.post('http://localhost:5000/api/register',userData)

        dispatch(loginSuccess())
        localStorage.setItem('accesstoken',data.token)
        toast.success("Login Successful !")
    }catch(err){
        dispatch(loginFail(err.response.data.message))
        toast.error(err.response.data.message)
    }
}

export const registerUser = (userData) => async (dispatch) =>{
    try{
        dispatch(registerRequest())

        const {data} = await axios.post('http://localhost:5000/api/register',userData)
        
        console.log(data)

        dispatch(registerSuccess())
        localStorage.setItem('accesstoken',data.token)
        toast.success("Register Successful !")
    }catch(err){
        dispatch(registerFail(err.response.data.message))
        if(err.response.data.message.includes("duplicate")){
            toast.error("User already exists")
        }else{
            toast.error(err.response.data.message)
        }
    }
}