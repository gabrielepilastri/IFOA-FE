import React from "react"
import { Link } from "react-router-dom"

const Home =() => {
    return(
        <div>
            <h1>Home</h1>
            <div>
                <p>Ciao,</p>
                <Link to="/profile">Vai al tuo profilo</Link>
            </div>
        </div>
    )
}

export default Home