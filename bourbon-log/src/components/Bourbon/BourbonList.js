import React, { useContext, useEffect, useState } from 'react'
import { LogContext } from './LogProvider'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Alert from 'react-bootstrap/Alert'




export const BourbonList = (props) => {

    const { DeleteLog, GetLogs, logs } = useContext(LogContext)

    const [selectedBourbon, setSelectedBourbon] = useState({})
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (logObj) => {
        setSelectedBourbon(logObj)
        setShow(true)

    };

    useEffect(() => {
        const userLogs = parseInt(localStorage.getItem("app_user_id"))
        GetLogs(userLogs)
    }, [])

    return (
        <>
            <h1>BourbonList</h1>

            <button className="Back-Button" onClick={() => props.history.push("/")}>Back</button>

            <div>
                {
                    logs.map(logObj => {

                            

                        return (

                            // I only want to return cards (logs) that include a matching user id to the localStorage.getItem.h
                            

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

                {selectedBourbon.id
                    ? <Modal show={show} onHide={handleClose}
                        {...props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered>

                        <Modal.Header >
                            <Modal.Title>{selectedBourbon.bourbonName}</Modal.Title>


                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <p>Distillery: {selectedBourbon.distiller} </p>
                                <p>Proof: {selectedBourbon.proof} </p>
                                <p> Age: {selectedBourbon.age} years </p>
                                <p> Batch: {selectedBourbon.batchNum} </p>
                                <p> Rated: {selectedBourbon.rating} </p>
                                <p> Notes: {selectedBourbon.notes} </p>
                            </div>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => {
                                setShowAlert(false)
                                handleClose()
                            }}>
                                Close
                            </Button>





                            <Alert show={showAlert} variant="danger">
                                <Alert.Heading>Are you sure?</Alert.Heading>
                                <div>
                                    This action will result in permanant deletion of this bourbon log! Are you sure you want to continue?
                                </div>
                                <hr />
                                <div className="d-flex justify-content-end">
                                    <Button variant="secondary" onClick={() => setShowAlert(false)} >
                                        No, go back
                                    </Button>
                                    <Button onClick={() => {

                                        setShowAlert(false)
                                        handleClose()
                                        DeleteLog(selectedBourbon.id)
                                            .then(() => {
                                                props.history.push("/ViewList")

                                            })
                                    }}
                                        variant="danger">
                                        Yes, delete permanantly
                                    </Button>

                                </div>
                            </Alert>

                            {!showAlert && <Button variant="danger" onClick={() => setShowAlert(true)}>Delete</Button>}


                            {/* ↓ edit button ↓ */}
                            <Button variant="primary" onClick={() => {

                                props.history.push(`/logs/edit/${selectedBourbon.id}`)

                            }}>
                                Edit
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    : ""}
            </div>
        </>
    )
}

