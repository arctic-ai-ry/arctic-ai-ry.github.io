export const locales = ['fi', 'en'] as const;

export type Locale = (typeof locales)[number];

export interface NavItem {
	id: string;
	label: string;
	path?: string;
}

export interface NamedText {
	title: string;
	body: string;
}

export interface FeeRow {
	label: string;
	note?: string;
	amount: string;
}

export interface IconText extends NamedText {
	icon: string;
}

export const discordInviteUrl = 'https://discord.gg/yBsyDP3S3H';

/**
 * Volunteer signup form. Both language versions use this address.
 * Leave empty until the form exists.
 */
export const volunteerFormUrl = '';

export const contactEmail = 'elina.heikkinen@logean.com';

export interface SocialLink {
	label: string;
	href: string;
	icon: string;
}

/** External profiles. Add further networks here when they exist. */
export const socials: SocialLink[] = [
	{
		label: 'GitHub',
		href: 'https://github.com/arctic-ai-ry',
		icon: 'lucide:github',
	},
];

export interface SiteCopy {
	locale: Locale;
	htmlLang: 'fi' | 'en';
	ogLocale: 'fi_FI' | 'en_GB';
	description: string;
	skip: string;
	navLabel: string;
	languageLabel: string;
	nav: NavItem[];
	heroEyebrow: string;
	heroTitle: string;
	heroLead: string;
	tagline: string;
	ctaMembership: string;
	ctaActivity: string;
	logoAlt: string;
	visionLabel: string;
	vision: string;
	purposeTitle: string;
	purposeBody: string;
	pillars: NamedText[];
	activityTitle: string;
	activityLead: string;
	activities: NamedText[];
	activityNote: string;
	audienceTitle: string;
	audienceLead: string;
	audiences: NamedText[];
	membershipTitle: string;
	membershipLead: string;
	membershipCta: string;
	membershipFormUrl: string;
	opensInNewTab: string;
	feesCaption: string;
	feeClass: string;
	feeAmount: string;
	fees: FeeRow[];
	membershipNote: string;
	discordTitle: string;
	discordLead: string;
	discordCta: string;
	discordLanguageNote?: string;
	discordPoints: IconText[];
	businessId: string;
	domicile: string;
	founded: string;
	board: string;
	contact: string;
	rulesLabel: string;
	privacyLabel: string;
	blogLabel: string;
	blogTitle: string;
	blogLead: string;
	publishedLabel: string;
	blogOwnHeading: string;
	blogPartnerHeading: string;
	blogOwnLabel: string;
	blogPartnerLabel: string;
	socialLabel: string;
	volunteerNav: string;
	volunteerBrief: string;
	volunteerTitle: string;
	volunteerDescription: string;
	volunteerLead: string;
	volunteerTasks: IconText[];
	volunteerHowTitle: string;
	volunteerHow: string;
	volunteerCtaTitle: string;
	volunteerCtaLead: string;
	volunteerCta: string;
	volunteerFormPending: string;
	volunteerEmailLabel: string;
}

export const ui: Record<Locale, SiteCopy> = {
	fi: {
		locale: 'fi',
		htmlLang: 'fi',
		ogLocale: 'fi_FI',
		description:
			'Arctic AI Association ry on oululainen yhdistys, joka vie tekoälyn puheista tuotantoon Pohjois-Suomessa.',
		skip: 'Siirry sisältöön',
		navLabel: 'Sivun osiot',
		languageLabel: 'Kieli',
		nav: [
			{ id: 'tarkoitus', label: 'Tarkoitus' },
			{ id: 'toiminta', label: 'Toiminta' },
			{ id: 'kenelle', label: 'Kenelle' },
			{ id: 'jasenyys', label: 'Jäsenyys' },
			{ id: 'blogi', label: 'Blogi', path: 'blogi' },
		],
		heroEyebrow: 'Rekisteröity yhdistys · Oulu',
		heroTitle: 'Viemme tekoälyn puheista tuotantoon.',
		heroLead:
			'Arctic AI Association ry on riippumaton yhteisö. Kokoamme Pohjois-Suomen yritykset, osaajat, tutkimuksen ja julkisen sektorin hyödyntämään tekoälyä käytännössä.',
		tagline: 'Pohjoisen älyä – arjessa ja maailmalla.',
		ctaMembership: 'Jäsenyys',
		ctaActivity: 'Mitä teemme',
		logoAlt: 'Arctic AI',
		visionLabel: 'Visio.',
		vision: 'Oulusta Pohjolan tekoälykeskus.',
		purposeTitle: 'Miksi yhdistys on olemassa',
		purposeBody:
			'Yhdistys edistää tekoälyn ja älykkäiden järjestelmien tuntemusta, tutkimusta ja osaamista sekä niiden vastuullista, turvallista ja eettisesti kestävää käyttöä. Se on asiantuntijoiden, tutkijoiden, opiskelijoiden, yritysten, koulujen ja julkisten toimijoiden verkosto erityisesti Pohjois-Suomessa.',
		pillars: [
			{
				title: 'Tekeminen edellä',
				body: 'Pilotit, prototyypit ja käyttöönotot. Tavoitteena ovat ratkaisut, jotka päätyvät käyttöön.',
			},
			{
				title: 'Neutraali alusta',
				body: 'Yhdistys palvelee koko alueen etua. Kaupallinen myynti pidetään erillään aatteellisesta toiminnasta.',
			},
			{
				title: 'Näytämme itse',
				body: 'Jaamme jäsenille ratkaisuja, joita käytämme omassa arjessamme, myös hallinnon rutiineissa.',
			},
		],
		activityTitle: 'Mitä teemme',
		activityLead:
			'Verkostoituminen on tärkein. Osaaminen, kokeilut ja sääntely ovat suuntia, jotka muotoutuvat jäsenistön kanssa.',
		activities: [
			{
				title: 'Verkosto',
				body: 'Kohtaamisia, joissa yritykset, osaajat, tutkimus ja julkinen sektori löytävät toisensa.',
			},
			{
				title: 'Osaaminen',
				body: 'Koulutuksia ja työpajoja, myös tekoälylukutaidon tueksi.',
			},
			{
				title: 'Kokeilut',
				body: 'Tekoälyn viemistä kokeiluista käyttöön.',
			},
			{
				title: 'Sääntely',
				body: 'Keskustelua tekoälyasetuksesta, tekijänoikeuksista ja datasuvereniteetista.',
			},
		],
		activityNote:
			'Verkostoa kootaan Pohjois-Suomessa. Tekoäly kytkeytyy alueen vahvuuksiin: terveysteknologiaan, älykkääseen teollisuuteen, arktiseen logistiikkaan, matkailuun sekä puolustus- ja kaksikäyttöteknologiaan.',
		audienceTitle: 'Kenelle',
		audienceLead:
			'Pääpaino on organisaatioissa, koska suurin vaikutus syntyy työn ja liiketoiminnan kautta. Mukaan ovat tervetulleita kaikki tekoälystä kiinnostuneet.',
		audiences: [
			{
				title: 'Yritykset',
				body: 'Koulutusta, sääntelytukea, rahoitusneuvontaa ja oppia muiden kokemuksista.',
			},
			{
				title: 'Startupit',
				body: 'Näkyvyyttä, verkostoja ja tilaisuuksia esitellä omia ratkaisuja.',
			},
			{
				title: 'Tekoälyammattilaiset ja kehittäjät',
				body: 'Työpajoja, vertaistukea ja ammatillinen verkosto.',
			},
			{
				title: 'Tutkijat, opiskelijat ja oppilaitokset',
				body: 'Hackathoneja, opinnäyte- ja harjoitteluyhteyksiä sekä reitti yrityksiin.',
			},
			{
				title: 'Julkinen sektori',
				body: 'Neutraali asiantuntijakumppani elinkeinoelämän ja julkisten tekoälyratkaisujen tueksi.',
			},
			{
				title: 'Työntekijät ja muut yksityishenkilöt',
				body: 'Osaamista ja keinoja käyttää tekoälyä omassa työssä.',
			},
		],
		membershipTitle: 'Jäsenyys',
		membershipLead:
			'Jäseneksi voi liittyä henkilö tai yhteisö, joka hyväksyy yhdistyksen tarkoituksen ja säännöt. Hallitus hyväksyy varsinaiset jäsenet ja kannattajajäsenet hakemuksesta.',
		membershipCta: 'Hae jäsenyyttä',
		membershipFormUrl: 'https://forms.gle/5Ns3Y9PgondNUw9v8',
		opensInNewTab: '(avautuu uuteen välilehteen)',
		feesCaption: 'Jäsenmaksut kaudelle 14.10.2026–31.12.2027',
		feeClass: 'Jäsenluokka',
		feeAmount: 'Vuosimaksu',
		fees: [
			{ label: 'Henkilöjäsen', amount: '20 €' },
			{ label: 'Opiskelija- tai eläkeläisjäsen', amount: '10 €' },
			{ label: 'Yritys, liikevaihto enintään 1 milj. €', amount: '50 €' },
			{ label: 'Yritys, liikevaihto yli 1 milj. €', amount: '200 €' },
			{
				label: 'Muu yleishyödyllinen toimija',
				note: 'Koulut, kunnat, tutkimuslaitokset ja yhdistykset',
				amount: '200 €',
			},
			{ label: 'Kannattajajäsen, henkilö', amount: '20 €' },
			{ label: 'Kannattajajäsen, yhteisö', amount: '200 €' },
		],
		membershipNote:
			'Kannattajajäsenellä on kokouksissa läsnäolo- ja puheoikeus. Varsinaisella jäsenellä on myös äänioikeus.',
		discordTitle: 'Tule mukaan Discordiin',
		discordLead: 'Kaikki tekoälystä aiheena kiinnostuneet ovat tervetulleita yhdistyksen Discordiin.',
		discordCta: 'Liity Discordiin',
		discordPoints: [
			{
				icon: 'lucide:messages-square',
				title: 'Keskustele tekoälystä',
				body: 'Kysy, kerro omista kokeiluistasi ja kuule, mitä muut tekevät.',
			},
			{
				icon: 'lucide:sprout',
				title: 'Kokemusta ei tarvita',
				body: 'Aloittelijat ja alan ammattilaiset ovat yhtä lailla tervetulleita.',
			},
			{
				icon: 'lucide:user-check',
				title: 'Avoin kaikille',
				body: 'Voit liittyä Discordiin, vaikka vasta harkitsisit jäsenyyttä.',
			},
		],
		businessId: 'Y-tunnus 3663885-8',
		domicile: 'Kotipaikka Oulu',
		founded: 'Perustettu 14.10.2026',
		board:
			'Hallitus: Elina Heikkinen (puheenjohtaja), Janne Ikola, Kari Vierimaa, Teuvo Virsu, Pekka Salo ja Satu Nikula. Varajäsen Petteri Heikkinen.',
		contact: 'Yhteys: elina.heikkinen@logean.com',
		rulesLabel: 'Yhdistyksen säännöt',
		privacyLabel: 'Tietosuoja',
		blogLabel: 'Blogi',
		blogTitle: 'Blogi',
		blogLead: 'Yhdistyksen omia kirjoituksia ja yhteistyökumppaneiden tekstejä.',
		publishedLabel: 'Julkaistu',
		blogOwnHeading: 'Yhdistyksen kirjoitukset',
		blogPartnerHeading: 'Yhteistyökumppaneiden kirjoitukset',
		blogOwnLabel: 'Yhdistys',
		blogPartnerLabel: 'Kumppani',
		socialLabel: 'Kanavat',
		volunteerNav: 'Vapaaehtoiseksi',
		volunteerBrief: 'Etsimme vapaaehtoisia tapahtumiin, tapaamisiin ja viestintään.',
		volunteerTitle: 'Tule tekemään tätä kanssamme',
		volunteerDescription:
			'Arctic AI Association ry etsii vapaaehtoisia tapahtumiin, tapaamisiin ja viestintään.',
		volunteerLead:
			'Etsimme vapaaehtoisia mukaan yhdistyksen toimintaan. Työtä on tapahtumissa, tapaamisissa ja viestinnässä. Kokemusta tekoälystä ei tarvita, eikä jäsenyyttäkään.',
		volunteerTasks: [
			{
				icon: 'lucide:calendar-days',
				title: 'Tapahtumat',
				body: 'Ovet, ilmoittautumiset, tilan laitto. Sellainen työ, jota ilman ilta ei käynnisty.',
			},
			{
				icon: 'lucide:presentation',
				title: 'Tapaamiset',
				body: 'Voit vetää työpajan tai olla mukana niin, että muut pääsevät alkuun.',
			},
			{
				icon: 'lucide:megaphone',
				title: 'Viestintä',
				body: 'Julkaisut, sivujen tekstit tai Discord. Kerrot, mitä yhdistyksessä tapahtuu.',
			},
			{
				icon: 'lucide:users',
				title: 'Verkosto',
				body: 'Tunnet ihmisiä Pohjois-Suomessa ja tuot heidät samaan pöytään.',
			},
		],
		volunteerHowTitle: 'Miten tämä toimii',
		volunteerHow:
			'Kerro lomakkeella, mistä olet kiinnostunut. Otamme yhteyttä, kun on jotain tehtävää. Yksi ilta tai yksi tapahtuma riittää alkuun. Jatkosta sovitaan sen mukaan, mitä ehdit.',
		volunteerCtaTitle: 'Ilmoittaudu',
		volunteerCtaLead: 'Kerro, missä haluat olla mukana.',
		volunteerCta: 'Ilmoittaudu vapaaehtoiseksi',
		volunteerFormPending:
			'Ilmoittautumislomake ei ole vielä auki. Linkki julkaistaan tällä sivulla heti, kun lomake on valmis.',
		volunteerEmailLabel: 'Sillä välin voit laittaa viestiä',
	},
	en: {
		locale: 'en',
		htmlLang: 'en',
		ogLocale: 'en_GB',
		description:
			'Arctic AI Association ry is an association based in Oulu that takes AI from talk into production in Northern Finland.',
		skip: 'Skip to content',
		navLabel: 'On this page',
		languageLabel: 'Language',
		nav: [
			{ id: 'purpose', label: 'Purpose' },
			{ id: 'work', label: 'What we do' },
			{ id: 'audience', label: 'Who it’s for' },
			{ id: 'membership', label: 'Membership' },
			{ id: 'blog', label: 'Blog', path: 'blogi' },
		],
		heroEyebrow: 'Registered association · Oulu',
		heroTitle: 'We take AI from talk into production.',
		heroLead:
			'Arctic AI Association ry is an independent community. We bring together the companies, practitioners, research and public sector of Northern Finland to put artificial intelligence to practical use.',
		tagline: 'Northern intelligence – in everyday life and in the world.',
		ctaMembership: 'Membership',
		ctaActivity: 'What we do',
		logoAlt: 'Arctic AI',
		visionLabel: 'Vision.',
		vision: 'Oulu as the AI centre of the North.',
		purposeTitle: 'Why the association exists',
		purposeBody:
			'The association advances knowledge, research and skills in artificial intelligence and intelligent systems, and their responsible, safe and ethically sound use. It is a network for specialists, researchers, students, companies, schools and public bodies, especially in Northern Finland.',
		pillars: [
			{
				title: 'Doing comes first',
				body: 'Pilots, prototypes and deployments. The aim is solutions that make it into use.',
			},
			{
				title: 'A neutral platform',
				body: 'The association serves the interests of the whole region. Commercial sales stay separate from its nonprofit work.',
			},
			{
				title: 'We show our own work',
				body: 'We share with members the solutions we use in our own day-to-day work, including administrative routines.',
			},
		],
		activityTitle: 'What we do',
		activityLead:
			'Networking comes first. Skills, experiments and regulation are directions that take shape with the membership.',
		activities: [
			{
				title: 'Network',
				body: 'Meetings where companies, practitioners, research and the public sector find each other.',
			},
			{
				title: 'Skills',
				body: 'Training and workshops, including support for AI literacy.',
			},
			{
				title: 'Experiments',
				body: 'Taking AI from experiments into use.',
			},
			{
				title: 'Regulation',
				body: 'Discussion of the AI Act, copyright and data sovereignty.',
			},
		],
		activityNote:
			'A network is being built in Northern Finland. AI connects with the strengths of the region: health technology, intelligent industry, Arctic logistics, tourism, and defence and dual-use technology.',
		audienceTitle: 'Who it’s for',
		audienceLead:
			'The main focus is organisations, because the greatest impact comes through work and business. Everyone interested in AI is welcome.',
		audiences: [
			{
				title: 'Companies',
				body: 'Training, regulatory support, funding advice and lessons from the experience of others.',
			},
			{
				title: 'Startups',
				body: 'Visibility, networks and opportunities to present their own solutions.',
			},
			{
				title: 'AI professionals and developers',
				body: 'Workshops, peer support and a professional network.',
			},
			{
				title: 'Researchers, students and educational institutions',
				body: 'Hackathons, thesis and internship connections, and a path to companies.',
			},
			{
				title: 'Public sector',
				body: 'A neutral expert partner for business and public-sector AI solutions.',
			},
			{
				title: 'Employees and other individuals',
				body: 'Skills and ways to use AI in their own work.',
			},
		],
		membershipTitle: 'Membership',
		membershipLead:
			'A person or an organisation that accepts the association’s purpose and rules may join. The board accepts full members and supporting members on application.',
		membershipCta: 'Apply for membership',
		membershipFormUrl: 'https://forms.gle/F3dEfpvxGnT6xL6h6',
		opensInNewTab: '(opens in a new tab)',
		feesCaption: 'Membership fees for 14 October 2026–31 December 2027',
		feeClass: 'Member class',
		feeAmount: 'Annual fee',
		fees: [
			{ label: 'Individual member', amount: '20 €' },
			{ label: 'Student or pensioner member', amount: '10 €' },
			{ label: 'Company, turnover up to €1 million', amount: '50 €' },
			{ label: 'Company, turnover over €1 million', amount: '200 €' },
			{
				label: 'Other nonprofit organisation',
				note: 'Schools, municipalities, research institutes and associations',
				amount: '200 €',
			},
			{ label: 'Supporting member, individual', amount: '20 €' },
			{ label: 'Supporting member, organisation', amount: '200 €' },
		],
		membershipNote:
			'A supporting member may attend meetings and speak. A full member also has the right to vote.',
		discordTitle: 'Join us on Discord',
		discordLead: 'Everyone interested in AI as a topic is welcome on the association’s Discord.',
		discordCta: 'Join the Discord',
		discordLanguageNote: 'A fair warning: people on our Discord speak Finnish. Everyone is welcome all the same.',
		discordPoints: [
			{
				icon: 'lucide:messages-square',
				title: 'Talk about AI',
				body: 'Ask questions, share what you are trying and hear what others are doing.',
			},
			{
				icon: 'lucide:sprout',
				title: 'No experience needed',
				body: 'Beginners and professionals are equally welcome.',
			},
			{
				icon: 'lucide:user-check',
				title: 'Open to everyone',
				body: 'You can join the Discord even if you’re only considering membership.',
			},
		],
		businessId: 'Business ID 3663885-8',
		domicile: 'Domicile Oulu',
		founded: 'Founded 14 October 2026',
		board:
			'Board: Elina Heikkinen (chair), Janne Ikola, Kari Vierimaa, Teuvo Virsu, Pekka Salo and Satu Nikula. Deputy member Petteri Heikkinen.',
		contact: 'Contact: elina.heikkinen@logean.com',
		rulesLabel: 'Rules of the association',
		privacyLabel: 'Privacy',
		blogLabel: 'Blog',
		blogTitle: 'Blog',
		blogLead: 'Writing from the association and from its partners.',
		publishedLabel: 'Published',
		blogOwnHeading: 'From the association',
		blogPartnerHeading: 'From partners',
		blogOwnLabel: 'Association',
		blogPartnerLabel: 'Partner',
		socialLabel: 'Channels',
		volunteerNav: 'Volunteer',
		volunteerBrief: 'We are looking for volunteers for events, meetups and communication.',
		volunteerTitle: 'Come and do this with us',
		volunteerDescription:
			'Arctic AI Association ry is looking for volunteers for events, meetups and communication.',
		volunteerLead:
			'We are looking for volunteers to help run the association. There is work at events, at meetups and in communication. You do not need experience with AI, and you do not need to be a member.',
		volunteerTasks: [
			{
				icon: 'lucide:calendar-days',
				title: 'Events',
				body: 'Doors, registrations, setting up the room. The practical work that gets an evening started.',
			},
			{
				icon: 'lucide:presentation',
				title: 'Meetups',
				body: 'You can run a workshop, or simply be there so others can get started.',
			},
			{
				icon: 'lucide:megaphone',
				title: 'Communication',
				body: 'Posts, text on the site, or Discord. You tell people what the association is doing.',
			},
			{
				icon: 'lucide:users',
				title: 'Network',
				body: 'You know people in Northern Finland and you bring them to the same table.',
			},
		],
		volunteerHowTitle: 'How this works',
		volunteerHow:
			'Tell us on the form what you are interested in. We will be in touch when there is something to do. One evening or one event is enough to start. What happens after that depends on the time you have.',
		volunteerCtaTitle: 'Sign up',
		volunteerCtaLead: 'Tell us where you want to take part.',
		volunteerCta: 'Sign up as a volunteer',
		volunteerFormPending:
			'The signup form is not open yet. The link will be published on this page as soon as the form is ready.',
		volunteerEmailLabel: 'Until then, you can write to',
	},
};
