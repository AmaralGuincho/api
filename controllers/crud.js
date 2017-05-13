class CrudController {

  constructor(Model) {
    this.Model = Model;
  }

  get(req, res) {
    if (Object.keys(req.params).length > 0) {
      return this.Model.findOne({ where: req.params })
      .then(result => res.status(201).send(result))
      .then(err => res.status(400).send(err));
    }
    return this.Model.findAll({})
    .then(result => res.status(201).send(result))
    .then(err => res.status(400).send(err));
  }

  create(req, res) {
    return this.Model.create(req.body)
      .then(result => res.status(201).send(result))
      .catch(err => res.status(412).send(err.message));
  }

  update(req, res) {
    return this.Model.update(req.body, { where: req.params })
      .then(() => res.sendStatus(200))
      .catch(err => res.status(412).send(err.message));
  }

  delete(req, res) {
    return this.Model.destroy({ where: req.params })
      .then(() => res.sendStatus(204))
      .catch(err => res.status(400).send(err.message));
  }
}

export default CrudController;
