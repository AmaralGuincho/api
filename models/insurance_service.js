export default (sequelize, DataTypes) => sequelize.define('insuranceService', {
  insurance: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'insurance',
      key: 'id',
    },
    field: 'insurance',
  },
  type: {
    type: DataTypes.TEXT,
    allowNull: false,
    field: 'type',
  },
  to40Km: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'to_40km',
  },
  moreThan40Km: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'more_than_40km',
  },
  workingHours: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'working_hours',
  },
  wattingHours: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'watting_hours',
  },
}, {
  tableName: 'insurance_service',
});
