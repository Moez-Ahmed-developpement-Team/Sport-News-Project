
const express = require("express");

const app = express();

const PORT =  3069 ;
///
const adminRoutes = require ('./Routes/AdminRoutes') ;
const usersRoutes = require ('./Routes/UsersRoutes') ;
const viewersRoutes = require ('./Routes/ViewersRoutes') ; 

app.use("/admin",adminRoutes) ;
app.use("/user",usersRoutes) ;
app.use("/view",viewersRoutes) ;




app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(PORT, function () {
    console.log("Port 3069 is working");
  });