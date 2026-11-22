import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Posts are either the association's own writing or a partner's.
const blogi = defineCollection({
	loader: glob({
		pattern: '**/*.{md,mdx}',
		base: './src/content/blogi',
	}),
	schema: z.discriminatedUnion('kind', [
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			locale: z.enum(['fi', 'en']),
			kind: z.literal('association'),
		}),
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			locale: z.enum(['fi', 'en']),
			kind: z.literal('partner'),
			partner: z.string(),
			partnerUrl: z.string().url().optional(),
		}),
	]),
});

// One file per member organisation. The guide in this folder is not an entry.
const palvelut = defineCollection({
	loader: glob({
		pattern: ['*.md', '!OHJE.md'],
		base: './src/content/palvelut',
	}),
	schema: z.object({
		name: z.string().min(1),
		url: z.string().url(),
		kind: z.enum(['yritys', 'julkinen', 'kumppani']),
		summary: z.object({
			fi: z.string().min(1).max(280),
			en: z.string().min(1).max(280).optional(),
		}),
	}),
});

export const collections = { blogi, palvelut };
