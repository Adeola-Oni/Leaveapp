import React from 'react';
import './CSS/Nav.css';
import Faanlogo from './CSS/download.png'

const Nav = (()=>{
    return(
        <div class='navbar-fixed navbar'>
            <nav  className='nav '>
                <img className="brand-logo" src={Faanlogo} alt='FAAN LOGO' />
            </nav>
        </div>
    )
})
 
export default Nav;