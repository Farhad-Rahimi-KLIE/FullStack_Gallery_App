import React,{useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getAllCategory, addImages} from '../Redux/Slices/GalleySlice'
import {useNavigate} from 'react-router-dom'
const Addimage = () => {
const [file, setFile] = useState()
const [categories, setCategories] = useState()
const navigate = useNavigate()
const dispatch = useDispatch()
  const {images, category} = useSelector((state)=> state.gallery)

  useEffect(()=>{
    dispatch(getAllCategory())
  },[])

  const formData = new FormData();
  formData.append("image", file);
  formData.append("category", categories);

  const HandleClick = ()=>{
    dispatch(addImages(formData))
    navigate("/")
  }

  return (
    <div className='product'>
            <h1>Add a New Category</h1>
            <input type="file" placeholder='Title' className='inputBox'
            onChange={(e)=> setFile(e.target.files[0])}
            />

            <div>
              <label htmlFor="exampleInput">Category :</label>
              <select name="category" onChange={(e)=> setCategories(e.target.value)}>
                <option value="" selected disabled>Please Select</option>
                {category && category.map((item)=>{
                  return  <option value={item._id}>{item.name}</option>
                })}
              </select>
            </div>

            <button className='appButton' onClick={HandleClick}>Add Category</button>
        </div>
  )
}

export default Addimage