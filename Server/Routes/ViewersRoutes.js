const express = require("express") ;
const router = express.Router ;



// Require controller modules.
 const{getAllView,addView,deleteView,updateView}=require ('../Controllers/ViewerControllers')





/// POSTS ROUTES /// 

//GET request to fetch all posts.
router.get('/all',getAllView) ;
// POST request for creating a new post.
router.post ('/add',addView) ;
//DELETE request to delete 
router.delete('/delete/:id',deleteView) ;
//UPDATE request to update  
router.put('/update/:id',updateView) ; 











module.exports = router;