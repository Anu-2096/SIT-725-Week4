const express = require('express');
const app = express();

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});