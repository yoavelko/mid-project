import './App.css'
import Header from './components/Navbar/Header'  
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import About from './components/about/About'
import RedTeam from './components/Courses/RedTeam/RedTeam'
import BlueTeam from './components/Courses/BlueTeam/BlueTeam'
import Essentials from './components/Courses/Essentials/Essentials'
import FullStack from './components/Courses/FullStack/FullStack'



function App() {

  return (
    
    <div id='app-container'>
      
      <Routes>
        <Route path='/' element={<div> <Header /> <Outlet /> <Footer /> </div>}>
          <Route index element={<div> <HomePage /> </div>}/>
          <Route path='About' element={<div> <About /> </div>}/>
          <Route path='RedTeam' element={<div> <RedTeam /> </div>}/>
          <Route path='BlueTeam' element={<div> <BlueTeam /> </div>}/>
          <Route path='Essentials' element={<div> <Essentials /> </div>}/>
          <Route path='FullStack' element={<div> <FullStack /> </div>}/>
        </Route>
      </Routes>
      
    </div>
  )
}

export default App