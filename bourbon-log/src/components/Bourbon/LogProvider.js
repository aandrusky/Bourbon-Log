import React, { useState } from 'react'

export const LogContext = React.createContext()

export const LogProvider = (props) => {

    const [logs, setLogs] = useState([]) 
    // useState returns [initial value of state variable, a function to set the value of the state variable]
  
    const getLogs = () => {
      return fetch("http://localhost:8088/Logs")
        .then(res => res.json())
        .then(setLogs).then((data) => console.log("HERES THE DATA", data))
        // .then(parsedLogs => setLogs(parsedLogs))
    }
  
    const AddLog = log => {
      return fetch("http://localhost:8088/Logs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(log)
      })
        .then(getLogs)
    }

    const DeleteLog = log => {
      return fetch(`http://localhost:8088/Logs/${log}`, {
          method: "DELETE"
      })
          .then(getLogs)
  }
  
    return (
      <LogContext.Provider value={
        {
        logs, AddLog, getLogs, DeleteLog
        }
      }>
        {props.children}
      </LogContext.Provider>
    )
  }

