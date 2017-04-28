export default (sequelize, DataTypes) => sequelize.define('displacement', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  },
  employee: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'employee',
      key: 'id',
    },
    field: 'employee',
  },
  vehicle: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'business_vehicle',
      key: 'id',
    },
    field: 'vehicle',
  },
  timeLeft: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'time_left',
  },
  timeArrived: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'time_arrived',
  },
  from: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'from',
  },
  to: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'to',
  },
  distance: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'distance',
  },
}, {
  tableName: 'displacement',
});
