


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




          <div >
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

      <div style={{ display: 'flex', justifyContent:"space-around",gap:"100px" }}>

        <div className='secondContainer'>
          <div className='animasi'>
            <p style={{ marginBottom: "30px" }} className='welcome'>SKILLS</p>
          </div>

          <div className='animasi'>
            <p style={{ color: "white", fontWeight: "bold", fontSize: "40px", marginBottom: "20px" }}>My Skills</p>
            <p style={{ color: "white", fontSize: "20px" }}>the thing that I can do or you could say my skills is making animations<br/> using gsap in React, then I can also use HTML and CSS,<br/> and of course I can use React quite well.
                <li>React</li>
                <li>Css</li>
                <li>Html</li>
            </p>
          </div>
        </div>

        <div className='Gambarr' style={{ marginTop: "80px" }}>
          <img className='Abhi' src={Abhirath} alt="Gambar" />
        </div>

      </div>



    </body>


  )
}

export default poortofolio;