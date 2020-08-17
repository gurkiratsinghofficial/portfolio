import React from 'react'
import {Jumbotron,Form} from 'react-bootstrap'

function Contact() {
    return (
        <div className="contact" id="contact">
                    <div className="contact-div">
                    <h1>Contact ME</h1>   
                    <form action="https://formspree.io/meqrwjdw" method="POST">
                    <input name="name" className="inputName" placeholder="Enter your name" type="text"></input>  
                    <input  type="email" name="email" className="inputEmail" placeholder="Enter your E-mail"></input>
                    <textarea name="message" className="message" placeholder="Type your message here..."></textarea>
                    <button type="submit" value="Send" className="submit">Submit</button>
                    </form>
                    </div>           
        </div>
    )
}

export default Contact
