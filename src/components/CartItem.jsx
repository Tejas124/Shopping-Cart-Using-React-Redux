import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  function removeFromCart(){
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  }

  return (
    <div className="flex gap-6 p-8">
      <div className=" w-2/5">
        <img src={item.image} className="" alt="item" />
      </div>
      <div className="flex flex-col gap-5 ml-10">
        <p className="text-gray-800 font-semibold text-xl">{item.title}</p>
        <p className="text-light">{item.description.split(" ").slice(0,15).join(" ") + "..."}</p>
        <div className="flex justify-between items-center font-bold text-xl text-green-600">
          <p className="">$ {item.price}</p>
          <button onClick={removeFromCart} className=" text-3xl">
            <FcDeleteDatabase className=""/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
