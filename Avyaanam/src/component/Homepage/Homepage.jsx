import React from 'react'
import LandingPage from './landingpage'
import { Navbar } from './Navbar'
import Footer from './Footer'
import Page4 from './Page4'
import Page2 from './Page2'
import Page3 from './Page3'
import Page5 from './Page5'

const home = () => {
  return (
    <div>
     
  <LandingPage/>
  <Page2/>
  <Page3/>
  <Page4/>
  <Page5/>
  
  <Footer/>
    </div>
  )
}

export default home