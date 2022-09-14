const express = require("express") ;
const router = express.Router ;



// Require controller modules.
const {getAllAdmin ,addAdmin, deleteAdmin,updateAdmin} = require('../Controllers/AdminControllers')


/// POSTS ROUTES ///

//GET request to fetch all admin.
router.get('/all',getAllAdmin ) ;
// POST request for creating a new post.
router.post('/add',addAdmin) ;
//DELETE request to delete 
router.delete('/delete/:id',deleteAdmin) ;
//UPDATE request to update 
router.put('/update/:id',updateAdmin) ;










module.exports = router;