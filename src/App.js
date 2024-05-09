import About from "./compoenents/About";
import Navbar from "./compoenents/Navbar";
import ProductDetails from "./compoenents/ProductDetails";
import ProductsList from "./compoenents/ProductsList";
import Slider from "./compoenents/slider";
import{Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
<Navbar />
<Routes>
<Route
 path="/"
 element={
<>
<Slider/>
<ProductsList/>
</>
}
/>
<Route path="about" element={<About />}  />
<Route path="product/:productId" element={<ProductDetails/>}  />
</Routes>


    </div>
  );
}

export default App;