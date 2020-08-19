import React from 'react'
import GurkiratSingh from '../assets/GurkiratSingh.pdf'
import {AiOutlineInstagram,AiOutlineTwitter } from 'react-icons/ai';
import {GrFacebookOption} from 'react-icons/gr'
import { IconContext } from "react-icons";
import {TiSocialLinkedin} from 'react-icons/ti'
import {RiGithubLine} from 'react-icons/ri'


function Home() {
    return (
        <div className="home">
            <div className="row">
                <div className="column1">
                    <img className="logoimg" alt="logo" src={require('../new.png')} />                                         
                </div>
                <div className="column2">
                <h1 >I am Gurkirat Singh</h1>
            <p > Technologically savvy and goal oriented. Driven and motivated to help organisations
thrive. Skilled in prioritizing and completeing tasks independently. Good problem solving
skills and attention to details.</p>
        <div >
          
          <p>
              <h1><IconContext.Provider value={{ className: "socialIcon" }}>
                 <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/GurkiratSinghOfficial/"> <GrFacebookOption/></a>
                 <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/gurkiratsinghofficial/"><AiOutlineInstagram/></a>
                 <a rel="noopener noreferrer" target="_blank" href="https://github.com/gurkiratsinghofficial"><RiGithubLine /></a>
                 <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/gurkiratsingho/"><TiSocialLinkedin/></a>
                 <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/gurkiratsingho"><AiOutlineTwitter/></a>
                  </IconContext.Provider>
                </h1>
            </p>
            <p>
             <a href={GurkiratSingh}  download><button className="resume">Download CV</button></a>
          </p>
       </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home
