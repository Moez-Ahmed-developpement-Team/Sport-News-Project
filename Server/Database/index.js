const { Sequelize, DataTypes } = require("sequelize");
const config = require('config');


const sequelize = new Sequelize(config.database, config.user, config.password,
    {
      host: "localhost",
      dialect: "mysql",
      logging: false
    }
  );

  const db = {};
  db.sequelize = sequelize;


  db.User = require("./users.model")(sequelize, DataTypes);
  db.User = require("./admins.model")(sequelize, DataTypes);
  db.Post = require("./posts.model")(sequelize, DataTypes);
  db.Comment = require("./comments.model")(sequelize, DataTypes);

  db.User.hasMany(db.Post, {
  foreignKey: "posterId",
});
db.User.hasMany(db.Comment, {
    foreignKey: "commenterId",
  });
  db.Post.hasMany(db.Comment, {
    foreignKey: "postId",
  });
  db.Comment.belongsTo(db.Post, {
    foreignKey: "postId",
    onDelete: "CASCADE",
  });


db.sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

module.exports = db;