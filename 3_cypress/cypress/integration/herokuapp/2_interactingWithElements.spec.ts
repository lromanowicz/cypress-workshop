describe('Interacting with Web Elements', function() {
	it('Should .click() the element', function() {
		cy.visit('dynamic_controls');
		cy.get('button')
			.contains('Remove')
			.click()
			.should('have.attr', 'disabled');
	});

	it('Should .type() text into the element', function() {
		cy.visit('forgot_password');
		cy.get('#email')
			.type('sampleemail@mailinator.com')
			.should('have.value', 'sampleemail@mailinator.com');
	});

	it('Should .check() and .uncheck() the checkbox', function() {
		cy.visit('checkboxes');
		cy.get('[type=checkbox]')
			.first()
			.check()
			.should('have.attr', 'checked');
		cy.get('[type=checkbox]')
			.first()
			.uncheck()
			.should('not.have.attr', 'checked');
	});

	it('Should .select() an option in the element', function() {
		cy.visit('dropdown');
		cy.get('#dropdown')
			.select('Option 1')
			.should('have.value', '1');
	});

	it('Should .submit() the form', function() {
		cy.visit('login');
		cy.get('#username').type('someusername');
		cy.get('#password').type('somepassword');
		cy.get('form#login').submit();
		cy.get('#flash').should('contain', 'Your username is invalid!');
	});

	it('Should submit the form using ENTER key', function() {
		cy.visit('login');
		cy.get('#username').type('someusername');
		cy.get('#password').type('somepassword{enter}');
		cy.get('#flash').should('contain', 'Your username is invalid!');
	});

	it('Should do actions on yielded subject using .then()', function() {
		cy.visit('entry_ad');
		cy.get('.modal-title')
			.then($title => {
				$title.addClass('new-class');
			})
			.should('have.class', 'new-class')
	});

	[{'username': '123', 'password': '123123'}, {'username': '321', 'password': '321321'}].forEach(data => {
		it(`should not login with username: ${data.username} and password: ${data.password}`, function() {
			cy.visit('login');
			cy.get('#username')
				.type(data.username);
			cy.get('#password')
				.type(data.password);
			cy.get('button').click();

			cy.get('#flash')
				.should('contain', 'Your username is invalid!');
		});
	});
});
