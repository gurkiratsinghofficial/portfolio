import React from 'react'
import {Jumbotron,Form} from 'react-bootstrap'

function Contact() {
    return (
        <div className="contact" id="contact">
                    <div className="contact-div">
                    <h1>Contact ME</h1>   
                    <input className="inputName" placeholder="Enter your name" type="text"></input>  
                    <input className="inputEmail" placeholder="Enter your E-mail" type="email"></input>
                    <textarea className="textarea" placeholder="Type your message here..."></textarea>
                    <button className="submit">Commit</button>
                    </div>           
        </div>
    )
}

export default Contact
