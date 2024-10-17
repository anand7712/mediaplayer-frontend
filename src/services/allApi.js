import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"
//add video
export const AddVideoApi=async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/videos`,reqBody)
}
//get all videos
export const getVideosApi = async()=>{
    return await commonApi('GET', `${serverUrl}/videos`)
}
//api to get video to history backend
export const addVideoHistoryApi=async(reqBody)=>{
    return await commonApi('POST', `${serverUrl}/history`,reqBody)
}

//api to get video from history

export const getAllVideoHistoryApi = async()=>{
    return await commonApi('GET',`${serverUrl}/history`)
}

//delete card 

export const deleteVideoApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/videos/${id}`)
}

//delete hsitory

export const deleteHistoryVideoApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/history/${id}`)
}

//add categoty

export const addCategoryApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/category`,reqBody)
}

//to get category

export const getAllCategoryApi = async()=>{
    return await commonApi('GET',`${serverUrl}/category`)
}

//delete category

export const deleteCategoryApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/category/${id}`)
}

//to add video to category gragging

export const addVideoToCategoryApi = async(id,reqBody)=>{
    return await commonApi('PUT',`${serverUrl}/category/${id}`,reqBody)
}
