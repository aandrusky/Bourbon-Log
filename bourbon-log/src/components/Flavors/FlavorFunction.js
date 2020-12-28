import React, { useContext, useEffect, useState } from 'react'
import { FlavorSumsContext } from "./FlavorSumProvider"
import { FlavorContext } from "./FlavorProvider"

import { Pie } from 'react-chartjs-2';


export const FlavorFunctionGenerator = (props) => {       //purpose of this function is to take flavorweights from flavorSums with like logId's, and convert them to percentages.

    const { GetFlavorSums, flavors, GetFlavorsById } = useContext(FlavorSumsContext)
    const { GetFlavors, flavorItem } = useContext(FlavorContext)

    const [flavorLabels, setflavorLabels] = useState([])
    const [flavorDataPoints, setflavorDataPoints] = useState([])

    
   
    useEffect(() => {
        GetFlavorsById(props.logId)  //<<<< need getflavorsbyid? <This isn't even doing anything for me. 
    }, [])
    
    useEffect(() => {
        const flavorLabels = flavors.map(flavorObj => {
            return flavorObj.flavor.flavor
        })
        const flavorDataPoints = flavors.map(flavorObj => {
            console.log("flavorObj", flavorObj)
            return flavorObj.flavorweight
        }) 
        setflavorLabels(flavorLabels)
        setflavorDataPoints(flavorDataPoints)
    },[flavors])



    return (
        <div className="chartContainer">
            <Pie data={{
                labels: flavorLabels,
                datasets: [
                    {
                        label: 'flavor weight by %',
                        data: flavorDataPoints
                    }
                ]
            }}/>
            
        </div>
    )



}
