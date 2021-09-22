
import { GET_USERS } from './../actions/actionsTypes';

const initialState={
    users: [],
    errors: [],
}

const userReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case GET_USERS:
            return {...state, users: payload, loading: false}
        
        default:
            return state
    }
}

export default userReducer



