import EmployeesController from '../../../controllers/employees';

describe('Controllers: Employees', () => {
  describe('Get all employees: getAll()', () => {
    it('Should return a list of employees', () => {
      const Employees = {
        findAll: td.function(),
      };
      const expectedResponse = [{
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
      }];

      td.when(Employees.findAll({})).thenResolve(expectedResponse);

      const employeeController = new EmployeesController(Employees);
      return employeeController.getAll()
        .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('Get employee by id: getById()', () => {
    it('Should return a employee', () => {
      const Employees = {
        findOne: td.function(),
      };

      const expectedResponse = {
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

      td.when(Employees.findOne({ where: { id: 1 } })).thenResolve(expectedResponse);

      const employeeController = new EmployeesController(Employees);
      return employeeController.getById({ id: 1 })
        .then(response => expect(response.data).to.be.eql(expectedResponse));
    });
  });

  describe('Create a employee: create()', () => {
    it('Should create a employee', () => {
      const Employees = {
        create: td.function(),
      };

      const requestBody = {
        occupation: 1,
        email: 'test@mail.com',
      };

      const expectedResponse = {
        occupation: 1,
        email: 'test@mail.com',
      };


      td.when(Employees.create(requestBody)).thenResolve(expectedResponse);

      const employeeController = new EmployeesController(Employees);
      return employeeController.create(requestBody)
        .then((response) => {
          expect(response.statusCode).to.be.eql(201);
          expect(response.data).to.be.eql(expectedResponse);
        });
    });
  });

  describe('Update a employee: update()', () => {
    it('Should update a employee', () => {
      const Employees = {
        update: td.function(),
      };

      const requestBody = {
        id: 1,
        name: 'Calvin',
      };

      const expectedResponse = {
        name: 'Calvin',
      };

      td.when(Employees.update(requestBody, {
        where: { id: 1 },
      })).thenResolve(expectedResponse);

      const employeeController = new EmployeesController(Employees);
      return employeeController.update(requestBody, { id: 1 })
        .then((response) => {
          expect(response.data).to.be.eql(expectedResponse);
        });
    });
  });

  describe('Delete a employee: delete()', () => {
    it('Should delete a employee', () => {
      const Employees = {
        destroy: td.function(),
      };

      td.when(Employees.destroy({ where: { id: 1 } })).thenResolve({});

      const employeeController = new EmployeesController(Employees);
      return employeeController.delete({ id: 1 })
      .then(response => expect(response.statusCode).to.be.eql(204));
    });
  });
});
