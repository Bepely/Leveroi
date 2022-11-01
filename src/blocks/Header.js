import React from 'react'

import "../styles/blocks/header.css"

const Header = () => {
  return (
    <header className='block' id='headerRoot'>
        <div className='container' id='logoContainer'>
            <h1 className='lText' id='logoText'>Leveroi</h1>
        </div>
        <div className='container' id='navContainer'>
            <h3 className='hText' id='aboutText'>about</h3>
            <h3 className="hText" id='contactText'>contact</h3>
        </div>
    </header>
  )
}

export default Header