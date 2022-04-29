const Intern = require('../lib/Intern');

describe('Testing Intern', () => { 
    describe('Can instantiate a new intern', () => {
        it('should be able to create a new intern', () => {
            const intern = new Intern();
            expect(typeof(intern)).toBe('object')
        })
    })

    describe('Can set properties via constructor', () => {
        // change to github
        it('should be able to set an email via constructor', () => {
            const email = 'jj@test.com';
            const intern = new Intern('JJ', 1, email)
            expect(intern.email).toBe(email)
        })
    })

    describe('Can use intern methods', () => {
        
        it('should be able to get an office num via getSchool()', () => {
            const school = 'University of Denver';
            const intern = new Intern('JJ', 1, 'jj@test.com', school)
            expect(intern.getSchool()).toBe(school)
        })
        it("should always return 'Intern' via getRole()", () => {
            const role = 'Intern';
            const intern = new Intern()
            expect(intern.getRole()).toBe(role)
        })
    })
})