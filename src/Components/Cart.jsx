import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { addcart } from './cartslice';
import { updatequantity } from './cartslice';
import { useDispatch, useSelector } from 'react-redux';
import {removeitem} from './cartslice';
function Cart() {
   const cart=useSelector(store=>store.cart);
   const dispatch=useDispatch();
  const subtotal = cart.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  if (!cart.items.length) return <p className="flex justify-center items-center mt-[20%] font-bold text-4xl">No products in cart.</p>;
function handelupdate(object){
dispatch(updatequantity(object));
}
function handelremove(id){
  dispatch(removeitem(id));
}
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-4">
          {cart?.items.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded shadow flex items-center gap-4">
              <img src={item.product.thumbnail} alt={item.product.title} className="w-24 h-24 object-contain" />
              <div className="flex-1">
                <h3 className="text-lg font-medium">{item.product.title}</h3>
                <p className="text-gray-600">₹{ item.product.price.toLocaleString()}</p>
                <div className="flex items-center mt-2">
                  <button className="px-2 py-1 border rounded" disabled={item.quantity<=1} onClick={()=>{
                    handelupdate({id:item.product.id,number:item.quantity-1})
                  }}>-</button>
                  <span className="mx-3">{item.quantity}</span>
                  <button className="px-2 py-1 border rounded" onClick={()=>{
                    handelupdate({id:item.product.id,number:item.quantity+1})
                  }} >+</button>
                </div>
              </div>
              <button className="text-red-600 hover:underline" onClick={()=>{handelremove(item.product.id)}}>Remove</button>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/3 bg-white p-4 rounded shadow h-fit">
          <h3 className="text-lg font-medium mb-2">Subtotal ({cart.items.length} items):</h3>
          <p className="text-xl font-semibold mb-4">₹{subtotal.toLocaleString()}</p>
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 font-semibold rounded">
            Proceed to Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
