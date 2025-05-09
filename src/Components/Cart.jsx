import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Cart() {
  const location = useLocation();
  const newProduct = location.state?.product;

  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (newProduct) {
      setCartItems(prevItems => {
        const existingIndex = prevItems.findIndex(item => item.id === newProduct.id);
        let updatedCart;

        if (existingIndex !== -1) {
          updatedCart = [...prevItems];
          updatedCart[existingIndex].quantity += 1;
        } else {
          updatedCart = [...prevItems, { ...newProduct, quantity: 1 }];
        }

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      });
    }
  }, [newProduct]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (!cartItems.length) return <p className="flex justify-center items-center mt-[20%] font-bold text-4xl">No products in cart.</p>;
  function handelremove(id){
 const updatedcart=cartItems.filter((item)=>item.id!=id);
 setCartItems(updatedcart);
 localStorage.setItem("cart", JSON.stringify(updatedcart));
  }
 function decrease(id) {
  const updatedCart = cartItems.map((item) => {
    if (item.id === id) {
      return { ...item, quantity: item.quantity -1 };
    }
    return item;
  });
  setCartItems(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
}
 function increase(id) {
  const updatedCart = cartItems.map((item) => {
    if (item.id === id) {
      return { ...item, quantity: item.quantity +1 };
    }
    return item;
  });
  setCartItems(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
}
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded shadow flex items-center gap-4">
              <img src={item.thumbnail} alt={item.title} className="w-24 h-24 object-contain" />
              <div className="flex-1">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-gray-600">₹{item.price.toLocaleString()}</p>
                <div className="flex items-center mt-2">
                  <button className="px-2 py-1 border rounded" onClick={()=>{
                    decrease(item.id);
                  }}>-</button>
                  <span className="mx-3">{item.quantity}</span>
                  <button className="px-2 py-1 border rounded" onClick={()=>{increase(item.id)}}>+</button>
                </div>
              </div>
              <button className="text-red-600 hover:underline" onClick={()=>{handelremove(item.id)}}>Remove</button>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/3 bg-white p-4 rounded shadow h-fit">
          <h3 className="text-lg font-medium mb-2">Subtotal ({cartItems.length} items):</h3>
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
