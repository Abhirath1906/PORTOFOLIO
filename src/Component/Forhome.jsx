


import React, { useEffect } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import './App.css'
import Abhirath from "../assets/Abhirath.jpg"



function poortofolio() {



  useEffect(() => {
    gsap.to(".secondContainer", {
      x: 120, duration: 1, opacity: 1, scrollTrigger: {
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



          <div>
            <p className='Abhirath'>ABHIRATH</p>
          </div>


          <div style={{ display: "flex",gap:"70px", }}>
            <a className='animate' href='/home'>Home</a>
            <a className='animate' href='/about'>About</a>
            <a className='animate' href='/contact'>Contact</a>
            <a className='animate' href='/skills'>Skills</a>
            <a className='animate' href='/portocv'>Portofolio</a>
          </div>

        </div>

      </div>

      <div style={{ display: 'flex', gap: "180px" }}>

        <div className='secondContainer'>
          <div className='animasi'>
            <p style={{ marginBottom: "30px" }} className='welcome'>WELCOME!</p>
          </div>

          <div className='animasi'>
            <p style={{ color: "white", fontWeight: "bold", fontSize: "40px", marginBottom: "20px" }}>I Am Web daveloper</p>
            <p style={{ color: "white", fontSize: "20px" }}>Hi I am a web daveloper with 1 year experience and above, the things I can do quite well are making animations,then it's pretty good to be able to use react on the web and many more....</p>
          </div>
        </div>

        <div style={{ marginTop: "80px" }}>
          <img className='Abhi' src={Abhirath} alt="Gambar" />
        </div>

      </div>



    </body>


  )
}

export default poortofolio;