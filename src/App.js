import Header from "./blocks/Header"
import Display from "./blocks/Display"
import Controls from "./blocks/Controls"

import { useState, useContext } from "react"


import "./styles/major.css"
import "./styles/minor.css"
import "./styles/text.css"

function App() {
 

  const [config, setConfig] = useState({})
  const [init, setInit] = useState(init => false)

  const openOrderFires=(x)=>{
      console.log(x);
      setConfig(config => ({...x}))
      }
  const _setInit = ()=>{
    setInit(init => !init)
  }

 

  return (
    <div id="root">
      <Header />
      
        <Display openConfig={config}
         init={init}/>
        <Controls openOrderFires={openOrderFires}
         init={init} _setInit={_setInit}/>

    </div>
  )

}

export default App;
