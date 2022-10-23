import { useEffect} from 'react'

import Slider from "../reusable/Slider"
import Graph from "./Graph"


const Display = ({openOrder, init, closeOrder, setCloseOrder}) => {

    {/*
        Declaring a main state object of a Display component
    */}

   

        {/*
            Declaring a fucnction to change an aim price
            to pass it to the Slider component
        */}
    const changeClosePrice = (e) => {
        setCloseOrder(closeOrder => ({...closeOrder, closePrice:e.target.value}))
    }
    const changeMin = (e) => {
        setCloseOrder(closeOrder => ({...closeOrder, min:e.target.value}))
    }
    const changeMax = (e) => {
        setCloseOrder(closeOrder => ({...closeOrder, max:e.target.value}))
        
    }


     {/*
        Declaring a clone object of an openConfig state
        for avoiding unwanted renders
        Then Declaring a function to catch configured 
        Open orders 
    */}

    
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
  





  return (
    <div className='block' id='displayRoot'>
        
            {/* Display */}

            {init === false ? 

            <div className='container' id='newOrderInstructions'>
            <div>NEED TO CONFIGURATE FIRST!</div>
            -------------------------------------
            <div>1. ENTER AN AMOUNT</div>
            <div>2. ENTER A LEVERAGE</div>
            <div>3. ENTER A PRICE OF ENTRY</div>
            <div>4. PRESS A BUTTON "CREATE"</div>
            <div>5. FUCK AROUND</div>

            </div>


            : 


            <div className='container' id='displayContainer'>
            <div className='container' id='graphContainer'>
               
                
                <div className='graph container' id='graph'>
                    <Graph close={closeOrder} open={openOrder}/>
                </div>
                  
                    
                    
                
                
            </div>
            <div className='sliderControlContainer'>
                <div className='minMax container' id="maxContainer"> 
                    <h5>MAX</h5>
                    <input type="text" onChange={changeMax} placeholder={closeOrder.max}/>
                </div>
            <Slider closeOrder={closeOrder} changeClosePrice={changeClosePrice}/>
                <div className='minMax container' id="maxContainer"> 
                    <h5>MIN</h5>
                    <input type="text" onChange={changeMin} placeholder={closeOrder.min}/>
                </div>
            </div>
            
        </div>
            }
            

    </div>
  )
}

export default Display