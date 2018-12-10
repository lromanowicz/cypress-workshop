describe('Using fixtures and aliases', function() {
	beforeEach(function() {
		cy.fixture('user.json').as('user');
	});

	it('Should get user.json content', function() {
		cy.visit('login');
		cy.fixture('user.json').then(user => {
			cy.get('#username')
				.type(user.username)
				.should('have.value', user.username);
			cy.get('#password')
				.type(user.password)
				.should('have.value', user.password);
		});
	});

	it('Should use user.json alias - sharing context', function() {
		cy.visit('login');
		cy.get('#username')
			.type(this.user.username)
			.should('have.value', this.user.username);
		cy.get('#password')
			.type(this.user.password)
			.should('have.value', this.user.password);
	});

	it('Should alias a web element', function() {
		cy.visit('login');
		cy.get('#username').as('login');
		cy.get('#password').as('pwd');

		cy.get('@login')
			.type(this.user.username)
			.should('have.value', this.user.username);
		cy.get('@pwd')
			.type(this.user.password)
			.should('have.value', this.user.password);
	});

	it.only('Should change data received from user.json', function() {
		cy.visit('login');
		cy.fixture('user.json').then(user => {
			user.username = 'johnSnow';
			user.password = 'snowJohn';

			cy.get('#username')
				.type(user.username)
				.should('have.value', user.username);
			cy.get('#password')
				.type(user.password)
				.should('have.value', user.password);
		});
	});
});
