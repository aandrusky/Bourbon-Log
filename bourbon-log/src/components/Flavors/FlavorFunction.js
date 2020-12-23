import React, { useContext, useEffect, useState } from 'react'
import { FlavorSumsContext } from "./FlavorSumProvider"
import { FlavorContext } from "./FlavorProvider"
import { Pie } from 'react-chartjs-2';


export const FlavorFunctionGenerator = (props) => {       //purpose of this function is to take flavorweights from flavorSums with like logId's, and convert them to percentages.

    const { GetFlavorSums, flavors } = useContext(FlavorSumsContext)
    const { GetFlavors, flavorItem } = useContext(FlavorContext)

    const [selectedFlavor, setFlavors] = useState({})
    const [flavorSumObj, setFlavorsSums] = useState({})

    useEffect(() => {
        GetFlavorSums()
    }, [])

    useEffect(() => {
        GetFlavors()
    }, [])

console.log()

    flavors.map(flavorObj => {
        if (flavorObj.flavorweight.length > 0) {

            return (
                <div className="chartContainer">
                    <Pie>
                        data={{
                            labels: [flavorObj.flavor.name],
                            datasets: [
                                {
                                    label: 'flavor weight by %',
                                    data: [flavorObj.flavorweight]
                                }
                            ]
                        }}
                        height={150}
                        width={200}
                        options={{
                            maintainAspectRatio: false,
                        }}
                    </Pie>
                </div>
            )

        }
    }
    )

}
