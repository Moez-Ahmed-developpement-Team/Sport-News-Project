//Controller related to Admin ressource.
const  db  = require("../Database/index");



module.exports={
  //method to fetch all comment from the blog database.
    getAllComment: async (req,res)=>{
       try {
        const comments = await db.Comment.findAll({
            order: [["createdAt", "DESC"]],
        })
        res.status(222).json(comments) ;
       }catch(error){console.log(error)}res.status(530).send('you have error'); 
    },
 //method to add a comment to the database via the respective model function.
    addComment:async(req,res)=>{
        try {
            const addComment =await db.Comment.create(req.body)
            res.status(230).send(addComment) ;
        }catch (error){console.log(error)}res.status(543).send('you have error')
    },
 //method to get one admin by picture's link.
    deleteComment:async(req,res)=>{
        let  id =req.prames.id
        try {
            const deleteComment =await db.Comment.destroy({where:{id:id}})
            res.status(232).send(deleteComment) ;
        }catch(error){console.log(error)}res.status(543).send('you have error ')
    },

    updateComment:async(req,res)=>{
     let id =req.prames.id
     let update =req.body 
     try {
        const updateComment =await db.Comment.update(update,{where:{id:id}})
     }catch (error){console.log(error)}res.status(540).send('you have error')

    },
}