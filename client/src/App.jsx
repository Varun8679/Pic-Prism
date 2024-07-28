import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SellerDashboard from "./pages/SellerDashboard";
import BuyerDashboard from "./pages/BuyerDashboard";
import Navbar from "./componenets/Navbar";

function App() {
  return (
    <>
    
    <Navbar/>   
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/seller/profile" element={<SellerDashboard />} />
          <Route path="/buyer/profile" element={<BuyerDashboard />} />
        </Routes>
      
    </>
  );
}

export default App;