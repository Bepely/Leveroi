import { useEffect} from 'react'

import Slider from "../reusable/Slider"
import Graph from "./Graph"
import Platforms from "../reusable/Platforms"

import "../styles/blocks/display.css"


const Display = ({openOrder, init, closeOrder, setCloseOrder, inDis}) => {
  

    const changeClosePrice = (e) => {
        setCloseOrder(closeOrder => ({...closeOrder, closePrice:e.target.value}))
    }
    const changeMin = (e) => {
        let toSet = Number(e.target.value)
        if(toSet >= closeOrder.max){
            setCloseOrder(closeOrder => ({...closeOrder,
                                         max:toSet+1,
                                         min:toSet}))
        } else if(toSet <= 0 || toSet === null){
           
        } 
        else{setCloseOrder(closeOrder => ({...closeOrder, min:toSet}))}
        e.target.value = null
    }
    const changeMax = (e) => {
        let toSet = Number(e.target.value)

        if(toSet <= 0 || toSet === null){}
        else if(toSet <= closeOrder.min){
           
            setCloseOrder(closeOrder => ({...closeOrder,
                                     min:toSet-1,
                                     max:toSet}))}
        else{setCloseOrder(closeOrder => ({...closeOrder, max:toSet}))} 
            e.target.value = null
            console.log("MIN > MAX", closeOrder);
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
                    <p>For real-market perpetual trading, you have to use <br/>
                    trading platforms. Here you can find a few of them.
                    </p>
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
            <div className='container' id='graphContainer'>

                    <Graph close={closeOrder} open={openOrder}/>
            </div>
            <div className='sliderControlContainer'>
                <div className='minMax container' id="maxContainer"> 
                    <h5>MAX</h5>
                    <input type="number" onBlur={changeMax} placeholder={closeOrder.max ? closeOrder.max : 1}/>
                </div>
            <Slider closeOrder={closeOrder} changeClosePrice={changeClosePrice}/>
                <div className='minMax container' id="maxContainer"> 
                    <h5>MIN</h5>
                    <input type="number" onBlur={changeMin}  placeholder={closeOrder.min ? closeOrder.min : 0}/>
                </div>
            </div>
            
        </div>
            }
            

    </div>
  )
}

export default Display