module.express = function(sequelize, DataTypes){
    var Users = sequalize.define("Users", {
        fname: DataTypes.STRING,
        lname: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        admin: DataTypes.BOOLEAN
    });
    return Users;
};