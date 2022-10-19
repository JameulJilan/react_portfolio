import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import {useState} from 'react';



const App = () =>{
    const [activeNav, setActiveNav] =useState('#')
    const setActiveBtnState=(btnId)=>{
       setActiveNav(btnId);
    }
    return(
        <>
            <Header/>
            <Nav  setActiveBtnState={setActiveBtnState} activeNav={activeNav} />
            <About/>
            <Experience />
            <Portfolio/>
            <Contact />
            <Footer setActiveBtnState={setActiveBtnState}/>
        </>
    );
}

export default App