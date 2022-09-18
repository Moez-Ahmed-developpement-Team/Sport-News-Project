//Controller related to users ressource for login And signUp.
const db = require("../Database/index");
const {hashed} = require("../Token&Auth/Auth.js")
const {NewToken}=require("../Token&Auth/Token.js")

//adding client 
module.exports = {
  //adding a user 
  addClient: async (req, res) => {
    let NewUser = {
      username: req.body.username,
      email: req.body.email,
      password: hashed(req.body.password)
    }
    try {
      console.log("req--->", NewUser)
      const userinfo = await db.User.create(NewUser);
      res.cookie('token',NewToken(req.body))
      res.send(userinfo)
      console.log(userinfo)
    }
    catch (err) {
      res.send(err)
    }
  },

  //verifying user identity
  userAuthentification: async (req, res) => {
    try {
      const userAuth = await db.User.findOne({
        where:
        {
          password: hashed(req.body.password),
          username: req.body.username
        }
      }
      );
      if (userAuth === null) {
        res.send({ message: 'user Not found' });
      } else {
        res.cookie('token',NewToken(req.body))
        res.send({ message: 'welcome Back' })
      }
    }
    catch {
      res.send({ message: 'error' })
    }
  },
};
