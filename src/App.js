import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PaySlipGenerator from "./pages/PaySlipGenerator";
import OfferLetter from "./pages/OfferLetter";
import AppointmentLetter from "./pages/AppointmentLetter";
import RelievingLetter from "./pages/RelievingLetter";
import AppraisalLetter from "./pages/AppraisalLetter";
import IncrementLetter from "./pages/IncrementLetter";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PaySlipGenerater" element={<PaySlipGenerator />} />
        <Route path="/offer-letter" element={<OfferLetter />} />
        <Route path="/appointment-letter" element={<AppointmentLetter />} />
        <Route path="/relieving-letter" element={<RelievingLetter />} />
        <Route path="/appraisal-letter" element={<AppraisalLetter />} />
        <Route path="/increment-letter" element={<IncrementLetter />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center">
              <h1 className="text-2xl">Page not found</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
