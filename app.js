const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us' });
});

/** Set the port and start the server */
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

/** Body parser */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

/** helmet */
const helmet = require('helmet');
app.use(helmet());


// Form submissions

/** Contact form submission */
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Process form data (e.g., save to database, send email, etc.)
  res.send(`Thank you, ${name}, we will get back to you soon!`);
});


// Connecting Databases