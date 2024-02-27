var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');

client.on('error', err => console.log('Redis Client Error', err));

(async function(){
  await client.connect();

  await client.set("my_key", "Hello World!");
  await client.set("header", 1);
  const value = await client.get("my_key");
  console.log(value);

  await client.mSet('header',0,'left',0,'article',0,'right',0,'footer',0);
  const values = await client.mGet(['header','left','article','right','footer']);
  console.log(values);

  client.quit();
})();
