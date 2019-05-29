const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(express.static(__dirname + '/../public'));



app.listen(port, () => {
  console.log(__dirname + '/../public')
  console.log(`Listening on port: ${port}`);
})