module.exports = function(sequelize, DataTypes){
    var Posts = sequelize.define("Posts", {
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        hours: DataTypes.DATE,
        link: DataTypes.STRING,
        description: DataTypes.TEXT,
    });
    Posts.associate = function(models) {
       Posts.belongsTo(models.Users,
         {
             foreignKey: 'fk_userid',
             
          } 
     )};
    
      return Posts;
};