import React, { useEffect, useState } from 'react';
import Crousal from './Crousal';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Crousal />
      <div className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Deals of the Day</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col justify-between">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-contain rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">{product.title}</h3>
              <p className="text-gray-600 text-sm mb-2 truncate">{product.description}</p>
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-bold text-green-700">₹{product.price}</span>
                <span className="text-xs text-gray-500 line-through">₹{product.price + 200}</span>
              </div>
              <div className='flex flex-col gap-2'>
                <button
                onClick={() => navigate('/cart', { state: { product } })}
                className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 text-sm font-semibold rounded"
              >
                Add to Cart
              </button>
               <button
                className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 text-sm font-semibold rounded"
              >
                Buy Now
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
