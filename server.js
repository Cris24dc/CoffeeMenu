const express = require("express");
const path = require("path");
const app = express();

// Define the path to your static files (the 'public' directory)
const staticPath = path.join(__dirname, "public");

// Serve the static files (index.html in this case)
app.use(express.static(staticPath));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
