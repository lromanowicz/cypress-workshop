describe('Finding elements', function() {
	it('Should find element with .get() command', function() {
		cy.visit('/');
		cy.get('h1').should('have.text', 'Welcome to the-internet');
	});

	it('Should wait for element to appear', function() {
		cy.visit('dynamic_loading/2');
		cy.get('#start')
			.find('button')
			.click();
		cy.get('#finish')
			.should('have.text', 'Hello World!');
	});

	it('Should find element with .contains() command', function() {
		cy.visit('/');
		cy.contains('Available Examples').should('exist');
	});

	it('Should find "delete" button in first row of table', function() {
		cy.visit('challenging_dom');
		cy.contains('Iuvaret0')
			.parent()
			.contains('delete')
			.should('exist');
	});

	it('Should find first "delete" button the easier way', function() {
		cy.visit('challenging_dom');
		cy.contains('delete')
			.first()
			.should('exist');
	});
});
