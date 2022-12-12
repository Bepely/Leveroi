'use client'
import { useEffect} from 'react'


import Slider from "./displayBlocks/Slider"
import Graph from "./displayBlocks/Graph"

import Platforms from "./displayBlocks/Platforms"
import Contacts from "./reusable/Contacts"
import MinMaxCur from "./displayBlocks/MinMaxCur"
import LongShortButtons from "./displayBlocks/LongShortButtons"

import * as lcl from "../lcl"



const Display = ({openOrder, setOpenOrder, init, closeOrder, setCloseOrder, inDis, router, isQue, setIsQue}) => {
  
    /*
    Display block is a base for Interactable sub-blocks, that affects Order Close Price
    Also it contains Reactive Media Graph, that is a main media conponent, thath why i've named it Display =/

    Also it is a huge Data Flow Node, that collects all sub-blocks data change and passes it to the parent component. 

    12.12.22 Bepely
    */
    

    const onCloseChange = () => {

        
            if(Object.getOwnPropertyNames(router.query).length <= 0){

             if(!isQue){
                setCloseOrder(closeOrder => ({...closeOrder,
                    min:openOrder.price*0.75,
                    max:openOrder.price*1.25,
                    price:openOrder.price,              
                   }))} 

            } else {

                setOpenOrder(openOrder = ({...openOrder, 
                    amount: lcl.fixCoef(router.query.am),
                    leverage: lcl.fixCoef(router.query.lev),
                    price:  lcl.fixCoef(router.query.op),
                    fee: lcl.fixCoef(router.query.fee)
                }))
                setCloseOrder(closeOrder => ({...closeOrder, 
                    price: lcl.fixCoef(router.query.cp),
                    long: router.query.long === "true" ? true : false,
                    min: lcl.fixCoef(router.query.min),
                    max: lcl.fixCoef(router.query.max)
                }))
                router.replace('/app', undefined, { shallow: true });
            }

        } 
    
       useEffect(()=>{
            onCloseChange()
       },[init, router])

       

  return (
    <>
   

            {init === false ? 
               
                
                <div className='layerBase soloCenter' id='displayBase' >
                {inDis === true
                ?
                <div className='layerFloor multiVer blockCard paddingContent'>
                        <Platforms />
                        <Contacts />
                </div>
                :
                <div className='layerFloor blockCard multiVer paddingContent' >
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
                    <p>For more information about Leveroi, please contact the developer at:</p>
                
                    <Contacts />        
                </div>
                }
                
                
          
                </div>

            : 

            <div className='layerBase soloCenter' id='displayBase' >

                
                <div className='layerFloor multiVer blockCardNoShadow'>
                    <LongShortButtons close={closeOrder} setClose={setCloseOrder}/>
                    <MinMaxCur close={closeOrder} setClose={setCloseOrder} />
                </div>
      

                <div className='layerFloor multiHor blockCardNoShadow paddingContent'  >
                    <Graph close={closeOrder} open={openOrder}/>
                    <Slider closeOrder={closeOrder} setCloseOrder={setCloseOrder}/>  
                </div>  
                
                
            </div>
    }
            
            
    </>
  )
}

Display.defaultProps = {
    closeOrder:{
      price: 420,
      max: 1337,
      min: 322,
      long: false
    },
    openOrder:{
        price: 420,
        leverage: 1,
        amount: 100,
        fee: 1
    }
  }

export default Display