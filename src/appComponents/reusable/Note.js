
import React from 'react'
import {useState} from 'react'

const Note = (header, text) => {

    let [showNote, setShowNote] = useState(false)

  return (
    <>
    {showNote ? <>
    <div className='noteHolder'>
        <div className='backLayer2 dropShadow containerBox'>
            <h1>{header}</h1>
            <p>{text}</p>
        </div>

    </div>
    </>
    :
    <></>
    }
</>
  )
}

export default Note