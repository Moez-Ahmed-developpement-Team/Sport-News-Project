const adminRoutes = require ('./Routes/Admins.routes') ;
const usersRoutes = require ('./Routes/Users.routes') ;
const commentRoutes = require ('./Routes/Comments.Routes') ;
const postsRoute = require('./Routes/Posts.routes'); 

const express = require("express");
const cors = require ('cors')
const app = express();
const PORT =  3000 ;
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Add Routes to the middleware handling path, specifying the respective URL path
app.use("/",adminRoutes) ;
app.use("/user",usersRoutes) ;
app.use("/view",commentRoutes) ;
app.use("/",postsRoute) ;








app.listen(PORT, function () {
    console.log("Port 3000 is working");
  });