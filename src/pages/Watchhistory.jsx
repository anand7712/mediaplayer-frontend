import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryVideoApi, getAllVideoHistoryApi } from '../services/allApi'


function Watchhistory() {
  const [allHistVideos, setAllHistVideos]=useState([])
  const[deleteStatus, setDeleteStatus]=useState(false)

  const getAllHistoryVideos=async()=>{
    const result =await getAllVideoHistoryApi()
    setAllHistVideos(result.data);
    
  }
  console.log(allHistVideos);

  const handleDelete=async(id)=>{
    const result =await deleteHistoryVideoApi(id)
    console.log(result);
    if (result.status>=200 && result.status<300) {
      setDeleteStatus(true)
    }
    
    
  }
  
  useEffect(()=>{
    getAllHistoryVideos()
    setDeleteStatus(false)
  },[deleteStatus])
  return (
    <div className='p-4'>
      <div className="d-flex mt-5">
        <h4>Watch History</h4>
      <Link to={'/home'} style={{textDecoration:'none'}} className='ms-auto'>  <h4><FontAwesomeIcon icon={faHouse} /><span className='d-none d-md-inline' >Back Home</span></h4></Link>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 p-3 table-responsive">
           {allHistVideos?.length>0 ?<table className='table mt-5'>
              <thead>
                <tr>
                  <th>SI</th>
                  <th>Caption</th>
                  <th>Url</th>
                  <th>Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allHistVideos?.map((item,index)=>(
                   <tr>
                   <td>{index+1}</td>
                   <td>{item?.Caption}</td>
                   <td>{item?.Url}</td>
                   <td>{item?.Time}</td>
                   <td><button type='button' className='btn btn-danger' onClick={()=>handleDelete(item?.id)}><FontAwesomeIcon icon={faTrash} /></button></td>
                 </tr>
                ))
                 }
              </tbody>
            </table>
               :

            <h4 className='text-warning text-center'>No Watch History</h4>}
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  )
}

export default Watchhistory
