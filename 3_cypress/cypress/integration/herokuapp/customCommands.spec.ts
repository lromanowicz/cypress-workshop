describe('Using Custom Commands', function () {
	beforeEach(function () {
		cy.fixture('user.json').as('user');
	});

	it('Should use signIn() custom command', function () {
		cy.signIn(this.user.username, this.user.password)
			.get('#flash')
			.should('contain', 'Your username is invalid!');
	});

	it('Should use signInWithUserObject() custom command', function () {
		cy.signInWithUserObject(this.user)
			.get('#flash')
			.should('contain', 'Your username is invalid!');
	});
});