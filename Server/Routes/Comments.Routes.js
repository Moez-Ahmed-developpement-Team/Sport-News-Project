const express = require("express") ;





/// POSTS ROUTES /// 


//DELETE request to delete 
router.delete('/delete/:id',deleteComment) ;
//UPDATE request to update  
router.put('/update/:id',updateComment) ; 






module.exports = router;