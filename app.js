//imports
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));


app.get('', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// listen on port 3000
app.listen(port, () => console.info(`listening on port ${port}`));