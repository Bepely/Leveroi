import Header from "./blocks/Header"
import Display from "./blocks/Display"
import Controls from "./blocks/Controls"

import { useState, useContext } from "react"
import { configContext } from "./configContext"

import "./styles/major.css"
import "./styles/minor.css"
import "./styles/text.css"

function App() {
 

  const [config, setConfig] = useState({
   
      amount: 0,
      entryPrice: 0,
      leverage: 1,
      min: 0,
      max: 0
                
  })

 

  return (
    <div id="root">
      <Header />
      <configContext.Provider value={{config, setConfig}}>
        <Display/>
        <Controls/>
      </configContext.Provider>
    </div>
  )

}

export default App;
