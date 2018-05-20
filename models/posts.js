module.exports = function(sequelize, DataTypes){
    var Posts = sequelize.define("Posts", {
        name: {
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[1]
            }

        },
        street:DataTypes.STRING,
        city: {
            type:DataTypes.STRING,
            allowNull:false
        },
        state: {
            type:DataTypes.STRING,
            allowNull:false
        },
        websitelink: DataTypes.STRING,
        picturelink:DataTypes.STRING,        
        description: {
            type:DataTypes.TEXT,
            allowNull:false
        },
        kidfriendly:{
            type: DataTypes.BOOLEAN ,
            defaultValue:0 
         } ,
        approved:{
           type: DataTypes.BOOLEAN ,
           defaultValue:0 
        }      
    });
    Posts.associate = function(models) {
       Posts.belongsTo(models.Users);
       Posts.belongsTo(models.Categories);
    }
   
      return Posts;
};