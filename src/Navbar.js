import React from 'react'


function Navbar({ changefunc, showing }) {

  return (
    <header>
      <nav className="navbar">
        <div className="header-logo">
          <img src="university-logo.png" alt="a" className="university-logo" />
          <h3 className="header-title" onClick={() => changefunc("MainScreen", showing)}>Yan Nosrati</h3>
        </div>
        <div className="navbar--button--container">
          <a href='#' onClick={() => changefunc("About", showing)} className='navbar--button' id='about'>About</a>
          <a className='navbar--button' onClick={() => changefunc("Projects", showing)} >Projects</a>
          <a className='navbar--button' onClick={() => changefunc("Contact", showing)}>Contact</a>
          <a className='navbar--button' onClick={() => changefunc("Wall", showing)}>The Wall</a>
          {console.log(showing)}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;