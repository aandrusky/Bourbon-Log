import React, { useContext, useState, useEffect } from 'react'
import { LogContext } from "./LogProvider"
import { FlavorSumsContext } from "../Flavors/FlavorProvider"
import { Col, Row, Form, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'


export const BourbonForm = (props) => {

  
// Use the required context providers for data
    const { AddLog, logs, EditLog, GetLogs } = useContext(LogContext)
    const { flavors, GetFlavorSums, AddFlavorSums } = useContext(FlavorSumsContext)
// Component state
    const [log, setLog] = useState({})

    //this is so that all my sliders don't slide all at the same time. 
  const [ value1, setValue1 ] = React.useState(0);
  const [ value2, setValue2 ] = React.useState(0);
  const [ value3, setValue3 ] = React.useState(0);
  const [ value4, setValue4 ] = React.useState(0);
  const [ value5, setValue5 ] = React.useState(0);
  const [ value6, setValue6 ] = React.useState(0);
  const [ value7, setValue7 ] = React.useState(0);
  const [ value8, setValue8 ] = React.useState(0);
  const [ value9, setValue9 ] = React.useState(0);
  const [ value10, setValue10 ] = React.useState(0);

  
 const editMode = props.match.params.hasOwnProperty("logId")

 const handleControlledInputChange = (event) => {
  /*
      When changing a state object or array, always create a new one
      and change state instead of modifying current one
  */
  const newBourbon = Object.assign({}, log)
  newBourbon[event.target.name] = event.target.value
  setLog(newBourbon)

  //NOPE NOPE NOPE
  const newFlavor = Object.assign({}, value1)
  newFlavor[event.target.name] = event.target.value
  setValue1(newFlavor)
}

 /*
        If there is a URL parameter, then the user has chosen to
        edit an animal.
            1. Get the value of the URL parameter.
            2. Use that `id` to find the animal.
            3. Update component state variable.
    */

    //how do I add flavors to this so that they can also be adjusted in edit mode?
   const getLogInEditMode = () => {
    if (editMode) {
        const logId = parseInt(props.match.params.logId)
        const selectedBourbon = logs.find(l => l.id === logId) || {}
        setLog(selectedBourbon)
    }
}

    // Get animals from API when component initializes- do I also need to get flavorSums here?
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
              Fruit: value1.weight, 
              Floral: value2.weight, 
              Oak: value3.weight,
              Nuts: value4.weight, 
              Spicy: value5.weight, 
              Maple: value6.weight,
              Sweet: value7.weight,
              Bread: value8.weight,
              Earthy: value9.weight,
              Grain: value10.weight,
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
              Fruit: value1.weight, 
              Floral: value2.weight, 
              Oak: value3.weight,
              Nuts: value4.weight, 
              Spicy: value5.weight, 
              Maple: value6.weight,
              Sweet: value7.weight,
              Bread: value8.weight,
              Earthy: value9.weight,
              Grain: value10.weight,
              userId: parseInt(localStorage.getItem("app_user_id"))
            })
                .then(() => props.history.push("/ViewList"))
        }
    }

  
return ( 
<>
  <h5 className="bourbonForm__title"> {editMode ? "Update Log" : "New Bourbon Log"}</h5>
    <Form >
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
      
   {/*my console log does grab the slider value. that number is the user's assigned 'weight'. On save, I need to grab only the values >0. */}


      <Form >
      <Form.Group controlId="flavorSliders">
      <Form.Label>Fruit</Form.Label>
      <Form.Control type="range" 
            value={value1}
            onChange={e => setValue1(e.target.value)} 
            variant="danger"
            
          />      
      

      
      <Form.Label>Floral</Form.Label>
      <Form.Control type="range" 
            value={value2}
            onChange={e => setValue2(e.target.value)}
            />
      

      
      <Form.Label>Oak</Form.Label>
      <Form.Control type="range"
            value={value3}
            onChange={e => setValue3(e.target.value)}
            />
      

      
      <Form.Label>Nuts</Form.Label>
      <Form.Control type="range"
            value={value4}
            onChange={e => setValue4(e.target.value)}
            />
      

      
      <Form.Label>Spicy</Form.Label>
      <Form.Control type="range"
            value={value5}
            onChange={e => setValue5(e.target.value)}
            />
      

     
      <Form.Label>Maple</Form.Label>
      <Form.Control type="range"
            value={value6}
            onChange={e => setValue6(e.target.value)}
            />
        

      
      <Form.Label>Sweet</Form.Label>
      <Form.Control type="range"
            value={value7}
            onChange={e => setValue7(e.target.value)}
            />
      

      
      <Form.Label>Bread</Form.Label>
      <Form.Control type="range"
            value={value8}
            onChange={e => setValue8(e.target.value)}
            />
      

      <Form.Label>Earthy</Form.Label> 
        <Form.Control type="range"
            value={value9}
            onChange={e => setValue9(e.target.value)}
            />
      

      
      <Form.Label>Grain</Form.Label>
        <Form.Control type="range"
            value={value10}
            onChange={e => setValue10(e.target.value)}
            />
      </Form.Group>
      </Form>

    {console.log(value1)}

            
  




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

