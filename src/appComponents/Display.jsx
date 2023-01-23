'use client'
import { useEffect} from 'react'

import { useSelector, useDispatch } from 'react-redux'

import {setAmount, setLeverage, setOpenPrice, setFee, setDefaultOpen} from "../redux/features/closeOrder/openOrderSlice"
import {setLong, setShort, setClosePrice, setMin, setMax, setLim0, setLim1, setDefaultClose} from "../redux/features/openOrder/closeOrderSlice"
import {setInitFalse, setInitTrue, setIsQueFalse, setIsQueTrue} from "../redux/features/session/sessionSlice"


import Slider from "./displayBlocks/Slider"
import Graph from "./displayBlocks/Graph"
import Contacts from "./reusable/Contacts"

import * as lcl from "../lcl"



const Display = ({router}) => {
  
    /*
    Display block is a base for Interactable sub-blocks, that affects Order Close Price
    Also it contains Reactive Media Graph, that is a main media conponent, thath why i've named it Display =/

    Also it is a huge Data Flow Node, that collects all sub-blocks data change and passes it to the parent component. 

    12.12.22 Bepely
    */

      //This is a default redux boilerplate for components on a remake stage 23.01.2023 Bepely
  const {openOrder} = useSelector(state => state);
  const {closeOrder} = useSelector(state=>state);
  const {session} = useSelector(state=>state)

  const dispatch = useDispatch();
    

    const onCloseChange = () => {

        
            if(Object.getOwnPropertyNames(router.query).length <= 0){

             if(!session.isQue){

                dispatch(setMin(openOrder.price*0.75))
                dispatch(setMax(openOrder.price*1.25))
                dispatch(setClosePrice(openOrder.price))

            } else {
                ()=>{
                dispatch(setAmount(lcl.fixCoef(router.query.am)))
                dispatch(setLeverage(lcl.fixCoef(router.query.lev)))
                dispatch(setOpenPrice(lcl.fixCoef(router.query.op)))
                dispatch(setFee(lcl.fixCoef(router.query.fee)))
                }

                ()=>{
                    dispatch(setClosePrice(lcl.fixCoef(router.query.cp)))

                    if(router.query.long === "true"){
                        dispatch(setLong())
                    }else if(router.query.long === "false"){
                        dispatch(setShort())
                    }

                    dispatch(setMin(lcl.fixCoef(router.query.min)))
                    dispatch(setMax(lcl.fixCoef(router.query.max)))
                    dispatch(setLim0(lcl.fixCoef(router.query.lim0)))
                    dispatch(setLim1(lcl.fixCoef(router.query.lim1)))
                }
                
                router.replace('/leveroi', undefined, { shallow: true });
            }

        }} 
    
       useEffect(()=>{
            onCloseChange()
       },[session.init, router])

       

  return (
    <>
   

            {session.init === false ? 
               
                
                <div className='layerBase soloCenter' id='displayBase' >
               
                <div className='layerFloor blockCard whMax multiVer paddingContent' >
                    <article>
                    <h3>Profit / Loss Calculator</h3>
                    <p>
                        Calculating your outcomes of futures orders is easy. <br/>
                        Enter Amount, Leverage and Price of your order. <br/>
                        Then "Create Order" and simulate market movements. <br/>
                        See dynamic results on a Graph and Results blocks.
                    </p>
                    </article>
                
                    
                    <h3>Disclaimer</h3>
                    <p>Please note that the calculations provided by Leveroi are for informational purposes only and may not accurately reflect the results of real-market trading. Leveroi is currently in beta, so please feel free to report any bugs or issues you encounter.</p>
                
                    <Contacts />        
                </div>
                
                
          
                </div>

            : 

            <div className='layerBase soloCenter' id='displayBase' >


                <div className='layerFloor multiHor whMax paddingContent'  >
                    <Graph />
                    <Slider />  
                </div>  
                
                
            </div>
             }
            
            
         </>
     )
    } 





export default Display