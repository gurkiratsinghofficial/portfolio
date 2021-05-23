import React, { Component } from 'react'
import Bhuvan_Resume from '../assets/Bhuvan_Resume.pdf'
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
                    <SkeletonTheme >
                    <Skeleton duration={1} circle={true} height={343} width={343}/>
                    </SkeletonTheme>}
                    <Delay wait={2000}>
                    <img className="logoimg" alt="logo" src={require('../new.png')} onLoad={this.handleImageLoaded.bind(this)} />
                    </Delay>
                        
                    </div>
                    <div className="column2">
                    <h1 >I am Bhuvan Chadda</h1>
                    <p >    Technologically savvy and goal oriented. Driven and motivated to help organisations
                        thrive. Skilled in prioritizing and completeing tasks independently. Good problem solving
                        skills and attention to details.
                </p>
                <div >
              <p>
                  <h1><IconContext.Provider value={{ className: "socialIcon" }}>
                     <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/bhuvan.chadda/"> <GrFacebookOption/></a>
                     <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/bhuvan2222/"><AiOutlineInstagram/></a>
                     <a rel="noopener noreferrer" target="_blank" href="https://github.com/bhuvan2222"><RiGithubLine /></a>
                     <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/bhuvan-chadda-b71507203/"><TiSocialLinkedin/></a>
                     <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/"><AiOutlineTwitter/></a>
                      </IconContext.Provider>
                    </h1>
                </p>
                <p>
                 <a href={Bhuvan_Resume}  download><button className="resume">Curriculum vitae</button></a>
              </p>
           </div>
            
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home
