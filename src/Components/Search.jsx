import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
function Search() {
    const[searchresult,setsearchresult]=useState([]);
    const[filterdata,setfilterdata]=useState([]);
    const [params]=useSearchParams();
    const [min,setmin]=useState("");
    const [mx,setmx]=useState("");
    const[rating,setrating]=useState("");
    const query=params.get("q");
    const searchdata= async ()=>{
        try{
            const res= await  fetch(`https://dummyjson.com/products/search?q=${query}`);
            const data= await res.json();
            setsearchresult(data.products);
            setfilterdata(data.products)
        }
        catch(e){
            console.log("error");
        }
    }
    useEffect(()=>{
    searchdata();
    },[query])
    useEffect(()=>{
      if (searchresult.length === 0) return;
      const minValue = Number(min);
  const maxValue = Number(mx);
  const ratingval=Number(rating);
  let filterd=searchresult;
      if(min!=="" && !isNaN(minValue)){
        filterd=filterd.filter((e)=>e.price>=minValue)
      }
      if(mx!=="" && !isNaN(maxValue)){
        filterd=filterd.filter((e)=>e.price<=maxValue)
      }
      if(ratingval!=="" && !isNaN(ratingval)){
        filterd=filterd.filter((e)=>e.rating>=ratingval)
      }
      setfilterdata(filterd);
    },[min,mx,searchresult,rating])
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Search Results for "{query}"</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4 border rounded-lg p-4 shadow-md bg-white">
          <h3 className="text-lg font-semibold mb-2">Filters</h3>
          <div className="mb-4">
            <label className="block font-medium mb-1">Min Price</label>
            <input
              type="number"
              value={min}
              onChange={(e) => setmin(e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Max Price</label>
            <input
              type="number"
              value={mx}
              onChange={(e) => setmx(e.target.value)}
              className="w-full border p-2 rounded"
            />
          </div>
          <div className="mb-4">
    <label className="block font-medium mb-1">Rating</label>
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <button
          key={i}
          className={`text-2xl ${i < rating ? "text-yellow-500" : "text-gray-300"}`}
          onClick={() => setrating(i + 1)} 
        >
          {i < rating ? "★" : "☆"}
        </button>
      ))}
    </div>
  </div>
          <button
            onClick={() => {
              setmin("");
              setmx("");
              setrating("");
            }}
            className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded hover:bg-yellow-400"
          >
            Reset Filters
          </button>
        </div>
        <div className="flex-1">
          {filterdata.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filterdata.map((item) => (
                <div key={item.id} className="border rounded-lg p-4 shadow-md bg-white">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-40 w-full mb-2 rounded"
                  />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description.slice(0, 60)}...</p>
                  <p className="text-green-600 font-bold mt-2">${item.price}</p>
                  <p className="text-yellow-600 text-sm">⭐ {item.rating}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No products found for "{query}"</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
