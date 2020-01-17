import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';

import Card from '../components/Card/Component';

storiesOf('Card', module)
	.add('Minimum', () => {
		const title = text('Title', 'Cloud service');
		const status = object('Status', { ok: true, string: '12/12' });

		return (
			<Card
				title={title}
				status={status}
			/>
		);
	});
