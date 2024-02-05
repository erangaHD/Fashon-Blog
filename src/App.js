import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Details from "./Components/Details/Details";

function App() {
  return (
    
    <>
    <Navbar/>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/details" element={<Details/>} />
    </Routes>
    </BrowserRouter>

    
    <Footer/>
    </>
    
  );
}

export default App;
