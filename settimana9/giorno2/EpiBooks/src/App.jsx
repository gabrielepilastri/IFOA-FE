import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from '../components/MyNav'

import Main from '../components/Main'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'


function App({}) {

  const [title, setTitle]  = useState("Libreria Epica")

  useEffect(() => {
    document.title = title
  }, [title])


  
  return (
    <div>
    <MyNav />
     
     <Main setPageTitle={setTitle}/>
     <Footer />
    </div>
  )
}

export default App
