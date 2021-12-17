import React from 'react'
import {AiOutlineInstagram,AiOutlineTwitter } from 'react-icons/ai';
import {GrFacebookOption} from 'react-icons/gr'
import { IconContext } from "react-icons";
import {TiSocialLinkedin} from 'react-icons/ti'
import {RiGithubLine} from 'react-icons/ri'

function Footer() {
    return (
        <>
        <p>
              <label className="footerIconsDiv"><IconContext.Provider value={{ className: "footerIcons" }}>
                 <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/GurkiratSinghOfficial/"> <GrFacebookOption/></a>
                 <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/gurkiratsinghofficial/"><AiOutlineInstagram/></a>
                 <a rel="noopener noreferrer" target="_blank" href="https://github.com/gurkiratsinghofficial"><RiGithubLine /></a>
                 <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/gurkiratsinghofficial/"><TiSocialLinkedin/></a>
                 <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/gurkiratsingho"><AiOutlineTwitter/></a>
                  </IconContext.Provider>
                </label>
            </p>
        <div className="footer">
            Copyright © Made with Love & Caffeine by Gurkirat Singh. All Rights Reserved.
        </div>
        </>
    )
}
export default Footer
