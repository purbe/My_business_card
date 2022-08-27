import React from "react";
import './com.css'
import { SocialIcon } from 'react-social-icons';

 export default function footer(){

    return (
        <footer >
            
            <SocialIcon url="https://twitter.com/jaketrent" style={{height:25,width:25}} fgColor="white"/>
            <SocialIcon url="https://facebook.com/jaketrent" style={{height:25,width:25}} fgColor="white"/>
            <SocialIcon url="https://github.com/jaketrent" style={{height:25,width:25}} fgColor="white"/>
            <SocialIcon url="https://linkedin.com/jaketrent" style={{height:25,width:25}} fgColor="white"/>
            
        </footer>
    )

}