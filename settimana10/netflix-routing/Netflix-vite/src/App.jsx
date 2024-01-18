import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderComp from './components/organisms/HeaderComp';
import FooterComp from './components/organisms/FooterComp';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import TvShows from './components/pages/TvShows';
import Movies from './components/pages/Movies';


function App() {
 
  return (
    <>
      <HeaderComp/>
      
        <Routes>
          <Route index path='/' element={<Homepage />} />
          <Route path='/tv-shows' element={<TvShows />} />
          <Route path='/movies' element={<Movies />} />
        </Routes>

      <FooterComp />
    </>
  )
}

export default App
