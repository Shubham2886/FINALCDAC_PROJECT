import React from 'react'
import Header from './Header'
import Footer from './Footer'

import "../css/Homepage.css"

function Homepage() {
  return (
    <>
      <div>
        <Header />
        <div className="home"></div>
      </div>
      <Footer />
    </>
  )
}

export default Homepage
