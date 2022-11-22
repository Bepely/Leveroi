'use client'
import React from 'react'

import {useState} from "react"

import "../styles/details/pair.css"

const Point = ({side, header, text, article, emoji}) => {
    const [showContent, setShowContent] = useState(false)

    
    const toShowContent = () => setShowContent(!showContent)

    return (
      <div className={side+'Point pointHolder'}>
      <div className="homePoint containerBox dropShadow backLayer2"
      id={!showContent ? "" : "pickedPointHeader"} onClick={toShowContent}>
    <artice className={"homePointArticle"} >
    
        {!showContent ?
        <>
        <div id="homePointHeader" ><h2>{header}</h2></div>
        <div id='homePointText homeContentShown'>
        <h4>{text}</h4>
        </div>
        </>
      :
      <div id='homePointText homeContentHidden'>
        <div id="homePointHeader" ><h2>{header}</h2></div>
          <h4>{text}</h4>
          <p >{article}</p>
        </div>
      }
        </artice>
    </div>
        <div id={showContent ? "justEmoji" :'homePointImage'}>
          <h1>{!showContent ? "👀" : emoji}</h1>
        </div>
    
    </div>
  )
}

export default Point