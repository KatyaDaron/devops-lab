const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static(`${__dirname}`))

const questions = ['What is your name?', 'What is your favorite color?', 'What is your favorite food?'];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/', (req, res) => {
    res.send(questions);
  });

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
