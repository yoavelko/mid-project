import './App.css'
import Header from './components/Navbar/Header'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import { cartContext } from './Contexts/cartContext'
import { cartStyle } from './Contexts/cartStyle'
import About from './components/about/About'
import Login from './components/Log-in/Login'
import RedTeam from './components/Courses/RedTeam/RedTeam'
import BlueTeam from './components/Courses/BlueTeam/BlueTeam'
import Essentials from './components/Courses/Essentials/Essentials'
import FullStack from './components/Courses/FullStack/FullStack'
import UserArea from './components/Personal-Area/Personal-Area-Holders/UserArea'
import AdminArea from './components/Personal-Area/Personal-Area-Holders/AdminArea'
import SideNavbar from './components/Personal-Area/Personal-Area-Navbar/SideNavbar'
import Cart from './components/Cart/Cart'
import { useState } from 'react'




function App() {

  const [cart, setCart] = useState([])
  const [style, setStyle] = useState('personal-area')

  return (

    <div id='app-container'>
      <cartContext.Provider value={{ cart, setCart }}>
        <cartStyle.Provider value={{ style, setStyle}}>
          <Routes>
            <Route path='/' element={<div> <Outlet /> </div>}>
              <Route index element={<div> <Header /> <HomePage /> <Footer /> </div>} />
              <Route path='About' element={<div> <Header /> <About /> <Footer /> </div>} />
              <Route path='RedTeam' element={<div> <Header /> <RedTeam /> <Footer /> </div>} />
              <Route path='BlueTeam' element={<div> <Header /> <BlueTeam /> <Footer /> </div>} />
              <Route path='Essentials' element={<div> <Header /> <Essentials /> <Footer /> </div>} />
              <Route path='FullStack' element={<div> <Header /> <FullStack /> <Footer /> </div>} />
              <Route path='Login' element={<div> <Header /> <Login /> <Footer /> </div>} />
              <Route path='UserArea' element={<div> <SideNavbar /> <UserArea /> </div>} />
              <Route path='AdminArea' element={<div> <SideNavbar /> <AdminArea /> </div>} />
              <Route path='Cart' element={<div> <Header /> <Cart /> <Footer /> </div>} />
            </Route>
          </Routes>
        </cartStyle.Provider>
      </cartContext.Provider>
    </div>
  )
}

export default App