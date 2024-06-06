const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // You can change the port number if needed

// Serve static files from the "public" directory
app.use(express.static('.'));

// Route to serve home.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});