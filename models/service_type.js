export default (sequelize, DataTypes) => sequelize.define('serviceType', {
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
  cost: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'cost',
  },
}, {
  tableName: 'service_type',
});
