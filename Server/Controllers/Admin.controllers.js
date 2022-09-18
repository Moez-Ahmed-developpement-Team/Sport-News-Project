//Controller related to Admin ressource.
const  db  = require("../Database/index");



module.exports={
  //method to fetch all admin from the blog database.
  getAllAdmin: async(req,res) => {
    console.log(db)
        try {
            const admins =await db.Admin.findAll({
                order: [["createdAt", "DESC"]],
            });
            res.status(200).json(admins)
        }catch (error){console.log (error)}res.status(502).send('you have error')
    },
   //method to add a post to the database via the respective model function.
    addAdmin:async(req,res)=>{
        let newAdmin = {
           adminName: req.body.adminName,
           email: req.body.email,
           password: req.body.password,
        }
        try {
            const admin =await db.Admin.create(newAdmin);
            res.status(203).send(admin) ;
        }catch (error){console.log (error)}res.status(555).send('you have error')
    },
     //method to get one admin by picture's link.
    deleteAdmin:async(req,res)=>{
        let id =req.params.id 
        try {
            const adminDeleted=await db.Admin.destroy({where :{id :id}})
            res.status(207).json(adminDeleted) ;
        }catch (error){console.log(error)}res.status(564).send('you have error')
    },
    updateAdmin:async(req,res)=>{
    let id =req.params.id ;
    let update =req.body ;
    try {
    const adminUpdate=await db.Admin.update(update,{weher:{id:id}})
    res.status(201).json(adminUpdate) ;
    }catch (error){console.log(error)}res.status(532).send('you have error ')
    },



}