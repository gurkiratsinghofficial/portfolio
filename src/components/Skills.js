import React from 'react'

function Skills() {
    return (
        <div className="skills">
            <div className="row">
                <div className="skillsColumn1">
                <h1 >Skills On Which I'm Working</h1>
            <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Morbi pellentesque magna eu consequat egestas. Nullam faucibus
                 est vel ex consectetur rutrum. Duis est felis, posuere vel suscipit 
                 vel, egestas ac leo. Nunc sed nunc scelerisque, congue ipsum sed, ullamcorper
                  erat. Morbi libero dolor, euismod a elit ut, feugiat tempus magna. Praesent porta nibh a neque convallis,</p>                    
                </div>
                <div className="skillsColumn2">
                    <div className="skillMeter">
                    <img className="skillimg" src={require('../assets/c++.png')} /> 
                        <img className="skillimg" src={require('../assets/javascript.png')} /> 
                        <img className="skillimg" src={require('../assets/html-5.png')} /> 
                        <img className="skillimg" src={require('../assets/css3.png')} /> 
                        <img className="skillimg" src={require('../assets/react.png')} /> 
                        <img className="skillimg" src={require('../assets/psd.png')} />           
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Skills
