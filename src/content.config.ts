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

export const collections = { blogi };
