// Import the built-in 'fs' module
const fs = require('fs');

// --- Create and Write to a File ---
fs.writeFile('sample.txt', 'Hello, this is a test file created by Node.js!', (err) => {
  if (err) {
    console.error('Error writing sample.txt:', err);
  } else {
    console.log('✅ sample.txt has been created and data written.');
    
    // --- Read the File Content ---
    fs.readFile('sample.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
      } else {
        console.log('📄 File contents:', data);

        // --- Write Data to Another File ---
        fs.writeFile('output.txt', 'This is some sample data from sys-calls.js.', (err) => {
          if (err) {
            console.error('Error writing output.txt:', err);
          } else {
            console.log('✅ Data written to output.txt successfully.');
          }
        });
      }
    });
  }
});

// --- Import the 'os' module ---
const os = require('os');

console.log('\n=== Operating System Information ===');
console.log('Platform:', os.platform());
console.log('Hostname:', os.hostname());
console.log('Architecture:', os.arch());
console.log('CPU Cores:', os.cpus().length);
console.log('Home Directory:', os.homedir());
console.log('System Uptime (seconds):', os.uptime());
