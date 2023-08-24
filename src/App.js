import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Styles from "classnames"
import Product from "./components/product/Product";

function App() {
  return (
    <div className="App">
        <Header/>
        <Banner/>
        <Product/>
    </div>
  );
}

export default App;
