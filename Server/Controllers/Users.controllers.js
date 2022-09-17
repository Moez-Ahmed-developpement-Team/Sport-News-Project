//Controller related to posts ressource.
const  db  = require("../Database/index");


module.exports={

  //method to fetch all posts from the blog database.
    getAllUsers:async(req,res)=>{
       try {
        const users= await db.User.findAll({
            order: [["createdAt", "DESC"]],
        }) 
        res.status(211).send(users) ;
       }catch (error){console.log(error)}res.status(543).send('you have error')
    },
}