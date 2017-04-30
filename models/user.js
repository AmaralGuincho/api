import bcrypt from 'bcrypt';

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
  hooks: {
    beforeCreate: (user) => {
      const salt = bcrypt.genSaltSync();
      user.set('password', bcrypt.hashSync(user.password, salt));
    },
  },
  classMethods: {
    isPassword: (encodedPassword, password) => bcrypt.compareSync(password, encodedPassword),
  },
});
