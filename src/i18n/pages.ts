import type { Locale } from './ui';

/**
 * Page names in the address bar. The key is the Finnish name, which is also the
 * file name under src/pages/fi/. The value is the English name, which is the
 * file name under src/pages/en/. A new page needs a line here and a file in both folders.
 */
export const englishPageNames = {
	vapaaehtoiset: 'volunteers',
	saannot: 'rules',
	tietosuoja: 'privacy',
	palvelut: 'services',
	blogi: 'blog',
} as const;

export type PageName = keyof typeof englishPageNames;

const pageNames = Object.keys(englishPageNames) as PageName[];

/** Path of a page in the given language: ('en', 'blogi', 'post') gives 'blog/post'. */
export function pagePath(locale: Locale, page: PageName, rest?: string) {
	const name = locale === 'en' ? englishPageNames[page] : page;
	return rest ? `${name}/${rest}` : name;
}

/** The same path in another language. Only the page name changes; anything after it stays. */
export function translatePath(path: string, locale: Locale) {
	const [first, ...rest] = path.split('/');
	const page = pageNames.find((name) => name === first || englishPageNames[name] === first);
	return page ? pagePath(locale, page, rest.join('/')) : path;
}
