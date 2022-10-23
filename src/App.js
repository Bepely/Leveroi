import Header from "./blocks/Header"
import Display from "./blocks/Display"
import Controls from "./blocks/Controls"
import Results from "./blocks/Results"

import { useState } from "react"


import "./styles/major.css"
import "./styles/minor.css"
import "./styles/text.css"

function App() {

 
  const [closeOrder, setCloseOrder] = useState({
    long: true,
    closePrice: 100,
    min: 0,
    max: 200
})

  const [openOrder, setOpenOrder] = useState({})
  const [init, setInit] = useState(init => false)

  const openOrderFires=(x)=>{
      console.log(x);
      setOpenOrder(openOrder => ({...x}))
      }
  const _setInit = ()=>{
    setInit(init => !init)
  }

 

  return (
    
    <div id="root">
      <Header />
      
        <Display 
         init={init}
         openOrder={openOrder}
         closeOrder={closeOrder} setCloseOrder={setCloseOrder}/>
         {init === true ? 
          <Results open={openOrder} close={closeOrder}
          setClose={setCloseOrder} setOpen={setOpenOrder}
          init={init}/>
          :
          <></>
        }
        
         
        <Controls openOrderFires={openOrderFires}
         init={init} _setInit={_setInit}/>


    </div>
  )

}

export default App;
