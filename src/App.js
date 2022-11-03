import Header from "./blocks/Header"
import Display from "./blocks/Display"
import Controls from "./blocks/Controls"
import Results from "./blocks/Results"

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { useState } from "react"


import "./styles/major.css"



function App() {

 
  const [closeOrder, setCloseOrder] = useState({
    long: true,
    closePrice: 100,
    min: 0,
    max: 200
})

  const [openOrder, setOpenOrder] = useState({})
  const [init, setInit] = useState(init => false)

  const[session, setSession] = useState({
    open: 0,
    close: 0,
    pnl: 0,
    orders: []
  })



  const openOrderFires=(x)=>{
      console.log(x);
      setOpenOrder(openOrder => ({...x}))
      }
  const _setInit = ()=>{
    setInit(init => !init)
  }

 

  return (
    
    <div id="root">      
        <Display 
         init={init}
         openOrder={openOrder}
         closeOrder={closeOrder} setCloseOrder={setCloseOrder}/>
         <Header />
         {init === true ? 
          <Results open={openOrder} close={closeOrder}
          setClose={setCloseOrder} setOpen={setOpenOrder}
          init={init} _setInit={_setInit}/>
          :
          <Controls openOrderFires={openOrderFires}
          init={init} _setInit={_setInit}/>
        }
        
         
       


    </div>
  )

}

export default App;
