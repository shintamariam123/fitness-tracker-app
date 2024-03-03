import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { removeExcerciseAPI } from '../services/allAPI';
function ExcerciseCard({displayData,setDeleteExcerciseResponse}) {

 const deleteExcercise = async (dId)=>{
  //api call
 const result= await removeExcerciseAPI(dId)
  setDeleteExcerciseResponse(result.data)
 }
  return (
    
    <div>

<Card style={{width:'20rem',marginLeft:'100px'}} className="text-center">
      <Card.Header>{displayData?.exercises}</Card.Header>
      <Card.Body>
        <Card.Title>{displayData?.duration}</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button onClick={()=>deleteExcercise(displayData.id)}  variant="danger">Delete</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{displayData?.date}</Card.Footer>
    </Card>

        {/* <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>{displayData?.exercises}</ListGroup.Item>
        <ListGroup.Item>{displayData?.duration}</ListGroup.Item>
        <ListGroup.Item>{displayData?.date}</ListGroup.Item>
        <button className='btn btn-danger'>Delete</button>
      </ListGroup>
    </Card> */}
    </div>
  )
}

export default ExcerciseCard