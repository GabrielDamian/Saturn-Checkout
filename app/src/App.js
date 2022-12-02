import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import Categories from './pages/Categories';
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";
import './App.css';
import CartPage from "./pages/CartPage";
const Succes = ()=>{
  return (
    <p> 
      Plata efectuata cu succes
    </p>
  )
}

const Failure = ()=>{
  return (
    <p> 
      Problema cu efectuarea platii
    </p>
  )
}

function App()
{
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/categories" element={<Categories/>}/>
          <Route exact path="/product" element={<ProductPage/>}/>
          <Route exact path="/checkout" element={<CartPage/>}/>
          {/* <Route exact path="/success" element={<Succes/>}/> */}
          {/* <Route exact path="/cancel" element={<Failure/>}/> */}
          </Routes>
    </Router>
  );
}

export default App;
