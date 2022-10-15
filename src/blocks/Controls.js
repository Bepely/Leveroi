import React from 'react'
import Pair from "../reusable/Pair"
import "../styles/pair.css"


const Controls = () => {
  return (
    <div className='block' id='controlsRoot'>
        <div className='container' id='controlsContainer'>
            <Pair type="input" first="amount" second="" />
            <Pair type="input" first="entry price" second="" />
            <Pair type="input" first="leverage" second="" />
            <Pair type="inform" first="After leverage" second="5000" />
            <Pair type="input" first="min" second="" />
            <Pair type="input" first="max" second="" />

        </div>

    </div>
  )
}

export default Controls