import React from 'react';
import { Logout } from "../auth/Logout"
import Button from 'react-bootstrap/Button'
import "../../Bourbon.css"

export const Home = (props) => {

    return (
        <>
            <div className="homeContainer">
                
                        <Button className="Button-list" size="lg" onClick={() => props.history.push("/ViewList")}>
                            View List
                        </Button>{' '}

                        <Button className="Button-Log" size="lg" onClick={() => props.history.push("/NewLog")}>
                            New Log
                        </Button>{' '}

                        <Button className="Button-Logout" size="lg" onClick={() => {
                            Logout()
                            props.history.push("/NewLog")
                        }}>
                            Logout
                        </Button>
                        
                 
            </div>
        </>
    )
}