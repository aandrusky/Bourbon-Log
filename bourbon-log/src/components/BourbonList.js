import React, {useContext} from 'react'
import {LogContext} from './LogProvider'

export const BourbonList = () => {

    const {getLogs} = useContext(LogContext)
    
    return (
        <>
        IM YOUR BOURBON LIST
        </>
    )
}