export default (sequelize, DataTypes) => sequelize.define('employee', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  },
  occupation: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'occupation',
      key: 'id',
    },
    field: 'occupation',
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
  dob: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'dob',
  },
  cpf: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'cpf',
  },
  rg: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'rg',
  },
  sex: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'sex',
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'email',
  },
  cep: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'cep',
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'address',
  },
  img: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'img',
  },
}, {
  tableName: 'employee',
});
