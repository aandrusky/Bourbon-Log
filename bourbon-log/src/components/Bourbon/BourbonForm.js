import React, { useContext, useState, useEffect } from 'react'
import { LogContext } from "./LogProvider"
import { FlavorSumsContext } from "../Flavors/FlavorSumProvider"
import { FlavorContext } from "../Flavors/FlavorProvider"
import { Col, Row, Form, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'


export const BourbonForm = (props) => {

  
// Use the required context providers for data
  const { AddLog, logs, EditLog, GetLogs } = useContext(LogContext)
  const { flavors, GetFlavorSums, AddFlavorSums } = useContext(FlavorSumsContext)
  const { GetFlavors, flavorItem } = useContext(FlavorContext)
// Component state
  const [log, setLog] = useState({})

  const [flavorSumObjects, setFlavorSumObjects] = useState([])

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

    // const value1 = useRef(null)
    // const value2 = useRef(null)
    // const value3 = useRef(null)
    // const value4 = useRef(null)
    // const value5 = useRef(null)
    // const value6 = useRef(null)
    // const value7 = useRef(null)
    // const value8 = useRef(null)
    // const value9 = useRef(null)
    // const value10 = useRef(null)

const editMode = props.match.params.hasOwnProperty("logId")  //This checks if my object has a "logId" tied to it. If it does, then it means it's been created, and exists, therefore, not new.

const flavorSumLogger = (event) => {
  const flavorId = parseInt(event.target.id)
  const newFlavorSumObjects = flavorSumObjects.slice()
  const foundFlavorObject = flavorSumObjects.find(flavor => flavor.flavorId === flavorId) 
  const flavorweight = parseInt(event.target.value)
  if ( foundFlavorObject !== undefined) {
    foundFlavorObject.flavorweight = flavorweight
  } else {
    newFlavorSumObjects.push({flavorId, flavorweight})
  }
  setFlavorSumObjects(newFlavorSumObjects)

}

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

  useEffect(() => {
    GetFlavors()
  }, []) 

  //  const constructNewFlavor = () => {
  //    if (
       
  //    )
  //    AddFlavorSums({
  //      flavorId: 
  //      flavorweight: 
  //    logId: log.id
  //    })
  //  }




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
              owned: log.owned,
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
              owned: log.owned,
              price: log.price,
              notes: log.notes,
              rating: log.rating,
              userId: parseInt(localStorage.getItem("app_user_id"))
            })
              .then((logObject) => console.log(logObject))
            //.then addflavorsums, need construct flavorsumsObj function,. which will need to loop through the sliders and grab values that !0
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
        {
           flavorItem.map(flavorObj => {
             console.log("flavorObj:", flavorObj)
            return (
              <>
              <Form.Label>{flavorObj.flavor}</Form.Label>
               <Form.Control id={flavorObj.id} defaultValue="0" type="range" onChange={flavorSumLogger} />  
              </>
            )
           }
           )}
      
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



// Fruit: value1.weight, 
// Floral: value2.weight, 
// Oak: value3.weight,
// Nuts: value4.weight, 
// Spicy: value5.weight, 
// Maple: value6.weight,
// Sweet: value7.weight,
// Bread: value8.weight,
// Earthy: value9.weight,
// Grain: value10.weight,