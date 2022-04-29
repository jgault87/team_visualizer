const Engineer = require('../lib/Engineer');

describe('Testing Engineer', () => { 
    describe('Can instantiate a new engineer', () => {
        it('should be able to create a new engineer', () => {
            const engineer = new Engineer();
            expect(typeof(engineer)).toBe('object')
        })
    })

    describe('Can set properties via constructor', () => {
        // change to github
        it('should be able to set an email via constructor', () => {
            const email = 'jj@test.com';
            const engineer = new Engineer('JJ', 1, email)
            expect(engineer.email).toBe(email)
        })
    })

    describe('Can use Engineers methods', () => {
        
        it('should be able to get an github via getGithub()', () => {
            const github = 'jgault87';
            const engineer = new Engineer('JJ', 1, 'jj@test.com', github)
            expect(engineer.getGithub()).toBe(github)
        })
        it("should always return 'Engineer' via getRole()", () => {
            const role = 'Engineer';
            const engineer = new Engineer()
            expect(engineer.getRole()).toBe(role)
        })
    })
})