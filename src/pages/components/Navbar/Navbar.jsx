import React from 'react'
import logo from '../assets/myntra.svg'
import { Link } from "react-router-dom";
import './Navbar.css'
import { FaSearch } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { PiHandbag } from "react-icons/pi";
const Navbar = () => {
  return (
    <>
      <nav className='container'>
        <Link to="/"><img src={logo} alt="" /></Link>
        <div className="links">
          <Link to="/men">MEN</Link>
          <Link to="/women">WOMEN</Link>
          <Link to="/kids">KIDS</Link>
          <Link to="/homenliving">HOME & LIVING</Link>
          <Link to="/beauty">BEAUTY</Link>
        </div>
        <div className="search">
          <FaSearch></FaSearch>
          <input type="search" placeholder='search for products,brands and more' />
        </div>
        <div className="textlogo">
          <div className="col">
            <CiUser /><a href="">Profile</a></div>
          <div className="col">
            <CiHeart /><a href="">Whishlist</a></div>
          <div className="col">
            <PiHandbag /><a href="">Bag</a></div>
        </div>
      </nav>
      <section className="srch">
      <div className="ressearch">
          <FaSearch></FaSearch>
          <input type="search" placeholder='search for products,brands and more' />
      </div>
      </section>
    </>
  )
}

export default Navbar