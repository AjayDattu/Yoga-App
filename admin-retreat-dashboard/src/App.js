import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Instructors from "./pages/Instructor";
import Courses from "./pages/Courses";
import Accommodations from "./pages/Accomudations";
import Food from "./pages/Food";
import Contactus from "./pages/Contactus";
import Instructor from "./pages/Instructor";

const App = () => {
  
  return (
    <Router>
      <div className="root flex flex-col">
        <Navbar />
        <div className="content flex-1 p-6">
          <Routes>
            <Route path="/instructors" element={<Instructors/>} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/accommodations" element={<Accommodations />} />
            <Route path="/food" element={<Food />} />
            <Route path="/contact" element={<Contactus/>}/>
            <Route path="/" element={<Instructor />} /> {/* Default route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
