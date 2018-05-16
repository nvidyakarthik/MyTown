module.exports = function(sequelize, DataTypes){
    var Users = sequelize.define("Users", {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        admin: DataTypes.BOOLEAN
    });
    Users.associate = function(models) {
        Users.hasMany(models.Posts,
          {
              foreignKey: 'fk_userid',
              sourceKey: 'id'
           } 
      )}; 
    return Users;
};