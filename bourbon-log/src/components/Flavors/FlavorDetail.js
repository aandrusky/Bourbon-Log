import React, { useState, useEffect, useContext } from "react"
import { FlavorSumsContext } from "./FlavorProvider"

export const FlavorDetail = (props) => {

    const { flavors, GetFlavorSums} = useContext(FlavorSumsContext)

    const [ flavor, setFlavorsSums ] = useState({})

    useEffect(() => {
        GetFlavorSums()
    }, [])

    useEffect(() => {
        const flavor = flavors.find(f => f.id === parseInt(props.match.params.flavorId)) || {}
        setFlavorsSums(flavor)
    }, [flavors])


    }