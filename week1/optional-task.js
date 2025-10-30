const fs = require('fs');
const os = require('os');

// Collect OS details
const osInfo = `
Hostname: ${os.hostname()}
Platform: ${os.platform()}
CPU Info: ${os.cpus().length} cores
`;

// Write OS info into a new file
fs.writeFile('system-info.txt', osInfo, (err) => {
  if (err) {
    console.error('❌ Error writing system-info.txt:', err);
  } else {
    console.log('✅ System information written to system-info.txt');
  }
});
