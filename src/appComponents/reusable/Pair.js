import React from 'react'



const Pair = ({type, first, second, subState, setSubState}) => { 
 
    let onChange = (e) => {
        setSubState(subState => ({...subState, [first]:Number(e.target.value)})) 
    }

  return (
    <div className='pairHolder container reuse' id={type+"-"+first+"-"+second}>
       {type === "input"
        ?    
            <div className='inputPair pair'>
                 <p className='pairFirst pairText pairChild hText'>{first}</p>  
                 <input className='pairSecond pairChild pairInput' 
                 type="number" name={second} id={second} placeholder={second} 
                 value={subState[first]} onChange={onChange}/> 
            </div>
        :
        type === "inform"
        ?
            <div className='inputPair pair'>
                <p className='pairFirst pairChild hText'>{first}</p>  
                <p className='pairSecond pairChild hText'>{second}</p>  
            </div>
       :
       type === "checkmark"
       ?
            <div className='inputPair pair'>
                <input type="checkbox" name="pairCheckbox" id="pairCheckbox"
                onChange={()=>setSubState({...subState, ["on"]:!subState.on})} />
                <label htmlFor="pairCheckbox">{first} enable fee</label>
            </div>

       :
            <div className='inputPair pair'>
                <p className='pairChild hText'>PAIR ERROR| FIRST:{first} | SECOND:{second} | TYPE: {type}</p>  
            </div>
       }
    </div>
  )
}



Pair.defaultProps = {
    type: "text-text",
    first: "NOT",
    second: "DEFINED"
}

export default Pair