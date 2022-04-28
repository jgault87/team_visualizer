// describe('Testing Employee', () => { 
//     describe('Can instantiate a new employee', () => {
//         it('should be able to create a new employee', () => {
//             const employee = new Employee();
//             expect(typeof(employee)).toBe('object')
//         })
//     })

//     describe('Can set properties via constructor', () => {
//         // change to github
//         it('should be able to set an email via constructor', () => {
//             const email = 'jj@test.com';
//             const employee = new Employee('JJ', 1, email)
//             expect(employee.email).toBe(email)
//         })
//     })

//     describe('Can use Employees methods', () => {
//         // change to github
//         it('should be able to get an email via getEmail()', () => {
//             const email = 'jj@test.com';
//             const employee = new Employee('JJ', 1, email)
//             expect(employee.getEmail()).toBe(email)
//         })
//         it("should always return 'Employee' via getRole()", () => {
//             const role = 'Employee';
//             const employee = new Employee('JJ', 1, 'jj@test.com')
//             expect(employee.getRole()).toBe(role)
//         })
//     })
// })