const express = require('express');
const faker = require('faker');
const routerApi = require('./routes');
const app = express();
const port = 3005;

routerApi(app);

app.get('/user/:userId/message/:messageId', (req, res)=>{
  const {userId,messageId} = req.params;
  res.json({userId,messageId});

});

app.listen(port, ()=>{
  console.log(`Listening on ${port}`);
});

