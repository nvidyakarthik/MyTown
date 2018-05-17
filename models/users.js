module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        admin: DataTypes.BOOLEAN
    });
    User.associate = function(models) {
        User.hasMany(models.Post,
          {
              foreignKey: 'fk_userid',
              sourceKey: 'id'
           } 
      )}; 
    return User;
};