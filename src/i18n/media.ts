import type { Locale } from './ui';

export interface MediaFact {
	label: string;
	value: string;
	link?: { href: string; label: string };
}

/** Which approved ground the preview sits on. */
export type LogoGround = 'white' | 'navy' | 'blue';

export interface MediaLogo {
	name: string;
	use: string;
	alt: string;
	svg: string;
	png: string;
	ground: LogoGround;
}

export interface MediaDocument {
	title: string[];
	description: string;
	intro: string;
	factsTitle: string;
	factsCaption: string;
	factLabel: string;
	factValue: string;
	facts: MediaFact[];
	logosTitle: string;
	logosLead: string;
	downloadSvg: string;
	downloadPng: string;
	logos: MediaLogo[];
	contactTitle: string;
	contactLead: string;
	contactName: string;
	contactRole: string;
	contactEmail: string;
}

const discordUrl = 'https://discord.gg/yBsyDP3S3H';

export const media: Record<Locale, MediaDocument> = {
	fi: {
		title: ['Medialle'],
		description:
			'Arctic AI Association ry rakentaa pohjoisen tekoälyverkostoa. Tuomme saman pöydän ääreen Pohjois-Suomen yritykset, osaajat, tutkimuksen ja julkisen sektorin, jotta tekoäly siirtyy puheista käyttöön.',
		intro:
			'Arctic AI Association ry rakentaa pohjoisen tekoälyverkostoa. Tuomme saman pöydän ääreen Pohjois-Suomen yritykset, osaajat, tutkimuksen ja julkisen sektorin, jotta tekoäly siirtyy puheista käyttöön. Olemme riippumaton yhdistys: emme myy mitään emmekä aja kenenkään tuotetta. Tavoitteemme: Oulusta Pohjolan tekoälykeskus.',
		factsTitle: 'Faktat',
		factsCaption: 'Yhdistys',
		factLabel: 'Tieto',
		factValue: 'Arvo',
		facts: [
			{ label: 'Nimi', value: 'Arctic AI Association ry, lyhyesti Arctic AI' },
			{ label: 'Y-tunnus', value: '3663885-8' },
			{ label: 'Kotipaikka', value: 'Oulu' },
			{ label: 'Perustettu', value: '14.10.2026' },
			{ label: 'Rekisteröity', value: 'Yhdistysrekisteriin 20.10.2026' },
			{
				label: 'Jäsenyys',
				value:
					'Avoin henkilölle tai yhteisölle, joka hyväksyy yhdistyksen tarkoituksen ja säännöt. Vuosimaksu 10–200 €.',
			},
			{
				label: 'Discord',
				value: 'Avoin kaikille, jäsenyyttä ei tarvita.',
				link: { href: discordUrl, label: 'discord.gg/yBsyDP3S3H' },
			},
			{ label: 'Verkkosivut', value: '', link: { href: '/fi/', label: 'arcai.fi' } },
		],
		logosTitle: 'Logot',
		logosLead: 'Käytä näitä tiedostoja sellaisenaan. Valitse versio pohjan mukaan.',
		downloadSvg: 'SVG',
		downloadPng: 'PNG',
		logos: [
			{
				name: 'Oletus',
				use: 'Valkoiselle pohjalle.',
				alt: 'Arctic AI, oletuslogo',
				svg: '/brand/arctic-ai-logo.svg',
				png: '/brand/png/arctic-ai-logo.png',
				ground: 'white',
			},
			{
				name: 'Negatiivi',
				use: 'Navy-pohjalle.',
				alt: 'Arctic AI, negatiivilogo',
				svg: '/brand/arctic-ai-logo-negative.svg',
				png: '/brand/png/arctic-ai-logo-negative.png',
				ground: 'navy',
			},
			{
				name: 'Yksivärinen navy',
				use: 'Valkoiselle pohjalle. Leimoihin, vihreälle nauhalle ja pieniin kokoihin.',
				alt: 'Arctic AI, yksivärinen navy-logo',
				svg: '/brand/arctic-ai-logo-navy.svg',
				png: '/brand/png/arctic-ai-logo-navy.png',
				ground: 'white',
			},
			{
				name: 'Yksivärinen valkoinen',
				use: 'Valokuviin ja voimakkaalle värille.',
				alt: 'Arctic AI, yksivärinen valkoinen logo',
				svg: '/brand/arctic-ai-logo-white.svg',
				png: '/brand/png/arctic-ai-logo-white.png',
				ground: 'blue',
			},
		],
		contactTitle: 'Yhteyshenkilö',
		contactLead: 'Median yhteyshenkilö vastaa haastattelupyyntöihin.',
		contactName: 'Elina Heikkinen',
		contactRole: 'Hallituksen puheenjohtaja',
		contactEmail: 'elina.heikkinen@logean.com',
	},
	en: {
		title: ['Media'],
		description:
			'Arctic AI Association ry is building the AI network of Northern Finland. We bring the region’s companies, practitioners, researchers and public sector to the same table, so that AI moves from talk into use.',
		intro:
			'Arctic AI Association ry is building the AI network of Northern Finland. We bring the region’s companies, practitioners, researchers and public sector to the same table, so that AI moves from talk into use. We are an independent association: we sell nothing and promote no one’s product. Our goal: Oulu as the AI centre of the North.',
		factsTitle: 'Facts',
		factsCaption: 'The association',
		factLabel: 'Fact',
		factValue: 'Value',
		facts: [
			{ label: 'Name', value: 'Arctic AI Association ry, Arctic AI for short' },
			{ label: 'Business ID', value: '3663885-8' },
			{ label: 'Registered office', value: 'Oulu, Finland' },
			{ label: 'Founded', value: '14 October 2026' },
			{ label: 'Registered', value: 'Entered in the Register of Associations on 20 October 2026' },
			{
				label: 'Membership',
				value:
					'Open to any person or organisation that accepts the association’s purpose and rules. Annual fee €10–200.',
			},
			{
				label: 'Discord',
				value: 'Open to everyone, no membership needed.',
				link: { href: discordUrl, label: 'discord.gg/yBsyDP3S3H' },
			},
			{ label: 'Website', value: '', link: { href: '/en/', label: 'arcai.fi' } },
		],
		logosTitle: 'Logos',
		logosLead: 'Use these files as they are. Pick the version for the background.',
		downloadSvg: 'SVG',
		downloadPng: 'PNG',
		logos: [
			{
				name: 'Default',
				use: 'For white backgrounds.',
				alt: 'Arctic AI, default logo',
				svg: '/brand/arctic-ai-logo.svg',
				png: '/brand/png/arctic-ai-logo.png',
				ground: 'white',
			},
			{
				name: 'Negative',
				use: 'For navy backgrounds.',
				alt: 'Arctic AI, negative logo',
				svg: '/brand/arctic-ai-logo-negative.svg',
				png: '/brand/png/arctic-ai-logo-negative.png',
				ground: 'navy',
			},
			{
				name: 'One colour, navy',
				use: 'For white backgrounds, stamps, the green band and very small sizes.',
				alt: 'Arctic AI, one-colour navy logo',
				svg: '/brand/arctic-ai-logo-navy.svg',
				png: '/brand/png/arctic-ai-logo-navy.png',
				ground: 'white',
			},
			{
				name: 'One colour, white',
				use: 'For photos and strong colour.',
				alt: 'Arctic AI, one-colour white logo',
				svg: '/brand/arctic-ai-logo-white.svg',
				png: '/brand/png/arctic-ai-logo-white.png',
				ground: 'blue',
			},
		],
		contactTitle: 'Media contact',
		contactLead: 'The media contact answers requests for interviews.',
		contactName: 'Elina Heikkinen',
		contactRole: 'Chair of the Board',
		contactEmail: 'elina.heikkinen@logean.com',
	},
};
