import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../assets/styles/ButtonStyles.css";
import "../assets/styles/RelievingLetter.css";

function RelievingLetter() {
  const containerRef = React.useRef(null);

  const handleDownload = async () => {
    if (!containerRef.current) return;

    const pdf = new jsPDF("p", "mm", "a4");
    const elements = containerRef.current.getElementsByClassName(
      "relieving-letter-page"
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

    pdf.save("relieving-letter.pdf");
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
          <div className="relieving-letter-page">
            <div className="letter-header">
              <div className="logo-section">
                <img
                  src="/nitor-logo.png"
                  alt="Nitor"
                  className="company-logo"
                />
                <p className="brilliance">Brilliance @ work</p>
              </div>
            </div>

            <div className="letter-content">
              <p className="letter-date">13 August 2021</p>

              <h2 className="letter-title">Relieving Letter</h2>

              <p className="employee-name">Viraj Kadam</p>

              <p>Dear Viraj,</p>

              <p className="opening-para">
                We are relieving you from your duties as Senior Software
                Engineer end of the day 13 August 2021.
              </p>

              <p>
                Please note that on release from the employment with company,
                you shall continue to be bound by the obligations related to
                confidentiality, non-solicitation, intellectual property rights
                and other such commitments. A few of these are described as
                below:
              </p>

              <div className="section">
                <h3>Company Property:</h3>
                <p>
                  You certify that you do not possess any documents, maps,
                  blueprints, designs, books, manuals, software code or any
                  other material which belongs to the company or which was
                  developed by you during the course of your association. You
                  understand that either these documents or codes could be in a
                  paper format or computer storage format and you certify that
                  you do not possess them in either format and the same has been
                  handed over to the reporting Manager in the company.
                </p>
              </div>

              <div className="section">
                <h3>Non-Solicitation:</h3>
                <p>
                  You confirm that for a period of 12 months after release from
                  the association with the company, you will not solicit,
                  assist, refer, cause or force any employee of Nitor, which
                  could result either directly or indirectly in the employee
                  leaving the company.
                </p>
                <p>
                  During the course of your association with the company, you
                  have been privy to information related to the company, its
                  services, processes and systems, business transactions,
                  business plans, software products & IT infrastructure, clients
                  and their business information and other administrative and
                  organizational matters. You agree to treat this information
                  confidential after termination of your association with the
                  company and that you will not share this information by word
                  of mouth or otherwise, with any employee of the company
                  whether past or present, or any third person whether known or
                  unknown to the company and understand that you shall be liable
                  for legal action in case of breach of faith or agreement.
                </p>
              </div>

              <div className="section">
                <h3>Non-Compete:</h3>
                <p>
                  You understand, agree and acknowledge that Nitor has spent
                  substantial money, invested time and efforts over the years in
                  developing and solidifying its relationships with its
                  customers and consultants. Hence on the basis of non-compete
                  clause you hereby agree that for a period of twenty four (24)
                  months from date of relieving for any reason, whether with or
                  without good cause or for any or no cause, at your disposal or
                  at Nitor's, with or without notice, you will not compete with
                  the Nitor and its successors and assigns for all customers and
                  clients introduced by Nitor, without prior written consent
                  from Nitor.
                </p>
              </div>

              <div className="footer">
                <p>Nitor Infotech Pvt.Ltd.</p>
                <p>
                  SEZ # 2, Block Blue-04, Floor "B" Wing, Plot 3A, Embassy Tech
                  Zone,
                </p>
                <p>
                  Rajiv Gandhi Infotech Park, Phase II, Hinjewadi, Pune- 411057
                </p>
                <p>www.nitorinfotech.com | info@nitorinfotech.com</p>
              </div>
            </div>
          </div>

          <div className="relieving-letter-page">
            <div className="letter-header">
              <div className="logo-section">
                <img
                  src="/nitor-logo.png"
                  alt="Nitor"
                  className="company-logo"
                />
                <p className="brilliance">Brilliance @ work</p>
              </div>
            </div>

            <div className="letter-content">
              <p className="non-compete-continuation">
                The term "non-compete" as used herein shall mean that you shall
                not, without the prior written consent of Nitor, (i) serve as a
                contractor, partner, employee, consultant, officer, director,
                manager, agent, associate, invest, servant with greater than 5%
                or otherwise (by itself directly or indirectly, own, manage,
                operate, join, control, participate in, invest in, work or
                consult for or otherwise affiliate with) all customers and
                clients introduced by Nitor or business in competition with or
                otherwise similar to Nitor's business.
              </p>

              <p className="further-declaration">
                Furthermore, you declare that you have no further claims of
                whatsoever nature resulting from my association and or
                termination thereof, against either the company, its group
                companies, its affiliates or officers or its representatives.
              </p>

              <div className="signature-section">
                <div className="date-place">
                  <p>Date: _________________</p>
                  <p>Place: Pune</p>
                </div>

                <div className="signatures">
                  <div className="employee-sign">
                    <p>Sign</p>
                    <p className="sign-name">Viraj Kadam</p>
                  </div>

                  <div className="company-sign">
                    <p>For Nitor Infotech Pvt Ltd</p>

                    <p className="sign-name">Rohini Wagh</p>
                    <p className="designation">VP & Head – People Function</p>
                  </div>
                </div>
              </div>

              <div className="footer">
                <p>Nitor Infotech Pvt.Ltd.</p>
                <p>
                  SEZ # 2, Block Blue-04, Floor "B" Wing, Plot 3A, Embassy Tech
                  Zone,
                </p>
                <p>
                  Rajiv Gandhi Infotech Park, Phase II, Hinjewadi, Pune- 411057
                </p>
                <p>www.nitorinfotech.com | info@nitorinfotech.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelievingLetter;
