import React from 'react'



const Pair = ({first, second, subState, setSubState}) => { 
 
    let onChange = (e) => {
        setSubState(subState => ({...subState, [first]:Number(e.target.value)})) 
    }

  return (
    <div className='layerTable multiHor whMax'>
         
            <div className='inputPair pair paddingContent' >
                 <p className='pairFirst pairText pairChild hText'>{first}</p>  
                 <input className='blockField layerTable' 
                 type="number" name={second} id={second} placeholder={second} 
                 value={subState[first]} onChange={onChange}/> 
            </div>

       
    </div>
  )
}



Pair.defaultProps = {
    type: "text-text",
    first: "NOT",
    second: "DEFINED"
}

export default Pair