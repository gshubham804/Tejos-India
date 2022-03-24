import "./App.css";
import Navbar from "./Components/Navbar/navbar.js";
import Home from './Components/Home/Home.jsx'
import Resources from './Components/Resources/Resourcesmain.jsx'
import Consulting from './Components/Consulting/Blockchainsolution'
import Blog from './Components/Blog/Blog'
import Contact from './Components/Contact/Contactmain'
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
function App() {
  return (
    <>
     <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
