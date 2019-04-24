describe('Making screenshots and videos', function () {
	it('Should take a screenshot and save it', function () {
		cy.visit('checkboxes');
		cy.get('[type=checkbox]')
			.first()
			.check()
			.should('have.attr', 'checked');
		cy.screenshot();

		cy.get('[type=checkbox]')
			.first()
			.uncheck()
			.should('not.have.attr', 'checked');
		cy.screenshot();
	});

	//Videos can only be recorded when running tests from the CLI!!.
});