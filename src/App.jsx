import { Routes, Route, Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Navbar/Header'  
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import About from './components/about/About'
import Courses from './components/Courses/RedTeam/RedTeam'



function App() {

  return (
    
    <div id='app-container'>
      
      <Routes>
        <Route path='/' element={<div> <Header /> <Outlet /> <Footer /> </div>}>
          <Route index element={<div> <HomePage /> </div>}/>
          <Route path='About' element={<div> <About /> </div>}/>
          <Route path='Courses' element={<div> <Courses /> </div>}/>
        </Route>
      </Routes>
      
    </div>
  )
}

export default App