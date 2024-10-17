import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from './Card'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addCategoryApi, addVideoToCategoryApi, deleteCategoryApi, getAllCategoryApi } from '../services/allApi';
import { toast } from 'react-toastify';

function Category({videoStatus}) {
  const [show, setShow] = useState(false);
  const [catName, setCatName] = useState("")
  const [allCategory, setAllCategory] = useState([])
  const [addCatStatus, setAddCatStatus] = useState({})
  const [deleteCatStatus, setDeleteCatStatus] = useState({})
  const [videoCategoryStatus,setvideoCategoryStatus]=useState({})

  console.log(catName);

  const handleCancel = () => {
    setCatName("")
  }


  const handleClose = () => {
    setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);


  const handleAdd = async () => {
    if (catName) {
      const reqbody = {
        category: catName,
        allVideos: []
      }
      const result = await addCategoryApi(reqbody)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        toast.success('Categoty added successfully')
        handleClose()
        setAddCatStatus(result.data)
      }
      else {
        toast.error('Something went wrong')
        handleClose()
      }
    }
    else {
      toast.info('Please add a category')
    }
  }
  const getCategory = async () => {
    const result = await getAllCategoryApi()
    setAllCategory(result.data);

  }
  console.log(allCategory);

  const handleDelete = async (id) => {
    const result = await deleteCategoryApi(id)
    console.log();
    if (result.status >= 200 && result.status < 300) {
      setDeleteCatStatus(result.data)
    }

  }

  const ondrag = (e) => {
    e.preventDefault()
  }
  const VideoDrop = async (e, categoryDetails) => {
    console.log(categoryDetails);
    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videoDetails);


    if (categoryDetails.allVideos.find((item) => item.id == videoDetails.id)) {
      toast.error('Video already added to the category')
    }
    else {
      categoryDetails.allVideos.push(videoDetails)
      console.log(categoryDetails);
      const result = await addVideoToCategoryApi(categoryDetails.id, categoryDetails)
      if (result.status >= 200 && result.status < 300) {
        toast.success('Video added')
        setvideoCategoryStatus(result.data)

      }
      else {
        toast.error('Something went wrong')
      }
    }

  }

const videoDrag=(e,video,category)=>{
  console.log(video);
  console.log(category);
  
  const dataShare={
    category,
    video
  }

  e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
}

  useEffect(() => {
    getCategory()
  }, [addCatStatus, deleteCatStatus,videoCategoryStatus,videoStatus])



  return (
    <>
      <h4>Category</h4>
      <button className='btn btn-warning w-100 mt-4' onClick={handleShow}>Add Category</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-3 border border-secondary border-2 rounded '>
            <input type="text" placeholder='Category name' className='form-control' value={catName} onChange={(e) => setCatName(e.target.value)} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>


      {allCategory?.length > 0 &&
        allCategory.map((item) => (
          <div className='border border-secondary border-2 p-3 rounded mt-5' droppable onDragOver={(e) => ondrag(e)} onDrop={(e) => VideoDrop(e, item)}>
            <div className="d-flex justify-content-between mb-3">
              <h6>{item?.category}</h6>
              <button className='btn btn-danger' onClick={() => handleDelete(item?.id)}><FontAwesomeIcon icon={faTrash} /></button>
            </div>

            {item?.allVideos?.length > 0 &&
              item?.allVideos?.map((video) => (
                <div draggable onDragStart={(e)=>videoDrag(e,video,item)}>
                  <Card video={video} isPresent={true}/>
                </div>
              ))
            }
          </div>
        ))
      }
    </> 
  )
}
export default Category
