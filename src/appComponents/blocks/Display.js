import { useEffect} from 'react'

import Slider from "../reusable/Slider"
import Graph from "./Graph"
import Platforms from "../reusable/Platforms"



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

    //onClick={longShortChange} to put in longshortButtons
    const longShortChange = () => {
        setCloseOrder(closeOrder => closeOrder.long === true
                    ?({...closeOrder, long: false})
                    :({...closeOrder, long: true}))
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
               
                <div className='backLayer2 dropShadow container containerBox' id='newOrderInstructions'>
                
                {inDis === true
                ?
                <div id='inDisPlatforms'>
                    <h3>Real Market Trading</h3>
                    <Platforms />
                    <div id="initComment">
                <h5>Leveroy is in beta. Feel free to report bugs.</h5>
                    <h5> <a target="_blank" href='https://twitter.com/o6morok'>twitter: @o6morok</a> |
                    | <a target="_blank" href='https://www.youtube.com/@Bepely'>youtube: @bepely</a> |
                    | <a target="_blank" href='https://github.com/Bepely'>github: @bepely</a></h5>
                
                </div>
                </div>
                :
                <div id="inDisInstructions">
                    <article>
                    <h3>Profit / Loss Calculator</h3>
                    <p>
                        Calculating your outcomes of futures orders is easy. <br/>
                        Enter Amount, Leverage and Price of your order. <br/>
                        Then "Create Order" and simulate market movements. <br/>
                        See dynamic results on a Graph and Results blocks.
                    </p>
                    </article>
                
                    <div>
                 <h3>Disclaimer</h3>
                <div>
                    
               <ul> 
                <li> Real-market trading platforms may have different calculating formulas.</li>
                <li>Leveroi information is approximate and may differ from real-market platforms.</li>
                </ul>

</div>
                </div>
                
                <div id="initComment">
                <h5>Leveroy is in beta. Feel free to report bugs.</h5>
                    <h5> <a target="_blank" href='https://twitter.com/o6morok'>twitter: @o6morok</a> |
                    | <a target="_blank" href='https://www.youtube.com/@Bepely'>youtube: @bepely</a> |
                    | <a target="_blank" href='https://github.com/Bepely'>github: @bepely</a></h5>
                
                </div>
                </div>
                }
                </div>
                
          


            : 


            
            <div className='backLayer2 dropShadow container containerBox' id='displayContainer'>
                <div id="minMaxCurContainer">
                <div className="longShortBtnHolder">
                <button className={`btn ${closeOrder.long ? `picked` : `toPick`} greenButton`} 
                disabled={closeOrder.long ? true : false} 
                onClick={longShortChange}>LONG</button>
                <button className={`btn ${!closeOrder.long ? `picked` : `toPick`} redButton`} 
                disabled={closeOrder.long ? false : true} 
                onClick={longShortChange}>SHORT</button>
               </div>
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