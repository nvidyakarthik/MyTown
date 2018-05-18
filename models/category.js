module.exports = function(sequelize, DataTypes){
    var Categories = sequelize.define("Categories", {
        categoryName: DataTypes.STRING,
    });

    Categories.associate = function(models) {
        Categories.hasMany(models.Posts,
          {
              foreignKey: 'fk_categoryid',
              sourceKey: 'id'
           } 
      )}; 
    return Categories;
};