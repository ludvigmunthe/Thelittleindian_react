import Home from "./pages/Home";

import Menu from "./pages/Menu";

import Onlineorder from "./pages/Onlineorder";

import Catering from "./pages/Catering";

import Order from "./pages/Order";

import "./App.css";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";



function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path = "/" element={ <Home /> }/>
            <Route path = "/Home" element= {<Home/>}/>
            <Route path = "/menu" element={<Menu />}/>
            <Route path = "/onlineorder" element={<Onlineorder />}/>
            <Route path = "/catering" element={<Catering />}/>
            <Route path = "/order" element={<Order />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
