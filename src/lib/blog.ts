import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/ui';

export function postSlug(post: CollectionEntry<'blogi'>) {
	const slug = post.id.split('/').pop();
	if (!slug) {
		throw new Error(`Blog post is missing a slug: ${post.id}`);
	}
	return slug;
}

export async function postsByLocale(locale: Locale) {
	const posts = await getCollection('blogi', ({ data }) => data.locale === locale);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function postsOfKind(posts: CollectionEntry<'blogi'>[], kind: CollectionEntry<'blogi'>['data']['kind']) {
	return posts.filter((post) => post.data.kind === kind);
}

export function formatPostDate(date: Date, locale: Locale) {
	return new Intl.DateTimeFormat(locale === 'fi' ? 'fi-FI' : 'en-GB', {
		day: 'numeric',
		month: locale === 'fi' ? 'numeric' : 'long',
		year: 'numeric',
		timeZone: 'Europe/Helsinki',
	}).format(date);
}
