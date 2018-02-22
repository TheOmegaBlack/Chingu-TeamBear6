const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Hello world Test!',
  });
});

module.exports = app;
