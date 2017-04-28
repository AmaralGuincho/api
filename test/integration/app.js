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
      request
          .get('/employee')
          .end((err, res) => {
            expect(res.body[0].id).to.be.eql(defaultEmployee.id);
            expect(res.body[0].occupation).to.be.eql(defaultEmployee.occupation);
            expect(res.body[0].name).to.be.eql(defaultEmployee.name);
            expect(res.body[0].lastname).to.be.eql(defaultEmployee.lastname);
            expect(res.body[0].dob).to.be.eql(defaultEmployee.dob);
            expect(res.body[0].cpf).to.be.eql(defaultEmployee.cpf);
            expect(res.body[0].rg).to.be.eql(defaultEmployee.rg);
            expect(res.body[0].sex).to.be.eql(defaultEmployee.sex);
            expect(res.body[0].email).to.be.eql(defaultEmployee.email);
            expect(res.body[0].cep).to.be.eql(defaultEmployee.cep);
            expect(res.body[0].address).to.be.eql(defaultEmployee.address);

            done(err);
          });
    });
  });

  describe('Route GET /employee/{id}', () => {
    it('Should return a employee', (done) => {
      request
          .get('/employee/1')
          .end((err, res) => {
            expect(res.body.id).to.be.eql(defaultEmployee.id);
            expect(res.body.occupation).to.be.eql(defaultEmployee.occupation);
            expect(res.body.name).to.be.eql(defaultEmployee.name);
            expect(res.body.lastname).to.be.eql(defaultEmployee.lastname);
            expect(res.body.dob).to.be.eql(defaultEmployee.dob);
            expect(res.body.cpf).to.be.eql(defaultEmployee.cpf);
            expect(res.body.rg).to.be.eql(defaultEmployee.rg);
            expect(res.body.sex).to.be.eql(defaultEmployee.sex);
            expect(res.body.email).to.be.eql(defaultEmployee.email);
            expect(res.body.cep).to.be.eql(defaultEmployee.cep);
            expect(res.body.address).to.be.eql(defaultEmployee.address);

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
      request
          .post('/employee')
          .send(newEmployee)
          .end((err, res) => {
            expect(res.body.occupation).to.be.eql(newEmployee.occupation);
            expect(res.body.name).to.be.eql(newEmployee.name);
            expect(res.body.lastname).to.be.eql(newEmployee.lastname);
            expect(res.body.dob).to.be.eql(newEmployee.dob);
            expect(res.body.cpf).to.be.eql(newEmployee.cpf);
            expect(res.body.rg).to.be.eql(newEmployee.rg);
            expect(res.body.sex).to.be.eql(newEmployee.sex);
            expect(res.body.email).to.be.eql(newEmployee.email);
            expect(res.body.cep).to.be.eql(newEmployee.cep);
            expect(res.body.address).to.be.eql(newEmployee.address);

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
      request
          .put('/employee/1')
          .send(updatedEmployee)
          .end((err, res) => {
            expect(res.body).to.be.eql([1]);

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
