import axios from "axios";
import { LOAD_USER, LOGIN_USER, REGISTER_USER, USER_FAIL, USER_SUCCESS, LOGOUT_USER } from './actionsTypes';



export const register = (newUser, history) => async(dispatch) => { //history from react-router-dom 
    dispatch({
        type: LOAD_USER
    })
    try {
        let res = await axios.post('/api/users/register', newUser)
        dispatch({
            type: REGISTER_USER,
            payload: res.data // payload = msg, user, token
        })
        history.push("/profile")
    } catch (error) {
        dispatch({
            type: USER_FAIL,
            payload: error
        })
    }
}


export const login = (user, history) => async(dispatch) => {
    dispatch({
        type: LOAD_USER
    })
    try {
        let res  = await axios.post('/api/users/login', user)
        dispatch({
            type: LOGIN_USER,
            payload: res.data // {msg, user, token}
        })
        history.push('/profile')
    } catch (error) {
        dispatch({
            type: USER_FAIL,
            payload: error
        })
    }
} 

export const authProfile = () => async(dispatch) => {
    dispatch({
        type: LOAD_USER
    })
    try {
        const config = {
            headers: {
                'authorization-token': localStorage.getItem('token')
            }
        }
        let res = await axios.get('/api/users/profile', config)
        dispatch({
            type: USER_SUCCESS,
            payload: res.data //{user}
        })
    } catch (error) {
        dispatch({
            type: USER_FAIL,
            payload: error
        })
    }
}


export const logout = () => {
    return {
        type: LOGOUT_USER
    }
}

