const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the UI directory
app.use(express.static('UI'));

// Send the index.html file when a request comes to the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'UI', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
