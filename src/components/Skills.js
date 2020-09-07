import React from 'react'

function Skills() {
    return (
        <div className="skills" id="about">
            <div className="row">
                <div className="skillsColumn1">
                <h1 ><label className="skillLabel">Skills</label> On Which I'm Working</h1>
            <p > I am working on technologies across the whole stack (MongoDB, Express, React, NodeJS). 
                Experience building complete web applications with backend API systems.</p>                    
                </div>
                <div className="skillsColumn2">
                    <div className="skillMeter">
                    <img className="skillimg" alt="c++" src={require('../assets/c++.png')} /> 
                        <img className="skillimg" alt="html5" src={require('../assets/html-5.png')} /> 
                        <img className="skillimg" alt="css3" src={require('../assets/css3.png')} /> 
                        <img className="skillimg" alt="javascript" src={require('../assets/javascript.png')} /> 
                        <img className="skillimg" alt="react" src={require('../assets/react.png')} /> 
                        <img className="skillimg" alt="psd" src={require('../assets/psd.png')} />           
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Skills
