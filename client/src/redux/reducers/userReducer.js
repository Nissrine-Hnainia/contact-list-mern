
import { GET_USERS, USER_FAIL } from './../actions/actionsTypes';

const initialState={
    users: [],
    errors: []
}

const userReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case GET_USERS:
            return {...state, users: payload}
        case USER_FAIL:
            return {...state, errors: payload}
        default:
            return state
    }
}

export default userReducer



