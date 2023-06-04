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
import AdminNavbar from './components/Personal-Area/AdminNavbar/AdminNavbar'
import UserGradePage from './components/Personal-Area/User-Holder/UserGradePage'
import Grading from './components/Personal-Area/Admin-Holder/Grading'
import Cart from './components/Cart/Cart'
import { useState } from 'react'
import CourseTask from './components/Personal-Area/CourseTask/CourseTask'
import AdminCourseTask from './components/Personal-Area/CourseTask/AdminCourseTask'
import CourseCalander from './components/Personal-Area/CourseCalander/CourseCalander'
import AdminCourseCalander from './components/Personal-Area/CourseCalander/AdminCourseCalander'
import AdminStudyPresentation from './components/Personal-Area/StudyPresntation/AdminStudyPresentation'
import UserStudyPresentation from './components/Personal-Area/StudyPresntation/UserStudyPresentation'
import { loginContext } from './Contexts/loginContext'
import { EventProvider } from './Contexts/EventContaxt'
import Pay from './components/Pay/Pay'
import { priceContext } from './Contexts/priceContext'



function App() {

  const [login, setLogin] = useState([]);
  const [cart, setCart] = useState([])
  const [style, setStyle] = useState('personal-area')
  const [price, setPrice] = useState('')

  return (

    <div id='app-container'>
      <cartContext.Provider value={{ cart, setCart }}>
        <cartStyle.Provider value={{ style, setStyle }}>
          <loginContext.Provider value={{ login, setLogin }}>
            <priceContext.Provider value={{ price, setPrice }}>
             <EventProvider>
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
                   <Route path='AdminArea' element={<div> <AdminNavbar /> <AdminArea /> </div>} />
                   <Route path='UserGradePage' element={<div> <SideNavbar /> <UserGradePage /> </div>} />
                   <Route path='Grading' element={<div> <AdminNavbar /> <Grading /> </div>} />
                   <Route path='CourseTask' element={<div> <SideNavbar /> <CourseTask /> </div>} />
                   <Route path='AdminCourseTask' element={<div> <AdminNavbar /> <AdminCourseTask /> </div>} />
                   <Route path='CourseCalander' element={<div> <SideNavbar /> <CourseCalander /> </div>} />
                   <Route path='AdminCourseCalander' element={<div> <AdminNavbar /> <AdminCourseCalander /> </div>} />
                   <Route path='AdminStudyPresentation' element={<div> <AdminNavbar /> <AdminStudyPresentation /> </div>} />
                   <Route path='UserStudyPresentation' element={<div> <SideNavbar /> <UserStudyPresentation /> </div>} />
                   <Route path='Cart' element={<div> <Header /> <Cart /> <Footer /> </div>} />
                   <Route path='Pay' element={<div> <Pay /> </div>} />
                 </Route>
               </Routes>
             </EventProvider>
            </priceContext.Provider>
          </loginContext.Provider>
        </cartStyle.Provider>
      </cartContext.Provider>
    </div>
  )
}

export default App