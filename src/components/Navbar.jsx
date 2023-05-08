import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png"



const Navbar = () => {

  const {cart} = useSelector( (state) => state);
  return (
    <div className="bg-slate-900">
      <nav className="max-w-6xl flex justify-between items-center mx-auto h-20">
          <NavLink to="/">
            <div className="ml-5">
              <img src={logo} alt="" className="h-14" />
            </div>
          </NavLink>

          <div className=" flex items-center font-medium text-slate-100 mr-5 space-x-6">
            <NavLink to="/">
              <p className="hover:text-green-500 transition duration-200">Home</p>
            </NavLink>
            
            <NavLink to="/cart">
              <div className="relative">
                <FaShoppingCart className=" text-2xl hover:text-green-500 transition duration-200"/>
                
                  
                  {
                    cart.length > 0 && 
                    
                    <span className="text-sm flex justify-center items-center absolute -top-1 -right-2
                     text-white bg-green-500 rounded-full w-5 h-5 animate-bounce">{cart.length}</span>
                    
                  }
                  
                
              </div>
            </NavLink>
          </div>
      </nav>
    </div>
  );
};

export default Navbar;
