// import React , {useState} from 'react'
// import {Form, Button} from "react-bootstrap"
// import { createUser } from '../redux/actions/userActions'
// import {useDispatch} from "react-redux"
// import { Redirect } from 'react-router'


// const AddUser = () => {
//     const [newUser, setNewUser] = useState({
//         name: "",
//         age: 0,
//         bio: ""
//     })

//     const [complete, setComplete] = useState(false)

//     const {name, age, bio} = newUser
//     const dispatch = useDispatch()

//     const handleInput = (e) => {
//         setNewUser({...newUser, [e.target.name]: e.target.value })
//     }

//     const add = () => {
//         dispatch(createUser({name, age, bio}))
//         setComplete(!complete)
//     }

//     return (
//         <div>
//             {
//                 complete ? (
//                     <Redirect to="/users"/>
//                 ) : (
//                     <Form>
//                 <Form.Group className="mb-3" controlId="formBasicName">
//                     <Form.Label>Name</Form.Label> {/* label */}
//                     <Form.Control value={name} name="name" placeholder="Enter your name" onChange={(e) => handleInput(e)} /> {/* input */}
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicAge">
//                     <Form.Label>Age</Form.Label> {/* label */}
//                     <Form.Control value={age} name="age" placeholder="Enter your age" onChange={(e) => handleInput(e)} /> {/* input */}
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicBio">
//                     <Form.Label>Bio</Form.Label> {/* label */}
//                     <Form.Control value={bio} name="bio" placeholder="Enter your bio" onChange={(e) => handleInput(e)} /> {/* input */}
//                 </Form.Group>

//                 <Button variant="dark" onClick={() => add()}>
//                     Add
//                 </Button>
//             </Form>
//                 )
//             }
//         </div>
//     )
// }

// export default AddUser
