const Employee = require('../lib/Employee');

describe('Initialization', () => {
  it("Should create object with name, id and email if provided", () => {
    const employee = new Employee('JJ', '8055', 'jgault87@gmail.com');

   
    expect(employee.name).toEqual("JJ");
    expect(employee.id).toEqual("8055");
    expect(employee.email).toEqual("jgault87@gmail.com");
  })

  it("Functions should return inherited methods", () => {
    const employee = new Employee('JJ', '8055', 'jgault87@gmail.com');

    // Verify that class functions return constructor inputs when called
    expect(employee.getName()).toEqual(employee.name);
    expect(employee.getId()).toEqual(employee.id);
    expect(employee.getEmail()).toEqual(employee.email);
  })

  it("getRole should return 'Employee'", () => {
    const employee = new Employee('JJ', '8055', 'jgault87@gmail.com');

    // Verify that getRole function returns 'Employee'
    expect(employee.getRole()).toEqual('Employee');
  })
});