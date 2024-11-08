import CartItem from "./CartItem";
import { FaSortNumericDownAlt } from "react-icons/fa";

const Cart = ({ addCart, addPrice }) => {
  return (
    <>
      <div className="flex w-[70%] mx-auto p-4 justify-around gap-20 items-center">
        <h1 className="text-2xl font-bold font-sora">Cart</h1>
        <div className="flex items-center gap-20">
            <h1 className="text-2xl font-bold font-sora">Total Cost: {addPrice}$</h1>
            <button className="flex gap-2 items-center font-sora font-semibold text-white bg-prim px-4 py-2 rounded-3xl">
                Sort by Price
                <FaSortNumericDownAlt />
            </button>
            <button className="font-sora font-semibold text-white bg-prim px-4 py-2 rounded-3xl">Purchase</button>
        </div>
      </div>
      <div>
        {addCart.map((cartItem, idx) => (
          <CartItem key={idx} cartItem={cartItem} />
        ))}
      </div>
    </>
  );
};

export default Cart;
