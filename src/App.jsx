
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Cart from "./Components/Cart"
import Home from "./Components/Home"
import Search from "./Components/Search"
import Navbar from "./Components/Navbar"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import { createContext, useEffect, useState } from "react"
export const Appcontext= createContext();
function App() {
 const[user,setuser]=useState(null);
 useEffect(() => {
  const fetchData = () => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setuser(JSON.parse(userData));
    }
  };
  fetchData();
}, []);
  return (
    <>
       <BrowserRouter>
        <Appcontext.Provider value={{ user, setuser }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Appcontext.Provider>
       </BrowserRouter>
    </>
  )
}

export default App
