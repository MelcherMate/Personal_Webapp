import { useState } from "react";
import "./Book.css";

function Book() {
  const [showOptions, setShowOptions] = useState(false);

  const handleDownload = (lang) => {
    const link = document.createElement("a");
    link.href =
      lang === "HU"
        ? "../../utils/resume/ResumeHU.pdf"
        : "../../utils/resume/ResumeENG.pdf";
    link.download = `Resume_Mate_Melcher_${lang}.pdf`;
    link.click();
  };

  return (
    <div className="book">
      <div className="cover">
        <p>Hover to open</p>
        <h2>Resume</h2>
        <p>Mate Melcher</p>
      </div>
      <div className="content">
        <img src="/utils/img/cv.png" className="resumeIcon" alt="Resume Icon" />
        <div
          className="download-button"
          onMouseEnter={() => setShowOptions(true)}
          onMouseLeave={() => setShowOptions(false)}
        >
          <span>Download</span>
          {showOptions && (
            <div className="download-options">
              <button onClick={() => handleDownload("HU")}>HU</button>
              <button onClick={() => handleDownload("ENG")}>ENG</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Book;
