const express = require("express") ;
const router = express.Router ;

// Require controller modules.
const{getComment,addComment,deleteComment,updateComment}=require('../Controllers/Comments.controllers')




/// POSTS ROUTES /// 

//GET request to fetch all commit.
router.get('/all',getComment) ;
// POST request for creating a new commit.
router.post('/add',addComment) ;
//DELETE request to delete 
router.delete('/delete/:id',deleteComment) ;
//UPDATE request to update  
router.put('/update/:id',updateComment) ; 





module.exports = router;