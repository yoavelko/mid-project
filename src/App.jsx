import './App.css'
import Header from './components/Navbar/Header'  
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage'
import { Routes, Route, Outlet, Link } from 'react-router-dom'


function App() {

  return (
    
    <div id='app-container'>
      
      <Routes>
        <Route path='/' element={<div> <Header /> <Outlet /> <Footer /> </div>}>
          <Route index element={<div> <HomePage /> </div>}/>
        </Route>
      </Routes>
      
    </div>
  )
}

export default App