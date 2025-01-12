// src/client/App.jsx
import React, { useState } from 'react';
import DataSelection from './components/DataSelection';
import ReportConfiguration from './components/ReportConfiguration';
import ReportDisplay from './components/ReportDisplay';
import Server from 'gas-client';

const { serverFunctions } = new Server();

function App() {
  const [reportData, setReportData] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [reportConfig, setReportConfig] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDataSelect = (data) => {
    setSelectedData(data);
  };

  const handleConfigureReport = (config) => {
    setReportConfig(config);
  };

  const generateReport = async () => {
    if (!selectedData || !reportConfig) {
      // Handle case where data or configuration is missing
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await serverFunctions.generateEcoReport({
        // Pass selectedData and reportConfig to the server-side function
        ...selectedData,
        ...reportConfig,
      });
      setReportData(response);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Eco Report Generator</h1>

      <DataSelection onSelectData={handleDataSelect} />
      <ReportConfiguration onConfigureReport={handleConfigureReport} />

      <button onClick={generateReport} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate Report'}
      </button>

      {error && <div>Error: {error.message}</div>}

      <ReportDisplay reportData={reportData} />
    </div>
  );
}

export default App;
