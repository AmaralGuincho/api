export default (sequelize, DataTypes) => sequelize.define('vehicle', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  },
  customer: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'customer',
      key: 'id',
    },
    field: 'customer',
  },
  plate: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'plate',
  },
  manufactureDate: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'manufacture_date',
  },
  color: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'color',
  },
  model: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'model',
  },
}, {
  tableName: 'vehicle',
});
