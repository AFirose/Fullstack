const fs = require('fs').promises;
const os = require('os');

async function readFileAndLogOSInfo() {
  try {
    // Step 1: Read file asynchronously
    const data = await fs.readFile('output.txt', 'utf8');
    console.log('📄 Data from output.txt:', data);

    // Step 2: Log OS information
    console.log('🖥️ OS Platform:', os.platform());
    console.log('🏠 Hostname:', os.hostname());
    console.log('⚙️ CPU Cores:', os.cpus().length);

    // Step 3: Write OS info to a new file
    const osInfo = `
Platform: ${os.platform()}
Hostname: ${os.hostname()}
CPU Cores: ${os.cpus().length}
`;
    await fs.writeFile('os-info.txt', osInfo);
    console.log('✅ OS info written to os-info.txt successfully.');
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

readFileAndLogOSInfo();
