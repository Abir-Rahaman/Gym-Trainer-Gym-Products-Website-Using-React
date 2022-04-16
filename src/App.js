import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from "./Components/Home/About/About";
import Checkout from "./Components/Home/Checkout/Checkout";
import Home from './Components/Home/Home/Home';
import Notfound from "./Components/Notfound/Notfound";
import Navigation from "./Components/Shared/Navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home> } ></Route>
        <Route path="/about" element={<About></About> } ></Route>
        <Route path="/checkout" element={<Checkout></Checkout> } ></Route>
        <Route path="*" element={<Notfound></Notfound> } ></Route>
      </Routes>
      

      
    </div>
  );
}

export default App;
