import React from 'react'
import {Card,CardDeck} from 'react-bootstrap'
import pro1 from '../assets/pro1.png'
import pro2 from '../assets/pro2.png'
import pro3 from '../assets/pro3.png'
import {useState,useEffect} from 'react' 

const useThemeDetector = () => {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());  
    const mqListener = (e => {
        setIsDarkTheme(e.matches);
    });
    
    useEffect(() => {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMq.addListener(mqListener);
      return () => darkThemeMq.removeListener(mqListener);
    }, []);
    return isDarkTheme;
  }
function Projects() {
    const isDarkTheme = useThemeDetector();
    return (
        <div className="projects" id="projects">
            <div className="neo" >
            <h3 className="projectsTitle">Some of my <label className="projectscolor">projects</label></h3>
            <CardDeck>
            <Card bg={isDarkTheme ? "dark": "light"} variant={isDarkTheme ? "dark": "light"}>
                <a rel="noopener noreferrer" target="_blank" href="https://vigorous-swartz-355229.netlify.app/">
                    <Card.Img variant="top" src={pro1} />
                    </a>
                    <Card.Footer>
                    <small ><a rel="noopener noreferrer" target="_blank" href="https://vigorous-swartz-355229.netlify.app/">Chat Application (MERN)</a></small>
                    </Card.Footer>
                </Card>
                <Card bg={isDarkTheme ? "dark": "light"} variant={isDarkTheme ? "dark": "light"}>
                    <a target="_blank" rel="noopener noreferrer" 
                    href="https://www.herbalforhealth.co/"
                    >
                    <Card.Img variant="top" src={pro2} />
                    </a>
                    <Card.Footer>
                    <small ><a target="_blank" rel="noopener noreferrer" 
                    href="https://www.herbalforhealth.co/"
                    >Health and Nutrition Website (Freelance)</a></small>
                    </Card.Footer>
                </Card>
                <Card bg={isDarkTheme ? "dark": "light"} variant={isDarkTheme ? "dark": "light"}>
                     <a target="_blank"  rel="noopener noreferrer" href="https://igclone-1c53b.web.app/">
                    <Card.Img variant="top" src={pro3} />
                    </a>                    
                    <Card.Footer>
                    <small ><a rel="noopener noreferrer" target="_blank" href="https://igclone-1c53b.web.app/">Video Player</a></small>
                    </Card.Footer>
                </Card>
                </CardDeck>
                </div>
        </div>
    )
}

export default Projects
