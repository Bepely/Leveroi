import React from 'react'
import {useState, useEffect} from 'react'
import * as lcl from "../../lcl"

const TPSL = ({open, close}) => {

//init value of TP/SL is a false. 
//if user set up a value for TP/LS it is no longer false and have a price.
const [TP, setTP] = useState({init: false, price: 0, long: close.long})
const [SL, setSL] = useState({init: false, price: 0, long: close.long})

const userTPset = () => {setTP(TP => ({...TP, init:true, price:close.price, long: close.long }))}
const userTPremove = () => {setTP(TP => ({...TP, init: false, price: 0, long: close.long}))}

const userSLset = () => setSL(SL => ({...SL, init:true, price:close.price, long: close.long }))
const userSLremove = () => {setSL(SL => ({...SL, init: false, price: 0, long: close.long}))}

useEffect(() => {
  let _TP = TP 
  let _SL = SL 

 setTP({..._SL, long: close.long})
 setSL({..._TP, long: close.long})
}, [close.long])


  return (
    <div className="layerBase multiHor" id='layerBaseTPSL'>
      {TP.init ? 
      <div className="layerBase miltiVer" id='TPSLbase'>
        
        <div className='layerFloor blockCard miltiVer'>
            <div className="pnlResults" id='pnlTPSL'> 
                      <div className='TPSLcontainer' id='textContent'>
                        <h4>TP Price</h4>
                        <h5 id='pnlTPSLright'>{TP.price}</h5>
                      </div>
                      <div className="pnlContainer " id='textContent'>
                        <h4>PNL</h4>
                        <h5>{lcl.margin(open, TP)}</h5>
                        <h5 id='pnlTPSLright'>{lcl.marginPercent(open, TP)}%</h5>
                      </div>
                      <div className="totalContainer" id='textContent'>
                        <h4>Total</h4>
                        <h5 id='pnlTPSLright'>{lcl.total(open, TP)}</h5>
                      </div>
              </div>
          </div>

          <div className="layerTable" id="blockButton2">
            <button onClick={userTPremove}>delete TP</button>
            <button onClick={userTPset}>set TP</button>
          </div>
     
          
      </div> 
      
      : 

     
        
        <button className="blockButton blockCard paddingContent" onClick={userTPset}>
            Set Take Profit
        </button>}
    

        {SL.init ? 
      
            <div className="layerBase miltiVer" id='TPSLbase'>
              
              <div className='layerFloor blockCard miltiVer'>
                  <div className="pnlResults" id='pnlTPSL'> 
                            <div className='TPSLcontainer' id='textContent'>
                              <h4>SL Price</h4>
                              <h5 id='pnlTPSLright'>{SL.price}</h5>
                            </div>
                            <div className="pnlContainer " id='textContent'>
                              <h4>PNL</h4>
                              <h5>{lcl.margin(open, SL)}</h5>
                              <h5 id='pnlTPSLright'>{lcl.marginPercent(open, SL)}%</h5>
                            </div>
                            <div className="totalContainer" id='textContent'>
                              <h4>Total</h4>
                              <h5 id='pnlTPSLright'>{lcl.total(open, SL)}</h5>
                            </div>
                    </div>
                </div>

                <div className="layerTable" id="blockButton2">
                  <button onClick={userSLremove}>delete SL</button>
                  <button onClick={userSLset}>set SL</button>
                </div>
          
                
            </div> 
      
      : 

     
        
        <button className="blockButton blockCard paddingContent" onClick={userSLset}>
            Set Stop Loss
        </button>}


    </div>
  )
}

export default TPSL