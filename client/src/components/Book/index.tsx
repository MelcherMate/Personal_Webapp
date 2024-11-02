import "./Book.css";

function Book() {
  const handleDownload = () => {
    // Trigger the PDF download
    const link = document.createElement("a");
    link.href = "../../utils/resume/Resume.pdf";
    link.download = "Resume_Mate_Melcher.pdf";
    link.click();
  };

  return (
    <>
      <div className="book">
        <div className="cover">
          <p>Hover to open</p>
          <h2>Resume</h2>
          <p>Mate Melcher</p>
        </div>
        <div className="content">
          <img src="../../utils/img/cv.png" className="resumeIcon" />
          <button className="download-button" onClick={handleDownload}>
            Download
          </button>
        </div>
      </div>
    </>
  );
}

export default Book;
