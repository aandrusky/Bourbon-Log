import React, { useContext, useRef } from 'react'
import { LogContext } from "./LogProvider"
import  Form from 'react-bootstrap/Form'
import  Button from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'

export const BourbonForm = (props) => {
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
  <Form.Group controlId="formBourbonName">
    <Form.Label>Bourbon Name</Form.Label>
    <Form.Control type="text" placeholder="Bourbon name here" />
    <Form.Text className="text-muted"></Form.Text>
  </Form.Group>

  <Form.Group controlId="formDistillery">
    <Form.Label>Distillery</Form.Label>
    <Form.Control type="text" placeholder="Distillery name here" />
  </Form.Group>

  <Form.Group controlId="formProof">
    <Form.Label>Proof</Form.Label>
    <Form.Control type="text" placeholder="Proof # here" />
  </Form.Group>

  <Form.Group controlId="formProof">
    <Form.Label>Batch Number</Form.Label>
    <Form.Control type="text" placeholder="Batch number/name here" />
  </Form.Group>

  <Form.Group controlId="formPrice">
    <Form.Label>Price Paid</Form.Label>
    <Form.Control type="text" placeholder="Price for bottle or pour here" />
  </Form.Group>

  <Form.Group controlId="formAge">
    <Form.Label>Age</Form.Label>
    <Form.Control type="text" placeholder="Age of bourbon here" />
  </Form.Group>
  
  <Form.Group controlId="flavorCheckbox">
    <Form.Check type="checkbox" label="Vanilla" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Save Log
  </Button>
</Form>
)
}