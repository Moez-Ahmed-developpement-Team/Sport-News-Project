const express = require("express") ;
const router = express.Router ;



// Require controller modules.
const {getAllUsers} = require ('../Controllers/UserControllers')




/// POSTS ROUTES ///


//GET request to fetch all users ;
router.get('/all',getAllUsers) ; 












module.exports = router;