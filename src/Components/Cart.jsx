import { useState } from "react";
import CartItem from "./CartItem";
import { FaSortNumericDownAlt } from "react-icons/fa";
import Modal from "./Modal";

const Cart = ({ addCart, addPrice, handleSorting }) => {

  const [isModalOpen, setisModalOpen] = useState(true)

  const handlePurchase = () => {
    console.log(123)
    setisModalOpen(true);
  };
//   const closeModal = () => {
//     setisModalOpen(false);
//   };
  return (
    <>
      <div className="flex w-[70%] mx-auto p-4 justify-around gap-20 items-center">
        <h1 className="text-2xl font-bold font-sora">Cart</h1>
        <div className="flex items-center gap-20">
          <h1 className="text-2xl font-bold font-sora">
            Total Cost: {addPrice}$
          </h1>
          <button
            onClick={handleSorting}
            className="flex gap-2 items-center font-sora font-semibold text-white bg-prim px-4 py-2 rounded-3xl hover:bg-purple-500"
          >
            Sort by Price
            <FaSortNumericDownAlt />
          </button>
          {/* <button
            onClick={handlePurchase}
            className="font-sora font-semibold text-white bg-prim px-4 py-2 rounded-3xl hover:bg-purple-500"
          >
            Purchase
          </button> */}
          {
            (isModalOpen) && <Modal handlePurchase={handlePurchase} />
            
          }
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
