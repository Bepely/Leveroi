'use client'
import React from 'react'

import Pair from '../appComponents/reusable/Pair'
import Amount from '../appComponents/reusable/Amount'

import {useState} from "react"

import "../styles/details/pair.css"

const Point = ({side, header, article, action, link, type}) => {
    const [demo, setDemo] = useState({amount: 0})

    return (
      <div className="homePoint containerBox dropShadow backLayer2">
    <artice className={side+"Point homePointArticle"}>
        <div id='homePointHeader'><h2>{header}</h2></div>
        <div id='homePointText'><p >{article}</p></div>
        <div id='homePointLink'><a href={link}><h5>{action}</h5></a></div>
        <div id='homePointImage'>

            {type === "config" ?
            <div>
                <Pair key={0} first="amount" second="" type="input"
                subState={demo} setSubState={setDemo}/>
                <Amount subState={demo} setSubState={setDemo}/>
            </div>
            : type === "graph" ? 
            <div></div>
            : 
            <div></div>
            }
        </div>
    </artice>
    </div>
  )
}

export default Point