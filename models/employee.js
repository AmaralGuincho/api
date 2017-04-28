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
    type: DataTypes.DATEONLY,
    allowNull: true,
    field: 'dob',
    get() {
      const datetime = this.getDataValue('dob');
      const parsedDate = new Date(datetime);
      const dateOnly = parsedDate.toISOString().substring(0, 10);
      return dateOnly;
    },
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
