


import React, { useEffect } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import './App.css'
import Abhirath from "../assets/Abhirath.jpg"



function poortofolio() {





  useEffect(() => {
    gsap.to(".divjudul", {
      x: 120, duration: 1.5, opacity: 1, scrollTrigger: {
        trigger: ".divjudul",

      }
    })

    gsap.to(".isicontact", {
      y: -150, duration: 1, opacity: 1, scrollTrigger: {
        trigger: ".isicontact",

      }
    })


    gsap.to(".divsendmessage", {
      x: 150, duration: 1.5, opacity: 1, scrollTrigger: {
        trigger: ".divsendmessage",
        scrub: 2,
        // markers:true,
        start: "-160px center",
        end: "100px center"
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



          <div style={{ display: "flex", gap: "70px" }}>
            <a className='animate' href='/home'>Home</a>
            <a className='animate' href='/about'>About</a>
            <a className='animate' href='/contact'>Contact</a>
            <a className='animate' href='/skills'>Skills</a>
            <a className='animate' href='/portocv'>Portofolio</a>
          </div>


        </div>

      </div>

      {/* <div style={{ display: 'flex', justifyContent:"space-around",gap:"100px" }}>

        <div className='secondContainer'>
          <div className='animasi'>
            <p style={{ marginBottom: "30px" }} className='welcome'>CONTACT</p>
          </div>

          <div className='animasi'>
            <p style={{ color: "white", fontWeight: "bold", fontSize: "40px", marginBottom: "20px" }}>My Contact</p>
            <p style={{ color: "white", fontSize: "20px" }}> <li>Email: abhirath1906@gmail.com</li> <br/> <li>Instagram: abhirath1906</li> 
            <br/> You can contact me if you want to build a web,
             i can help you to do that.</p>
          </div>
        </div>

        <div className='Gambarr' style={{ marginTop: "80px" }}>
          <img className='Abhi' src={Abhirath} alt="Gambar" />
        </div>

      </div> 



      {/* DIV UTAMA */}
      <div>




        <div className='divjudul'>
          <p>CONTACT</p>
          <p style={{ color: "black" }} >WEB DAVELOPER</p>
        </div>


        <div className='isicontact'>

          <div className='warnaback'>

            <div className='animasicontact' style={{ marginBottom: "20px", fontWeight: "bold" }}>


              <p style={{ marginBottom: "10px", border: "2px solid black", padding: "10px" }}>Name: Abhirath</p>

              <p style={{ border: "2px solid black", padding: "10px" }}>Hello, I'm Abhirath,<br />
                you can contact me if you want.</p>

            </div>


            <div className='animasiphone'>

              <div>
                <p style={{ marginBottom: "10px" }}>Contact me:</p>


                <li style={{ marginBottom: "10px", }}>Phone number: 082122935778</li>
                <li style={{ marginBottom: "10px" }}>Gmail: abhirath1906@gmail.com</li>
                <li style={{ marginBottom: "10px" }}>Instagram: abhirath1906</li>
              </div>
            </div>


          </div>




        </div>


        <div style={{ display: "flex", justifyContent: 'center', marginLeft: "-300px" }}>



          <div className='divsendmessage' >

            <div style={{ display: "flex", gap: "200px" }}>
              <div>
                <p style={{ marginBottom: "10px", color: "white" }}>Your Name:</p>
                <input className='inputtext' type='text' style={{ height: "30px" }} />
              </div>

              <div>
                <p style={{ marginBottom: "10px", color: "white" }}>Phone Number:</p>
                <input className='inputtext' type='text' style={{ height: "30px" }} />
              </div>
            </div>


            <div style={{ marginTop: "60px" }}>
              <p style={{ marginBottom: "10px", color: "white" }}>Email:</p>
              <input className='inputtext' style={{ width: "530px", height: "30px", }} type='text' />

              <div style={{ marginTop: "60px" }}>
                <p style={{ marginBottom: "10px", color: "white" }}>Subject:</p>
                <input className='inputtext' style={{ width: "530px", height: "30px" }} type='text' />
              </div>

              <div style={{ marginTop: "60px" }}>
                <p style={{ marginBottom: "10px", color: "white" }}>Your Message:</p>
                <input className='inputtext' style={{ width: "530px", height: "100px" }} type='text' />
              </div>


              <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <button className='Send' type='submit'>SEND MESSAGE</button>
              </div>

            </div>


          </div>


        </div>


      </div>



    </body>


  )
}

export default poortofolio;