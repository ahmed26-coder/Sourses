import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav"
import Footer from "./Components/Footer"
import Home from "./Pages/Home";
import About from "./pages/About";
import Pricing from "./Pages/Pricing";
import Courses from "./Pages/Courses";
import Contact from "./Pages/Contact";


function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
