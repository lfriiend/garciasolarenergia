import React from "react"
import logo from "../../images/LOGO.png"
import './style.scss'

function Header() {
  return (
    <header className="header-container">
      <div className="container">
        <a>
          <img src={logo} style={{ width: '60px', padding: '20px' }} alt="" />
        </a>
        <nav id='nav'>

          <ul id='menu'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#customer">Depoimentos</a></li>
            <li><a href="#container-contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;