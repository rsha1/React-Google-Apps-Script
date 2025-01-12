// src/client/components/DataSelection.jsx
import React, { useState, useEffect } from 'react';
import Server from 'gas-client';

const { serverFunctions } = new Server();

function DataSelection({ onSelectData }) {
  const [sheets, setSheets] = useState();
  const [selectedSheet, setSelectedSheet] = useState('');
  const [dataRange, setDataRange] = useState('');

  useEffect(() => {
    const fetchSheets = async () => {
      try {
        const sheetNames = await serverFunctions.getSheetNames();
        setSheets(sheetNames);
      } catch (error) {
        // Handle error fetching sheets
        console.error('Error fetching sheets:', error);
      }
    };

    fetchSheets();
  },);

  const handleSheetChange = (event) => {
    setSelectedSheet(event.target.value);
  };

  const handleDataRangeChange = (event) => {
    setDataRange(event.target.value);
  };

  const handleDataSelect = () => {
    onSelectData({ sheetName: selectedSheet, range: dataRange });
  };

  return (
    <div>
      <h2>Select Data</h2>
      <div>
        <label htmlFor="sheetSelect">Sheet:</label>
        <select id="sheetSelect" value={selectedSheet} onChange={handleSheetChange}>
          <option value="">Select a sheet</option>
          {sheets.map((sheetName) => (
            <option key={sheetName} value={sheetName}>
              {sheetName}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="dataRange">Data Range:</label>
        <input
          type="text"
          id="dataRange"
          value={dataRange}
          onChange={handleDataRangeChange}
          placeholder="e.g., A1:B10"
        />
      </div>
      <button onClick={handleDataSelect}>Select Data</button>
    </div>
  );
}

export default DataSelection;
