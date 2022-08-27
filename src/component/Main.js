import React from "react";
import './com.css';
import photo from "./photo.jpg"


export default function aboutMain(){
    
    return (
       
       
        <div className="main">
         <div>   
        <img src={photo} />
        </div>
            <h1 className="name">Nutan</h1>
            <p className="role">Frontend developer</p>
            <p className="address">frontend.com</p>
            <div className="about-div">
            <h3>About</h3>
            <p className="about">I am a frontend developer with a perticular interest in marking thing simple and automating daily
            tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h3>Interests</h3>
            <p className="about">Food expert.Music scholar. Reader. Internet fanatic. 1bacon buff. Enterpreneur. Travel geek. Pop culture ninja.
             Coffee fanatic.</p>
        </div>
        </div>
        
        )
    
}

    