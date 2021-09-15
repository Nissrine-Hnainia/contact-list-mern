import axios from "axios"
import { GET_USERS, USER_FAIL } from './actionsTypes';



export const createUser = (newUser) => async(dispatch) => {
    try {
        await axios.post('/api/users/create-user', newUser) //newUser === req.body
        dispatch(getUsers())
    } catch (error) {
        dispatch({
            type: USER_FAIL,
            payload: error
        })
    }
}

export const updateUser = (id, userUpdate) => async(dispatch) => {
    try {
        await axios.put(`/api/users/edit/${id}`, userUpdate) //id === req.params AND userUpdate === req.body
        dispatch(getUsers())
    } catch (error) {
        dispatch({
            type: USER_FAIL,
            payload: error
        })
    }
}

export const deleteUser = (userId) => async(dispatch) => {
    try {
        await axios.delete(`/api/users/remove/${userId}`) //userId === req.params
        dispatch(getUsers())
    } catch (error) {
        dispatch({
            type: USER_FAIL,
            payload: error
        })
    }
}


export const getUsers = () => async(dispatch) => {
    try {
        let res = await axios.get('/api/users/')
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: USER_FAIL,
            payload: error
        })
    }
}