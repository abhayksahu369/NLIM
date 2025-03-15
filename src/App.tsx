import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from './sections/Hero';
import { MaintenanceView } from "./sections/Options/MaintenanceView";
import Machines from './sections/Options/Machines';
import Instructions from "./sections/Options/Instructions";

function App() {
    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
              </>
            }
          />
          <Route path="/" element={<Hero />} />
          <Route path="/machines" element={<Machines />} />
          <Route path="/maintenance-view" element={<MaintenanceView />} />
          <Route path="/instructions" element={<Instructions/>} />
          
        </Routes>
      </Router>
    );
}

export default App;