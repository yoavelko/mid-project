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
import SideNavbar from './components/Personal-Area/Personal-Area-Navbar/SideNavbar'
import UserGradePage from './components/Personal-Area/User-Holder/UserGradePage'
import Grading from './components/Personal-Area/Admin-Holder/Grading'
import Cart from './components/Cart/Cart'
import { useState } from 'react'
import CourseTask from './components/Personal-Area/CourseTask/CourseTask'
import CourseCalander from './components/Personal-Area/CourseCalander/CourseCalander'
import UserStudyPresentation from './components/Personal-Area/StudyPresntation/UserStudyPresentation'
import { loginContext } from './Contexts/loginContext'
import Pay from './components/Pay/Pay'
import { priceContext } from './Contexts/priceContext'
import { userIndexContext } from './Contexts/userIndexContext'
import { introContext } from './Contexts/introContext'
import { htmlContext } from './Contexts/htmlContext'
import { jsContext } from './Contexts/jsContext'



function App() {

  const [login, setLogin] = useState([]);
  const [cart, setCart] = useState([]);
  const [style, setStyle] = useState('personal-area');
  const [price, setPrice] = useState('');
  const [userIndex, setUserIndex] = useState('');
  const [introStyle, setIntroStyle] = useState('visible');
  const [htmlStyle, setHtmlStyle] = useState('visible');
  const [jsStyle, setJsStyle] = useState('visible');

  return (

    <div id='app-container'>
      <cartContext.Provider value={{ cart, setCart }}>
        <cartStyle.Provider value={{ style, setStyle }}>
          <loginContext.Provider value={{ login, setLogin }}>
            <priceContext.Provider value={{ price, setPrice }}>
              <userIndexContext.Provider value={{ userIndex, setUserIndex }}>
                <introContext.Provider value={{ introStyle, setIntroStyle }}>
                  <htmlContext.Provider value={{ htmlStyle, setHtmlStyle }}>
                    <jsContext.Provider value={{ jsStyle, setJsStyle }}>
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
                          <Route path='UserGradePage' element={<div> <SideNavbar /> <UserGradePage /> </div>} />
                          <Route path='Grading' element={<div> <SideNavbar /> <Grading /> </div>} />
                          <Route path='CourseTask' element={<div> <SideNavbar /> <CourseTask /> </div>} />
                          <Route path='CourseCalander' element={<div> <SideNavbar /> <CourseCalander /> </div>} />
                          <Route path='UserStudyPresentation' element={<div> <SideNavbar /> <UserStudyPresentation /> </div>} />
                          <Route path='Cart' element={<div> <Header /> <Cart /> <Footer /> </div>} />
                          <Route path='Pay' element={<div> <Pay /> </div>} />
                        </Route>
                      </Routes>
                    </jsContext.Provider>
                  </htmlContext.Provider>
                </introContext.Provider>
              </userIndexContext.Provider>
            </priceContext.Provider>
          </loginContext.Provider>
        </cartStyle.Provider>
      </cartContext.Provider>
    </div>
  )
}

export default App