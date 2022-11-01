import { useEffect} from 'react'

import Slider from "../reusable/Slider"
import Graph from "./Graph"

import "../styles/blocks/display.css"
import { Alarm } from '@mui/icons-material'


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
                    <input type="number" onBlur={changeMax} placeholder={closeOrder.max}/>
                </div>
            <Slider closeOrder={closeOrder} changeClosePrice={changeClosePrice}/>
                <div className='minMax container' id="maxContainer"> 
                    <h5>MIN</h5>
                    <input type="number" onBlur={changeMin}  placeholder={closeOrder.min}/>
                </div>
            </div>
            
        </div>
            }
            

    </div>
  )
}

export default Display