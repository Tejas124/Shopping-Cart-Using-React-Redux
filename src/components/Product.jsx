import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { add } from "../redux/Slices/cartSlice";


const Product = ({post}) => {

  const {cart} = useSelector( (state) => state);
  const dispatch = useDispatch();

  function addToCart(){
      dispatch(add(post));
      toast.success("Item added to Cart");
  }

  function removeFromCart(){
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  }

  return (
    <div className="flex flex-col justify-between items-center hover:scale-110 transition duration-300 ease-in rounded-xl border shadow-2xl hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]
                    gap-3 p-4 mt-10 ml-5 ">
      <div >
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 text-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full"/>
      </div>
      
      <div className="flex flex-row justify-between items-center w-full mt-3">
      <div>
        <p className="text-green-600 font-semibold">$ {post.price}</p>
      </div>
      
        {
            cart?.some( (p) => p.id === post.id) ? 
            (
              <button onClick={removeFromCart}
              className="border-2 p-1 rounded-3xl px-3 border-slate-900 hover:bg-slate-900 text-xs font-semibold
               hover:text-white transition duration-300 ease-in">
                REMOVE ITEM
              </button>
            ) :
            (
              <button onClick={addToCart}
              className="border-2 p-1 rounded-3xl px-3 border-slate-900 hover:bg-slate-900 text-xs font-semibold
               hover:text-white transition duration-300 ease-in">
                ADD TO CART
              </button>
            )
        }
      
      </div>
    </div>
  );
};

export default Product;
