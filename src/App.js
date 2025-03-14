import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/FooterSection/Footer";
import Index from "./Pages/Index";
import Services from "./Pages/Services/Services";
import "./App.css";
import ServicesDetail from "./Pages/Services/ServicesDetail";
import Contact from "./Pages/Contact/Contact";
import Aboutus from "./Pages/OthersPages/Aboutus";
import Terms from "./Pages/OthersPages/Terms";
import Privacy from "./Pages/OthersPages/Privacy";
import Disclaimer from "./Pages/OthersPages/Disclaimer";
import Team from "./Pages/Team/Team";
import Blog from "./Pages/Blog/Blog";
import BlogDetail from "./Pages/Blog/BlogDetail";
import whatsapp from './Assets/whatsapp.png';
import Pricing from "./Pages/Pricing/Pricing";
import { countView } from "./DAL/create";
import { useEffect } from "react";
import NotFound from "./Components/NotFound/NotFound";


function App() {
  useEffect(() => {
    postViewcount();
  }, []); 

  const postViewcount = async () => {
   
   await countView();
     
   
  };
  return (
    <Router>
      <Header />
 
      <a
              href="http://wa.me/923007044566"
              target="_blank"
              rel="noopener noreferrer"
            >
      <img className="whatsappimg" src={whatsapp} alt="contact"/></a>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:name" element={<ServicesDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:title" element={<BlogDetail />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
