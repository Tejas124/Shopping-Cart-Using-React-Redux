import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="">
      <div className=" ">
        <Navbar/>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
};

export default App;
