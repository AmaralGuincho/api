describe('Routes Employees', () => {
  const defaultEmployee = {
    id: 1,
    name: 'name',
  };

  describe('Route GET /employee', () => {
    it('Should return a list of employees', (done) => {
      request
          .get('/employee')
          .end((err, res) => {
            expect(res.body[0].id).to.be.eql(defaultEmployee.id);
            expect(res.body[0].name).to.be.eql(defaultEmployee.name);
            done(err);
          });
    });
  });
});
