


import React, { useEffect } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import './App.css'
import Abhirath from "../assets/Abhirath.jpg"
import Thorfinn from "../assets/Thorfinn.jpg"



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



                    <div style={{ display: "flex", gap: "70px", }}>
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
                        <p style={{ marginBottom: "30px" }} className='welcome'>PORTOFOLIO</p>
                    </div>

                    <div className='animasi'>
                        <p style={{ color: "white", fontWeight: "bold", fontSize: "40px", marginBottom: "20px" }}>My CV</p>
                        <p style={{ color: "white", fontSize: "20px", marginBottom: "20px" }}>This is my CV, you can download by pressing the button below:</p>
                        <a href="data:image/jpeg;base64,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" className='CV' download>Download CV</a>

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