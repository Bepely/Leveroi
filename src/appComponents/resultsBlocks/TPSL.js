import React from 'react'
import {useState, useEffect} from 'react'
import * as lcl from "../../lcl"

const TPSL = ({open, close, setCloseOrder}) => {

//init value of TP/SL is a false. 
//if user set up a value for TP/LS it is no longer false and have a price.

const [limits, setLimits] = useState([close.lim0, close.lim1])


//15.12.22
//21:59 Bepely
//Ну заработало, хоть и перелопатил все и вся и гора хардкода
//Нужны нормальные css ютилити классы 
//Дальше на график и на слайдер надо скинуть Лимиты



const setNewLimit = (l) => {
    let _limits = limits
    _limits[l] = close.price
    setLimits(_limits)
    setCloseOrder(close => ({...close, lim0:limits[0], lim1:limits[1]}))
  }

  const removeLimit = (l) => {
    let _limits = limits
    _limits[l] = 0
    setLimits(_limits)
    setCloseOrder(close => ({...close, lim0:limits[0], lim1:limits[1]}))
  }




const Limit = ({_limit}) => {

//    {limits[_limit] > 0 ?  : }
  return (
    <>
    <div className='layerFloor blockCard  miltiVer'>
    {limits[_limit] > 0 
    ? <>
    <div className="pnlResults " id='pnlTPSL'> 

            
               <div className='TPSLcontainer' id='textContent'>
                <h5>Limit price</h5>
                <h6 id='pnlTPSLright'>{limits[_limit]}</h6>
              </div>

              <div className="pnlContainer " id='textContent'>
                <h5>PNL</h5>
                <h6>{lcl.margin(open, {...close, price: limits[_limit]})}</h6>
                <h6 id='pnlTPSLright'>{lcl.marginPercent(open, {...close, price: limits[_limit]})}%</h6>
              </div>

              <div className="totalContainer" id='textContent'>
                <h4>Total</h4>
                <h6 id='pnlTPSLright'>{lcl.total(open, {...close, price: limits[_limit]})}</h6>
              </div>
    </div>
    
       <button className="upLeft HredBG subButton" onClick={()=>{removeLimit(_limit)}}><h5>✖️</h5></button>
       <button className="upLeft2 HgreenBG subButton" onClick={()=>{setNewLimit(_limit)}}><h5>🔄</h5></button>
      
      </>
              
    :<>
    <h4>Limit price</h4>  
    <button className="upLeft subButton" onClick={()=>{setNewLimit(_limit)}}><h5>set</h5></button>
    </>
}
</div></>

)}


return (


  <div className="whMax multiHor" id='layerBaseTPSL'>
         
        {limits[0] > 0 && limits[1] > 0 ?
        <>
        <Limit _limit={0}/>
        <Limit _limit={1}/>
        </>
        : limits[0] > 0 ? 
        <>
        <Limit _limit={0} /> 
          <div className='multiVer blockCard layerFloor gray2BG paddingContent' onClick={()=>{setNewLimit(1)}}>
            <h4>Set another one</h4>            
          </div>
        </>
        : limits[1] > 0 ?
        <>
          <div className='multiVer blockCard layerFloor paddingContent' onClick={()=>{setNewLimit(0)}}>
            <h4>Set another one</h4>
          </div>
          <Limit _limit={1} />
        </>
        :
        <>
          <div className='multiVer blockCard layerFloor paddingContent' onClick={()=>{setNewLimit(0)}}>
            <h4>Set a limit on the current close price</h4>
          </div>
        </>

      }         
        
        

  </div>

)}

export default TPSL