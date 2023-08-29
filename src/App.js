import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Styles from "classnames"
import Product from "./components/product/Product";
import { BrowserRouter as Router, 
  Route, 
  Routes 
} from "react-router-dom";
import ShoppingCart from "./components/cart/ShoppingCart";
import commerce from "./lib/commerce";
import { useState, useEffect } from "react";

function App() {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState()

  const fetchProducts = async()=>{
    const response = await commerce.products.list([]);
    setProductList(response.data)
  }

  const addToCart = async(productId, qty)=>{
    const response = await commerce.cart.add(productId, qty);
    setCart(response.cart);
    console.log("APP_Cart",response);
  }
  const fetchCart = async () =>{
    setCart(await commerce.cart.retrieve())
}

const removeFromCart =async(productId) =>{
  const response = await commerce.cart.remove(productId);
  setCart(response.cart)
}
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])


  
  return (
    <Router>
      <div className="App">
        <Header cart={cart}/>
        <Banner/>
        <Routes>
          <Route exact path="/" 
            element={<Product productList = {productList} addToCart = {addToCart}/>}>
          </Route>
          <Route exact path="/cart" element={<ShoppingCart cart={cart} removeFromCart={removeFromCart}/>}></Route>
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
