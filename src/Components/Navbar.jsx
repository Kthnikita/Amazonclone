import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { suggestion } from '../Data/Mockdata';
import { Appcontext } from '../App';
import { useSelector } from 'react-redux';
function Navbar() {
  const userdata=useSelector(store=>store.user.username);
  const [searchval, setsearchval] = useState('');
  const [count, setcount] = useState(0);
  const navigate = useNavigate();
  const cart=useSelector(store=>store.cart); 
  const cartquantity=useMemo(()=>{
    let val=0;
    for(let i=0;i<cart?.items.length;i++){
      val=val+cart.items[i].quantity;
    }
    return val;
  },[cart])
  // useEffect(() => {
  //   const cart = localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")) : [];
  //   console.log(cart, "from NAV")
  //   const val = cart.reduce((sum, item) => sum + item.quantity, 0);
  //   setcount(val);
  // }, []);

  const searchdata = () => {
    if (searchval.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchval)}`);
    }
  };

  const filtersuggestion = useMemo(() => {
    if (!searchval.trim()) return [];
    return suggestion.filter(item =>
      item.toLowerCase().includes(searchval.toLowerCase())
    );
  }, [searchval]);

  return (
    <div className="w-full">
      <div className="bg-gray-900 text-white px-6 py-3 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg"
          alt="Amazon Logo"
          className="h-10 w-24 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <div className="text-xs leading-tight hover:border hover:border-white p-1 cursor-pointer">
          <p className="text-gray-300">Deliver to</p>
          <p className="font-bold">India</p>
        </div>
        <div className="flex w-[800px] rounded overflow-visible">
          <select className="bg-gray-200 text-sm px-2 py-1 outline-none border-r text-black">
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="books">Books</option>
          </select>
          
          <div className='relative w-full'>
          <input
            type="text"
            placeholder="Search Amazon.in..."
            className="w-full px-4 py-2 text-black text-sm focus:outline-none"
            value={searchval}
            onChange={(e) => setsearchval(e.target.value)}
          />
           {filtersuggestion.length > 0 && (
          <div className="absolute top-full w-full left-0 max-h-40 overflow-auto bg-white shadow-md z-[999] mt-1">
            {filtersuggestion.map((item, index) => (
              <p key={index} className="text-black px-4 py-1 hover:bg-gray-200 cursor-pointer"
              onClick={() => {
            setsearchval('');
            navigate(`/search?q=${encodeURIComponent(item)}`);
          }}>
                {item}
              </p>
            ))}
          </div>
        )}
        </div>
        <button
            className="bg-yellow-400 px-5 text-sm text-black font-semibold"
            onClick={searchdata}
          >
            🔍
          </button>
        </div>
        <select className="bg-gray-900 text-white outline-none">
          <option value="en">🏳️‍⚧️ EN</option>
          <option value="hi">Hindi</option>
        </select>
        <div className="text-xs hover:border hover:border-white p-2 cursor-pointer">
          <p> Hello, {userdata ? userdata : <Link to="/login">Sign in</Link>}</p>
          <p className="font-bold">Accounts & Lists</p>
        </div>
        <div className="text-xs hover:border hover:border-white p-2 cursor-pointer">
          <p>Returns</p>
          <p className="font-bold">& Orders</p>
        </div>
        <div className="relative text-white hover:border hover:border-white p-2 rounded cursor-pointer">
          <Link to="/cart" className="flex items-center text-lg">
            🛒<span className="ml-1">Cart</span>
          </Link>
          <div className="bg-orange-500 h-5 w-5 -top-2 left-6 rounded-full absolute flex items-center justify-center text-xs font-bold">
            {cartquantity}
          </div>
        </div>
      </div>
      <div className="w-full h-[50px] bg-gray-800 text-white text-sm flex items-center px-6 gap-4">
        <span className="hover:underline cursor-pointer">All</span>
        <span className="hover:underline cursor-pointer">Today's Deals</span>
        <span className="hover:underline cursor-pointer">Customer Service</span>
        <span className="hover:underline cursor-pointer">Gift Cards</span>
        <span className="hover:underline cursor-pointer">Books</span>
        <span className="hover:underline cursor-pointer">computer</span>
        <span className="hover:underline cursor-pointer">Electronics</span>
        <span className="hover:underline cursor-pointer">Sell</span>
      </div>
    </div>
  );
}

export default Navbar;
