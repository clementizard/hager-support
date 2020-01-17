import specTitle from 'cypress-sonarqube-reporter/specTitle';

import Metric from '../../services/Weather/mock';
import { formatNewWeather } from '../../services/Weather/functions';
import mockUser from '../../services/User/mock_user';
import mockInstall from '../../services/User/mock_installations';

const { mockUrl } = Cypress.env();

describe(specTitle('Dashboard'), () => {
	beforeEach(() => {
		cy.viewport(1440, 900);
		cy.server();
		cy.route({
			url: mockUrl,
			method: 'GET',
			response: Metric,
		});
		cy.route({
			url: `${mockUrl}/users/09741964-73a3-472b-99a9-e53b73fe9174`,
			method: 'GET',
			response: mockUser.find(user => user.id === '09741964-73a3-472b-99a9-e53b73fe9174'),
		});
		cy.route({
			url: `${mockUrl}/users/09741964-73a3-472b-99a9-e53b73fe9174/installations`,
			method: 'GET',
			response: mockInstall.filter(install => install.userId === '09741964-73a3-472b-99a9-e53b73fe9174'),
		});
		cy.visit('/');
	});
	it('checks language settings change', () => {
		cy.get('[data-cy=dashboard-title]').should('contain', 'Weather Services');
		cy.get('[data-cy=settings-btn]').click();
		cy.get('[data-cy=language-select-label]').should('contain', 'Language');
		cy.get('[data-cy=language-select]').click();
		cy.get('[data-cy=language-select-value-fr]').click();
		cy.get('[data-cy=settings-dialog-ok]').click();
		cy.get('[data-cy=dashboard-title]').should('contain', 'Météo des services');
	});
	it('check first card', () => {
		const mock = formatNewWeather(Metric);
		const identifier = mock[0].title.replace(/\s+/g, '');

		// First card check
		cy.get(`[data-cy=title-${identifier}]`).should('contain', mock[0].title);
		cy.get(`[data-cy=container-${identifier}]`).should('contain', mock[0].offServices[0].name);
		cy.get(`[data-cy=extendBtn-${identifier}]`).click();
		cy.get(`[data-cy=container-${identifier}]`).should('not.contain', mock[0].offServices[0].name);
	});
	it('change page to add user', () => {
		cy.get('[data-cy=add-user-btn]').click();
		cy.url().should('eq', 'http://localhost:3000/user');
	});
});
