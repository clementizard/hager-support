import React from 'react';
import Card from './Component';

export default { title: 'Card' };

export const Minimum = () => (
	<Card
		title="Cloud service"
		status={{
			string: '12/12',
			ok: true,
		}}
	/>
);

