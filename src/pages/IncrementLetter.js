import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../assets/styles/ButtonStyles.css";
import "../assets/styles/IncrementLetter.css";

function IncrementLetter() {
  const containerRef = React.useRef(null);

  const handleDownload = async () => {
    if (!containerRef.current) return;

    const pdf = new jsPDF("p", "mm", "a4");
    const elements = containerRef.current.getElementsByClassName(
      "increment-letter-page"
    );

    for (let i = 0; i < elements.length; i++) {
      const canvas = await html2canvas(elements[i]);
      const imgData = canvas.toDataURL("image/jpeg", 1.0);

      if (i > 0) {
        pdf.addPage();
      }

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
    }

    pdf.save("increment-letter.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[210mm] mx-auto">
        <div className="flex justify-between items-center mb-12 mt-6">
          <div className="ml-4">
            <Link to="/" className="back-link">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
          </div>
          <div className="mr-4">
            <button onClick={handleDownload} className="download-btn">
              <Download size={20} />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        <div ref={containerRef}>
          <div className="increment-letter-page">
            <div className="letter-header">
              <div className="logo-section">
                <img src="/kotak-logo.png" alt="Kotak" className="kotak-logo" />
                <img
                  src="/praise-logo.png"
                  alt="Praise"
                  className="praise-logo"
                />
              </div>
              <p className="reference-number">Praise2021-22/KMBL191780</p>
            </div>

            <div className="letter-content">
              <p className="employee-name">Dear Viraj Kadam,</p>

              <p className="achievement-text">
                Based on the PRAISE exercise for FY 2021-22, you are an{" "}
                <strong>Achiever</strong>.
              </p>

              <p className="compensation-text">
                Your compensation with the break up w.e.f. 01-Apr-2022 or date
                of confirmation, whichever is later, is given in Annexure I. CTC
                structure has been revised in line with the latest policies and
                regulations.
              </p>

              <p className="bonus-intro">
                In line with our philosophy of rewarding performance, basis your
                FY 2021-22 performance you will be eligible for following annual
                variable pay: (payable basis policy guidelines on the next page)
              </p>

              <div className="bonus-table">
                <table>
                  <thead>
                    <tr>
                      <th>Bonus Instrument</th>
                      <th>Amount/Unit</th>
                      <th>Vesting Schedule</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cash Bonus</td>
                      <td>Rs. 72,788/-</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="regards">Warm Regards,</p>

              <div className="signature-section">
                <p className="signatory-name">Sukhjit S Pasricha</p>
                <p className="signatory-designation">President & Group CHRO</p>
              </div>
            </div>
          </div>

          {/* Page 2 - Policy Guidelines */}
          <div className="increment-letter-page">
            <div className="letter-header">
              <div className="logo-section">
                <img src="/kotak-logo.png" alt="Kotak" className="kotak-logo" />
                <img
                  src="/praise-logo.png"
                  alt="Praise"
                  className="praise-logo"
                />
              </div>
            </div>

            <div className="policy-content">
              <h2 className="policy-title">Policy Guidelines</h2>

              <div className="policy-section">
                <h3>Schedule of Payment:</h3>
                <ul className="policy-list">
                  <li>
                    If you are required to do role specific certification and if
                    you have not yet cleared the certification, your bonus will
                    be on hold till the certification is cleared
                  </li>
                  <li>
                    If you were on sabbatical leave in FY22, your bonus is
                    pro-rated for the duration you were working
                  </li>
                </ul>
              </div>

              <div className="policy-section">
                <h3>General Guidelines:</h3>
                <ol className="policy-list alphabetical">
                  <li>
                    You will have to be on the rolls of the organization and not
                    serving notice period on the date of revised salary/ annual
                    bonus payout as mentioned in this letter
                  </li>
                  <li>
                    All payments are subject to applicable tax, including Income
                    Tax and statutory rules (eg. Above amount covers bonus under
                    payment of bonus act)
                  </li>
                  <li>
                    The payment will also be guided by the compensation policy
                    approved by the Board from time to time.
                    <ul className="sub-list">
                      <li>
                        Malus and clawback criteria will be applicable as per
                        the compensation policy approved by the Board from time
                        to time.
                      </li>
                      <li>
                        Refer to Compensation Policy for the Bank under Kotak
                        WorkLife App &gt; All Modules &gt; HR Policies &gt;
                        Rewards &gt; Compensation Policy. It is imperative that
                        you go through the policy and understand the clauses
                        applicable for your role.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          {/* Page 3 - Annexure I */}
          <div className="increment-letter-page">
            <div className="letter-header">
              <div className="logo-section">
                <img src="/kotak-logo.png" alt="Kotak" className="kotak-logo" />
                <img
                  src="/praise-logo.png"
                  alt="Praise"
                  className="praise-logo"
                />
              </div>
            </div>

            <h2 className="annexure-title">Annexure I</h2>

            <div className="employee-details">
              <table className="details-table">
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>Viraj Kadam</td>
                  </tr>
                  <tr>
                    <td>Designation</td>
                    <td>Manager</td>
                  </tr>
                  <tr>
                    <td>Role</td>
                    <td>
                      Business Intelligence Unit-HD & SUPPORT-BIU (Business
                      Intelligence Unit)
                    </td>
                  </tr>
                  <tr>
                    <td>State</td>
                    <td>Maharashtra</td>
                  </tr>
                  <tr>
                    <td>With effect</td>
                    <td>
                      April 1, 2022, or date of confirmation, whichever is
                      later.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="compensation-structure">
              <table className="compensation-table">
                <thead>
                  <tr>
                    <th>Components</th>
                    <th>P.M.</th>
                    <th>P.A.</th>
                    <th>Frequency</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      a. Basic
                      <br />
                      Basic Salary
                    </td>
                    <td>45,742</td>
                    <td>5,48,900</td>
                    <td>Monthly</td>
                    <td>
                      Minimum 40% of Total Pay excluding Section 8 allowances
                      (Perquisites) & Additional HRA (if any)
                      <br />
                      Upto 50% of Basic Salary
                    </td>
                  </tr>
                  <tr>
                    <td>
                      b. Housing
                      <br />
                      House Rent Allowance
                      <br />
                      Fitness Allowance
                    </td>
                    <td>
                      22,871
                      <br />
                      1,000
                    </td>
                    <td>
                      2,74,450
                      <br />
                      12,000
                    </td>
                    <td>
                      Monthly
                      <br />
                      Monthly
                    </td>
                    <td>
                      <br />
                      Amount paid per month under Health and Fitness related
                      Benefit. You can enter your fitness goals by visiting on
                      Kotak's site - Health is the career vitality
                    </td>
                  </tr>
                  <tr>
                    <td>
                      c. Allowances and Benefits
                      <br />
                      Professional Allowance
                    </td>
                    <td>37,052</td>
                    <td>4,44,630</td>
                    <td>Monthly</td>
                    <td>This is a supplementary allowance</td>
                  </tr>
                  <tr>
                    <td>
                      d. Insurance Premiums
                      <br />
                      Kotak Term Life+ GPA
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      Mediclaim
                    </td>
                    <td>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </td>
                    <td>
                      4,600
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      7,750
                    </td>
                    <td>
                      Annual
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      Annual
                    </td>
                    <td>
                      This denotes average premium for the grade
                      <br />
                      Life Insurance Policy- 1.5 times of CTC or grade-wise
                      limit whichever is higher; Group
                      <br />
                      Personal Accident Policy- Rs. 2 cr or 1 time CTC,
                      whichever is higher
                      <br />
                      Refer Term Life Insurance Policy & Group Personal Accident
                      Policy
                      <br />
                      <br />
                      This denotes average Premium for covering
                      <br />
                      You and dependents (partner and 2 children)
                      <br />
                      for 4 Lakhs family floater. Additional cover of
                      <br />
                      3Lakhs for employees post completion of 5<br />
                      years.
                      <br />
                      You will be covered by default, coverage of the
                      <br />
                      dependents as per your declaration. Policy is
                      <br />
                      effective from date of joining.
                      <br />
                      More details in Kotak Mediclaim Policy.
                      <br />
                      Voluntary top-up and parents policies cover
                      <br />
                      available at employee cost
                    </td>
                  </tr>
                  <tr>
                    <td>
                      e. Retirals
                      <br />
                      Contribution to Provident Fund
                      <br />
                      Contribution to Gratuity Fund
                    </td>
                    <td>
                      <br />
                      <br />
                    </td>
                    <td>
                      65,868
                      <br />
                      26,402
                    </td>
                    <td>
                      Annual
                      <br />
                      Annual
                    </td>
                    <td>
                      Company's contribution towards PF @ 12% of Basic
                      <br />
                      This amount is 4.81% of Basic Salary.
                      <br />
                      However gratuity is payable after 5 years of continuous
                      service as per The Payment of Gratuity Act.
                      <br />
                      As per current gratuity policy of the company
                      <br />
                      employee is not entitled to any gratuity on separation
                      even if length of service is less than 5 years.
                    </td>
                  </tr>
                  <tr>
                    <td>f. Total Fixed Pay (a+b+c+d+e)</td>
                    <td>1,06,665</td>
                    <td>7,384,600</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>g. Target variable Pay</td>
                    <td></td>
                    <td>1,38,460</td>
                    <td>Annual</td>
                    <td>
                      This is an indicative amount of your target
                      <br />
                      annual variable pay (Annual Bonus). It will
                      <br />
                      vary basis Company, Business Segment
                      <br />
                      and individual performance.
                      <br />
                      If the Rating is Higher or lower the Annual
                      <br />
                      Bonus / Incentive will be adjusted appropriately
                      <br />
                      Distribution of TVP between Cash and Non
                      <br />
                      Cash & from Cash as per the NBC approved
                      <br />
                      ratio, payable only to employees who are on
                      <br />
                      the rolls of the Company (and not resigned) at
                      <br />
                      the time of payout.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Page 4 - Annexure I Continuation */}
          <div className="increment-letter-page">
            <div className="letter-header">
              <div className="logo-section">
                <img src="/kotak-logo.png" alt="Kotak" className="kotak-logo" />
                <img
                  src="/praise-logo.png"
                  alt="Praise"
                  className="praise-logo"
                />
              </div>
            </div>

            <div className="compensation-structure continuation">
              <table className="compensation-table">
                <tbody>
                  <tr>
                    <td>Total Pay (f+g)</td>
                    <td></td>
                    <td>1,523,060</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>

              <table className="benefits-table">
                <tbody>
                  <tr>
                    <td rowSpan="2">
                      Other Benefits
                      <br />
                      Role Based
                      <br />
                      Allowances/
                      <br />
                      Benefits
                    </td>
                    <td>
                      • Shift Allowance - for employees working in shift as per
                      Shift Working policy
                      <br />
                      • Remote Working Allowance - for the roles as per Remote
                      working Policy
                      <br />
                      • Corporate Mobile SIM - for the roles as per Mobile
                      Policy
                      <br />
                      • Corporate Credit Card - In case your role and grades
                      defined as per Corporate Credit Card policy
                      <br />• Laptop/ Desktop - as per the role eligibility and
                      company policy
                    </td>
                  </tr>
                  <tr>
                    <td className="other-benefits">
                      Emergency Loan - Refer to Emergency loan policy for
                      eligibility amount and other details.
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="system-note">*System Generated Letter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncrementLetter;
