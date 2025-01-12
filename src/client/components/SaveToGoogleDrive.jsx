// src/client/components/SaveToGoogleDrive.jsx
import React from 'react';
import Server from 'gas-client';

const { serverFunctions } = new Server();

function SaveToGoogleDrive({ reportData }) {
  const handleSave = async () => {
    try {
      await serverFunctions.saveReportToDrive(reportData); 
      // Optionally, provide feedback to the user (e.g., a success message)
    } catch (error) {
      // Handle the error (e.g., display an error message)
      console.error('Error saving report:', error);
    }
  };

  return (
    <button onClick={handleSave}>Save to Google Drive</button>
  );
}

export default SaveToGoogleDrive;
