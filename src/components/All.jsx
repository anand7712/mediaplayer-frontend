import React, { useEffect, useState } from 'react'
import Card from './Card'
import { addVideoToCategoryApi, getVideosApi } from '../services/allApi'
import { toast } from 'react-toastify'

function All({addVideoStatus,setVideoStatus}) {

  const [allVideos, setAllVideos] = useState([])
  const [deleteVideoStatus, setDeleteVideoStatus]=useState({})
 

  
  //side effect 
  const getAllVideo = async () => {
    const result = await getVideosApi()

    setAllVideos(result.data)

  }
  console.log(allVideos);

  const ondrop=(e)=>{
    e.preventDefault()
  }
  const VideoDrop=async(e)=>{
    const {category,video}=JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log(category,video);

   const newArray= category.allVideos.filter((item)=>item.id!=video.id)
   const newCategory={
    category:category.category,
    allVideos:newArray,
    id:category.id
  }
const result= await addVideoToCategoryApi(category.id,newCategory)
console.log(result);
if(result.status>=200 && result.status<300){
  setVideoStatus(result.data)
}
else{
  toast.error('Something went wrong')
}


  }
  //to handle side effect
  useEffect(() => {
    getAllVideo()
  }, [addVideoStatus,deleteVideoStatus])


  return (
    <div droppable onDragOver={(e)=>ondrop(e)} onDrop={(e)=>VideoDrop(e)}>
      <h4>All Videos</h4>
      {allVideos.length > 0 ?
        < div className="container">
          <div className="row">
          
            {allVideos.map((item)=>(
              <div className="col-md-3 p-2">
              <Card video={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
            </div>
            ))
              }

          </div>
        </div>



        :



        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <img src="https://media3.giphy.com/media/LOL2XB5O5slfFE4K3M/giphy.gif?cid=6c09b952ykk08lt6wcivi9ngx6grsirpt5k21flovwzuiw0h&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="" className='w-100' />
              <h5 className='text-warning text-center'>No Videos Added yet</h5>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      }
    </div >
  )
}

export default All
