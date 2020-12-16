import React, { useState } from 'react'

export const FlavorNotesContext = React.createContext()

export const FlavorProvider = (props) => {


const [flavors, setFlavorsNotes] = useState([])
// useState returns [initial value of state variable, a function to set the value of the state variable]

const GetFlavorNotes = () => {
  return fetch("http://localhost:8088/flavornotes")
    .then(res => res.json())
    .then(setFlavorsNotes).then((data) => console.log("HERES THE DATA", data))
  // .then(parsedFlavors => setFlavors(parsedFlavors))
}

const AddFlavorNotes = flavor => {
    return fetch("http://localhost:8088/flavornotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(flavor)
    })
      .then(GetFlavorNotes)
  }

  return (
    <FlavorNotesContext.Provider value={
      {
        flavors, AddFlavorNotes, GetFlavorNotes
      }
    }>
      {props.children}
    </FlavorNotesContext.Provider>
  )
}
