// src/server/serverFunctions.ts

function getSheetNames() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = spreadsheet.getSheets();
  const sheetNames = sheets.map((sheet) => sheet.getName());
  return sheetNames;
}

function generateEcoReport(parameters) {
  // 1. Fetch data from Google Sheet (or other sources)
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(parameters.sheetName);
  const data = sheet.getRange(parameters.range).getValues(); 

  // 2. Apply filters and calculations based on parameters
  const { startDate, endDate } = parameters; 
  const filteredData = data.filter((row) => {
    const date = new Date(row[0]); // Assuming the date is in the first column (index 0)
    return date >= new Date(startDate) && date <= new Date(endDate);
  });

  // 3. Generate report content (e.g., HTML, plain text, or PDF)
  let reportHtml = `<h1>Eco Report</h1>`;
  reportHtml += `<h2>Data from sheet: ${parameters.sheetName}</h2>`;
  reportHtml += `<h3>Date range: ${startDate} to ${endDate}</h3>`;
  reportHtml += `<table><thead><tr><th>Date</th><th>Value</th></tr></thead><tbody>`;
  filteredData.forEach((row) => {
    reportHtml += `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`; // Assuming the value is in the second column (index 1)
  });
  reportHtml += `</tbody></table>`;

  // 4. Return the report content
  return reportHtml; 
}

function saveReportToDrive(reportData) {
  // 1. Create a new Google Doc
  const doc = DocumentApp.create('Eco Report');

  // 2. Get the body of the document
  const body = doc.getBody();

  // 3. Append the report data to the document (assuming reportData is HTML)
  body.appendParagraph(reportData); 

  // (Optional) You can further format the report within the Google Doc here

  // 4. Save the document
  doc.saveAndClose(); 
}
