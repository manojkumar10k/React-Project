import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import Home from './Home'
import Shop from './Shop'
import About from './About'
import Blog from './Blog'
import Services from './Services'
import Contact from './Contact'
import Cart from './Cart'
import Login from './Login'
import Registration from './Registration'
// import ViewUser from './ViewUser'
import ShopView from './ShopView'
import Profil from './Profil'
import Admin from './Admin'
import AdminEdit from './AdminEdit'
import AdminDelete from './AdminDelete'
import AdminAdd from './AdminAdd'

function App() {

  return (
    <>
   
<BrowserRouter>
<Navbar/>
 <Routes>
  <Route path='/' element={<Home/>} ></Route>
  <Route path='/shop' element={<Shop/>} ></Route>
  <Route path='/about' element={<About/>} ></Route>
  <Route path='//services' element={<Services/>} ></Route>
  <Route path='/blog' element={<Blog/>} ></Route>
  <Route path='/contact' element={<Contact/>} ></Route>
  <Route path='/cart' element={<Cart/>} ></Route>
  <Route path='/registration' element={<Registration/>} ></Route>
  <Route path='/login' element={<Login/>} ></Route>
  <Route path='/shopView/:viewId' element={<ShopView/>} ></Route>
  <Route path='/profile' element={<Profil/>} ></Route>
  <Route path='/admin' element={<Admin/>} ></Route>
  <Route path='/adminEdit/:useID' element={<AdminEdit/>} ></Route>
  <Route path='/adminDelete/:useID' element={<AdminDelete/>} ></Route>
  <Route path='/adminAdd' element={<AdminAdd/>} ></Route>




 </Routes>
 <Footer/>
  
  
  
</BrowserRouter>
    </>
  )
}

export default App
