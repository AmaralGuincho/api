import EmployeesController from '../controllers/employees';

export default (app) => {
  const employeesController = new EmployeesController(app.datasource.models.employee);

  app.route('/employee')
    .get((req, res) => {
      employeesController.getAll()
        .then((response) => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })

    .post((req, res) => {
      employeesController.create(req.body)
        .then((response) => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    });

  app.route('/employee/:id')
    .get((req, res) => {
      employeesController.getById(req.params)
        .then((response) => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .put((req, res) => {
      employeesController.update(req.body, req.params)
        .then((response) => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .delete((req, res) => {
      employeesController.delete(req.params)
        .then((response) => {
          res.sendStatus(response.statusCode);
        });
    });
};
