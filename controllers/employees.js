import HttpStatus from 'http-status';

const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST) => defaultResponse({
  error: message }, statusCode);

class EmployeesController {
  constructor(Employee) {
    this.Employee = Employee;
  }

  getAll() {
    return this.Employee.findAll({})
      .then(result => defaultResponse(result))
      .catch(err => errorResponse(err.message));
  }

  getById(params) {
    return this.Employee.findOne({ where: params })
    .then(result => defaultResponse(result))
    .catch(err => errorResponse(err.message));
  }

  create(data) {
    return this.Employee.create(data)
      .then(result => defaultResponse(result, HttpStatus.CREATED))
      .catch(err => errorResponse(err.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }

  update(data, params) {
    return this.Employee.update(data, { where: params })
      .then(result => defaultResponse(result))
      .catch(err => errorResponse(err.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }

  delete(params) {
    return this.Employee.destroy({ where: params })
      .then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
      .catch(err => errorResponse(err.message, HttpStatus.UNPROCESSABLE_ENTITY));
  }
}

export default EmployeesController;
