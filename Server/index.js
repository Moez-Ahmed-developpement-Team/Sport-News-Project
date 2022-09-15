const postsRoute = require('./Routes/Posts.routes');
const express = require("express");

const app = express();

const PORT =  3000 ;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Add Routes to the middleware handling path, specifying the respective URL path
app.use('/', postsRoute);

app.listen(PORT, function () {
    console.log("Port 3000 is working");
  });