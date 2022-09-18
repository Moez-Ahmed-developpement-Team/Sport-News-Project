// Define and export the sequelize model that represents the table posts.
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("posts", {
    title:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    theme: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Post;
};

