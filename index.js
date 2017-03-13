var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.use(function(req, res) {
   res.status(404);
   res.sendFile("/err/404.html");
});

app.listen(process.env.PORT,()=>{
  console.log("Running!");
});
