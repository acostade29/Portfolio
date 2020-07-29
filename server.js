const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');
const favicon = require('serve-favicon');

require('dotenv').config();

app.use(express.json());

// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(port, ()=> {
    console.log(`Express is listening on port ${port}.`)
});