import { getRelativeLocaleUrl } from 'astro:i18n';
import { pagePath, type PageName } from '../i18n/pages';
import { discordInviteUrl, whatsappInviteUrl, type SiteCopy } from '../i18n/ui';

export interface SiteLink {
	label: string;
	href: string;
	external?: boolean;
	page?: PageName;
}

export interface SiteGroup {
	heading: string;
	links: SiteLink[];
}

export function pageUrl(copy: SiteCopy, page: PageName, rest?: string) {
	return getRelativeLocaleUrl(copy.locale, pagePath(copy.locale, page, rest));
}

export function sectionUrl(copy: SiteCopy, section: keyof SiteCopy['sections']) {
	return `${getRelativeLocaleUrl(copy.locale)}#${copy.sections[section].id}`;
}

/** The links of the header menu. Membership is the button beside them, not a link here. */
export function mainMenu(copy: SiteCopy): SiteLink[] {
	return [
		{ label: copy.sections.activity.label, href: sectionUrl(copy, 'activity') },
		{ label: copy.volunteerNav, href: pageUrl(copy, 'vapaaehtoiset'), page: 'vapaaehtoiset' },
		{ label: copy.directoryNav, href: pageUrl(copy, 'palvelut'), page: 'palvelut' },
		{ label: copy.blogLabel, href: pageUrl(copy, 'blogi'), page: 'blogi' },
	];
}

/** Every page and front-page section, grouped. The footer and the site map page both read this. */
export function siteGroups(copy: SiteCopy): SiteGroup[] {
	const groups = copy.siteMapGroups;
	return [
		{
			heading: groups.about,
			links: [
				{ label: copy.homeLabel, href: getRelativeLocaleUrl(copy.locale) },
				{ label: copy.sections.purpose.label, href: sectionUrl(copy, 'purpose') },
				{ label: copy.sections.activity.label, href: sectionUrl(copy, 'activity') },
				{ label: copy.sections.audience.label, href: sectionUrl(copy, 'audience') },
			],
		},
		{
			heading: groups.join,
			links: [
				{ label: copy.sections.membership.label, href: sectionUrl(copy, 'membership') },
				{ label: copy.volunteerNav, href: pageUrl(copy, 'vapaaehtoiset'), page: 'vapaaehtoiset' },
				{ label: copy.sections.discord.label, href: discordInviteUrl, external: true },
				{ label: 'WhatsApp', href: whatsappInviteUrl, external: true },
			],
		},
		{
			heading: groups.content,
			links: [
				{ label: copy.directoryNav, href: pageUrl(copy, 'palvelut'), page: 'palvelut' },
				{ label: copy.blogLabel, href: pageUrl(copy, 'blogi'), page: 'blogi' },
			],
		},
		{
			heading: groups.info,
			links: [
				{ label: copy.rulesLabel, href: pageUrl(copy, 'saannot'), page: 'saannot' },
				{ label: copy.privacyLabel, href: pageUrl(copy, 'tietosuoja'), page: 'tietosuoja' },
				{ label: copy.siteMapLabel, href: pageUrl(copy, 'sivukartta'), page: 'sivukartta' },
			],
		},
	];
}
