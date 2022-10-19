import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa';
import {AiFillLinkedin} from 'react-icons/ai'
import {FaHackerrank} from 'react-icons/fa'

const Footer=({setActiveBtnState})=>{
    return(
        <footer>
            <a href="#" className="footer__logo">JAMEUL</a>
            <ul className='permalinks'>
                <li><a href="#" onClick={()=>{setActiveBtnState('#');}}>Home</a></li>
                <li><a href="#about"  onClick={()=>{setActiveBtnState('#about');}}>About</a></li>
                <li><a href="#experience"  onClick={()=>{setActiveBtnState('#experience');}}>Experience</a></li>
                <li><a href="#portfolio"  onClick={()=>{setActiveBtnState('#portfolio');}}>Portfolio</a></li>
                <li><a href="#contact"  onClick={()=>{setActiveBtnState('#contact');}}>Contact</a></li>
            </ul>

            <div className='footer__socials'>
                <a href='https://www.facebook.com/jameulhaque.jilan' target ='_blank' rel="noopener noreferrer"><FaFacebookF/></a>
                <a href='https://www.linkedin.com/in/h-m-jameul-haque-sarker-jilan' target ='_blank' rel="noopener noreferrer"><AiFillLinkedin/></a>
                <a href='https://www.hackerrank.com/jameuljilan' target ='_blank' rel="noopener noreferrer"><FaHackerrank/></a>
            </div>

            <div className='footer__copyright'>
                <small>&copy; JAMEUL All right reserved</small>
            </div>
        </footer>
    )
};

export default Footer;