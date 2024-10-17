const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('UI'));  // Serve files from the UI directory

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/UI/index.html'));  // Adjust the path if your entry file is located elsewhere
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
