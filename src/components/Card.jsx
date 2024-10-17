import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Cards from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addVideoHistoryApi, deleteVideoApi } from '../services/allApi';

function Card({video, setDeleteVideoStatus,isPresent}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    const time=new Date()
    console.log(time);
    
    let formatedDate=new Intl.DateTimeFormat("en-GB",{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)
    console.log(formatedDate);
    
    const reqBody={
      Caption:video?.caption,
      Url:video?.embededLink,
      Time:formatedDate
    }
    const result=await  addVideoHistoryApi(reqBody)
    console.log(result);


    
    
    }
    const handleDelete= async(id)=>{
      const result=await deleteVideoApi(id)
      console.log(result);
      if (result.status>=200 && result.status<300) {
        setDeleteVideoStatus(result.data)
      }
    }

    const videoDrag=(e,video)=>{
      console.log(video);
      e.dataTransfer.setData("videoDetails",JSON.stringify(video))
      
    }
  return (
    <>
    <Cards style={{ width: '100%' }} draggable onDragStart={(e)=>videoDrag(e,video)} className='mt-4'>
     {!isPresent && <Cards.Img onClick={handleShow} variant="top" src={video?.imageUrl} className='w-100' height={'300px'}/>}
      <Cards.Body className='d-flex justify-content-between'>
        <Cards.Text >{video?.caption}</Cards.Text>
       {!isPresent && <Button variant="danger"><FontAwesomeIcon icon={faTrash} onClick={()=>handleDelete(video?.id)} /></Button>}
      </Cards.Body>
    </Cards>

    <Modal show={show} onHide={handleClose}
    backdrop="static"
    keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="360" src={`${video?.embededLink}?autoplay=1`} title="Illuminati|Aavesham|Jithu Madhavan|Fahadh Faasil|Sushin Shyam,Dabzee,Vinayak| Nazriya|Anwar Rasheed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Modal.Body>
      </Modal>
    </>
  )
}

export default Card
