import React, { useContext, useRef } from 'react'
import { LogContext } from "./LogProvider"
import  Form from 'react-bootstrap/Form'
import  Button from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'

export const LogForm = (props) => {
    const {AddLog} = useContext(LogContext)

    const recordCreation = useRef(null)
    const bourbonName = useRef(null)
    const distiller = useRef(null)
    const proof = useRef(null)
    const batchNum = useRef(null)
    const owned = useRef(null)
    const rating = useRef(null)
    



return (
    <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
)
}