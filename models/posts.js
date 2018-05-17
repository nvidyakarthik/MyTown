module.exports = function(sequelize, DataTypes){
    var Post = sequelize.define("Post", {
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        websitelink: DataTypes.STRING,
        picturelink:DataTypes.STRING,        
        description: DataTypes.TEXT,
        kidfriendly:DataTypes.BOOLEAN
    });
    Post.associate = function(models) {
       Post.belongsTo(models.User,
         {
             foreignKey: 'fk_userid',
             targetKey:'id'
             
          });
        Post.hasOne(models.Category,
            {
                foreignKey: 'fk_categoryid',
                targetKey:'id'
                
             }); 
     };
   
      return Post;
};