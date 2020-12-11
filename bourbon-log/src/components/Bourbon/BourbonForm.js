import React, { useContext, useRef } from 'react'
import { LogContext } from "./LogProvider"
import  Form from 'react-bootstrap/Form'
import  Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

export const BourbonForm = (props) => {

    const {AddLog} = useContext(LogContext)

    // const [check, setCheck] = useState(false);
    // const handleCheck = () => setCheck(true);

    // const recordCreation = useRef(null)
    const bourbonName = useRef(null)
    const distiller = useRef(null)
    const proof = useRef(null)
    const age = useRef(null)
    const batchNum = useRef(null)
    const price = useRef(null)
    const owned = useRef(null)
    const rating = useRef(null)
    const notes = useRef(null)
    
    const PostSavedForm = () => {
      if (bourbonName.current.value === "") {
        window.alert("Please add the name of your Bourbon to save a log")
      } else { 
        const newBourbon = {
          bourbonName: bourbonName.current.value,
          distiller: distiller.current.value,
          proof: proof.current.value,
          age: age.current.value,
          batchNum: batchNum.current.value,
          owned: owned.current.checked,
          price: price.current.value,
          notes: notes.current.value,
          rating: rating.current.value
        } 
        console.log("this is newBourbon", newBourbon)
         AddLog(newBourbon)
        // .then(() => props.history.push("/ViewList"))
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
  

  <h6>Do you own this bottle?</h6>
  <Form.Group controlId="ownedSwitch">
  <Form.Check 
    type="switch"
    id="ownedIndicator-switch"
    label="Yes!"
    ref={owned}
  />
  </Form.Group>

  

  <Form.Group controlId="formPrice">
    <Form.Label>Price Paid</Form.Label>
    <Form.Control type="text" ref={price} placeholder="Price for bottle or pour here" />
  </Form.Group>

  <Form.Group controlId="formNotes">
    <Form.Label>Notes</Form.Label>
    <Form.Control type="text" ref={notes} as="textarea" rows={3} placeholder="Overall impression here" />
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

  <Button onClick={(evt)=> 
  { evt.preventDefault()
    PostSavedForm() 
  }}
     variant="primary" size="lg" type="submit" block> 
    Save Log 
  </Button>
</Form>
</>
)
}


