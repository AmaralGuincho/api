const defaultResponse = (data, statusCode = 200) => ({
  data,
  statusCode,
});

const errorResponse = (message, statusCode = 400) => defaultResponse({
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
      .then(result => defaultResponse(result, 201))
      .catch(err => errorResponse(err.message, 422));
  }

  update(data, params) {
    return this.Employee.update(data, { where: params })
      .then(result => defaultResponse(result))
      .catch(err => errorResponse(err.message, 422));
  }

  delete(params) {
    return this.Employee.destroy({ where: params })
      .then(result => defaultResponse(result, 204))
      .catch(err => errorResponse(err.message, 422));
  }
}

export default EmployeesController;
