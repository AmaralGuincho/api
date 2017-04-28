
export default (sequelize, DataTypes) => sequelize.define('customer', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'name',
  },
  lastname: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'lastname',
  },
  phone: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'phone',
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'email',
  },
}, {
  tableName: 'customer',
});
