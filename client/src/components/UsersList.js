import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../redux/actions/userActions';
import UserCard from './UserCard';


const UsersList = () => {

    const users = useSelector(state => state.userReducer.users) //react-redux hooks : import global state and pass it as props
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, []) //on component mount

    return (
        <div className="users-list">
            {users && users.map((user, key) => <UserCard user={user} key={user._id} />)}
        </div>
    )
}

export default UsersList
