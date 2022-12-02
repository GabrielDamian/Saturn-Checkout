import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import Categories from './pages/Categories';
import ProductPage from "./pages/ProductPage";
import './App.css';
import CartPage from "./pages/CartPage";
import SuccessPayment from "./pages/SuccessPayment";
import Despre from "./pages/Despre";
import Contact from "./pages/Contact";
import Termeni from "./pages/Termeni";
import PoliticaCookies from "./pages/PoliticaCookies";
import PoliticaRetur from "./pages/PoliticaRetur";
import PoliticaConfidentialitate from "./pages/PoliticaConfidentialitate";

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
          <Route exact path="/despre" element={<Despre/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/product" element={<ProductPage/>}/>
          <Route exact path="/checkout" element={<CartPage/>}/>
          <Route exact path="/success" element={<SuccessPayment/>}/>
          {/* Legal terms */}
          <Route exact path="/termeni-si-conditii" element={<Termeni/>}/>
          <Route exact path="/politica-de-utilizare-cookies" element={<PoliticaCookies/>}/>
          <Route exact path="/politica-de-retur" element={<PoliticaRetur/>}/>
          <Route exact path="/politica-de-confidentialitate" element={<PoliticaConfidentialitate/>}/>
          
          </Routes>
    </Router>
  );
}

export default App;
