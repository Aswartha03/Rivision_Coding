let fs = require('fs');
let path = require('path');

let message = process.argv[2];

if (!message) {
  console.log('Please provide a message to log.');
  process.exit(1);
}

let now = new Date();
let timestamp = now.toISOString().replace('T', ' ').split('.')[0]; 
let logEntry = `[${timestamp}] ${message}\n`;

let logFilePath = path.join(__dirname, 'logs.txt');

fs.appendFile(logFilePath, logEntry, (err) => {
  if (err) {
    console.error('Error writing to log file:', err);
    return;
  }
  console.log('Log saved successfully!');
});
