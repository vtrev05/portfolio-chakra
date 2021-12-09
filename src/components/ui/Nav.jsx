import React from 'react'
import { Link, Routes, Route, HashRouter } from "react-router-dom";

import Home from '../../pages/Home'
import About from '../../pages/About'
import Contact from '../../pages/Contact'
import Portfolio from '../../pages/Portfolio'

import './Nav.css'
const Nav = () => {
    return (
        <div class="container cyan brackets">
        <HashRouter>
            <Link to="/">
                Home
            </Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
        
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/contact/*" element={<Contact />} />
            <Route path="/about/*" element={<About />} />
            <Route path="/portfolio/*" element={<Portfolio />} />
        </Routes>
        </HashRouter>
        </div>
    )
}

export default Nav
