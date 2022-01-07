import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <nav className="nvabar-container">
          <Link to="/" className="navbar-logo">
            CATS <i className="fab fa-typo3"></i> STAC
          </Link>
        </nav>
      </nav>
    </>
  )
}

export default Navbar
