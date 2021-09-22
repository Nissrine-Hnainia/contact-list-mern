
import { LOAD_USER, REGISTER_USER, LOGIN_USER, USER_SUCCESS, USER_FAIL, LOGOUT_USER } from "../actions/actionsTypes"



const initialState = {
    user: {},
    load: false,
    isAuth: false,
    errors: []
}

const authReducer = (state= initialState, {type, payload}) => {
    switch (type) {
        case LOAD_USER:
            return {...state, load: true}
        case REGISTER_USER:
        case LOGIN_USER: //DRY: don't repeat yourself
            localStorage.setItem('token', payload.token)
            return {...state, isAuth: true, user: payload.user, load: false}
        case USER_SUCCESS: 
            return {...state, isAuth: true, user: payload.user, load: false}
        case USER_FAIL: 
            return {...state, errors: payload, load: false, isAuth: false}
        case LOGOUT_USER:
            localStorage.removeItem('token')
            return {...state, user: {}, errors: [], load: false, isAuth: false}
        default:
            return state;
    }
}

export default authReducer