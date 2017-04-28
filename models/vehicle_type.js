export default (sequelize, DataTypes) => sequelize.define('vehicleType', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  },
  type: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'type',
  },
}, {
  tableName: 'vehicle_type',
});
