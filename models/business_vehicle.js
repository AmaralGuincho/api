export default (sequelize, DataTypes) => sequelize.define('businessVehicle', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  },
  type: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'vehicle_type',
      key: 'id',
    },
    field: 'type',
  },
  nick: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'nick',
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
  img: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'img',
  },
  model: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'model',
  },
}, {
  tableName: 'business_vehicle',
});
