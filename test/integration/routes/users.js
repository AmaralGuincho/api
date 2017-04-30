describe('Routes Users', () => {
  const User = app.datasource.models.user;
  const defaultUser = {
    employee: 1,
    username: 'kevin',
    password: 'password',
  };

  beforeEach((done) => {
    User
      .destroy({ where: {} })
      .then(() => User.create(defaultUser))
      .then(() => {
        done();
      });
  });

  describe('Route GET /user', () => {
    it('Should return a list of users', (done) => {
      request
          .get('/user')
          .end((err, res) => {
            expect(res.body[0].employee).to.be.eql(defaultUser.employee);
            expect(res.body[0].username).to.be.eql(defaultUser.username);

            done(err);
          });
    });
  });

  describe('Route GET /user/{employee}', () => {
    it('Should return a user', (done) => {
      request
          .get('/user/1')
          .end((err, res) => {
            expect(res.body.employee).to.be.eql(defaultUser.employee);
            expect(res.body.username).to.be.eql(defaultUser.username);

            done(err);
          });
    });
  });

  describe('Route POST /user', () => {
    it('Should create a user', (done) => {
      const newUser = {
        employee: 2,
        username: 'kevin',
        password: 'password',
      };
      request
          .post('/user')
          .send(newUser)
          .end((err, res) => {
            expect(res.body.employee).to.be.eql(newUser.employee);
            expect(res.body.username).to.be.eql(newUser.username);

            done(err);
          });
    });
  });

  describe('Route PUT /user/{id}', () => {
    it('Should create a user', (done) => {
      const updatedUser = {
        employee: 1,
        username: 'flynn',
        password: 'password',
      };
      request
          .put('/user/1')
          .send(updatedUser)
          .end((err, res) => {
            expect(res.body).to.be.eql([1]);

            done(err);
          });
    });
  });

  describe('Route Delete /user/{id}', () => {
    it('Should delete a user', (done) => {
      request
          .delete('/user/1')
          .end((err, res) => {
            expect(res.status).to.be.eql(204);

            done(err);
          });
    });
  });
});
