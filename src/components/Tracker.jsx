import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadExcerciseAPI } from '../services/allAPI';


function Tracker({setUploadExcerciseResponse}) {
    const [exercise, setExercise] = useState(
       {exercises:"",duration:"",date:""}
    );

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setExercise({...exercise,exercises:"",duration:"",date:""})
    }
    const handleShow = () =>{ 
        setShow(true);
        
    }
    console.log(exercise);
    

   

    const addWorkout = async () => {
        //store excercise details in allTrack in localhost:3000
        const {exercises,duration,date} = exercise
        if(exercises && duration && date){

            // proceed to store details of excercises from localhost:5173/track to  localhost:300/allTrack
            // alert('proceed to upload details')
            const result = await uploadExcerciseAPI(exercise)
            console.log(result);
            if(result.status>=200 && result.status<300){
               alert(`Exercise '${result.data.exercises}' uploaded successfully!!!`) 
           setUploadExcerciseResponse(result.data)
               handleClose();

            }else{
                alert("API Call Failed...Please try again!!!")
            }
        }else{
            alert("Please fill the form completely!!!")
        }

    };

   

    return (
        <>
                <div style={{width:'100%'}} className='d-flex  align-items-center justify-content-center track '>
                    <button style={{ color: 'white' ,width:'250px',height:'50px',fontSize:'22px',textTransform:'uppercase'}} className='btn border rounded m-5' onClick={handleShow} >Fitness Tracker</button>
                    </div>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title> </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p className='text-center'>Fill the following details</p>
                            <FloatingLabel controlId="floatingInput" label="Exercise" className="mb-3">
                                <Form.Control value={exercise.exercises} onChange={e=>setExercise({...exercise,exercises:e.target.value})} type="text" placeholder="Exercise" />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingDuration" label="Duration(In minutes)">
                                <Form.Control value={exercise.duration} onChange={e=>setExercise({...exercise,duration:e.target.value})} type="text" placeholder="Duration(In minutes)" />
                            </FloatingLabel>

                            <FloatingLabel style={{ marginTop: '10px' }} onChange={e=>setExercise({...exercise,date:e.target.value})} controlId="floatingDate" label="">
                                <Form.Control value={exercise.date} type="date" placeholder="Date" />
                            </FloatingLabel>



                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button onClick={addWorkout}  variant="primary">Log Workout</Button>
                        </Modal.Footer>
                    </Modal>

           
        </>
    );
}

export default Tracker;
