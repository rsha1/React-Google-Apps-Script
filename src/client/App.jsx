import React, { useState } from 'react';
import Server from 'gas-client';

const { serverFunctions } = new Server();

function App() {
  const [reportData, setReportData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateReport = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await serverFunctions.generateEcoReport(); // You might pass parameters here
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

      <button onClick={generateReport} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate Report'}
      </button>

      {error && <div>Error: {error.message}</div>}

      {reportData && (
        <div dangerouslySetInnerHTML={{ __html: reportData }} /> 
      )}
    </div>
  );
}

export default App;import React, { useState } from 'react';
import Server from 'gas-client';

const { serverFunctions } = new Server();

function App() {
  const [reportData, setReportData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateReport = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await serverFunctions.generateEcoReport(); // You might pass parameters here
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

      <button onClick={generateReport} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate Report'}
      </button>

      {error && <div>Error: {error.message}</div>}

      {reportData && (
        <div dangerouslySetInnerHTML={{ __html: reportData }} /> 
      )}
    </div>
  );
}

export default App;
