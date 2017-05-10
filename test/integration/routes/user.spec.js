import { Models } from '../../../models';

describe('Route: Users', () => {
  let request;
  const Occupation = Models.occupation;
  const Employee = Models.employee;
  const User = Models.user;

  const defaultOccupation = {
    id: 1,
    description: 'admin',
    salary: '4000',
  };

  const defaultEmployee = {
    id: 1,
    occupation: defaultOccupation.id,
    email: 'employee@mail.com',
  };

  const defaultUser = {
    employee: defaultEmployee.id,
    username: 'defaultUser',
    password: 'secret',
  };

  before(() => setupApp()
      .then((app) => {
        request = supertest(app);
        Occupation.create(defaultOccupation);
        Employee.create(defaultEmployee);
      }));

  after(() => {
    Employee.destroy({ where: {} });
    Occupation.destroy({ where: {} });
  });

  beforeEach(() => User.destroy({ where: {} })
      .then(() => {
        User.create(defaultUser);
      }));

  afterEach(() => User.destroy({ where: {} }));

  describe('GET', () => {
    it('Should return a array of users', (done) => {
      request
        .get('/users')
        .end((err, res) => {
          expect(res.body[0].employee).to.be.eql(defaultUser.employee);
          expect(res.body[0].username).to.be.eql(defaultUser.username);
          done(err);
        });
    });
  });

  describe('GET /users/id', () => {
    it('should return a specific users', (done) => {
      request
        .get(`/users/${defaultUser.employee}`)
        .end((err, res) => {
          expect(res.body.username).to.be.eql(defaultUser.username);
          done(err);
        });
    });
  });

  describe('POST', () => {
    it('Should create a user', (done) => {
      // Delete every exiting user to link new user to default employee
      User.destroy({ where: {} });

      const newUser = {
        employee: 1,
        username: 'otherUser',
        password: 'newPass',
      };
      request
        .post('/users')
        .send(newUser)
        .end((err, res) => {
          expect(res.body.employee).to.be.eql(newUser.employee);
          expect(res.body.username).to.be.eql(newUser.username);
          done(err);
        });
    });
  });

  describe('PUT', () => {
    it('Should update a user', (done) => {
      const updatedUser = {
        username: 'updatedUsername',
      };
      request
        .put(`/users/${defaultUser.employee}`)
        .send(updatedUser)
        .end((err, res) => {
          expect(res.status).to.eql(200);
          done(err);
        });
    });
  });

  describe('DELETE', () => {
    it('Should remove a user from the database', (done) => {
      request
        .delete(`/users/${defaultUser.employee}`)
        .end((err, res) => {
          expect(res.status).to.be.eql(204);
          done(err);
        });
    });
  });
});
