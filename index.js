require('dotenv').config();
const express = require('express');
const os = require('os');

const threshold = parseInt(process.env.THRESHOLD) || 1000000000;
function checkDiskSpace() {
    const freeSpace = os.freemem();
    return freeSpace >= threshold;
}

const app = express();
app.get('/', (req, res) => {
    const isDiskSpaceAvailable = checkDiskSpace();
    res.send(isDiskSpaceAvailable ? 'true' : 'false');
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
