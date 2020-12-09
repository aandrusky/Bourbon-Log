import React, {useContext, useEffect} from 'react'
import {LogContext} from './LogProvider'



export const BourbonList = () => {

    useEffect(() => {
        getLogs()
    }, [])

    const {getLogs, Logs} = useContext(LogContext)

    return (
        <>
        <h1>BourbonList Test</h1>
        <div>
            {
                Logs.map(logObj => {
     
                return  logObj
                })
            }
        </div>
    </>
    )
}