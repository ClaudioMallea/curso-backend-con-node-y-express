const express = require('express');
const app = express();
const port = 3005;

app.get('/', (req, res)=>{
  res.json({name:"Claudio", age:25});
})

app.get('/user/:userId/message/:messageId', (req, res)=>{
  const {userId,messageId} = req.params;
  res.json({userId,messageId});

});

app.listen(port, ()=>{
  console.log(`Listening on ${port}`);
});

