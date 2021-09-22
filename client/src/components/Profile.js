import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { authProfile, logout } from '../redux/actions/authActions';
import {Card, ListGroup, ListGroupItem, Button} from "react-bootstrap"
import { Link } from 'react-router-dom';

const Profile = () => {
    const dispatch = useDispatch()
    const getProfile = () => dispatch(authProfile())

    useEffect(() => {
        getProfile()
    }, [])
    const user = useSelector(state => state.authReducer.user)
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Name: {user.name} </Card.Title>
            <Card.Text>
            Bio: {user.bio}
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>Email: {user.email}</ListGroupItem>
            <ListGroupItem>Age: {user.age}</ListGroupItem>
        </ListGroup>

        <Button variant="success"> 
            <Link to="/login" onClick={() => dispatch(logout())} >
            Logout
            </Link>
        </Button>
        </Card>
    )
}

export default Profile
