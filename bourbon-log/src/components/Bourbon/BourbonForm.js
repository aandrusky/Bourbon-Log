import React, { useContext, useState, useEffect } from 'react'
import { LogContext } from "./LogProvider"
import { FlavorNotesContext } from "../Flavors/FlavorProvider"
import  Form from 'react-bootstrap/Form'
import  Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css'

export const BourbonForm = (props) => {

  
// Use the required context providers for data
    const { AddLog, logs, EditLog, GetLogs } = useContext(LogContext)
    const { flavors, GetFlavorNotes, AddFlavorNotes } = useContext(FlavorNotesContext)
// Component state
    const [log, setLog] = useState({})

    const [show, setShow] = useState(false);
    const handleClose = (event) => setShow(false);
    const handleShow = (event) => setShow(true)

    //render flavors from database and assign checkboxes

    useEffect(() => {
      GetFlavorNotes()
    }, []) 

    const HandleCheckbox = (event) => { console.log("event", event)
      if (event.target.checked) {
  
        return (
          <Modal show={show} onHide={handleClose}
                        {...props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>

            <Modal.Header >
              <Modal.Title>Weight the flavor test</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              This will display something 1-5 or 10 whatever
            </Modal.Body>
          </Modal>
        )
      }
    }
    
 const editMode = props.match.params.hasOwnProperty("logId")

 const handleControlledInputChange = (event) => {
  /*
      When changing a state object or array, always create a new one
      and change state instead of modifying current one
  */
  const newBourbon = Object.assign({}, log)
  newBourbon[event.target.name] = event.target.value
  setLog(newBourbon)
}

 /*
        If there is a URL parameter, then the user has chosen to
        edit an animal.
            1. Get the value of the URL parameter.
            2. Use that `id` to find the animal.
            3. Update component state variable.
    */
   const getLogInEditMode = () => {
    if (editMode) {
        const logId = parseInt(props.match.params.logId)
        const selectedBourbon = logs.find(l => l.id === logId) || {}
        setLog(selectedBourbon)
    }
}

    // Get animals from API when component initializes
    useEffect(() => {
      GetLogs()
  }, [])

  // Once provider state is updated, determine the animal (if edit)
  useEffect(() => {
    getLogInEditMode()
  }, [logs])


  const constructNewBourbon = () => {
    
    // if (bourbonName.current.value === "") {
    //   window.alert("Please add the name of your bourbon to save a log")
    // } else {
        if (editMode) {
            EditLog({
              id: log.id,
              bourbonName: log.bourbonName,
              distiller: log.distiller,
              proof: log.proof,
              age: log.age,
              batchNum: log.batchNum,
              owned: log.owned.checked,
              price: log.price,
              notes: log.notes,
              rating: log.rating,
              userId: parseInt(localStorage.getItem("app_user_id"))
            })
                .then(() => props.history.push("/ViewList"))
        } else {
            AddLog({
              bourbonName: log.bourbonName,
              distiller: log.distiller,
              proof: log.proof,
              age: log.age,
              batchNum: log.batchNum,
              owned: log.owned.current.checked,
              price: log.price,
              notes: log.notes,
              rating: log.rating,
              userId: parseInt(localStorage.getItem("app_user_id"))
            })
                .then(() => props.history.push("/ViewList"))
        }
    }

  
return ( 
<>
  <h5 className="bourbonForm__title"> {editMode ? "Update Log" : "New Bourbon Log"}</h5>
    <Form>
  <Form.Group controlId="formBourbonName">
    <Form.Label>Bourbon Name</Form.Label>
    <Form.Control type="text" name="bourbonName" onChange={handleControlledInputChange} value={log.bourbonName} placeholder="Bourbon name here" />
    <Form.Text className="text-muted"></Form.Text>
  </Form.Group>

  <Form.Group controlId="formDistillery">
    <Form.Label>Distillery</Form.Label>
    <Form.Control type="text" name="distiller" onChange={handleControlledInputChange} value={log.distiller} placeholder="Distillery name here" />
  </Form.Group>

  <Form.Group controlId="formProof">
    <Form.Label>Proof</Form.Label>
    <Form.Control type="text" name="proof" onChange={handleControlledInputChange} value={log.proof} placeholder="Proof # here" />
  </Form.Group>

  <Form.Group controlId="formAge">
    <Form.Label>Age</Form.Label>
    <Form.Control type="text" name="age" onChange={handleControlledInputChange} value={log.age} placeholder="Age of bourbon here" />
  </Form.Group>

  <Form.Group controlId="formBatch">
    <Form.Label>Batch Number</Form.Label>
    <Form.Control type="text" name="batchNum" onChange={handleControlledInputChange} value={log.batchNum} placeholder="Batch number/name here" />
  </Form.Group>
  
  <h6>Do you own this bottle?</h6>
  <Form.Group controlId="ownedSwitch">
  <Form.Check 
    type="switch"
    name="owned"
    id="ownedIndicator-switch"
    label="Yes!"
    onChange={handleControlledInputChange}
    value={log.owned}
  />
  </Form.Group>

  <Form.Group controlId="formPrice">
    <Form.Label>Price Paid</Form.Label>
    <Form.Control type="text" name="price" onChange={handleControlledInputChange} value={log.price} placeholder="Price for bottle or pour here" />
  </Form.Group>

  <Form.Group controlId="formNotes">
    <Form.Label>Notes</Form.Label>
    <Form.Control type="text" name="notes" onChange={handleControlledInputChange} value={log.notes} as="textarea" rows={3} placeholder="Overall impression here" />
  </Form.Group>
  

  <h5>Tasting Notes</h5>


  {flavors.map(flavorObj => {
      return (
      
        <Form class="range-field w-50">
        <Form.Group controlId="formBasicRangeCustom">
        <Form.Label>{flavorObj.flavor}</Form.Label>
        <Form.Control  type="range" min="0" max="100" custom />
        </Form.Group>
        </Form>
      
        //<Form.Check key={flavorObj.id} type="checkbox" id={flavorObj.id} label={flavorObj.flavor} defaultChecked={false} onChange={(event) => {
        //   handleShow(true)
        //   HandleCheckbox(event)
      )
    }
    )}



{/*I need this save button to also post flavors to database. */}

  <Button onClick={(evt)=>    
  { evt.preventDefault()
    constructNewBourbon() 
  }}
     variant="primary" size="lg" type="submit" block> 
    Save Log 
  </Button>
</Form>
</>
)
}

