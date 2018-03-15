const express = require('express');
const app = express();

app.set('view engine', 'ejs');

// ROUTES
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/friends', (req, res) => {
  res.render('friends');
});
// Server port config
app.listen(3000, () => {
  console.log('Server STARTED');
});
