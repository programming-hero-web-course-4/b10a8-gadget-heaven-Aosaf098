import { useState } from "react";
import CartItem from "./CartItem";
import { FaSortNumericDownAlt } from "react-icons/fa";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

const Cart = ({
  setCart,
  addCart,
  setAddCart,
  addPrice,
  setAddPrice,
  handleSorting,
}) => {
  const { price } = addCart;

  const [isModalOpen, setisModalOpen] = useState(true);
  const [modalPrice, setModalPrice] = useState(0);

  const handlePurchase = () => {
    console.log(123);
    setAddPrice(0);
  };

  const newCart = [...addCart];

  const handleModalPrice = (price) => {
    setModalPrice(modalPrice + price);
  };

  const emptyCart = () => {
    setCart(0);
    setAddCart([]);
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <>
      <div className="lg:hidden flex justify-between my-4 px-2 *:font-semibold *:text-2xl *:font-sora">
        <h1>
          Cart
        </h1>
        <h1>
          Total Cost: {addPrice} $
        </h1>
      </div>
      <div className="flex lg:w-[70%] mx-auto p-4 justify-around gap-20 items-center">
        <h1 className="lg:text-2xl font-bold font-sora hidden lg:block">
          Cart
        </h1>
        <div className="flex items-center gap-20">
          <h1 className="lg:text-2xl font-bold font-sora hidden lg:block">
            Total Cost: {addPrice}$
          </h1>
          <button
            onClick={handleSorting}
            className="flex gap-2 items-center font-sora font-semibold text-white bg-prim lg:px-4 py-3 rounded-3xl hover:bg-purple-500 px-6"
          >
            Sort by Price
            <FaSortNumericDownAlt />
          </button>
          {isModalOpen && (
            <Modal
              handlePurchase={handlePurchase}
              addCart={addCart}
              addPrice={addPrice}
              handleModalPrice={handleModalPrice}
              modalPrice={modalPrice}
              emptyCart={emptyCart}
              handleNavigate={handleNavigate}
            />
          )}
        </div>
      </div>
      <div>
        {newCart.map((cartItem, idx) => (
          <CartItem key={idx} cartItem={cartItem} />
        ))}
      </div>
    </>
  );
};

export default Cart;
