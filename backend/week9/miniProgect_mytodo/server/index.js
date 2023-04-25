const express = require('express');
const app = express();
const PORT = 8000;

app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello');
  });

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
  