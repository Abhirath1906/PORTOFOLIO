
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import Home from "./Pages/Home"
import './App.css'
import Abhirath from "./assets/Abhirath.jpg"
// import { useNavigate } from 'react-router-dom'





function portofolio() {

  // const navigate = useNavigate()

  useEffect(() => {
    gsap.to(".secondContainer", {
      x: 150, duration: 1, opacity: 1, scrollTrigger: {
        trigger: ".secondContainer",

      }
    })

    gsap.to(".Abhi", {
      y: 150, duration: 1, opacity: 1, scrollTrigger: {
        trigger: ".Abhi",

      }
    })

  })


  return (


    <body className='allContainer'>

      <div className='container' >

        <div className='firstContainer'>


          <p className='Abhirath'>ABHIRATH</p>



          {/* <Router>
            <Routes>
              <Route path='/home' element={<Home/>}/>
            </Routes>
          </Router> */}

{/* 
          <Router>
            <div>
              <nav>
                <Link to="/home">Home</Link>
              </nav>

           
              <Routes>
                <Route path="/home" element={<Home/>} />
              </Routes>
            </div>
          </Router> */}


          
          <p className='animate'>Home</p>
          <p className='animate'>About</p>
          <p className='animate'>Service</p>
          <p className='animate'>Portofolio</p>
          <p className='animate'>Blog</p>
          <p className='animate'>Contact</p>
        </div>

      </div>

      <div style={{ display: 'flex', gap: "180px" }}>

        <div className='secondContainer'>
          <div>
            <p style={{ marginBottom: "30px" }} className='welcome'>WELCOME!</p>
          </div>

          <div >
            <p style={{ color: "white", fontWeight: "bold", fontSize: "25px", marginBottom: "10px" }}>I Am Web Designer</p>
            <p style={{ color: "white", fontSize: "20px" }}>Hi I am a web designer with 1 year experience and above,<br /> the things I can do quite well are making<br /> animations on the web and many more....</p>
          </div>
        </div>

        <div style={{ marginTop: "80px" }}>
          <img className='Abhi' src={Abhirath} alt="Gambar" />
        </div>

      </div>



    </body>


  )
}

export default portofolio;
