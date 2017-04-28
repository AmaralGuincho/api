export default (sequelize, DataTypes) => sequelize.define('insurance', {
  id: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    field: 'id',
  },
  organizationName: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'organization_name',
  },
  organizationNickname: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'organization_nickname',
  },
  businessmanCode: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'businessman_code',
  },
  cgc: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'cgc',
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'address',
  },
  regionManager: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'region_manager',
  },
  businesspersonEmail: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'businessperson_email',
  },
  registrationUnitPhone: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'registration_unit_phone',
  },
  paymentUnitPhone: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'payment_unit_phone',
  },
  servicesCloserPhone: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'services_closer_phone',
  },
  currentCasesPhone: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'current_cases_phone',
  },
}, {
  tableName: 'insurance',
});
