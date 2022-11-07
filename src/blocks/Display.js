import { useEffect} from 'react'

import Slider from "../reusable/Slider"
import Graph from "./Graph"

import "../styles/blocks/display.css"


const Display = ({openOrder, init, closeOrder, setCloseOrder}) => {
  
    
        

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

            <article className='container' id='newOrderInstructions'>
            <h3>How to use Leveroi?</h3>
            <ul>
                <li>Input your order data</li>
                <li>Click "Create Order"</li>
                <li>Switch between Long/Short</li>
                <li>Simulate your close price</li>
            </ul>
            <p>Leveroy is a Futures Market Simulator. <br/>
                You can monitor dynamic ROI, liquidation price 
                and representative graph.
            </p>
            <div id="initComment">
            <h5>Leveroy is in beta. Feel free to report on bugs.</h5>
            </div>
            


            </article>


            : 


            <div className='container' id='displayContainer'>
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