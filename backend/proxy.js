// Import necessary modules
const express = require('express');
const axios = require('axios');
const cors = require('cors');

// Create an Express app
const app = express();
const PORT = 3001;

// Middleware setup
app.use(express.json());
app.use(cors());

// Endpoint for fetching photos from external URLs
app.get('/fetch-external-photos', async (req, res) => {
  try {
    const { url } = req.query;
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const contentType = response.headers['content-type'];
    res.set('Content-Type', contentType);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching the image');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
