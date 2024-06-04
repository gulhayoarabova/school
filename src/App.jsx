import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./home"
import Input2 from "./Input"
import Filter from "./Filter"
import Savollar from "./Savollar"

function App(){
  return(
    <>
<Router>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/input" element={<Input2/>}></Route>
    <Route path="/filter" element={<Filter/>}></Route>
    <Route path="/savollar" element={<Savollar/>}></Route>

  </Routes>
</Router>
    </>
  )
}

export default App