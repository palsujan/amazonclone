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
  const [productList, setProductList] = useState()

  const fetchProducts = async()=>{
    const response = await commerce.products.list([]);
    setProductList(response.data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])
  
  return (
    <Router>
      <div className="App">
        <Header/>
        <Banner/>
        <Routes>
          <Route exact path="/" 
            element={<Product productList = {productList}/>}>
          </Route>
          <Route exact path="/cart" element={<ShoppingCart/>}></Route>
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
