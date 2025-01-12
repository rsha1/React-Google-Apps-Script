// src/client/components/ReportConfiguration.jsx
import React, { useState } from 'react';

function ReportConfiguration({ onConfigureReport }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  // Add more configuration options as needed (e.g., filters, metrics)

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleConfigure = () => {
    onConfigureReport({ startDate, endDate }); // Pass configuration data
  };

  return (
    <div>
      <h2>Configure Report</h2>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input type="date" id="startDate" value={startDate} onChange={handleStartDateChange} />
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label>
        <input type="date" id="endDate" value={endDate} onChange={handleEndDateChange} />
      </div>
      {/* Add more configuration inputs here */}
      <button onClick={handleConfigure}>Configure</button>
    </div>
  );
}

export default ReportConfiguration;
