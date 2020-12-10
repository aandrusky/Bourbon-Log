import React, { useContext, useRef } from 'react'
import { LogContext } from "./LogProvider"
import  Form from 'react-bootstrap/Form'
import  Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

export const BourbonForm = (props) => {

    const {AddLog} = useContext(LogContext)

    // const recordCreation = useRef(null)
    const bourbonName = useRef(null)
    const distiller = useRef(null)
    const proof = useRef(null)
    const age = useRef(null)
    const batchNum = useRef(null)
    const owned = useRef(null)
    const rating = useRef(null)
    
    const PostSavedForm = () => {
      if (bourbonName === "") {
        window.alert("Please add the name of your Bourbon to save a log")
      } else {
        AddLog({
          bourbonName: bourbonName.current,
          distiller: distiller.current,
          proof: proof.current,
          age: age.current,
          batchNum: batchNum.current,
          owned: owned.current,
          rating: rating.current
        })
        .then(() => props.history.push("/ViewList"))
      }
      
    }


return ( 
<>
  <h5>New Bourbon Log</h5>
    <Form>
  <Form.Group controlId="formBourbonName">
    <Form.Label>Bourbon Name</Form.Label>
    <Form.Control type="text" ref={bourbonName} placeholder="Bourbon name here" />
    <Form.Text className="text-muted"></Form.Text>
  </Form.Group>

  <Form.Group controlId="formDistillery">
    <Form.Label>Distillery</Form.Label>
    <Form.Control type="text" ref={distiller} placeholder="Distillery name here" />
  </Form.Group>

  <Form.Group controlId="formProof">
    <Form.Label>Proof</Form.Label>
    <Form.Control type="text" ref={proof} placeholder="Proof # here" />
  </Form.Group>

  <Form.Group controlId="formAge">
    <Form.Label>Age</Form.Label>
    <Form.Control type="text" ref={age} placeholder="Age of bourbon here" />
  </Form.Group>

  <Form.Group controlId="formBatch">
    <Form.Label>Batch Number</Form.Label>
    <Form.Control type="text" ref={batchNum} placeholder="Batch number/name here" />
  </Form.Group>
  


  <Form.Group controlId="ownedSwitch">
    <Form.Label>Owned?</Form.Label>
    <Form.Control ref={owned} />
    <Form.Switch type="switch" label="Yes" />
  </Form.Group>



  <Form.Group controlId="formPrice">
    <Form.Label>Price Paid</Form.Label>
    <Form.Control type="text" ref={bourbonName} placeholder="Price for bottle or pour here" />
  </Form.Group>

  <Form.Group controlId="formNotes">
    <Form.Label>Notes</Form.Label>
    <Form.Control type="text" ref={bourbonName} as="textarea" rows={3} placeholder="Overall impression here" />
  </Form.Group>
  
  <h5>Tasting Notes</h5>

  <Form.Group controlId="flavorCheckbox">
  
    <Form.Check type="checkbox" label="Fruit" />
  </Form.Group>

  <Form.Group controlId="flavorCheckbox">
    <Form.Check type="checkbox" label="Floral" />
  </Form.Group>

  <Form.Group controlId="flavorCheckbox">
    <Form.Check type="checkbox" label="Oak" />
  </Form.Group>

  <Form.Group controlId="flavorCheckbox">
    <Form.Check type="checkbox" label="Nuts" />
  </Form.Group>

  <Form.Group controlId="flavorCheckbox">
    <Form.Check type="checkbox" label="Spicy" />
  </Form.Group>

  <Form.Group controlId="flavorCheckbox">
    <Form.Check type="checkbox" label="Sweet" />
  </Form.Group>

  <Form.Group controlId="flavorCheckbox">
    <Form.Check type="checkbox" label="Bread" />
  </Form.Group>

  <Form.Group controlId="flavorCheckbox">
    <Form.Check type="checkbox" label="Earthy" />
  </Form.Group>

  <Form.Group controlId="flavorCheckbox">
    <Form.Check type="checkbox" label="Grain" />
  </Form.Group>

  <Form.Group controlId="flavorCheckbox">
    <Form.Check type="checkbox" label="Chocolate" />
  </Form.Group>

  <Form.Group controlId="formRating">
    <Form.Label>Rating</Form.Label>
    <Form.Control type="text" ref={rating} placeholder="How would you rate this bottle?" />
  </Form.Group>

  <Button onClick={()=> PostSavedForm()} variant="primary" size="lg" type="submit" block> 
    Save Log 
  </Button>
</Form>
</>
)
}


