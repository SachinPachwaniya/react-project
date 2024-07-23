import {BrowserRouter,Routes,Route} from "react-router-dom"

import Login from "./pages/login";
import Register  from "./pages/register";
import Home from "./pages/home";
import {auth} from "./lib/firebase"
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route index Component={Home}></Route>
      <Route path="/login" Component={Login}></Route>
      <Route path="/register" Component={Register}></Route>
    </Routes>
    </BrowserRouter>
  ) 
}
export default App
