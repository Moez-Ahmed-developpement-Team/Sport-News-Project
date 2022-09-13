
const express = require("express");

const app = express();

const PORT =  3069 ;

app.use(express.json());

app.listen(PORT, function () {
    console.log("Port 3069 is working");
  });