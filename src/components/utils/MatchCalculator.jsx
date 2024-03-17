import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

const MatchCalculator = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [resume, setResume] = useState(null);
  const [matchPercentage, setMatchPercentage] = useState(null);

  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    setResume(file);
  };

  const calculateMatchPercentage = async () => {
    if (!resume || !jobDescription) return;

    const pdfDoc = await PDFDocument.load(await resume.arrayBuffer());
    const resumeText = await extractTextFromPDF(pdfDoc);
    const matchPercentage = calculatePercentageMatch(jobDescription, resumeText);
    setMatchPercentage(matchPercentage);
  };

  const extractTextFromPDF = async (pdfDoc) => {
    let text = '';
    for (let i = 0; i < pdfDoc.getPageCount(); i++) {
      const page = pdfDoc.getPage(i);
      const content = await page.getTextContent();
      content.items.forEach((item) => {
        text += item.str + ' ';
      });
    }
    return text;
  };

  const calculatePercentageMatch = (jobDescription, resumeText) => {
    const totalWords = jobDescription.split(/\s+/).length;
    const matchedWords = resumeText.match(new RegExp(jobDescription, 'gi'))?.length || 0;
    return ((matchedWords / totalWords) * 100).toFixed(2);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>Match Calculator</h1>
      <div>
        <label htmlFor="job-description">Enter Job Description:</label>
        <textarea id="job-description" rows="5" cols="50" value={jobDescription} onChange={handleJobDescriptionChange} />
      </div>
      <div>
        <label htmlFor="resume-upload" style={{ display: 'block', margin: '20px 0', fontSize: '18px', cursor: 'pointer', color: '#007bff', textDecoration: 'underline' }}>
          Click here to upload your resume
        </label>
        <input id="resume-upload" type="file" accept="application/pdf" onChange={handleUpload} style={{ display: 'none' }} />
      </div>
      <button onClick={calculateMatchPercentage} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Calculate Match Percentage</button>
      {matchPercentage !== null && (
        <div style={{ marginTop: '20px' }}>
          <p>Match Percentage: {matchPercentage}%</p>
        </div>
      )}
    </div>
  );
};

export default MatchCalculator;
