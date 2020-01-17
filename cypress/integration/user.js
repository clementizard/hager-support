import specTitle from 'cypress-sonarqube-reporter/specTitle';

import Metric from '../../services/Weather/mock';
import mockUser from '../../services/User/mock_user';
import mockInstall from '../../services/User/mock_installations';
import mockDevices from '../../services/User/mock_devices';
import { formatNewWeather } from '../../services/Weather/functions';

const { mockUrl } = Cypress.env();

describe(specTitle('UserAdd'), () => {
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
		cy.visit('/user');
	});
	
	it('check app bar', () => {
		const mock = formatNewWeather(Metric);
		const identifier = mock[0].title.replace(/\s+/g, '');
		const identifier2 = mock[1].title.replace(/\s+/g, '');
		
		cy.get(`[data-cy=service-btn-${identifier}]`).should('contain', mock[0].title);
		cy.get(`[data-cy=details-${identifier}]`).should('have.css', 'display', 'none');
		cy.get(`[data-cy=title-${identifier}]`).should('not.be.visible');
		cy.get(`[data-cy=service-btn-${identifier}]`).click();
		cy.get(`[data-cy=details-${identifier}]`).should('have.css', 'display', 'block');
		cy.get(`[data-cy=title-${identifier}]`).should('be.visible');
		cy.get(`[data-cy=service-btn-${identifier2}]`).click();
		cy.get(`[data-cy=title-${identifier2}]`).should('be.visible');
		cy.get(`[data-cy=service-btn-${identifier2}]`).click();
		cy.get(`[data-cy=details-${identifier2}]`).should('have.css', 'display', 'none');
		cy.get(`[data-cy=title-${identifier2}]`).should('not.be.visible');
	});
	it('check form', () => {
		cy.get('[data-cy=input-id]').as('idInput');
		cy.get('[data-cy=submit-btn]').as('submit');
		cy.get('@idInput').should('have.focus');
		cy.get('@submit').should('be.disabled');
		cy.get('@idInput').type('09741964-73a3-472b-99a9-e53b73fe9174');
		cy.get('@submit').should('not.be.disabled');
		cy.get('@submit').click();
		
		cy.url().should('eq', 'http://localhost:3000/user/09741964-73a3-472b-99a9-e53b73fe9174');
		// cy.get('[data-cy=add-user-btn]').click();
		// cy.url().should('eq', 'http://localhost:3000/user');
	});
});
