import { useState, useEffect} from 'react'

import Slider from "../reusable/Slider"
import Pair from "../reusable/Pair"
import Results from "./Results"


const Display = ({openConfig, init}) => {

    {/*
        Declaring a main state object of a Display component
    */}

    const [closeOrder, setCloseOrder] = useState({
        long: true,
        closePrice: 100,
        min: 0,
        max: 200
    })

        {/*
            Declaring a fucnction to change an aim price
            to pass it to the Slider component
        */}
    const changeClosePrice = (e) => {
        setCloseOrder(closeOrder => ({...closeOrder, closePrice:e.target.value}))
    }


     {/*
        Declaring a clone object of an openConfig state
        for avoiding unwanted renders
        Then Declaring a function to catch configured 
        Open orders 
    */}

    const openOrder = openConfig
    const onCloseChange = () => {
            setCloseOrder(closeOrder => ({...closeOrder,
                min:openOrder.price*0.75,
                max:openOrder.price*1.25,
                closePrice:openOrder.price,              
               })) 
        } 
     {/*
        Catching a config of an order, we specified 
        in the Controls component by useEffect Hook
        with a dependency on an init state, that works as a 
        trigger-switcher.
    */}

    
       useEffect(()=>{
            onCloseChange()
       },[init])

   {/*
        Switching Long/Short simulation order
        that is a property of a closeOrder state
    */}
    const longShortChange = () => {
        setCloseOrder(closeOrder => closeOrder.long === true
                    ?({...closeOrder, long: false})
                    :({...closeOrder, long: true}))
    }





  return (
    <div className='block' id='displayRoot'>
        
            {/* Display */}

            {init === false ? 

            <div className='container' id='displayContainer'>
            <div>NEED TO CONFIGURATE FIRST!</div>
            </div>


            : 


            <div className='container' id='displayContainer'>
            <div className='container' id='graphContainer'>
                <div>
                    <button onClick={longShortChange}>{closeOrder.long === true ? "Long" : "Short"}</button>                   
                </div>
                
                <div className='graph container' id='graph'> </div>
                    
                    
                    <div className='numContainer container' id='currentPriceContainer'>
                        <p className='num bigNum' id='currentPriceNum'>{closeOrder.closePrice}</p>
                    </div>
                    <Results close={closeOrder} open={openOrder}/>
                    
                
                
            </div>
            <div className='sliderControlContainer'>
            <Pair type="inform" first="max" second={closeOrder.max} />
            <Slider closeOrder={closeOrder} changeClosePrice={changeClosePrice}/>
            <Pair type="inform" first="min" second={closeOrder.min} />
            </div>
            
        </div>
            }
            

    </div>
  )
}

export default Display