import specTitle from 'cypress-sonarqube-reporter/specTitle';

import Metric from '../../services/Weather/mock';
import mockUser from '../../services/User/mock_user';
import mockInstall from '../../services/User/mock_installations';
import mockDevices from '../../services/User/mock_devices';

const { mockUrl } = Cypress.env();

describe(specTitle('UserDetails'), () => {
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
		cy.route({
			url: `${mockUrl}/users/09741964-73a3-472b-99a9-e53b73fe9174/installations/install3/devices`,
			method: 'GET',
			response: mockDevices.filter(device => device.installId === 'install3'),
		});
		cy.route({
			url: `${mockUrl}/users/09741964-73a3-472b-99a9-e53b73fe9174/installations/install31/devices`,
			method: 'GET',
			response: mockDevices.filter(device => device.installId === 'install31'),
		});
		cy.route({
			url: `${mockUrl}/users/09741964-73a3-472b-99a9-e53b73fe9174/installations/install7/devices`,
			method: 'GET',
			response: mockDevices.filter(device => device.installId === 'install7'),
		});
		cy.route({
			url: `${mockUrl}/users/09741964-73a3-472b-99a9-e53b73fe9174/installations/install71/devices`,
			method: 'GET',
			response: mockDevices.filter(device => device.installId === 'install71'),
		});
		cy.visit('/user/09741964-73a3-472b-99a9-e53b73fe9174');
	});

	it('check device details', () => {
		cy.get('[data-cy=user-firstname]').should('contain', 'John');
		cy.get('[data-cy=user-lastname]').should('contain', 'Doe');
		cy.get('[data-cy=user-detail-install] tbody').within(() => {
			cy.get('tr').eq(3).click();
		});
		cy.get('[data-cy=user-detail-devices] tbody').within(() => {
			cy.get('tr').eq(3).click();
		});
		cy.get('[data-cy=devices-details-PV]').should('contain', 'tri phased');
		cy.get('[data-cy=devices-insights-btn-PV]').click();
		cy.get('[data-cy=devices-insights-PV]').should('contain', 'lastProduction');
	});

	it('reload user then close it', () => {
		cy.get('[data-cy=user-09741964-73a3-472b-99a9-e53b73fe9174]').trigger('mouseover');
		cy.get('[data-cy=user-tooltip-reload-09741964-73a3-472b-99a9-e53b73fe9174]').click();
		cy.get('[data-cy=user-09741964-73a3-472b-99a9-e53b73fe9174]').trigger('mouseover');
		cy.get('[data-cy=user-tooltip-close-09741964-73a3-472b-99a9-e53b73fe9174]').click();
		cy.url().should('eq', 'http://localhost:3000/user');
	});
});
