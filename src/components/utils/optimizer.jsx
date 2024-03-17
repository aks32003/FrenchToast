import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

const optimizer = () => {
  const [resume, setResume] = useState(null);
  const [optimizedResume, setOptimizedResume] = useState(null);

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    setResume(file);
  };

  const optimizeResume = async () => {
    if (!resume) return;

    const reader = new FileReader();
    reader.onload = async function () {
      const buffer = reader.result;
      const pdfDoc = await PDFDocument.load(new Uint8Array(buffer));
      const optimizedBuffer = await pdfDoc.save();
      const optimizedBlob = new Blob([optimizedBuffer], { type: 'application/pdf' });
      setOptimizedResume(optimizedBlob);
    };
    reader.readAsArrayBuffer(resume);
  };

  const downloadOptimizedResume = () => {
    if (optimizedResume) {
      const url = window.URL.createObjectURL(new Blob([optimizedResume]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'optimized_resume.pdf');
      document.body.appendChild(link);
      link.click();
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center' }}>Resume Uploader</h1>
      <input type="file" accept="application/pdf" onChange={handleUpload} />
      <button onClick={optimizeResume} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Optimize Resume</button>
      {optimizedResume && (
        <div style={{ marginTop: '20px' }}>
          <p>Your optimized resume is ready!</p>
          <button onClick={downloadOptimizedResume} style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Download Optimized Resume</button>
        </div>
      )}
    </div>
  );
};

export default optimizer;
