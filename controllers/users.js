class UsersController {

  constructor(User) {
    this.User = User;
  }

  getAll(req, res) {
    return this.User.findAll({})
      .then(result => res.send(result))
      .catch(err => res.status(400).send(err.message));
  }

  getById(req, res) {
    return this.User.findOne({ where: req.params })
    .then(result => res.send(result))
    .catch(err => res.status(400).send(err.message));
  }

  create(req, res) {
    return this.User.create(req.body)
      .then(result => res.status(201).send(result))
      .catch(err => res.status(412).send(err.message));
  }

  update(req, res) {
    return this.User.update(req.body, { where: req.params })
      .then(() => res.sendStatus(200))
      .catch(err => res.status(412).send(err.message));
  }

  delete(req, res) {
    return this.User.destroy({ where: req.params })
      .then(() => res.sendStatus(204))
      .catch(err => res.status(400).send(err.message));
  }
}

export default UsersController;
