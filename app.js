const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// Root route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Demo route
app.get('/demo', (req, res) => {
  res.send('This is a demo route!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
