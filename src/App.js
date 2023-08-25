import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Styles from "classnames"
import Product from "./components/product/Product";
import { BrowserRouter as Router, 
  Route, 
  Routes 
} from "react-router-dom";
import ShoppingCart from "./components/cart/ShoppingCart";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Banner/>}></Route>
          <Route exact path="/cart" element={<ShoppingCart/>}></Route>
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
