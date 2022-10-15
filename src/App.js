import Header from "./blocks/Header"
import Display from "./blocks/Display"
import Controls from "./blocks/Controls"

import "./styles/major.css"
import "./styles/minor.css"
import "./styles/text.css"

function App() {
  return (
    <div id="root">
      <Header />
      <Display />
      <Controls />
    </div>
  )

}

export default App;
