'use client'
import React from 'react'

import {useState} from "react"

const Point = ({side, header, text, article, emoji, currentPoint, setCurrentPoint, id}) => {


    const [showContent, setShowContent] = useState(false) 

    const onPointEnter = () => {setShowContent(true)}
    const onPointLeave = () => {setShowContent(false)}

    const changeCurrentPoint = () => {
      if (currentPoint === id) {
        setCurrentPoint(0)
      } else {
        setCurrentPoint(id)
      }
    }

    return (
      <div className={side+'Point pointHolder'} onMouseEnter={onPointEnter} onMouseLeave={onPointLeave}>
      <div className="homePoint containerBox dropShadow backLayer2"
      id={currentPoint !== id ? "" : "pickedPointHeader"} onClick={changeCurrentPoint} >
    <artice className={"homePointArticle"} >
    
        {currentPoint !== id ?
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
        <div id={currentPoint === id ? "justEmoji" : 'homePointImage'}>
          <h1>{currentPoint !== id && showContent ? "👀" : currentPoint !== id  && !showContent ? "" : emoji}</h1>
        </div>
    
    </div>
  )
}

export default Point