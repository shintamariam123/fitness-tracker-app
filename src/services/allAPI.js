import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"


//upload excercise - store in localhost:3000/allTrack
export const uploadExcerciseAPI = async(data)=>{
    //send response to tracker component
    return  await commonAPI("POST",`${SERVER_URL}/allTrack`,data)  
}

//get excercise details api by tracker
export const getAllExcerciseAPI = async()=>{
    return  await commonAPI("GET",`${SERVER_URL}/allTrack`,"")  
}

//remove excercise by excercisecard
export const removeExcerciseAPI = async(dataId)=>{
    return  await commonAPI("DELETE",`${SERVER_URL}/allTrack/${dataId}`,{})  

}


