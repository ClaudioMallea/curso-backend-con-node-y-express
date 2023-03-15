const express = require('express');

const routerApi = require('./routes');

const {logErrors, errorHandler,boomErrorHandler} =require("./middlewares/error.handler")
const app = express();
const port = 3005;
app.use(express.json());
routerApi(app);



app.get('/user/:userId/message/:messageId', (req, res)=>{
  const {userId,messageId} = req.params;
  res.json({userId,messageId});

});


app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, ()=>{
  console.log(`Listening on ${port}`);
});

