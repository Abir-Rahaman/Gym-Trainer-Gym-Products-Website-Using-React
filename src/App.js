import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home/Home';
import Notfound from "./Components/Notfound/Notfound";
import Footer from "./Components/Shared/Footer/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home> } ></Route>
        <Route path="*" element={<Notfound></Notfound> } ></Route>
      </Routes>
      

      
    </div>
  );
}

export default App;
