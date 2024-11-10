import React from "react";
import modalPic from "../../public/assets/Group.png";

const Modal = ({ handlePurchase, closeModal }) => {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn font-sora font-semibold text-white bg-prim px-4 py-2 rounded-3xl hover:bg-purple-500"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Purchase
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle py-4">
        <div className="modal-box flex flex-col items-center gap-4">
          <img className="w-16" src={modalPic} alt="" />
          <h3 className="font-bold text-2xl font-sora">Payment Successfully</h3>
          <hr className="w-3/4 mx-auto mt-4" />
          <p className="py-2 font-sora font-semibold">Thanks for Purchasing</p>
          <p className="font-sora font-semibold">Total Price: 100tk</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn font-sora font-semibold text-white bg-prim px-4 py-2 rounded-3xl hover:bg-purple-500">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
