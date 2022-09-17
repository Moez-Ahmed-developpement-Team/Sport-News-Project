//Controller related to users ressource for login And signUp.
const db = require("../Database/index");

//adding client 
module.exports = {
  //adding a user with loggin
  addClient: 
  async (req, res) => {
      try {
         const user = await user.findByPk(req.body.username, { include: [{ model: User, as: "poster", attributes: ["username"] }], })

          if(user){
            console.log(user);
            res.send({ Message: "error" })
          } } 
         catch (error) { res.status(500).send("Failed to load resource");
        return } 

    // if (err) {
    //   res.send({ Message: "error" })
    // }
    // //checking the username
    // else if (res.length > 0) {
    //   (res.send({ Message: "User already exists" }))
    // }
    // //creatin a new user model
    // else {
    //   var userInfo = {
    //     username: req.body.username,
    //     password: hashPassword(req.body.password, 10),
    //     email: req.body.email,
    //   }
    // }
    try {
      //create the new user
      const post = await db.user.create(userInfo);
      res.status(201).send(post);
    } catch (error) {
      res.status(409).send(error);
    }
  },

  //verifying user identity
  userAuthentification: async (req, res) => {
    try {

    }
    catch {

    }
  },
};
