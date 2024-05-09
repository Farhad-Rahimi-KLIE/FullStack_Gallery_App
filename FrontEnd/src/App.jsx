import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Addimage from './Components/addimage'
import Addcategory from './Components/AddCategory'
import Home from './Components/Home'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/image' element={<Addimage/>}/>
      <Route path='/category' element={<Addcategory/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App