import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {

  const {cart} = useSelector((state) => state)
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount( cart?.reduce( (acc, curr) => acc + curr.price , 0))
  }, [cart]);
  
  return (
    <div className=" flex justify-center items-center mt-5">
    {
      cart?.length > 0 ?
      (
        <div className="max-w-[1200px] flex items-center">
          <div className="w-[60%]">
          {
            cart.map((item, index) => {
                return <CartItem key={item.id} item={item} itemIndex={index}/>
            })
          }
          </div>

          <div className="flex flex-col w-[40%] h-[100%] gap-5 p-5 justify-between">
            <div className="flex flex-col justify-start">
              <div className="uppercase text-xl font-semibold text-green-800">Your Cart</div>
              <div className="uppercase text-5xl font-semibold text-green-700">Summary</div>
              <p className=" mt-5 text-xl font-semibold text-slate-700">
                Total Items: <span className="font-light">{cart.length}</span>
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <p className="mt-5 text-xl font-semibold text-slate-700">
                Total Amount <span className="text-black">: $ {totalAmount}</span>
              </p>
              <button className="w-[100%] p-3 border-2 border-green-600 rounded-lg bg-green-700 text-white text-xl font-bold
                                hover:bg-slate-100 hover:text-green-700 transition duration-300 ease-in">Check Out Now</button>
            </div>

          </div>
        </div>
      ) :
      (
        <div className="flex flex-col justify-center items-center w-full min-h-[80vh] gap-y-8">
          <h1 className="text-xl font-semibold">Your cart is empty!</h1>

          <Link to="/">
            <button className="bg-green-600 p-3 px-10 border-2 border-green-600 text-white uppercase font-semibold rounded-lg
                              hover:bg-slate-100 hover:text-green-700 transition duration-300 ease-in">Shop Now</button>
          </Link>
        </div>
      )
    }
    </div>
  );
};

export default Cart;
