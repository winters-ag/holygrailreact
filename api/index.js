var express   = require('express');
const path    = require('path');
var app       = express();
var redis     = require('redis');
var client    = redis.createClient(6379, '127.0.0.1');

var port = 4000;

app.use(express.static(path.join(__dirname, '../Client/build')));

var client = redis.createClient({
  legacyMode: true
});

client.connect('error', err => {
  console.log('Redis err')
  console.log(err)
 })

//init values
 function initialize() {


  client.mSet("header", 0, "left", 0, "article", 0, "right", 0, "footer", 0);

  client.mGet(
    ["header", "left", "article", "right", "footer"],
    function (err, value) {
      console.log(value);
    }
  );
} 
initialize();

function data(){
  return new Promise((resolve, reject) => {
    client.mGet(['header','left','article','right','footer'],
      function(err, value) {
        const data = {
          'header':Number(value[0]),
          'left':Number(value[1]),
          'article':Number(value[2]),
          'right':Number(value[3]),
          'footer':Number(value[4]),
        };
        err ? reject(null) : resolve(data);
      }
    );
  });
}

app.get('/data',function(req,res) {
  data()
    .then( data => {
      console.log(data);
      res.send(data);
    });
});

app.get('/update/:key/:value', function(req, res) {
  const key = req.params.key;
  let value = Number(req.params.value);
  client.get(key, function(err, reply){

    //new value
    value = Number(reply) + value;
    client.set(key,value);

    //return data to client
    data()
      .then(data => {
        console.log(data);
        res.send(data);
      });
  });
});




app.listen(port, function(){
  console.log(`Running on port: ${port}`)
})