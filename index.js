const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './views');

// Route to display the form
app.get('/', (req, res) => {
  res.render('form');
});

// Route to set cookies
app.post('/set-cookies', (req, res) => {
  const { name, age } = req.body;
  res.cookie('name', name, { maxAge: 24 * 60 * 60 * 1000 });
  res.cookie('age', age, { maxAge: 24 * 60 * 60 * 1000 });
});

// Route to display cookies
app.get('/display', (req, res) => {
  const name = req.cookies.name;
  const age = req.cookies.age;
  res.render('display', { name, age });
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
