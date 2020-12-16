 import React, { useState, useEffect, useContext } from "react"
 import { LogContext } from "./LogProvider"

 export const BourbonDetail = (props) => {

     const { logs, GetLogs} = useContext(LogContext)

     const [ log, setLog ] = useState({})

     useEffect(() => {
         GetLogs()
     }, [])

     useEffect(() => {
         const log = logs.find(l => l.id === parseInt(props.match.params.logId)) || {}
         setLog(log)
     }, [logs])


     }