export default (sequelize, DataTypes) => sequelize.define('service', {
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
      model: 'service_type',
      key: 'id',
    },
    field: 'type',
  },
  vehicle: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'vehicle',
      key: 'id',
    },
    field: 'vehicle',
  },
  status: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'status',
  },
  issueDate: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'issue_date',
  },
  insurance: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'insurance',
      key: 'id',
    },
    field: 'insurance',
  },
  issueNumber: {
    type: DataTypes.BIGINT,
    allowNull: false,
    field: 'issue_number',
  },
}, {
  tableName: 'service',
});
