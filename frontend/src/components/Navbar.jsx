import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div>
      <img src={assets.logo} alt="Logo" />
      <ul>
            <NavLink>
                <li>HOME</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>ALL DOCTORS</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>ABOUT</li>
                <hr />
            </NavLink>
            <NavLink>
                <li>CONTACT</li>
                <hr />
            </NavLink>
      </ul>
      <div>
        <button>Create Account</button>
    </div>
    </div>
  )
}

export default Navbar
