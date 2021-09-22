import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { register } from './../redux/actions/authActions';
import {useDispatch} from "react-redux"

const Register = ({history}) => {
    const [newUser, setNewUser] = useState({})
    const dispatch = useDispatch()

    const handleInput = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }
    const add = () => {
        dispatch(register(newUser, history))
    }
    return (
        <div className="register">
            <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label> {/* label */}
                <Form.Control name="name" placeholder="Enter your name" onChange={(e) => handleInput(e)} /> {/* input */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAge">
                <Form.Label>Age</Form.Label> {/* label */}
                <Form.Control name="age" placeholder="Enter your age" onChange={(e) => handleInput(e)} /> {/* input */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBio">
                <Form.Label>Bio</Form.Label> {/* label */}
                <Form.Control name="bio" placeholder="Enter your bio" onChange={(e) => handleInput(e)} /> {/* input */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label> {/* label */}
                <Form.Control name="email" placeholder="Enter your email" onChange={(e) => handleInput(e)} /> {/* input */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label> {/* label */}
                <Form.Control name="password" placeholder="Enter your password" onChange={(e) => handleInput(e)} /> {/* input */}
            </Form.Group>

            <Button onClick={() => add()}>
                Register
            </Button>
            </Form>
        </div>
    )
}

export default Register
