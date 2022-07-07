import React from 'react';
import './App.css';
import { Home } from "./pages/Home/index"
import { PageFooter } from "./components/footer/PageFooter";
import { OurTeam, Services, Partners } from "../src/pages/index"
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
     <Navbar />
     
      <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/Services" element={<Services />} />
      <Route path = "/OurTeam" element={<OurTeam />} />
      <Route path = "/Partners" element={<Partners />} />
      </Routes>
      <PageFooter />
    </div>
    
  )
}

export default App;
