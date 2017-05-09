import { Models } from '../../../models';

describe('Route: Employees', () => {
  let request;
  const Employee = Models.employee;
  const Occupation = Models.occupation;

  const defaultOccupation = {
    id: 1,
    description: 'admin',
    salary: 40000,
  };

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

  before(() => setupApp()
      .then((app) => {
        request = supertest(app);
        Occupation.create(defaultOccupation);
      }));

  after(() => {
    Occupation.destroy({ where: {} });
  });

  beforeEach(() => Employee.destroy({ where: {} })
      .then(() => {
        Employee.create(defaultEmployee);
      }));

  afterEach(() => Employee.destroy({ where: {} }));

  describe('GET', () => {
    it('Should return a array of employees', (done) => {
      request
        .get('/employees')
        .end((err, res) => {
          expect(res.body).to.be.eql([defaultEmployee]);
          done(err);
        });
    });
  });

  describe('GET /employee/id', () => {
    it('should return a specific employee', (done) => {
      request
        .get(`/employees/${defaultEmployee.id}`)
        .end((err, res) => {
          expect(res.body).to.be.eql(defaultEmployee);
          done(err);
        });
    });
  });

  describe('POST', () => {
    it('Should create a employee', (done) => {
      const newEmployee = {
        id: 2,
        occupation: 1,
        name: 'Kora',
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
        .post('/employees')
        .send(newEmployee)
        .end((err, res) => {
          expect(res.body).to.be.eql(newEmployee);
          done(err);
        });
    });
  });

  describe('PUT', () => {
    it('Should update a employee', (done) => {
      const updatedEmployee = {
        occupation: 1,
        name: 'Kora',
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
        .put(`/employees/${defaultEmployee.id}`)
        .send(updatedEmployee)
        .end((err, res) => {
          expect(res.status).to.eql(200);
          done(err);
        });
    });
  });

  describe('DELETE', () => {
    it('Should remove a employee from the database', (done) => {
      request
        .delete(`/employees/${defaultEmployee.id}`)
        .end((err, res) => {
          expect(res.status).to.be.eql(204);
          done(err);
        });
    });
  });
});
