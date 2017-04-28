export default (sequelize, DataTypes) => sequelize.define('user', {
  employee: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'employee',
  },
  username: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'username',
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'password',
  },
}, {
  tableName: 'user',
});
