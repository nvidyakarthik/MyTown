module.exports = function(sequelize, DataTypes){
    var Users = sequelize.define("Users", {
        fname: DataTypes.STRING,
        lname: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        admin: DataTypes.BOOLEAN
    });
    return Users;
};