import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../assets/styles/ButtonStyles.css";
import "../assets/styles/AppraisalLetter.css";

function AppraisalLetter() {
  const containerRef = React.useRef(null);

  const handleDownload = async () => {
    if (!containerRef.current) return;

    const pdf = new jsPDF("p", "mm", "a4");
    const elements = containerRef.current.getElementsByClassName(
      "appraisal-letter-page"
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

    pdf.save("appraisal-letter.pdf");
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
          <div className="appraisal-letter-page">
            <div className="letter-header">
              <div>
                <h1 className="company-name">
                  MYCLAN SERVICES PRIVATE LIMITED
                </h1>
                <p className="company-address">
                  Office No -309, 3rd Floor, Navale Icon, Near Navale Bridge,
                  Narhe
                  <br />
                  Pune - 411041, (Maharashtra) INDIA.
                </p>
              </div>
              <img
                src="/myclan-logo.png"
                alt="Myclan"
                className="company-logo"
              />
            </div>

            <h2 className="letter-title">Employee Appraisal Letter</h2>

            <div className="letter-content">
              <p className="date">Date - 08-Jul-2024</p>
              <p className="employee-name">Mr.Ashutosh Yashwant Babar,</p>
              <p className="subject">Sub: Appraisal Letter</p>

              <p className="appreciation-text">
                We would like to express our appreciation and commendation for
                all the passion and commitment you have been exhibiting in your
                existing role. In recognition of your contribution, it is our
                pleasure to award you a gross increase in your salary with
                effect from August 2024.
              </p>

              <p>Your revised salary structure as follows:</p>

              <div className="compensation-table">
                <div className="table-header">
                  <span>Compensation Heads</span>
                  <span>Compensation (In INR)</span>
                </div>
                <div className="table-row">
                  <span>Basic</span>
                  <span>157500.00</span>
                </div>
                <div className="table-row">
                  <span>Dearness Allowance</span>
                  <span>135000.00</span>
                </div>
                <div className="table-row">
                  <span>Conveyance Allowance</span>
                  <span>90000.00</span>
                </div>
                <div className="table-row">
                  <span>Other allowance</span>
                  <span>67500.00</span>
                </div>
                <div className="table-row total">
                  <span>Annual Total</span>
                  <span>450000.00</span>
                </div>
              </div>

              <p className="expectation-text">
                We expect you to keep up your performance in the years to come
                and grow with the organization. Please sign and return the
                duplicate copy in token of your acceptance, for your records.
              </p>

              <p>Wish you all the best.</p>

              <div className="signature-section">
                <p>Signature</p>

                <p>Hr Manager</p>
              </div>

              <div className="footer">
                <p className="contact-title">Contact Us:</p>
                <p>Email – hr@myclanservices.co.in Contact No – 8956165171</p>
                <p>Website – www.myclanservices.co.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppraisalLetter;
