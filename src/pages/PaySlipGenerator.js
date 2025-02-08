import React, { useState } from "react";
import { Link } from "react-router-dom";
import CompanyDetailsForm from "../pages/companyDetails";
import PaySlip from "../components/PaySlip";

function PaySlipGenerator() {
  const [companyDetails, setCompanyDetails] = useState({});

  const handleUpdateCompanyDetails = (details) => {
    setCompanyDetails(details);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <Link
            to="/"
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <CompanyDetailsForm
              onUpdateCompanyDetails={handleUpdateCompanyDetails}
            />
          </div>

          {Object.keys(companyDetails).length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow">
              <PaySlip companyDetails={companyDetails} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PaySlipGenerator;
