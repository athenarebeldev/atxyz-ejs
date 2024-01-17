const express = require('express');
const ejs = require('ejs');
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'));


// Main Links
app.get('/', (req, res) => {
  res.render('mainpage');
});

// Error Links
app.use(function(req, res, next) {
    res.status(404).redirect('/error');
});
  
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
