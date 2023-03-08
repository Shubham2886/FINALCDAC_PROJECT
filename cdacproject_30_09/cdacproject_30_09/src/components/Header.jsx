import React from 'react'
import "../css/Header.css"
import Login from './Login'

function Header() {
    return (
        <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">WELCOME</span>
        
        </div>
        
        <img
          className="headerImg"
          src="/images/book7.jpg"
          alt="bookImage"
          
        /><Login/>
           
      </div>
    )
}

export default Header