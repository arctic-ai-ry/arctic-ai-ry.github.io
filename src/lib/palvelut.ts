import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/ui';

export type Palvelu = CollectionEntry<'palvelut'>;
export type PalveluKind = Palvelu['data']['kind'];

const kindOrder: PalveluKind[] = ['yritys', 'julkinen', 'kumppani'];

export function palveluSummary(entry: Palvelu, locale: Locale) {
	return entry.data.summary[locale] ?? entry.data.summary.fi;
}

export async function palvelutByKind() {
	const entries = await getCollection('palvelut');
	const byName = (a: Palvelu, b: Palvelu) => a.data.name.localeCompare(b.data.name, 'fi', { sensitivity: 'base' });

	return kindOrder.map((kind) => ({
		kind,
		entries: entries.filter((entry) => entry.data.kind === kind).sort(byName),
	}));
}
