export default (sequelize, DataTypes) => sequelize.define('occupation', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'description',
  },
  salary: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'salary',
  },
}, {
  tableName: 'occupation',
});
