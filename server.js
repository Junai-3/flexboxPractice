// server.js
const express = require ('express');
const app = express();
const PORT = 3000;

// Serve static files from root
app.use (express.static('.'));

//Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)    
});