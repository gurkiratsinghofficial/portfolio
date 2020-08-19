import React from 'react'
import {Card,CardDeck} from 'react-bootstrap'
import pro1 from '../assets/pro1.png'
import pro2 from '../assets/pro2.png'
import pro3 from '../assets/pro3.png'

function Projects() {
    return (
        <div className="projects" id="projects">
            <div className="neo" >
            <h3 className="projectsTitle">Some of my projects</h3>
            <CardDeck>
            <Card bg="light">
                <a rel="noopener noreferrer" target="_blank" href="https://phone-kart.netlify.app/">
                    <Card.Img variant="top" src={pro1} />
                    </a>
                    <Card.Footer>
                    <small ><a rel="noopener noreferrer" target="_blank" href="https://phone-kart.netlify.app/">E-commerce Frontend</a></small>
                    </Card.Footer>
                </Card>
                <Card bg="light">
                    <a target="_blank" rel="noopener noreferrer" 
                    href="https://drive.google.com/file/d/1_kVcYLL2T4wJN83qSvq_J12tO3KRtATC/view?usp=sharing"
                    >
                    <Card.Img variant="top" src={pro2} />
                    </a>
                    <Card.Footer>
                    <small ><a target="_blank" rel="noopener noreferrer" 
                    href="https://drive.google.com/file/d/1_kVcYLL2T4wJN83qSvq_J12tO3KRtATC/view?usp=sharing"
                    >E-logistics Dashboard (Freelance)</a></small>
                    </Card.Footer>
                </Card>
                <Card bg="light">
                     <a target="_blank"  rel="noopener noreferrer" href="https://cov-19tracker.netlify.app/">
                    <Card.Img variant="top" src={pro3} />
                    </a>                    
                    <Card.Footer>
                    <small ><a rel="noopener noreferrer" target="_blank" href="https://cov-19tracker.netlify.app/">Corona Tracker</a></small>
                    </Card.Footer>
                </Card>
                </CardDeck>
                </div>
        </div>
    )
}

export default Projects
