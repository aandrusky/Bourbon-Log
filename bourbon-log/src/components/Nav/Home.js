import React from 'react';
import { Logout } from "../auth/Logout"
import Button from 'react-bootstrap/Button'

// import "../../Bourbon.css"

export const Home = (props) => {
    console.log("PROOOPS", props)

    return (
        
            <div className="homeContainer">

                <h1 className="homeHeader">Welcome to your Bourbon.log(!)</h1>
                
                        <Button className="Button-list"  size="lg"  onClick={() => props.history.push("/ViewList")}>
                            View List
                        </Button>

                        <Button className="Button-Log" size="lg"  onClick={() => props.history.push("/NewLog")}>
                            New Log
                        </Button>

                        <Button className="Button-Logout" variant="secondary" size="lg" onClick={() => {
                            Logout()
                            props.history.push("/NewLog")
                        }}>
                            Logout
                        </Button>
                        
                 
            </div>
        
    )
}