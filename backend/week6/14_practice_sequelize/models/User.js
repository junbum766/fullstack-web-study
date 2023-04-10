const User = function(Sequelize, DataTypes) {
    const model = Sequelize.define(
        'user',
        {
          userid: {
            type: DataTypes.STRING(20),
            allowNull: false,
            primaryKey: true,
          },
          name: {
            type: DataTypes.STRING(10),
            allowNull: false,
          },
          pw: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
        }, 
        {
          tableName: 'user', 
          freezeTableName: true, 
          timestamps: false,
        } 
      );
    
      return model;
}

module.exports = User;
