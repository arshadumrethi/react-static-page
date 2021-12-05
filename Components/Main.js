import React from 'react'

export default function Main(){
    return (
        <div className="main-container">
            <h3 className="my-name">Arshad Umrethi</h3>
            <h5 className="my-title">Frontend Developer</h5>
            <h6 className="my-site">arshad.me</h6>
            <div className="btns">
                <button className="my-email"><i class="fa fa-envelope"></i> Email</button>
                <button className="my-linkedin"><i class="fa fa-linkedin-square"></i> Linkedin</button>
            </div>
            <div className="content">
                <h3>About</h3>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h3>Interests</h3>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
}