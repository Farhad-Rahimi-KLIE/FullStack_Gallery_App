import React, { useEffect } from 'react'
import './style.css'
import jan from '../assets/jan.jpg'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {getAllImages, getAllCategory, getSingle} from '../Redux/Slices/GalleySlice'
function Home() {
  const dispatch = useDispatch()
  const {images, category} = useSelector((state)=> state.gallery)
  useEffect(()=>{
    dispatch(getAllImages())
    dispatch(getAllCategory())
  },[])

  return (
    <div>
        <nav className='navbar'>
            <ul>
                <li>My Gallery App</li>
            </ul>
            <span className='add'><Link to="/image">Add Image</Link></span>
            <span className='category'><Link to="/category">Add Category</Link></span>
        </nav>
        <div className='show'>
            <button className='btn' onClick={()=> dispatch(getAllImages())}>All</button>
            {category && category.map((item)=>{
              return (
                <>
                <button className='btn' onClick={()=> dispatch(getSingle(item._id))}>{item.name}</button>
                </>
              )
            })}
        </div>
        {images && images.map((item)=>{
          return (
            <>
            <img src={`http://localhost:3000/${item.image}`} className='jan'/>
            </>
          )
        })}
        <img src={jan} className='jan'/>
    </div>
  )
}

export default Home