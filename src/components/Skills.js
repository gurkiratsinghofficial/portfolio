import React from 'react'

function Skills() {
    return (
        <div className="skills" id="about">
            <div className="row">
                <div className="skillsColumn1">
                <h1 >Skills On Which I'm Working</h1>
            <p > I am working on technologies across the whole stack (MongoDB, Express, React, NodeJS). 
                Experience building complete web applications with backend API systems.</p>                    
                </div>
                <div className="skillsColumn2">
                    <div className="skillMeter">
                    <img className="skillimg" src={require('../assets/c++.png')} /> 
                        <img className="skillimg" src={require('../assets/html-5.png')} /> 
                        <img className="skillimg" src={require('../assets/css3.png')} /> 
                        <img className="skillimg" src={require('../assets/javascript.png')} /> 
                        <img className="skillimg" src={require('../assets/react.png')} /> 
                        <img className="skillimg" src={require('../assets/psd.png')} />           
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Skills
