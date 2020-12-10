import React, {useContext, useEffect} from 'react'
import {LogContext} from './LogProvider'



export const BourbonList = () => {

    const {getLogs, logs} = useContext(LogContext)
    
    useEffect(() => {
        getLogs()
    }, [])


    return (
        <>
        <h1>BourbonList Test</h1>
        <div>
            {
                logs.map(logObj => {
     
                return  <p>{logObj.bourbonName}</p>
                })
            }
        </div>
    </>
    )
}