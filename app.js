const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
const friends = [
  'Aaron',
  'Kartik',
  'Aruvin',
  'Anthony',
  'Damien',
];

// ROUTES
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/friends', (req, res) => {
  res.render('friends', {friends});
});

app.post('/addFriend', (req, res) => {
  const {newFriend} = req.body.newFriend;

  friends.push(newFriend);
  res.redirect();
});
// Server port config
app.listen(3000, () => {
  console.log('Server STARTED');
});
