import React from 'react'
import {useState, useEffect} from 'react'
import * as lcl from "../../lcl"

const TPSL = ({open, close}) => {

//init value of TP/SL is a false. 
//if user set up a value for TP/LS it is no longer false and have a price.

const [limits, setLimits] = useState([-1, -1])

//13.12.22
//23:53 Bepely
//Нихуя не работает, я в ахуе. 
//туплю на ровном месте,, не выкупаю нихуя. 
//надо сделать тут чтоб было максимум 2 лимита открытых, но если их нет ни 1 - показывай большую кнопку создать
//если есть 1 лимит из 2 - показывай выставленный лимит и кнопку добавления лимита
//если создано 2 лимита - показывай 2 лимита и не показывай кнопкую 

//жи есть все просто. я в ахуе туплю и жопу рвет
//все, в призду, завтра доделаю


const setNewLimit = (item) => {
  console.log(item);
  _limits[item.id] = item;

   
   
  }

  const removeLimit = (number) => {
  
    _limits = limits
   
    _limits.splice(number, 1)
    _limits = _limits.concat({init: false, price: 0, long:close.long, id:id})
    
    
    setLimits(_limits)


  }



useEffect(() => {
  _limits = limits
 
  _limits.forEach((element, index) => {
    _limits[index].long = close.long;
  });

  setLimits(limits => _limits)
  console.log(limits);

}, [close])




return (


  <div className="layerBase multiHor" id='layerBaseTPSL'>
      {limits.forEach(l => (
        <div key={l.id} className="layerBase miltiVer" id={l.id >= 2 ? 'TPSLbaseNotToShow': 'TPSLbase'}>
          { l.init ?
                
            <>
                  
            <div className='layerFloor blockCard miltiVer'>
                <div className="pnlResults" id='pnlTPSL'> 

                          <div className='TPSLcontainer' id='textContent'>
                            <h4>Limit price</h4>
                            <h5 id='pnlTPSLright'>{l.price}</h5>
                          </div>

                          <div className="pnlContainer " id='textContent'>
                            <h4>PNL</h4>
                            <h5>{lcl.margin(open, l)}</h5>
                            <h5 id='pnlTPSLright'>{lcl.marginPercent(open, l)}%</h5>
                          </div>

                          <div className="totalContainer" id='textContent'>
                            <h4>Total</h4>
                            <h5 id='pnlTPSLright'>{lcl.total(open, l)}</h5>
                          </div>
                  </div>
            </div>
            <button className="blockButton paddingContent" onClick={()=>{removeLimit(l.id)}}>delete limit</button>

          </>


            :<></>
          }
         

              
      </div>
      ))}
      {!limits[0].init}
      <button className="blockButton paddingContent" onClick={()=>setLimits({...limits, })}>
              Set Limit
      </button>
  </div>

)}

export default TPSL