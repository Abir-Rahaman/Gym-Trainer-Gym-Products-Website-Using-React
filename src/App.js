import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home> } ></Route>
      </Routes>

      
    </div>
  );
}

export default App;
