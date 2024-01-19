import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {


  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
