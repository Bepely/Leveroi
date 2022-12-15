"use client"
import React from 'react'


const Header = () => {
  return (
    <header className='layerBase multiHor' id='appHeaderBase'>
       
        <div className='layerBase  multiHor' id='headerBlock'>
          <img src="logo.svg" id='appHeaderLogo' alt="" />
          <h1 id='appHeaderText'>Leveroi</h1>
        </div>
         <a href="../" className='layerFloor blockCard whMax soloCenter' id='headerBlock'><h4>Home</h4></a>
         
    </header>
  )
}

export default Header