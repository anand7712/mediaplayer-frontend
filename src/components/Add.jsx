import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faFilm } from '@fortawesome/free-solid-svg-icons/faFilm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setAddVideoStatus}) {

  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    imageUrl: "",
    embededLink: ""
  })

  const [show, setShow] = useState(false);
  console.log(videoDetails);


  const handleClose = () => {
    setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);
  // const getEmbededLink=(e)=>{
  //   const link =e.target.value
  //   if(link.startsWith('http://youtu.be/')){
  //    const embededL=`http://youtube.com/embed/${link.slice(17,28)}` 
  //    setVideoDetails({...videoDetails,embededLink:embededL})
  //   }else{
  //     const embededL=`http://youtube.com/embed/${link.slice(-11)}` 
  //     setVideoDetails({...videoDetails,embededLink:embededL})
  //   }
  const handleCancel = () => {
    setVideoDetails({
      caption: "",
      imageUrl: "",
      embededLink: ""
    })
  }

  const handleAdd = async () => {
   const {caption ,imageUrl ,embededLink}=videoDetails
   if(!caption || !imageUrl || !embededLink){
    toast.info('Please Fill the Form')
   }
   else{
    if (videoDetails.embededLink.startsWith('https://youtu.be/')) {
      const embededL = `https://www.youtube.com/embed/${videoDetails.embededLink.slice(17,28)}`
      // setVideoDetails({ ...videoDetails, embededLink: embededL })

      const result = await AddVideoApi({ ...videoDetails, embededLink: embededL })
      console.log(result);
      if (result.status>=200 && result.status<300 ) {
        toast.success('Video Uploaded')
        handleClose()
        setAddVideoStatus(result.data)
      }
      else{
        toast.error('Something Went Wrong')
        handleClose()
      }

    } 
    else {
      const embededL = `https://www.youtube.com/embed/${videoDetails.embededLink.slice(-11)}`
      // setVideoDetails({ ...videoDetails, embededLink: embededL })
    


    const result = await AddVideoApi({ ...videoDetails, embededLink: embededL })
    console.log(result);
    if (result.status>=200 && result.status<300 ) {
      toast.success('Video Uploaded')
      handleClose()
      setAddVideoStatus(result.data)
    }
    else{
      toast.error('Something Went Wrong')
      handleClose()
    }

  
   }
  }
}

  return (
    <>
      <div className='d-flex align-items-center'>
        <h5 className='d-none d-md-inline'>Upload Video</h5>
        <button className='btn pb-3' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} className='fs-3' /></button>
      </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2' />Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Fill the details</h6>
          <form className='p-3 border border-dark rounded mt-3'>
            <div className="mb-3">
              <input type="text" value={videoDetails.caption} placeholder='video caption' className='form form-control' onChange={(e) => setVideoDetails({ ...videoDetails, caption: e.target.value })} />
            </div>

            <div className="mb-3">
              <input type="text" value={videoDetails.imageUrl} placeholder='video image' className='form form-control' onChange={(e) => setVideoDetails({ ...videoDetails, imageUrl: e.target.value })} />
            </div>
            <div className="mb-3">
              <input type="text" value={videoDetails.embededLink} placeholder='video url' className='form form-control ' onChange={(e) => setVideoDetails({ ...videoDetails, embededLink: e.target.value })} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Close
          </Button>
          <Button variant="warning" type='button' onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' autoClose={2000} theme='colored' />
    </>
  )
}

export default Add
