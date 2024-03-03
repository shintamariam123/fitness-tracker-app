import React, { useState } from 'react'
import Tracker from '../components/Tracker'
import View from '../components/View'

function Home() {
    const [uploadExcerciseResponse,setUploadExcerciseResponse] = useState("")
  return (
    <div>
        <div>
            <Tracker setUploadExcerciseResponse={setUploadExcerciseResponse}/>
            <View uploadExcerciseResponse={uploadExcerciseResponse}/>
        </div>
    </div>
  )
}

export default Home