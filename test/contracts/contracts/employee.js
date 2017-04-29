describe('Routes Employees', () => {
  const Employee = app.datasource.models.employee;
  const defaultEmployee = {
    id: 1,
    occupation: 1,
    name: 'Kevin',
    lastname: 'Flynn',
    dob: '1988-12-31',
    cpf: '55.555.555-5',
    rg: '555.555.55.5',
    sex: 'm',
    email: 'kevin@flynn.com',
    cep: '55.5555-5',
    address: 'The Grid',
    img: 'null',
  };

  beforeEach((done) => {
    Employee
      .destroy({ where: {} })
      .then(() => Employee.create(defaultEmployee))
      .then(() => {
        done();
      });
  });

  describe('Route GET /employee', () => {
    it('Should return a list of employees', (done) => {
      const employeesList = Joi.array().items(Joi.object().keys({
        id: Joi.number(),
        occupation: Joi.number(),
        name: Joi.string(),
        lastname: Joi.string(),
        dob: Joi.date().iso(),
        cpf: Joi.string(),
        rg: Joi.string(),
        sex: Joi.string(),
        email: Joi.string(),
        cep: Joi.string(),
        address: Joi.string(),
        img: Joi.string(),
        createdAt: Joi.date().iso(),
        updatedAt: Joi.date().iso(),
      }));
      request
          .get('/employee')
          .end((err, res) => {
            joiAssert(res.body, employeesList);
            done(err);
          });
    });
  });

  describe('Route GET /employee/{id}', () => {
    it('Should return a employee', (done) => {
      const employee = Joi.object().keys({
        id: Joi.number(),
        occupation: Joi.number(),
        name: Joi.string(),
        lastname: Joi.string(),
        dob: Joi.date().iso(),
        cpf: Joi.string(),
        rg: Joi.string(),
        sex: Joi.string(),
        email: Joi.string(),
        cep: Joi.string(),
        address: Joi.string(),
        img: Joi.string(),
        createdAt: Joi.date().iso(),
        updatedAt: Joi.date().iso(),
      });

      request
          .get('/employee/1')
          .end((err, res) => {
            joiAssert(res.body, employee);
            done(err);
          });
    });
  });

  describe('Route POST /employee', () => {
    it('Should create a employee', (done) => {
      const newEmployee = {
        id: 2,
        occupation: 1,
        name: 'Kevin',
        lastname: 'Flynn',
        dob: '1988-12-31',
        cpf: '55.555.555-5',
        rg: '555.555.55.5',
        sex: 'm',
        email: 'kevin@flynn.com',
        cep: '55.5555-5',
        address: 'The Grid',
        img: 'null',
      };

      const employee = Joi.object().keys({
        id: Joi.number(),
        occupation: Joi.number(),
        name: Joi.string(),
        lastname: Joi.string(),
        dob: Joi.date().iso(),
        cpf: Joi.string(),
        rg: Joi.string(),
        sex: Joi.string(),
        email: Joi.string(),
        cep: Joi.string(),
        address: Joi.string(),
        img: Joi.string(),
        createdAt: Joi.date().iso(),
        updatedAt: Joi.date().iso(),
      });

      request
          .post('/employee')
          .send(newEmployee)
          .end((err, res) => {
            joiAssert(res.body, employee);

            done(err);
          });
    });
  });

  describe('Route PUT /employee/{id}', () => {
    it('Should create a employee', (done) => {
      const updatedEmployee = {
        id: 1,
        occupation: 1,
        name: 'Kevin',
        lastname: 'Clain',
        dob: '1988-12-31',
        cpf: '55.555.555-5',
        rg: '555.555.55.5',
        sex: 'm',
        email: 'kevin@flynn.com',
        cep: '55.5555-5',
        address: 'The Grid',
        img: 'null',
      };

      const updatedCount = Joi.array().items(1);

      request
          .put('/employee/1')
          .send(updatedEmployee)
          .end((err, res) => {
            joiAssert(res.body, updatedCount);

            done(err);
          });
    });
  });

  describe('Route Delete /employee/{id}', () => {
    it('Should delete a employee', (done) => {
      request
          .delete('/employee/1')
          .end((err, res) => {
            expect(res.status).to.be.eql(204);

            done(err);
          });
    });
  });
});
