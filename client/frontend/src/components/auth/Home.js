import { useState, useEffect } from "react"
import {useNavigate, Link, useLocation} from 'react-router-dom'
import axios from "axios"

function Home() {

    const location = useLocation()
    
    return(
        <div className="homepage">

            <h1>
                Hello {location.state.id} and welcome to the homepage
            </h1>

        </div>
    )

}

export default Home