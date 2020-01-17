import React from 'react';

import { withTranslation } from 'Tools/i18n';
import { propTypes, defaultProps } from './Props';
import {
	Title,
	Container,
	Info,
	Infos,
	InfoTitle,
} from './Styles';

const User = ({
	t,
	firstname,
	lastname,
	email,
	userId,
}) => (
	<Container>
		<Title>{t('userdetails:userPanel.title')}</Title>
		<Infos>
			<InfoTitle>{t('userdetails:userPanel.firstname')}: </InfoTitle>
			<Info data-cy="user-firstname">{firstname}</Info>
			<InfoTitle>{t('userdetails:userPanel.lastname')}: </InfoTitle>
			<Info data-cy="user-lastname">{lastname}</Info>
			<InfoTitle>{t('userdetails:userPanel.email')}: </InfoTitle>
			<Info>{email}</Info>
			<InfoTitle>{t('userdetails:userPanel.myHagerId')}: </InfoTitle>
			<Info>{userId}</Info>
		</Infos>
	</Container>
);
User.propTypes = propTypes;
User.defaultProps = defaultProps;
User.whyDidYouRender = true;

export default withTranslation('userdetails')(User);
