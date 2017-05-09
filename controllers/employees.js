class EmployeesController {

  constructor(Employee) {
    this.Employee = Employee;
  }

  getAll(req, res) {
    return this.Employee.findAll({})
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err.message));
  }

  getById(req, res) {
    return this.Employee.findOne({ where: req.params })
    .then(result => res.send(result))
    .catch(err => res.status(400).send(err.message));
  }

  create(req, res) {
    return this.Employee.create(req.body)
      .then(result => res.status(201).send(result))
      .catch(err => res.status(412).send(err.message));
  }

  update(req, res) {
    return this.Employee.update(req.body, { where: req.params })
      .then(() => res.sendStatus(200))
      .catch(err => res.status(412).send(err.message));
  }

  delete(req, res) {
    return this.Employee.destroy({ where: req.params })
      .then(() => res.sendStatus(204))
      .catch(err => res.status(400).send(err.message));
  }
}

export default EmployeesController;
