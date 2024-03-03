import React, { useEffect, useState } from 'react'
import { getAllExcerciseAPI } from '../services/allAPI'
import { Row,Col } from 'react-bootstrap'

import ExcerciseCard from './ExcerciseCard';

function View({uploadExcerciseResponse}) {
    const[allExcercise,setAllExcercise] = useState([])
    const [deleteExcerciseResponse,setDeleteExcerciseResponse] = useState("")
    
    const getAllExcercise = async ()=>{
        const result = await  getAllExcerciseAPI()
        // console.log(result);
        if(result?.status==200){
            setAllExcercise(result?.data);
        }
    }

    useEffect(()=>{
        getAllExcercise()
    },[uploadExcerciseResponse,deleteExcerciseResponse])

    console.log(allExcercise);

    
  return (
    <>
    
   <Row>
   { allExcercise?.length>0? allExcercise?.map((data,index)=>(
      <Col key={index} className='mb-4 ' >
      <ExcerciseCard displayData={data} setDeleteExcerciseResponse={setDeleteExcerciseResponse}/>
      </Col>
   ))
    :
    <div className='d-flex align-items-center justify-content-center'>
          <div className='text-danger fw-bolder'>No Excercises are Added yet!!!</div>

    </div>
    }
   </Row>
    </>
  )
}

export default View