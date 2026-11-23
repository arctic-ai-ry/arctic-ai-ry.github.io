export const locales = ['fi', 'en'] as const;

export type Locale = (typeof locales)[number];

/** A section of the front page: its anchor and its name in menus. */
export interface SectionRef {
	id: string;
	label: string;
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

export const whatsappInviteUrl = 'https://chat.whatsapp.com/FynC9sIxryT2vi4iuSSSca';

export const githubUrl = 'https://github.com/arctic-ai-ry';

export const linkedinUrl = 'https://www.linkedin.com/company/arctic-ai-association/';

export const facebookUrl = 'https://www.facebook.com/arcticaiassociation';

export const contactEmail = 'elina.heikkinen@logean.com';

export interface SiteCopy {
	locale: Locale;
	htmlLang: 'fi' | 'en';
	ogLocale: 'fi_FI' | 'en_GB';
	description: string;
	skip: string;
	navLabel: string;
	menuLabel: string;
	languageLabel: string;
	homeLabel: string;
	sections: {
		purpose: SectionRef;
		activity: SectionRef;
		audience: SectionRef;
		membership: SectionRef;
		discord: SectionRef;
	};
	heroEyebrow: string;
	heroTitle: string;
	heroLead: string;
	tagline: string;
	ctaPrimary: string;
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
	sectorsLead: string;
	sectors: string[];
	audienceTitle: string;
	audienceLead: string;
	audiences: NamedText[];
	membershipTitle: string;
	membershipLead: string;
	/** The call to action on the green band, one array item per line. */
	membershipCta: string[];
	membershipFormUrl: string;
	opensInNewTab: string;
	feesCaption: string;
	feeClass: string;
	feeAmount: string;
	fees: FeeRow[];
	membershipNote: string;
	rulesCta: string;
	discordTitle: string;
	discordLead: string;
	discordCta: string;
	/** The same Discord invitation in both languages. */
	discordInviteUrl: string;
	whatsappCta: string;
	discordLanguageNote?: string;
	discordPoints: NamedText[];
	businessId: string;
	domicile: string;
	founded: string;
	registered: string;
	board: string;
	contactLabel: string;
	rulesLabel: string;
	mediaLabel: string;
	privacyLabel: string;
	blogLabel: string;
	/** Page titles set in the display face are given one array item per line. */
	blogTitle: string[];
	blogLead: string;
	publishedLabel: string;
	blogOwnHeading: string;
	blogPartnerHeading: string;
	blogOwnLabel: string;
	blogPartnerLabel: string;
	directoryNav: string;
	directoryTitle: string[];
	directoryPageTitle: string;
	directoryLead: string;
	directoryDescription: string;
	directoryCompanies: string;
	directoryPublic: string;
	directoryPartners: string;
	directoryVisit: string;
	directoryEmpty: string;
	directoryHowTitle: string;
	directoryHow: string;
	volunteerNav: string;
	volunteerBrief: string;
	volunteerLink: string;
	volunteerTitle: string[];
	volunteerDescription: string;
	volunteerLead: string;
	volunteerRolesTitle: string;
	volunteerRoles: string[];
	/** The line after the named roles: it gets a plus sign, not a ticked box. */
	volunteerRolesExtra: string;
	volunteerRolesMore: string;
	volunteerTasksTitle: string;
	volunteerTasks: NamedText[];
	volunteerOffersTitle: string;
	volunteerOffers: string[];
	volunteerHowTitle: string;
	volunteerHow: string;
	volunteerFacts: string[];
	volunteerCta: string;
	volunteerFormUrl: string;
	siteMapLabel: string;
	siteMapTitle: string[];
	siteMapLead: string;
	siteMapGroups: {
		about: string;
		join: string;
		content: string;
		info: string;
	};
}

export const ui: Record<Locale, SiteCopy> = {
	fi: {
		locale: 'fi',
		htmlLang: 'fi',
		ogLocale: 'fi_FI',
		description:
			'Arctic AI Association ry on oululainen yhdistys, joka rakentaa pohjoisen tekoälyverkostoa ja vie tekoälyn puheista tuotantoon.',
		skip: 'Siirry sisältöön',
		navLabel: 'Päävalikko',
		menuLabel: 'Valikko',
		languageLabel: 'Kieli',
		homeLabel: 'Etusivu',
		sections: {
			purpose: { id: 'tarkoitus', label: 'Tarkoitus' },
			activity: { id: 'toiminta', label: 'Toiminta' },
			audience: { id: 'kenelle', label: 'Kenelle' },
			membership: { id: 'jasenyys', label: 'Jäsenyys' },
			discord: { id: 'discord', label: 'Discord' },
		},
		heroEyebrow: 'Rekisteröity yhdistys · Oulu',
		heroTitle: 'Viemme tekoälyn puheista tuotantoon.',
		heroLead:
			'Arctic AI Association ry on riippumaton yhdistys. Tuomme saman pöydän ääreen Pohjois-Suomen yritykset, osaajat, tutkimuksen ja julkisen sektorin, jotta tekoäly siirtyy puheista käyttöön.',
		tagline: 'Pohjoisen älyä – arjessa ja maailmalla.',
		ctaPrimary: 'Mukaan verkostoon',
		ctaActivity: 'Mitä teemme',
		logoAlt: 'Arctic AI',
		visionLabel: 'Visio.',
		vision: 'Oulusta Pohjolan tekoälykeskus.',
		purposeTitle: 'Miksi olemme olemassa',
		purposeBody:
			'Pohjoisessa on paljon tekoälyosaamista ja vielä enemmän kysymyksiä siitä, miten tekoälyä käytetään työssä. Tuomme ne yhteen. Edistämme tekoälyn tuntemusta, tutkimusta ja osaamista sekä sen vastuullista, turvallista ja eettisesti kestävää käyttöä.',
		pillars: [
			{
				title: 'Tekeminen edellä',
				body: 'Pilotteja, prototyyppejä ja käyttöönottoja. Tavoite on ratkaisu, joka päätyy käyttöön.',
			},
			{
				title: 'Neutraali alusta',
				body: 'Palvelemme koko aluetta. Kaupallinen myynti pysyy erillään yhdistyksen toiminnasta.',
			},
			{
				title: 'Teemme, mitä opetamme',
				body: 'Käytämme tekoälyä omassa työssämme, myös hallinnon rutiineissa, ja jaamme ratkaisut jäsenille.',
			},
		],
		activityTitle: 'Mitä teemme',
		activityLead:
			'Verkosto tulee ensin. Osaaminen, kokeilut ja sääntely ovat suuntia, jotka muotoutuvat jäsenten kanssa.',
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
				body: 'Tekoäly kokeilusta käyttöön.',
			},
			{
				title: 'Sääntely',
				body: 'Keskustelua tekoälyasetuksesta (AI Act), tekijänoikeuksista ja datasuvereniteetista.',
			},
		],
		sectorsLead: 'Tekoäly kytkeytyy pohjoisen vahvuuksiin.',
		sectors: [
			'Terveysteknologia',
			'Älykäs teollisuus',
			'Arktinen logistiikka',
			'Matkailu',
			'Puolustus- ja kaksikäyttöteknologia',
		],
		audienceTitle: 'Kenelle',
		audienceLead:
			'Pääpaino on organisaatioissa, koska suurin vaikutus syntyy työn ja liiketoiminnan kautta. Kaikki tekoälystä kiinnostuneet ovat tervetulleita.',
		audiences: [
			{
				title: 'Yritykset',
				body: 'Koulutusta, sääntelytukea, rahoitusneuvontaa ja muiden yritysten opit.',
			},
			{
				title: 'Startupit',
				body: 'Näkyvyyttä, kontakteja ja tilaisuuksia esitellä omia ratkaisuja.',
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
				body: 'Neutraali asiantuntijakumppani tekoälyratkaisujen tueksi.',
			},
			{
				title: 'Työntekijät ja yksityishenkilöt',
				body: 'Osaamista ja keinoja käyttää tekoälyä omassa työssä.',
			},
		],
		membershipTitle: 'Jäsenyys',
		membershipLead:
			'Jäseneksi voi hakea henkilö tai yhteisö, joka hyväksyy yhdistyksen tarkoituksen ja säännöt. Hallitus hyväksyy varsinaiset jäsenet ja kannattajajäsenet hakemuksesta.',
		membershipCta: ['Hae', 'jäsenyyttä'],
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
		rulesCta: 'Lue säännöt',
		discordTitle: 'Discord ja WhatsApp',
		discordLead:
			'Yhdistyksen Discord ja WhatsApp ovat auki kaikille tekoälystä kiinnostuneille. Liity Discordiin ilman jäsenyyttä, tai hae jäsenyyttä erikseen.',
		discordCta: 'Liity Discordiin',
		discordInviteUrl: 'https://discord.gg/yBsyDP3S3H',
		whatsappCta: 'Liity WhatsApp-yhteisöön',
		discordPoints: [
			{
				title: 'Tuo oma kysymys',
				body: 'Kysy, kerro omista kokeiluistasi ja kuule, mitä muut tekevät.',
			},
			{
				title: 'Kokemusta ei tarvita',
				body: 'Aloittelijat ja ammattilaiset ovat yhtä tervetulleita.',
			},
			{
				title: 'Jäseneksi, kun olet valmis',
				body: 'Tule mukaan heti ja hae jäsenyyttä, kun haluat.',
			},
		],
		businessId: 'Y-tunnus 3663885-8',
		domicile: 'Kotipaikka Oulu',
		founded: 'Perustettu 14.10.2026',
		registered: 'Rekisteröity 20.10.2026',
		board:
			'Hallitus: Elina Heikkinen (puheenjohtaja), Janne Ikola, Kari Vierimaa, Teuvo Virsu, Pekka Salo ja Satu Nikula. Varajäsen Petteri Heikkinen.',
		contactLabel: 'Yhteys',
		rulesLabel: 'Säännöt',
		privacyLabel: 'Tietosuoja',
		mediaLabel: 'Medialle',
		blogLabel: 'Blogi',
		blogTitle: ['Blogi'],
		blogLead: 'Yhdistyksen omia kirjoituksia ja kumppaneiden tekstejä.',
		publishedLabel: 'Julkaistu',
		blogOwnHeading: 'Yhdistyksen kirjoitukset',
		blogPartnerHeading: 'Kumppaneiden kirjoitukset',
		blogOwnLabel: 'Yhdistys',
		blogPartnerLabel: 'Kumppani',
		directoryNav: 'Palvelut',
		directoryTitle: ['Palvelut'],
		directoryPageTitle: 'Palveluluettelo',
		directoryLead:
			'Palveluluettelo esittelee yhdistyksen yritys- ja yhteisöjäsenet, kumppanit sekä heidän palvelunsa.',
		directoryDescription:
			'Arctic AI Association ry:n palveluluettelo: yhdistyksen yritys- ja yhteisöjäsenet, kumppanit sekä heidän palvelunsa.',
		directoryCompanies: 'Yritykset',
		directoryPublic: 'Muut yleishyödylliset toimijat',
		directoryPartners: 'Yhteistyökumppanit',
		directoryVisit: 'Sivusto',
		directoryEmpty: 'Tulossa pian!',
		directoryHowTitle: 'Näin pääset luetteloon',
		directoryHow:
			'Tiedot kysyttiin jäsenhakemuslomakkeella. Jos haluat lisätä tietosi myöhemmin, ota yhteyttä hallitukseen.',
		volunteerNav: 'Vapaaehtoiset',
		volunteerBrief: 'Etsimme vapaaehtoisia tapahtumiin, tapaamisiin ja viestintään.',
		volunteerLink: 'Tule vapaaehtoiseksi',
		volunteerTitle: ['Mukaan', 'rakentamaan'],
		volunteerDescription:
			'Arctic AI Association ry etsii vapaaehtoisia tapahtumiin, tapaamisiin ja viestintään.',
		volunteerLead:
			'Etsimme vapaaehtoisia tapahtumiin, tapaamisiin ja viestintään. Tekoälykokemusta ei tarvita. Voit aloittaa heti ja hakea jäsenyyttä halutessasi.',
		volunteerRolesTitle: 'Etsimme',
		volunteerRoles: [
			'Jäsenkoordinaattori',
			'Tiimien vetäjät',
			'Yhteisön rakentajat',
			'Opiskelijalähettiläät',
		],
		volunteerRolesExtra: 'Tekijöitä moneen muuhunkin tehtävään',
		volunteerRolesMore: 'Tule muovaamaan tekoälyn tulevaisuutta',
		volunteerTasksTitle: 'Missä työtä on',
		volunteerOffersTitle: 'Mitä saat',
		volunteerOffers: [
			'Tittelin ansioluetteloon',
			'Tekoälyprojekteja',
			'Pohjoisen verkoston',
			'Koulutuksia ja tapahtumia',
			'Kunnianhimoisen tiimin',
		],
		volunteerFacts: [
			'Sopii aloittelijalle.',
			'Onnistuu myös englanniksi.',
			'Ikäraja on 15 vuotta.',
			'Hakemus vie kolme minuuttia. Vastaamme kahdessa viikossa.',
		],
		volunteerTasks: [
			{
				title: 'Tapahtumat',
				body: 'Ovet, ilmoittautumiset ja tilan järjestely. Työ, jota ilman ilta ei käynnisty.',
			},
			{
				title: 'Tapaamiset',
				body: 'Vedä työpaja tai auta muita pääsemään alkuun.',
			},
			{
				title: 'Viestintä',
				body: 'Julkaisut, sivujen tekstit ja Discord. Kerrot, mitä yhdistyksessä tapahtuu.',
			},
			{
				title: 'Verkosto',
				body: 'Tunnet ihmisiä Pohjois-Suomessa ja tuot heidät saman pöydän ääreen.',
			},
		],
		volunteerHowTitle: 'Näin se toimii',
		volunteerHow:
			'Kerro lomakkeella, mikä kiinnostaa. Otamme yhteyttä, kun on tekemistä. Yksi ilta tai yksi tapahtuma riittää alkuun. Jatkosta sovitaan sen mukaan, mitä ehdit.',
		volunteerCta: 'Ilmoittaudu',
		volunteerFormUrl: 'https://forms.gle/JU4RqHHPPaeEb6ay6',
		siteMapLabel: 'Sivukartta',
		siteMapTitle: ['Sivukartta'],
		siteMapLead: 'Kaikki sivuston sivut ja etusivun osiot yhdessä paikassa.',
		siteMapGroups: {
			about: 'Yhdistys',
			join: 'Tule mukaan',
			content: 'Sisällöt',
			info: 'Tiedot',
		},
	},
	en: {
		locale: 'en',
		htmlLang: 'en',
		ogLocale: 'en_GB',
		description:
			'Arctic AI Association ry is an association based in Oulu that is building the AI network of Northern Finland and takes AI from talk into production.',
		skip: 'Skip to content',
		navLabel: 'Main menu',
		menuLabel: 'Menu',
		languageLabel: 'Language',
		homeLabel: 'Home',
		sections: {
			purpose: { id: 'purpose', label: 'Purpose' },
			activity: { id: 'work', label: 'What we do' },
			audience: { id: 'audience', label: 'Who it’s for' },
			membership: { id: 'membership', label: 'Membership' },
			discord: { id: 'discord', label: 'Discord' },
		},
		heroEyebrow: 'Registered association · Oulu',
		heroTitle: 'We take AI from talk into production.',
		heroLead:
			'Arctic AI Association ry is an independent association. We bring the companies, practitioners, researchers and public sector of Northern Finland to the same table, so that AI moves from talk into use.',
		tagline: 'Northern intelligence – in everyday life and in the world.',
		ctaPrimary: 'Join the network',
		ctaActivity: 'What we do',
		logoAlt: 'Arctic AI',
		visionLabel: 'Vision.',
		vision: 'Oulu as the AI centre of the North.',
		purposeTitle: 'Why we exist',
		purposeBody:
			'Northern Finland has plenty of AI expertise and even more questions about how to use AI at work. We bring the two together. We advance knowledge, research and skills in AI, and its responsible, safe and ethically sound use.',
		pillars: [
			{
				title: 'Doing comes first',
				body: 'Pilots, prototypes and deployments. The aim is a solution that ends up in use.',
			},
			{
				title: 'Neutral ground',
				body: 'We serve the whole region. Commercial sales stay separate from the association’s work.',
			},
			{
				title: 'We do what we teach',
				body: 'We use AI in our own work, including administrative routines, and share the solutions with members.',
			},
		],
		activityTitle: 'What we do',
		activityLead:
			'The network comes first. Skills, experiments and regulation are directions that take shape with the members.',
		activities: [
			{
				title: 'Network',
				body: 'Meetings where companies, practitioners, research and the public sector find each other.',
			},
			{
				title: 'Skills',
				body: 'Training and workshops, including AI literacy.',
			},
			{
				title: 'Experiments',
				body: 'AI from trial into use.',
			},
			{
				title: 'Regulation',
				body: 'Discussion of the EU AI Act, copyright and data sovereignty.',
			},
		],
		sectorsLead: 'AI meets the strengths of the North.',
		sectors: [
			'Health technology',
			'Intelligent industry',
			'Arctic logistics',
			'Tourism',
			'Defence and dual-use technology',
		],
		audienceTitle: 'Who it’s for',
		audienceLead:
			'The main focus is organisations, because the greatest impact comes through work and business. Everyone interested in AI is welcome.',
		audiences: [
			{
				title: 'Companies',
				body: 'Training, regulatory support, funding advice, and what other companies have learned.',
			},
			{
				title: 'Startups',
				body: 'Visibility, contacts, and chances to show their own solutions.',
			},
			{
				title: 'AI professionals and developers',
				body: 'Workshops, peer support and a professional network.',
			},
			{
				title: 'Researchers, students and schools',
				body: 'Hackathons, thesis and internship contacts, and a way to companies.',
			},
			{
				title: 'Public sector',
				body: 'A neutral expert partner for AI solutions.',
			},
			{
				title: 'Employees and individuals',
				body: 'Skills, and ways to use AI in their own work.',
			},
		],
		membershipTitle: 'Membership',
		membershipLead:
			'Any person or organisation that accepts the association’s purpose and rules can apply. The board accepts full members and supporting members on application.',
		membershipCta: ['Apply for', 'membership'],
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
		rulesCta: 'Read the rules',
		discordTitle: 'Discord and WhatsApp',
		discordLead:
			'The association’s Discord and WhatsApp are open to everyone interested in AI. Join the Discord with no membership, or apply for membership separately.',
		discordCta: 'Join the Discord',
		discordInviteUrl: 'https://discord.gg/yBsyDP3S3H',
		whatsappCta: 'Join the WhatsApp community',
		discordLanguageNote: 'Discord has separate channels in Finnish and in English.',
		discordPoints: [
			{
				title: 'Bring your question',
				body: 'Ask, share what you are trying and hear what others are doing.',
			},
			{
				title: 'No experience needed',
				body: 'Beginners and professionals are equally welcome.',
			},
			{
				title: 'Become a member when you are ready',
				body: 'Join right away, and apply for membership whenever you like.',
			},
		],
		businessId: 'Business ID 3663885-8',
		domicile: 'Domicile Oulu',
		founded: 'Founded 14 October 2026',
		registered: 'Registered 20 October 2026',
		board:
			'Board: Elina Heikkinen (chair), Janne Ikola, Kari Vierimaa, Teuvo Virsu, Pekka Salo and Satu Nikula. Deputy member Petteri Heikkinen.',
		contactLabel: 'Contact',
		rulesLabel: 'Rules',
		privacyLabel: 'Privacy',
		mediaLabel: 'Media',
		blogLabel: 'Blog',
		blogTitle: ['Blog'],
		blogLead: 'Writing from the association and its partners.',
		publishedLabel: 'Published',
		blogOwnHeading: 'From the association',
		blogPartnerHeading: 'From partners',
		blogOwnLabel: 'Association',
		blogPartnerLabel: 'Partner',
		directoryNav: 'Services',
		directoryTitle: ['Services'],
		directoryPageTitle: 'Service directory',
		directoryLead:
			'The service directory introduces the association’s corporate and organisational members, its partners, and their services.',
		directoryDescription:
			'Service directory of Arctic AI Association ry: the association’s corporate and organisational members, its partners, and their services.',
		directoryCompanies: 'Companies',
		directoryPublic: 'Other nonprofit organisations',
		directoryPartners: 'Partners',
		directoryVisit: 'Website',
		directoryEmpty: 'Coming soon!',
		directoryHowTitle: 'How to be listed',
		directoryHow:
			'This information was collected on the membership form. If you would like to add yours later, please contact the board.',
		volunteerNav: 'Volunteer',
		volunteerBrief: 'We are looking for volunteers for events, meetups and communication.',
		volunteerLink: 'Become a volunteer',
		volunteerTitle: ['Build', 'with us'],
		volunteerDescription:
			'Arctic AI Association ry is looking for volunteers for events, meetups and communication.',
		volunteerLead:
			'We are looking for volunteers for events, meetups and communication. You do not need AI experience. You can start right away and apply for membership if you wish.',
		volunteerRolesTitle: 'We are looking for',
		volunteerRoles: [
			'Member coordinator',
			'Team leads',
			'Community builders',
			'Student ambassadors',
		],
		volunteerRolesExtra: 'Many more roles and tasks',
		volunteerRolesMore: 'Help shape the future of AI',
		volunteerTasksTitle: 'Where the work is',
		volunteerOffersTitle: 'What you get',
		volunteerOffers: [
			'A title for your CV',
			'AI-related projects',
			'A northern network',
			'Training and events',
			'An ambitious team',
		],
		volunteerFacts: [
			'No AI skills needed.',
			'English is fine.',
			'From age 15.',
			'The form takes three minutes. We reply within two weeks.',
		],
		volunteerTasks: [
			{
				title: 'Events',
				body: 'Doors, registrations and setting up the room. The work an evening cannot start without.',
			},
			{
				title: 'Meetups',
				body: 'Run a workshop, or help others get started.',
			},
			{
				title: 'Communication',
				body: 'Posts, text on the site and Discord. You tell people what the association is doing.',
			},
			{
				title: 'Network',
				body: 'You know people in Northern Finland and bring them to the same table.',
			},
		],
		volunteerHowTitle: 'How it works',
		volunteerHow:
			'Tell us on the form what interests you. We will be in touch when there is something to do. One evening or one event is enough to start. The rest depends on the time you have.',
		volunteerCta: 'Sign up',
		volunteerFormUrl: 'https://forms.gle/kr27kcyjYyND9RxT6',
		siteMapLabel: 'Site map',
		siteMapTitle: ['Site map'],
		siteMapLead: 'Every page of the site and every section of the front page in one place.',
		siteMapGroups: {
			about: 'Association',
			join: 'Get involved',
			content: 'Content',
			info: 'Information',
		},
	},
};
