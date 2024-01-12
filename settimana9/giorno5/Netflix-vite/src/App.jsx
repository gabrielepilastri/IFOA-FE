import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderComp from './components/organisms/HeaderComp';
import MainComp from './components/organisms/MainComp'
import FooterComp from './components/organisms/FooterComp';



function App() {
 
  return (
    <>
      <HeaderComp/>
      <MainComp />
      <FooterComp />
    </>
  )
}

export default App
