const Employee = require('../lib/Employee');

// describe 
describe('Testing Employee', () => { 
    describe('Can instantiate a new employee', () => {
        it('should be able to create a new employee', () => {
            const employee = new Employee();
            expect(typeof(employee)).toBe('object')
        })
    })

    describe('Can set properties via constructor', () => {
        it('should be able to set a name via constructor', () => {
            const name = 'JJ';
            const employee = new Employee(name)
            expect(employee.name).toBe(name)
        })
        it('should be able to set an id via constructor', () => {
            const id = 1;
            const employee = new Employee('JJ', id)
            expect(employee.id).toBe(id)
        })
        it('should be able to set an email via constructor', () => {
            const email = 'jj@test.com';
            const employee = new Employee('JJ', 1, email)
            expect(employee.email).toBe(email)
        })
    })

    describe('Can use Employees methods', () => {
        it('should be able to get name property via getName()', () => {
            const name = 'JJ';
            const employee = new Employee(name)
            expect(employee.getName()).toBe(name)
        })
        it('should be able to get id property via getID()', () => {
            const id = 1;
            const employee = new Employee('JJ', id)
            expect(employee.getID()).toBe(id)
        })
        it('should be able to get an email via getEmail()', () => {
            const email = 'jj@test.com';
            const employee = new Employee('JJ', 1, email)
            expect(employee.getEmail()).toBe(email)
        })
        it("should always return 'Employee' via getRole()", () => {
            const role = 'Employee';
            const employee = new Employee('JJ', 1, 'jj@test.com')
            expect(employee.getRole()).toBe(role)
        })
    })
})