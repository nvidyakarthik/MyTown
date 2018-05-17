module.exports = function(sequelize, DataTypes){
    var Category = sequelize.define("Category", {
        categoryName: DataTypes.STRING,
    });

    Category.associate = function(models) {
        Category.belongsTo(models.Post,
          {
              foreignKey: 'fk_categoryid',
              targetKey: 'id'
           } 
      )}; 
    return Category;
};