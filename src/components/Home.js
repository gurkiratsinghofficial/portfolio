import React, { Component } from 'react'
import GurkiratSingh from '../assets/GurkiratSingh.pdf'
import {AiOutlineInstagram,AiOutlineTwitter } from 'react-icons/ai';
import {GrFacebookOption} from 'react-icons/gr'
import { IconContext } from "react-icons";
import {TiSocialLinkedin} from 'react-icons/ti'
import {RiGithubLine} from 'react-icons/ri'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Delay from 'react-delay'


export class Home extends Component {
    constructor(props) {
        super(props);
   
        this.state = {
         image: '',
        }
       }
       handleImageLoaded = () => {
        this.setState({ image: 'loaded' })
    }
    
    render() {
        
        return (
            <div className="home">
                <div className="row">
                    <div className="column1">
                    {!this.state.image &&
                    <SkeletonTheme color="#000000" highlightColor="#343A40">
                    <Skeleton  circle={true} height={343} width={343}/>
                    </SkeletonTheme>}
                    <Delay wait={2000}>
                    <img className="logoimg" alt="logo" src={require('../new.png')} onLoad={this.handleImageLoaded.bind(this)} />
                    </Delay>
                        
                    </div>
                    <div className="column2">
                    <h1 >I am Gurkirat Singh</h1>
                <p >    Technologically savvy and goal oriented. Driven and motivated to help organisations
                        thrive. Skilled in prioritizing and completeing tasks independently. Good problem solving
                        skills and attention to details.
                </p>
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
                 <a href={GurkiratSingh}  download><button className="resume">Curriculum vitae</button></a>
              </p>
           </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home
