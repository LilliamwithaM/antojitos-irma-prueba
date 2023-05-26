import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/logo.png'
import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar navbar-expand-lg'>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
				
                <a href='/' className='logo'>
                        <img src={logo} alt='logo' />
                        </a>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='#home' onClick={closeMenu}>Inicio</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#products' onClick={closeMenu}>Productos</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#promotions' onClick={closeMenu}>Promociones</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contacts' onClick={closeMenu}>Contactos</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;