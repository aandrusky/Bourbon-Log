import React, { useContext, useEffect, useState } from 'react'
import { LogContext } from './LogProvider'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'





export const BourbonList = (props) => {

    const { DeleteLog, getLogs, logs } = useContext(LogContext)

    const [selectedBourbon, setSelectedBourbon] = useState({})
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (logObj) => {
        setSelectedBourbon(logObj)
        setShow(true)

    };

    useEffect(() => {
        getLogs()
    }, [])

    return (
        <>
            <h1>BourbonList</h1>
            <div>
                {
                    logs.map(logObj => {

                        return (
                            
                        

                                <Card key={logObj.id} style={{ width: '18rem' }}>

                                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                    <Card.Body>
                                        <Card.Title>{logObj.bourbonName}</Card.Title>
                                        <Card.Text>
                                        <p>Batch {logObj.batchNum}</p>
                                        <p>Proof {logObj.proof}</p>
                                        </Card.Text>
                                        <Button onClick={() => handleShow(logObj)} variant="primary">View Log</Button>
                                    </Card.Body>
                                </Card>

                                    )
                                    })
                                    }

                                    { selectedBourbon.id 
                               ? <Modal show={show} onHide={handleClose}
                                    {...props}
                                    size="lg"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered>
     
                                    <Modal.Header closeButton>
                                         <Modal.Title>{selectedBourbon.bourbonName}</Modal.Title>
                                        
                                            
                                    </Modal.Header>
                                    <Modal.Body>
                                        <p>{selectedBourbon.distiller} </p>
                                      <p>Proof: {selectedBourbon.proof} </p>
                                      <p> Age: {selectedBourbon.age} years </p>
                                      <p> Batch #: {selectedBourbon.batchNum} </p>
                                      <p> Rated: {selectedBourbon.rating} </p>
                                        
                                        
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button className="deleteButton" variant="danger" onClick={() => {
                                        DeleteLog(selectedBourbon.id)
                                        .then(() => {
                                            props.history.push("/ViewList")
                                            })
                                             }}>
                                            Delete
                                        </Button>
                                        <Button variant="primary" onClick={handleClose}>
                                            Edit
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            :""}
            </div>
        </>
    )
}

