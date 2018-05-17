module.exports = function(sequelize, DataTypes){
    var Posts = sequelize.define("Posts", {
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        hours: DataTypes.DATE,
        websitelink: DataTypes.STRING,
        picturelink:DataTypes.STRING,        
        description: DataTypes.TEXT,
        kidfriendly:DataTypes.BOOLEAN
    });
    Posts.associate = function(models) {
       Posts.belongsTo(models.Users,
         {
             foreignKey: 'fk_userid',
             targetKey:'id'
             
          });
        Posts.belongsTo(models.Categories,
            {
                foreignKey: 'fk_categoryid',
                targetKey:'id'
                
             }); 
     };
   
      return Posts;
};