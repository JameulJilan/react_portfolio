import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaHackerrank} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'



const HeaderSocials = () => {
    return (
        <div className = 'header__socials'>
            <a href="https://www.linkedin.com/in/h-m-jameul-haque-sarker-jilan" target ='_blank' rel="noopener noreferrer"><AiFillLinkedin/></a>
            <a href="https://www.hackerrank.com/jameuljilan" target ='_blank' rel="noopener noreferrer"><FaHackerrank/></a>
            <a href="https://github.com/JameulJilan" target ='_blank' rel="noopener noreferrer"><AiFillGithub/></a>
            
        </div>
    )
}

export default HeaderSocials
