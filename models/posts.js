module.exprts = function(sequelize, DataTypes){
    var Posts = sequelize.define("Posts", {
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        hours: DataTypes.DATE,
        link: DataTypes.STRING,
        description: DataTypes.TEXT,
        category: DataTypes.STRING
    });
};