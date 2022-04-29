const Manager = require('../lib/Manager');

describe('Testing Manager', () => { 
    describe('Can instantiate a new manager', () => {
        it('should be able to create a new manager', () => {
            const manager = new Manager();
            expect(typeof(manager)).toBe('object')
        })
    })

    describe('Can set properties via constructor', () => {
        // change to github
        it('should be able to set an email via constructor', () => {
            const email = 'jj@test.com';
            const manager = new Manager('JJ', 1, email)
            expect(manager.email).toBe(email)
        })
    })

    describe('Can use Managers methods', () => {
        
        it('should be able to get an office num via getOffice()', () => {
            const office = '8805';
            const manager = new Manager('JJ', 1, 'jj@test.com', office)
            expect(manager.getOffice()).toBe(office)
        })
        it("should always return 'Manager' via getRole()", () => {
            const role = 'Manager';
            const manager = new Manager()
            expect(manager.getRole()).toBe(role)
        })
    })
})