import React, { useState } from 'react'

export const FlavorSumsContext = React.createContext()

export const FlavorSumProvider = (props) => {


const [flavors, setFlavorsSums] = useState([])
// useState returns [initial value of state variable, a function to set the value of the state variable]


//I dont think I use
const GetFlavorSums = () => {
  return fetch("http://localhost:8088/flavorsums")
    .then(res => res.json())
    .then(setFlavorsSums).then((data) => console.log("HERES THE DATA", data))
  // .then(parsedFlavors => setFlavors(parsedFlavors))
}

const AddFlavorSums = flavor => {
    return fetch("http://localhost:8088/flavorsums", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(flavor)
    })
      .then(GetFlavorSums)
  }

  return (
    <FlavorSumsContext.Provider value={
      {
        flavors, AddFlavorSums, GetFlavorSums
      }
    }>
      {props.children}
    </FlavorSumsContext.Provider>
  )
}
