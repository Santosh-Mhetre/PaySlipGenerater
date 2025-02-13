import React from "react";
import { Download } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";
import "../assets/styles/OfferLetter.css";
import { ArrowLeft } from "lucide-react";
import "../assets/styles/ButtonStyles.css";

function OfferLetter() {
  const containerRef = React.useRef(null);

  const handleDownload = async () => {
    if (!containerRef.current) return;

    const pdf = new jsPDF("p", "mm", "a4");
    const elements =
      containerRef.current.getElementsByClassName("offer-letter-page");

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

    pdf.save("offer-letter.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-[210mm] mx-auto">
        <div className="flex justify-between items-center mb-12 mt-6">
          <div className="ml-4">
            <Link
              to="/"
              className="back-link flex items-center px-5 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 group"
            >
              <ArrowLeft className="h-5 w-5 mr-2 text-gray-500 group-hover:text-gray-700 transform group-hover:-translate-x-1 transition-all" />
              Back to Home
            </Link>
          </div>
          <div className="mr-4">
            <button
              onClick={handleDownload}
              className="download-btn flex items-center px-5 py-2.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 active:bg-indigo-800 shadow-sm hover:shadow transition-all duration-200"
            >
              <Download
                size={20}
                className="mr-2 transform group-hover:translate-y-0.5"
              />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        <div ref={containerRef} className="bg-white rounded-lg shadow-sm">
          {/* Page 1 - Terms and Conditions */}
          <div className="offer-letter-page page-1">
            <div className="letter-header">
              <div className="company-info">
                <h1 className="company-name">
                  MYCLAN SERVICES PRIVATE LIMITED
                </h1>
                <p className="company-address">
                  Office No -309, 3<sup>rd</sup> Floor, Navale Icon, Near Navale
                  Bridge, Narhe
                  <br />
                  Pune - 411041, (Maharashtra) INDIA.
                </p>
              </div>
              <img
                src="/myclan-logo.png"
                alt="Company Logo"
                className="company-logo"
              />
            </div>

            <h2 className="letter-title">Joining Cum Appointment Letter</h2>

            <div className="letter-content">
              <p className="date">Date: {new Date().toLocaleDateString()}</p>
              <p className="employee-name">Dear [Employee Name],</p>

              <p className="letter-paragraph">
                We pleased in appointing you as Software Engineer in MyClan
                Services Pvt. Ltd., at our Office in our organization, effective
                from 14-Jun-2021 on the following terms and conditions:
              </p>

              <p className="letter-paragraph">
                You will be placed in the appropriate responsibility level of
                the Company, and will be entitled to compensation (salary and
                other applicable benefits) as discussed. Compensation will be
                governed by the rules of the Company on the subject, as
                applicable and/or amended hereafter.
              </p>

              <p className="letter-paragraph">
                You will be eligible to the benefits of the Company's Leave
                Rules on your confirmation in the Company's Service as
                discussed. During the period of your employment you will devote
                full time to the work of the Company. Further, you will not take
                any other employment or assignment or any office honorary or for
                any consideration in cash or in kind or otherwise, without the
                prior written permission of the Company.
              </p>

              <p className="letter-paragraph">
                You will be on a Probation period for the Three months based on
                your performance. During the probation period your services can
                be terminated with seven day's notice on either side and without
                any reasons whatsoever. If your services are found satisfactory
                during the probation period, you will be confirmed in the
                present position and thereafter your services can be terminated
                on one month's notice on either side. The period of probation
                can be extended at the discretion of the Management and you will
                continue to be on probation till an order of confirmation has
                been issued in writing.
              </p>

              <p className="letter-paragraph">
                Your salary package will be Rs. 375000/- (Three Lakhs and
                Seventy Five Thousand Rupees Only) and no other allowance is
                provided in that period.
              </p>
            </div>

            <div className="contact-section">
              <p className="font-semibold">Contact Us:</p>
              <p>Email – hr@myclanservices.co.in Contact No – 8956165171</p>
              <p>Website – www.myclanservices.co.in</p>
            </div>
          </div>

          {/* Page 2 - Additional Terms */}
          <div className="offer-letter-page page-2">
            <div className="letter-header">
              <div className="company-info">
                <h1 className="company-name">
                  MYCLAN SERVICES PRIVATE LIMITED
                </h1>
                <p className="company-address">
                  Office No -309, 3<sup>rd</sup> Floor, Navale Icon, Near Navale
                  Bridge, Narhe
                  <br />
                  Pune - 411041, (Maharashtra) INDIA.
                </p>
              </div>
              <img
                src="/myclan-logo.png"
                alt="Company Logo"
                className="company-logo"
              />
            </div>

            <h2 className="letter-title">Additional Terms</h2>

            <div className="letter-content">
              <p className="letter-paragraph">
                You will not disclose any of our technical or other important
                information which might come into your possession during the
                continuation of your service with us shall not be disclosed,
                divulged or made public by you even thereafter.
              </p>

              <p className="letter-paragraph">
                If you conceive any new or advanced method of improving designs
                / processes / formulae / systems, etc. related to the interest /
                business of the Company, such developments will be fully
                communicated to the company and will be and will remain the sole
                right/property of the Company. Also includes Technology,
                Software packages license, Company's policy, Company's platform
                & Trade Mark and Company's human assets profile. Also the usage
                of personal USB Drives and CD-ROM's are strictly prohibited.
              </p>

              <p className="letter-paragraph">
                If any declaration given or information furnished by you, to the
                Company proves to be false, or if you are found to have
                willfully suppressed any material information, in such cases you
                will be liable to removal from services without any notice.
              </p>

              <p className="letter-paragraph">
                During the probationary period and any extension thereof, your
                service may be terminated on either side by giving one week's
                notice or salary in lieu thereof. Upon confirmation the services
                can be terminated from either side by giving one-month (30 Days)
                notice or salary in lieu thereof. Upon termination of employment
                you will immediately hand over to the Company all
                correspondence, specifications, formulae, books, documents,
                market data, cost data, drawings, affects or records belonging
                to the Company or relating to its business and shall not retain
                or make copies of these items.
              </p>

              <p className="letter-paragraph">
                If at any time in our opinion which is final in this matter you
                are found non-performer or guilty of fraud, dishonest,
                disobedience, disorderly behavior, negligence, indiscipline,
                absence from duty without permission or any other conduct
                considered by us deterrent to our interest or of violation of
                one or more terms of this letter, your services may be
                terminated without notice.
              </p>

              <p className="letter-paragraph">
                You will be responsible for safekeeping and return in good
                condition and order of all Company property which may be in your
                use, custody or charge.
              </p>

              <p className="letter-paragraph">
                All legal matters are subject to Pune Jurisdiction.
              </p>

              <p className="letter-paragraph">
                Please confirm your acceptance of the appointment on the above
                terms and conditions by signing and returning this letter to us
                for our records.
              </p>

              <p className="letter-paragraph">
                Enclosure:- Attaching herewith your salary annexure.
              </p>
            </div>

            <div className="contact-section">
              <p className="font-semibold">Contact Us:</p>
              <p>Email – hr@myclanservices.co.in Contact No – 8956165171</p>
              <p>Website – www.myclanservices.co.in</p>
            </div>
          </div>

          {/* Page 3 - Salary Structure */}
          <div className="offer-letter-page page-3">
            <div className="letter-header">
              <div className="company-info">
                <h1 className="company-name">
                  MYCLAN SERVICES PRIVATE LIMITED
                </h1>
                <p className="company-address">
                  Office No -309, 3<sup>rd</sup> Floor, Navale Icon, Near Navale
                  Bridge, Narhe
                  <br />
                  Pune - 411041, (Maharashtra) INDIA.
                </p>
              </div>
              <img
                src="/myclan-logo.png"
                alt="Company Logo"
                className="company-logo"
              />
            </div>

            <h2 className="letter-title">Salary Annexure</h2>

            <div className="letter-content">
              <p className="date">Date: {new Date().toLocaleDateString()}</p>
              <p className="employee-name">Dear [Employee Name],</p>

              <p className="letter-paragraph">
                As per mentioned in the offer letter, here with attaching your
                salary structure which includes your Basic salary and other
                benefits received by you from the company.
              </p>

              <p className="font-semibold mt-4">
                Your salary structure as follows:
              </p>

              <div className="mt-4 salary-table">
                <h4 className="font-semibold mb-2">Compensation Heads</h4>
                <div className="space-y-2">
                  <div className="compensation-row">
                    <span>Basic</span>
                    <span>: 131250.00</span>
                  </div>
                  <div className="compensation-row">
                    <span>Dearness Allowance</span>
                    <span>: 112500.00</span>
                  </div>
                  <div className="compensation-row">
                    <span>Conveyance Allowance</span>
                    <span>: 75000.00</span>
                  </div>
                  <div className="compensation-row">
                    <span>Other allowance</span>
                    <span>: 56250.00</span>
                  </div>
                  <div className="compensation-row font-bold mt-4 pt-2 border-t">
                    <span>Annual Total</span>
                    <span>: 375000.00</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="letter-paragraph">
                  We expect you to keep up your performance in the years to come
                  and grow with the organization and we will expect you will get
                  happy and enthusiastic environment for work at the
                  organization.
                </p>
                <p className="mt-2">Wish you all the best.</p>
              </div>

              <div className="mt-8">
                <p>Signature</p>
                <p className="mt-4">HR Manager</p>
              </div>
            </div>

            <div className="contact-section">
              <p className="font-semibold">Contact Us:</p>
              <p>Email – hr@myclanservices.co.in Contact No – 8956165171</p>
              <p>Website – www.myclanservices.co.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferLetter;
