
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./Components/Cart"
import Home from "./Components/Home"
import Search from "./Components/Search"
import Navbar from "./Components/Navbar"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import { Provider } from 'react-redux'
import { createContext, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import store from "./Components/Store"
import { setuser as setUser } from "./Components/Createslice"
export const Appcontext = createContext();
import { addcart } from "./Components/cartslice"
function App() {
  const [user, setuser] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = () => {
      const userData = localStorage.getItem("user");
      // const cartdata=localStorage.getItem("cart");
      if (userData) {
        dispatch(setUser(JSON.parse(userData)));
      }
      // if(cartdata){
      //   dispatch(addcart(JSON.parse(cartdata)))
      // }
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
function Application() {
  console.log(store)
  return <Provider store={store}>
    <App />
  </Provider>
}


export default Application