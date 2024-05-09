import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addCategory} from '../Redux/Slices/GalleySlice'
const Addcategory = () => {
  const [input, setInput] = useState({
    name : "",
  })
  const dispatch = useDispatch()
  const {category} = useSelector((state)=> state.gallery)

  const HandleClick = ()=>{
    dispatch(addCategory(input))
  }

  return (
    <div className='product'>
            <h1>Add a New Category</h1>
            <input type="text" placeholder='Title' className='inputBox'
            name='name'
            value={input.name}
            onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})}
            />
            <button className='appButton' onClick={HandleClick}>Add Category</button>
        </div>
  )
}

export default Addcategory