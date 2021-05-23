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
              <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/bhuvan.chadda/"> <GrFacebookOption/></a>
                     <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/bhuvan2222/"><AiOutlineInstagram/></a>
                     <a rel="noopener noreferrer" target="_blank" href="https://github.com/bhuvan2222"><RiGithubLine /></a>
                     <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/bhuvan-chadda-b71507203/"><TiSocialLinkedin/></a>
                     <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/"><AiOutlineTwitter/></a>
                  </IconContext.Provider>
                </label>
            </p>
        <div className="footer">
            Copyright © Made with Love & Caffeine by Bhuvan Chadda. All Rights Reserved.
        </div>
        </>
    )
}
export default Footer
