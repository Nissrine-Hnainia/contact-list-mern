import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { login} from './../redux/actions/authActions';
import {useDispatch} from "react-redux"

const Login = ({history}) => {
    const [user, setUser] = useState({})
    const dispatch = useDispatch()

    const handleInput = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const add = () => {
        dispatch(login(user, history))
    }
    return (
        <div className="register">
            <Form>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label> {/* label */}
                <Form.Control name="email" placeholder="Enter your email" onChange={(e) => handleInput(e)} /> {/* input */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label> {/* label */}
                <Form.Control name="password" placeholder="Enter your password" onChange={(e) => handleInput(e)} /> {/* input */}
            </Form.Group>

            <Button onClick={() => add()}>
                Login
            </Button>
            </Form>
        </div>
    )
}

export default Login
