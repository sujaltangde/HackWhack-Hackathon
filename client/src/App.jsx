import { Routes, Route } from "react-router"
import { About } from "./components/About/About"
import { NumIncrDecr } from "./components/Test/NumIncrDecr"
import { Login } from "./components/Auth/Login"
import { Home } from "./components/Home/Home"

function App() {


  return (
    <>

<Routes>    

{/* <Route path="*" element={<NotFound />} /> */}
{/* <Route exact path="/" element={<Home />} /> */}

<Route path="/about" element={<About />} />
<Route path="/" element={<Home/>} />
<Route path="/login" element={<Login/>} />

</Routes>    

    </>
  )
}

export default App
