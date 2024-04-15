import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar2 from './component/Navbar2.js';
import Footer1 from './component/Footer1.js';
import Home from './home.js';
import AR400 from './component/AR400.js'
import AR450 from './component/AR450.js'
import AR500 from './component/AR500.js'
import AR550 from './component/AR550.js'
import AR600 from './component/AR600.js'
import S690QL from './component/S690QL.js'
import Mining from './component/Mining.js'
import Consultation from './component/Consultation.js'
import Agriculture from './component/Agriculture.js';
import ProductItems from './component/ProductItems.js';
import ProductItems1 from './component/ProductItems1.js';
import ProductItems4 from './component/ProductItems4.js';
import ProductItems3 from './component/ProductItems2.js';
import About from './component/About.js';
import RfQ from './component/RfQ.js';
import Construction from './component/construction.js';
import Forestry from './component/Forestry.js'
import Quarry from './component/Quarry.js';
import Roadbuilding from './component/Roadbuilding.js';
import Recycling from './component/Recycling.js';
import Services from './component/Services.js';
import { Toaster } from 'react-hot-toast';
import './Home.css'

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(true);


  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };
  return (

    <Router>

      <div className="App">

        <Navbar2 />


        <Routes>


          <Route exact path="/" element={<Home />} />
          <Route path="/products/*" element={<ProductItems />} />
          <Route path="/plate" element={<ProductItems />} />
          <Route path="/CRGO" element={<ProductItems1 />} />
          <Route path="/Stainsteel" element={<ProductItems4 />} />
          <Route path="/Services" element={<Services />} />


          <Route path="/plate/AR400" element={<AR400 />} />
          <Route path="/plate/S690QL Grade" element={<S690QL />} />
          <Route path="/plate/AR450" element={<AR450 />} />
          <Route path="/plate/AR500" element={<AR500 />} />
          <Route path="/plate/AR600" element={<AR600 />} />
          <Route path="/Machine Designing" element={<Services />} />
          <Route path="/Consultation Services" element={<Consultation />} />
          <Route path="/plate/AR550" element={<AR550 />} />

          <Route path="/Insert" element={<ProductItems3 />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/RfQ" element={<RfQ />} />
          <Route path="/Construction" element={<Construction />} />
          <Route path="/Forestry" element={<Forestry />} />

          <Route path="/Agriculture" element={<Agriculture />} />

          <Route path="/Roadbuilding" element={<Roadbuilding />} />
          <Route path="/Construction/Quarry" element={<Navigate to="/Quarry" />} />
          <Route path="/Construction/Forestry" element={<Navigate to="/Forestry" />} />
          <Route path="/Construction/Agriculture" element={<Navigate to="/Agriculture" />} />
          <Route path="/AR Steel Plates" element={<Navigate to="/Plate" />} />
          <Route path="/CRGO Coils" element={<Navigate to="/CRGO" />} />
          <Route path="/Quarry/Agriculture" element={<Navigate to="/Agriculture" />} />
          <Route path="/Roadbuilding/Agriculture" element={<Navigate to="/Agriculture" />} />
          <Route path="/Roadbuilding/Forestry" element={<Navigate to="/Forestry" />} />
          <Route path="/Recycling/Forestry" element={<Navigate to="/Forestry" />} />
          <Route path="/Mining/Forestry" element={<Navigate to="/Forestry" />} />
          <Route path="/Quarry/Forestry" element={<Navigate to="/Forestry" />} />
          <Route path="/Mining/Agriculture" element={<Navigate to="/Agriculture" />} />
          <Route path="/Recycling/Agriculture" element={<Navigate to="/Agriculture" />} />

          <Route path="/Quarry" element={<Quarry />} />
          <Route path="/Mining" element={<Mining />} />
          <Route path="/Recycling" element={<Recycling />} />
          {/* Redirect for /Construction */}
          <Route path="/Construction/Construction" element={<Navigate to="/Construction" />} />

          <Route path="/Recycling/Construction" element={<Navigate to="/Construction" />} />
          <Route path="/Forestry/Construction" element={<Navigate to="/Construction" />} />
          <Route path="/Agriculture/Construction" element={<Navigate to="/Construction" />} />
          <Route path="/Forestry/Mining" element={<Navigate to="/Mining" />} />
          <Route path="/Construction/Mining" element={<Navigate to="/Mining" />} />
          <Route path="/Recycling/Mining" element={<Navigate to="/Mining" />} />
          <Route path="/Agriculture/Mining" element={<Navigate to="/Mining" />} />
          <Route path="/Agriculture/Agriculture" element={<Navigate to="/Agriculture" />} />
          <Route path="/Agriculture/Recycling" element={<Navigate to="/Recycling" />} />
          <Route path="/Agriculture/Quarry" element={<Navigate to="/Quarry" />} />
          <Route path="/Forestry/Quarry" element={<Navigate to="/Quarry" />} />
          <Route path="/Agriculture/Roadbulding" element={<Navigate to="/Roadbulding" />} />
          <Route path="/Agriculture/Mining" element={<Navigate to="/Mining" />} />
          <Route path="/Agriculture/Roadbuilding" element={<Navigate to="/Roadbuilding" />} />
          <Route path="/Forestry/Roadbuilding" element={<Navigate to="/Roadbuilding" />} />

          <Route path="/Construction/Quarry" element={<Navigate to="/Quarry" />} />

          <Route path="/Recycling/Quarry" element={<Navigate to="/Quarry" />} />
          <Route path="/Construction/Roadbuilding" element={<Navigate to="/Roadbuilding" />} />
          <Route path="/Quarry/Quarry" element={<Navigate to="/Construction" />} />
          <Route path="/Quarry/Construction" element={<Navigate to="/Construction" />} />
          <Route path="/Quarry/Mining" element={<Navigate to="/Mining" />} />
          <Route path="/Recycling/Recycling" element={<Navigate to="/Mining" />} />
          <Route path="/Quarry/Roadbuilding" element={<Navigate to="/Roadbuilding" />} />
          <Route path="/Quarry/Recycling" element={<Navigate to="/Recycling" />} /
          >
          <Route path="/Construction/Recycling" element={<Navigate to="/Recycling" />} />
          <Route path="/Roadbuilding/Roadbuilding" element={<Navigate to="/Roadbuilding" />} />
          <Route path="/Roadbuilding/Quarry" element={<Navigate to="/Quarry" />} />
          <Route path="/Roadbuilding/Recycling" element={<Navigate to="/Recycling" />} />
          <Route path="/Recycling/Roadbuilding" element={<Navigate to="/Roadbuilding" />} />
          <Route path="/Recycling/Mining" element={<Navigate to="/Mining" />} />
          <Route path="/Mining/Recycling" element={<Navigate to="/Recycling" />} />
          <Route path="/Forestry/Recycling" element={<Navigate to="/Recycling" />} />
          <Route path="/Forestry/Forestry" element={<Navigate to="/Forestry" />} />
          <Route path="/Agriculture/Forestry" element={<Navigate to="/Forestry" />} />
          <Route path="/Forestry/Agriculture" element={<Navigate to="/Agriculture" />} />
          <Route path="/Roadbuilding/Construction" element={<Navigate to="/Construction" />} />
          <Route path="/Roadbuilding/Mining" element={<Navigate to="/Mining" />} />
          <Route path="/Mining/Mining" element={<Navigate to="/Mining" />} />
          <Route path="/Mining/Construction" element={<Navigate to="/Construction" />} />
          <Route path="/Mining/Quarry" element={<Navigate to="/Quarry" />} />
          <Route path="/Mining/Roadbuilding" element={<Navigate to="/Roadbuilding" />} />


        </Routes>

        {/* <div className="chatbot-container" style={{ width: chatbotSize.width }}>
          {isChatbotOpen && (
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/J4s799dY8LTqVwkFaDqLT"
              title="Chatbot"
              width="100%"
              style={{ height: '400px', minHeight: '400px' }} // Adjust the height as needed
              frameBorder="0"
            ></iframe>

          )}
        </div>
        <button className="toggle-button" onClick={toggleChatbot}>
          {isChatbotOpen ? 'Close Chatbot' : 'Open Chatbot'}
        </button> */}

        <Toaster />

        <Footer1 />
      </div>

    </Router>
  );
}

export default App;
