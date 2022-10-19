import React from 'react';
import './nav.css';
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai';
import {BiBook,BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';

const Nav = function ({setActiveBtnState,activeNav}) {
  return (
    <nav>
      <a href='#' onClick={()=>setActiveBtnState('#')} className={activeNav==='#'?'active':''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveBtnState('#about')} className={activeNav==='#about'?'active':''} ><AiOutlineUser/></a>
      <a href='#experience' onClick={()=>setActiveBtnState('#experience')} className={activeNav==='#experience'?'active':''}><BiBook/></a>
      <a href='#portfolio' onClick={()=>setActiveBtnState('#portfolio')} className={activeNav==='#portfolio'?'active':''}><RiServiceLine/></a>
      <a href='#contact' onClick={()=>setActiveBtnState('#contact')} className={activeNav==='#contact'?'active':''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav
