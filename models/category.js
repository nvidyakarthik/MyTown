module.exports = function(sequelize, DataTypes){
    var Category = sequelize.define("Category", {
        categoryName: DataTypes.STRING,
    });

    Category.associate = function(models) {
        Category.hasMany(models.Posts,
          {
              foreignKey: 'fk_categoryid',
              sourceKey: 'id'
           } 
      )}; 
    return Category;
};