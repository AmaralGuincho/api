export default (sequelize, DataTypes) => sequelize.define('driver', {
  employee: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'employee',
      key: 'id',
    },
    field: 'employee',
  },
  licenseNumber: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'license_number',
  },
  registerNumber: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'register_number',
  },
  expirationDate: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'expiration_date',
  },
  creationDate: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'creation_date',
  },
  location: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'location',
  },
}, {
  tableName: 'driver',
});
