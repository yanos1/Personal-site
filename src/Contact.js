// email,linkedin, github,

import React from "react"

export default function Contact() {


    function sendEmail() {

    }



    return (
        <div className="contact--container">
            <button className="contact--button" onClick={sendEmail} >
                <img src="mail.png" className="contact--icon" />
                <a href="mailto:yan.nosrati@mail.huji.ac.il" className="contact--button--text">Contact via Email</a>            </button>

            <button className="contact--button" >
                <img src="linkedin.png" className="contact--icon" />
                <a href="https://www.linkedin.com/in/yan-nosrati123/" className="contact--button--text">Contact via Linkedin</a>
            </button>


            <button className="contact--button">
                <img src="github.png" className="contact--icon" />
                <a href="https://github.com/yanos1" className="contact--button--text">Github profile</a>
            </button>


        </div >

    )
}