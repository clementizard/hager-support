import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
	defaultLanguage: 'en',
	otherLanguages: ['fr'],
	lng: 'en',
	// workaround until next-i18next support public path
	// https://github.com/isaachinman/next-i18next/issues/523
	localePath: !process.browser ? 'public/locales' : 'locales',
	defaultNS: [],
});

export default NextI18NextInstance;
export const {
	appWithTranslation,
	withTranslation,
} = NextI18NextInstance;
