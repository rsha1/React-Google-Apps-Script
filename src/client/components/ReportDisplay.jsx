// src/client/components/ReportDisplay.jsx
import React from 'react';
import SaveToGoogleDrive from './SaveToGoogleDrive'; // Import the SaveToGoogleDrive component

function ReportDisplay({ reportData }) {
  if (!reportData) {
    return <div>No report generated yet.</div>;
  }

  return (
    <div>
      <h2>Report</h2>
      <div dangerouslySetInnerHTML={{ __html: reportData }} />
      <SaveToGoogleDrive reportData={reportData} /> {/* Include the component */}
    </div>
  );
}

export default ReportDisplay;
