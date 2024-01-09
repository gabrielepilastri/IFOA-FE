import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from '../components/MyNav'
import Welcome from '../components/Welcome'
import AllTheBooks from '../components/AllTheBooks'
import Footer from '../components/Footer'


function App() {
  return (
    <div>
    <MyNav />
     <Welcome />
    
     <AllTheBooks />
     <Footer />
    </div>
  )
}

export default App
