export default (sequelize, DataTypes) => sequelize.define('travel', {
  service: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'service',
      key: 'id',
    },
    field: 'service',
  },
  displacement: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'displacement',
      key: 'id',
    },
    field: 'displacement',
  },
}, {
  tableName: 'travel',
});
