const express = require("express") ;
const router = express.Router() ;



// Require controller modules.
const {getAllUsers} = require ('../Controllers/Users.controllers')




/// Users ROUTES ///


//GET request to fetch all users ;
router.get('/allUsers',getAllUsers) ; 












module.exports = router;