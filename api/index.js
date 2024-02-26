var express = require('express');
const path = require('path');
var app = express();
var port = 4000;

app.use(express.static(path.join(__dirname, '../Client/build')));

app.use((req,res) => {
  res.status(200).send('Hello, world!');
});



app.listen(port, function(){
  console.log(`Running on port: ${port}`)
})