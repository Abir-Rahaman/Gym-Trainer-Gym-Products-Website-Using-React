import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from "./Components/Home/About/About";
import Blogs from "./Components/Home/Blogs/Blogs";
import Checkout from "./Components/Home/Checkout/Checkout";
import Home from './Components/Home/Home/Home';
import Login from "./Components/Login/Login";
import Notfound from "./Components/Notfound/Notfound";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Navigation from "./Components/Shared/Navigation/Navigation";
import SignIn from "./Components/SignIn/SignIn";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home> } ></Route>
        <Route path="/about" element={<About></About> } ></Route>
        <Route path="/login" element={<Login></Login> } ></Route>
        <Route path="/signup" element={<SignIn></SignIn> } ></Route>
        <Route path="/blogs" element={<Blogs></Blogs> } ></Route>
        <Route path="/checkout" element={<RequireAuth> <Checkout></Checkout></RequireAuth>} ></Route>
        <Route path="*" element={<Notfound></Notfound> } ></Route>
      </Routes> 
    </div>
  );
}

export default App;
