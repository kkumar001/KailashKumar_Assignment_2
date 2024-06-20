import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {

  return (
    <nav className={`w-full h-[64px] flex items-center justify-center bg-[#191919]`}>
      <Link to='/'>
        <img src={logo} alt="logo" />
      </Link>
    </nav>
  )
}

export default Navbar