import React, { useState } from "react";
import PaySlip from "./components/PaySlip";
import CompanyDetailsForm from "./constants/companyDetails";

function App() {
  const [companyDetails, setCompanyDetails] = useState({});

  const handleUpdateCompanyDetails = (newDetails) => {
    setCompanyDetails(newDetails);
  };

  return (
    <div className="App">
      <CompanyDetailsForm onUpdateCompanyDetails={handleUpdateCompanyDetails} />
      <PaySlip employeeData={companyDetails} companyDetails={companyDetails} />
    </div>
  );
}

export default App;
