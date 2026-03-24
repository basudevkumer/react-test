import React from "react";

const Cart = ({ img, title }) => {
  return (
    <div className="p-5 shadow-lg">
      <img src={img} alt="sdfdsf" className="w-[150px] h-[150px]" />
      <h1 className="text-2xl text-green-500 font-bold">{title}</h1>
    </div>
  );
};

export default Cart;
