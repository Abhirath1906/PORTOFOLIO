


import React, { useEffect } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import './App.css'
import Abhirath from "../assets/Abhirath.jpg"
import Blacklaptop from "../assets/Blacklaptop.png"
import Laptopexcel from "../assets/Laptopexcel.jpg"
import Laptopdesign from "../assets/Laptopdesign.jpg"




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


    gsap.to(".divlaptop1", {
      x: 130, duration: 1, opacity: 1, scrollTrigger: {
        trigger: ".divlaptop1",
        // markers:true,
        scrub: 2,
        start: "-300px center",
        end: "-100px center"
      }
    })



    gsap.to(".divlaptop2", {
      x: 130, duration: 1, opacity: 1, scrollTrigger: {
        trigger: ".divlaptop2",
        // markers:true,
        scrub: 2,
        start: "-300px center",
        end: "-100px center"
      }
    })

    gsap.to(".divlaptop3", {
      x: 130, duration: 1, opacity: 1, scrollTrigger: {
        trigger: ".divlaptop3",
        // markers:true,
        scrub: 2,
        start: "-300px center",
        end: "-100px center"
      }
    })
    gsap.to(".Myportofolio", {
      y: -80, duration: 1, opacity: 1, scrollTrigger: {
        trigger: ".Myportofolio",
        scrub: 2,
        // markers:"true",
        start: "-200px center",
        end: "-140px center"
      }
    })


    gsap.to(".divworkhistory", {
      y: 100, duration: 1, opacity: 1, scrollTrigger: {
        trigger: ".divworkhistory",
        scrub: 2,
        // markers:true,
        start: "-100px center",
        end: "80px center"
      }
    })


    gsap.to(".divlake1", {
      y: -100, duration: 1, opacity: 1, scrollTrigger: {
        trigger: ".divlake1",
        scrub: 2,
        // markers:true,
        start: "-160px center",
        end: "1px center"
      }
    })

    gsap.to(".divlake2", {
      y: -100, duration: 1, opacity: 1, scrollTrigger: {
        trigger: ".divlake2",
        scrub: 2,
        // markers:true,
        start: "-160px center",
        end: "1px center"
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



          <div style={{ display: "flex", gap: "70px", }}>
            <a className='animate' href='/home'>Home</a>
            <a className='animate' href='/about'>About</a>
            <a className='animate' href='/contact'>Contact</a>
            <a className='animate' href='/skills'>Skills</a>
            <a className='animate' href='/portocv'>Portofolio</a>
          </div>


        </div>

      </div>

      <div style={{ display: 'flex', justifyContent: "space-around", gap: "100px" }}>


        <div className='secondContainer'>




          <div className='animasi'>
            <p style={{ marginBottom: "30px" }} className='welcome'>WELCOME!</p>
          </div>

          <div className='animasi' >
            <p style={{ color: "white", fontWeight: "bold", fontSize: "40px", marginBottom: "20px" }}>I Am Web daveloper</p>
            <p style={{ color: "white", fontSize: "20px" }}>Hi I am a web daveloper with 1 year experience and above,<br /> the things I can do quite well are making animations,then it's<br /> pretty good to be able to use react on the web and many more....</p>
          </div>
        </div>

        <div className='Gambarr' style={{ marginTop: "80px", }}>
          <img className='Abhi' src={Abhirath} alt="Gambar" />
        </div>

      </div>




      <div>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: "100px" }}>

          <p className='Myportofolio'>MY PORTOFOLIO</p>

        </div>


        <div className='divlaptop'>



          <div className='animasiporto'>
            <div className='divlaptop1'>

              <div className='animasilap'>
                <img className='Laptop' src={Blacklaptop}></img>
              </div>
              <div className='divtext'>
                <p style={{ color: "black", fontWeight: "bold", }}>Application</p>
                <p style={{ color: "white", }}>Can code in React,<br /> HTML and CSS on a laptop.</p>
              </div>
            </div>

          </div>

          <div className='animasiporto'>

            <div className='divlaptop2'>

              <div className='animasilap'>
                <img className='Laptop' src={Laptopexcel}></img>
              </div>

              <div className='divtext'>
                <p style={{ color: "black", fontWeight: "bold", }}>Application</p>
                <p style={{ color: "white", }}>Can code in React,<br /> HTML and CSS on a laptop.</p>
              </div>

            </div>
          </div>


          <div className='animasiporto'>

            <div className='divlaptop3'>

              <div className='animasilap'>
                <img className='Laptopdesain' src={Laptopdesign}></img>
              </div>

              <div className='divtext'>
                <p style={{ color: "black", fontWeight: "bold", }}>Application</p>
                <p style={{ color: "white", }}>Can code in React,<br /> HTML and CSS on a laptop.</p>
              </div>

            </div>

          </div>

        </div>


      </div>

      <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "100px" }}>



        <div className='animasihistory'>
          <div className='divworkhistory'>
            <p style={{ color: "rgba(255, 54, 54, 0.66)", fontWeight: "bold" }}>WORK</p>
            <p style={{ fontWeight: "bold" }}>HISTORY</p>
            <p style={{ fontSize: "20px", color: "white" }}>This is my work history in the<br /> company or in GreenLake,<br /> going to this company is<br /> one of the meta subjects<br /> in my school.</p>
          </div>
        </div>

        <div className='alldivlake'>

          <div className='divlake1'>
            <p className='title'>GreenLake<br />Companny</p>
            <p className='titletext'>I have been working and studying at<br /> GreenLake company for 1 year, namely<br /> from 2024 until now, namely 2025.</p>
          </div>

        </div>



        <div className='alldivlake'>

          <div className='divlake2'>
            <p className='title' >GreenLake<br />Companny</p>
            <p style={{ fontWeight: "bold" }}>What i get:</p>
            <p className='titletext' style={{ marginBottom: "-38px" }}>What I got from working or studying at<br /> GreenLake company is, I can code<br /> using React, Css, then Html, and<br /> I also have a little mastery of Javascript.</p>
          </div>

        </div>




      </div>

    
    </body>


  )
}

export default poortofolio;