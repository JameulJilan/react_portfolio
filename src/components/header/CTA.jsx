import React from 'react';
import CV from '../../assets/HM_JAMEUL_HAQUE_SARKER.pdf';



const CTA =()=>{
    return(
        <div className="cta">
            <a href={CV} download className="btn">Download CV </a>
            <a href="#contact" className="btn btn-primary"> Let's Talk </a>
        </div>
    )
} 

export default CTA