import { useEffect} from 'react'

import Slider from "../reusable/Slider"
import Graph from "./Graph"
import Platforms from "../reusable/Platforms"

import "../styles/blocks/display.css"


const Display = ({openOrder, init, closeOrder, setCloseOrder, inDis}) => {
  

    const changeClosePrice = (e) => {
        
            let x = Number(e.target.value)       
             x = x.toFixed(2)
             x = Number(x)
            
             setCloseOrder(closeOrder => ({...closeOrder, closePrice:x}))
           
        e.target.value = null

        if(x > closeOrder.max)
        {setCloseOrder(closeOrder => ({...closeOrder, max:x}))}
       else if (x < closeOrder.min) 
       {setCloseOrder(closeOrder => ({...closeOrder, min:x}))}
       }

    const changeMin = (e) => {
        let x = Number(e.target.value)       
             x = x.toFixed(2)
             x = Number(x)

        if(x >= closeOrder.max){
            setCloseOrder(closeOrder => ({...closeOrder,
                                         max:x+1,
                                         min:x}))
        } else if(x <= 0 || x === null){
           
        } 
        else{setCloseOrder(closeOrder => ({...closeOrder, min:x}))}
        e.target.value = null
    }
    const changeMax = (e) => {
        let x = Number(e.target.value)       
             x = x.toFixed(2)
             x = Number(x)

        if(x <= 0 || x === null){}
        else if(x <= closeOrder.min){
           
            setCloseOrder(closeOrder => ({...closeOrder,
                                     min:x-1,
                                     max:x}))}
        else{setCloseOrder(closeOrder => ({...closeOrder, max:x}))} 
            e.target.value = null
           
    }

    const onCloseChange = () => {
            setCloseOrder(closeOrder => ({...closeOrder,
                min:openOrder.price*0.75,
                max:openOrder.price*1.25,
                closePrice:openOrder.price,              
               })) 
        } 
    
       useEffect(()=>{
            onCloseChange()
       },[init])

       

  return (
    <div className='block' id='displayRoot'>

            {init === false ? 
               
                <article className='backLayer2 dropShadow container containerBox' id='newOrderInstructions'>
                
                {inDis === true
                ?
                <div id='inDisPlatforms'>
                    <h3>Real Market Trading</h3>
                    <Platforms />
                </div>
                :
                <div id="inDisInstructions">
                <h3>Perpetual trading calculator</h3>
                    <p>
                        Leveroi provides you with some handy tools to simulate perpetual trading. <br/>
                    </p>
                    <div>
                 <h3>How to use Leveroi?</h3>
                <div>
                    <li>Input your order data</li>
                    <li>Click "Create Order"</li>
                    <li>Switch between Long/Short</li>
                    <li>Simulate your close price</li>
                </div>
                </div>
                
                <div id="initComment">
                <h5>Leveroy is in beta. Feel free to report bugs.</h5>
          
                    <h5>made by <a href='https://github.com/Bepely'>Bepely</a></h5>
                
                </div>
                </div>
                }
                </article>
                
          


            : 


            
            <div className='backLayer2 dropShadow container containerBox' id='displayContainer'>
                <div id="minMaxCurContainer">
                <div className='minMax container' id="minContainer"> 
                    <h5>MIN</h5>
                    <input type="number" onBlur={changeMin}  placeholder={closeOrder.min ? Number(closeOrder.min) : 0}/>
                    </div>
                <div className='minMax container' id="currContainer"> 
                    <h5>Close</h5>
                    <input type="number" onBlur={changeClosePrice}  placeholder={closeOrder.closePrice}/>
                </div>
                <div className='minMax container' id="maxContainer"> 
                    <h5>MAX</h5>
                    <input type="number" onBlur={changeMax} placeholder={closeOrder.max ? Number(closeOrder.max) : 1}/>
                </div>

                </div>
            <div className='container' id='graphContainer'>
                    <Graph close={closeOrder} open={openOrder}/>
            </div>
            <div className='sliderControlContainer'>
            <Slider closeOrder={closeOrder} changeClosePrice={changeClosePrice}/>  
            </div>
            
        </div>
            }
            

    </div>
  )
}

Display.defaultProps = {
    closeOrder:{
      closePrice: 420,
      max: 1337,
      min: 322,
      long: true
    }
  }

export default Display