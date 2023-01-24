import React from 'react'
import {useState, useEffect} from 'react'
import * as lcl from "../../../lcl"

import SubOrderConfig from './SubOrderConfig'


import { useSelector, useDispatch } from 'react-redux'

import {setLong, setShort, setClosePrice, setMin, setMax, setLim0, setLim1, setDefaultClose} from "../../../redux/features/closeOrder/closeOrderSlice"



const TPSL = ({subSwitch, setSubSwitch}) => {
  
  const {openOrder, closeOrder, session} = useSelector(state => state);


  const dispatch = useDispatch();

//init value of TP/SL is a false. 
//if user set up a value for TP/LS it is no longer false and have a price.

const [limits, setLimits] = useState([closeOrder.lim0, closeOrder.lim1])


//15.12.22
//21:59 Bepely
//Ну заработало, хоть и перелопатил все и вся и гора хардкода
//Нужны нормальные css ютилити классы 
//Дальше на график и на слайдер надо скинуть Лимиты


useEffect(()=>{
  if(!session.isQue){
    setLimits([0, 0])
  }

}, [session.init])


const setNewLimit = (l) => {
    let _limits = limits
    _limits[l] = closeOrder.price
    dispatch(setLim0(limits[0]))
    dispatch(setLim1(limits[1]))

  }

  const removeLimit = (l) => {
    let _limits = limits
    _limits[l] = 0
    setLimits(_limits)
    dispatch(setLim0(limits[0]))
    dispatch(setLim1(limits[1]))

  }




const Limit = ({_limit}) => {

  return (
    <>
    <div className='layerFloor blockCard wMax miltiVer'>
    {limits[_limit] > 0 
    ? <>
    <div className="pnlResults " id='pnlTPSL'> 

            
               <div className='TPSLcontainer' id='textContent'>
                <h5>Limit price</h5>
                <h6 id='pnlTPSLright'>{limits[_limit]}</h6>
              </div>

              <div className="pnlContainer " id='textContent'>
                <h5>PNL</h5>
                <h6>{lcl.margin(openOrder, {...closeOrder, price: limits[_limit]})}</h6>
                <h6 id='pnlTPSLright'>{lcl.marginPercent(openOrder, {...closeOrder, price: limits[_limit]})}%</h6>
              </div>

              <div className="totalContainer" id='textContent'>
                <h4>Total</h4>
                <h6 id='pnlTPSLright'>{lcl.total(openOrder, {...closeOrder, price: limits[_limit]})}</h6>
              </div>
    </div>
    
       <button className="upLeft HredBG subButton" id={subSwitch.switch ? "displayNone" : ""}
        onClick={()=>{removeLimit(_limit)}}><h5>❌</h5></button>

       <button className="upLeft2 HyellowBG subButton" 
       onClick={()=>{
        setNewLimit(_limit), setSubSwitch({...subSwitch, price: Number(limits[_limit])})}}><h5>🔄</h5></button>
      

      </>
              
    :<>
    <h4>Limit price</h4>  
    <button className="upLeft subButton" onClick={()=>{setNewLimit(_limit)}}><h5>set</h5></button>
    </>
}
</div></>

)}

const PreLimit = ({_limit}) => {

  return(
    <div className='multiVer blockCard layerFloor gray2BG paddingContent' id={subSwitch.switch ? "displayNone" : ""} onClick={()=>{setNewLimit(_limit)}}>
      <h4>Set</h4>
      <p>{_limit === 0 ? "Stop Loss" : "Take Profit"}</p>            
   </div>
  )
}

const PostLimit = ({}) => {
  return(
    <div className='layerBase multiVer toBot' id={!subSwitch.switch ? "displayNone" : ""}>
    <SubOrderConfig open={openOrder} close={closeOrder} _price={subSwitch.price}/>           
    </div>
  )
}


return (


  <div className="whMax multiHor toBot" id='layerBaseTPSL'>
         
        {limits[0] > 0 && limits[1] > 0 ?
        <>
        <Limit _limit={0}/>
        <Limit _limit={1}/>
        </>
        : limits[0] > 0 ? 
        <>
        <Limit _limit={0} /> 
        <PreLimit _limit={1}/>
        <PostLimit />
        </>
        : limits[1] > 0 ?
        <>
          <PostLimit />
          <PreLimit _limit={0}/>
          <Limit _limit={1} />
          
        </>
        :
        <>
          <PreLimit _limit={0}/>
          <PreLimit _limit={1}/>
        </>

      }         
        
        

  </div>

)}

export default TPSL