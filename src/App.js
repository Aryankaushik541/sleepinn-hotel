import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Gallery from "./pages/gallery"; 
import Aminities from "./pages/aminities";
function App() {
  return (
    <BrowserRouter>
<Header/>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<h1>All Hotels Page</h1>} />
          <Route path="/casino-hotels" element={<h1>Casino Hotels</h1>} />
          <Route path="/extended-stay" element={<h1>Extended Stay Hotels</h1>} />
           <Route path="/resorts" element={<h1>Resorts</h1>} />
           <Route path="/gallery" element={<Gallery />} /> 
           <Route path="/aminities" element={<Aminities />} /> 
         </Routes>

      
    </BrowserRouter>
  );
}

export default App;