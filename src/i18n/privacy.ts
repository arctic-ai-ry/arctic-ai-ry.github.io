import type { Locale } from './ui';
import type { RulesDocument, RulesSection } from './rules';

const fiSections: RulesSection[] = [
	{
		title: '1. Rekisterinpitäjä',
		blocks: [
			{
				type: 'p',
				text: 'Arctic AI Association ry. Y-tunnus 3663885-8. Kotipaikka Oulu.',
			},
			{
				type: 'p',
				text: 'Yhteyshenkilö tietosuoja-asioissa on Elina Heikkinen, hallituksen puheenjohtaja. Yhdistyksen sähköpostiosoite päivitetään tälle sivulle heti sähköisten järjestelmien avauduttua.',
			},
		],
	},
	{
		title: '2. Rekisterin nimi',
		blocks: [
			{
				type: 'p',
				text: 'Arctic AI Association ry:n jäsen-, tapahtuma- ja sidosryhmärekisteri.',
			},
		],
	},
	{
		title: '3. Henkilötietojen käsittelyn tarkoitus ja oikeusperuste',
		blocks: [
			{ type: 'p', text: 'Henkilötietoja käsitellään seuraaviin tarkoituksiin:' },
			{
				type: 'list',
				items: [
					'Lakisääteinen velvoite (tietosuoja-asetuksen 6 artiklan 1 kohdan c alakohta): Yhdistyslain 11 § velvoittaa yhdistyksen pitämään luetteloa jäsenistään. Lisäksi kirjanpitolaki velvoittaa säilyttämään jäsenmaksuihin liittyvät tositteet.',
					'Jäsensuhde ja oikeutettu etu (tietosuoja-asetuksen 6 artiklan 1 kohdan b ja f alakohta): Jäsenhakemusten käsittely, jäsenmaksujen laskutus, jäsenviestintä sekä koulutusten, työpajojen ja tapahtumien järjestäminen.',
					'Suostumus (tietosuoja-asetuksen 6 artiklan 1 kohdan a alakohta): Uutiskirjeiden lähettäminen muille kuin jäsenille sekä mahdollinen valokuvien tai osallistujalistojen julkaiseminen tapahtumien yhteydessä.',
				],
			},
		],
	},
	{
		title: '4. Rekisterin tietosisältö',
		blocks: [
			{ type: 'p', text: 'Rekisteriin voidaan tallentaa seuraavia tietoja:' },
			{
				type: 'list',
				items: [
					'Henkilöjäsenen perustiedot: täydellinen nimi ja kotipaikka (yhdistyslain vaatimat pakolliset tiedot).',
					'Yritys- ja yhteisöjäsenen perustiedot: yhteisön virallinen nimi, kotipaikka ja Y-tunnus (yhdistyslain vaatimat tiedot) sekä yhteyshenkilön nimi ja tehtävänimike.',
					'Yhteystiedot: sähköpostiosoite, puhelinnumero ja laskutus- tai postiosoite.',
					'Jäsenyyteen ja toimintaan liittyvät tiedot: jäsenluokka, jäsenyyden alkamis- ja päättymispäivä, jäsenmaksujen suoritustiedot sekä osallistumiset yhdistyksen tapahtumiin.',
				],
			},
		],
	},
	{
		title: '5. Säännönmukaiset tietolähteet',
		blocks: [
			{
				type: 'p',
				text: 'Tiedot saadaan rekisteröidyltä itseltään tai yhteisöjäsenen edustajalta sähköisen jäsenhakemuslomakkeen kautta, sähköpostitse tai tapahtuma- ja työpajailmoittautumisten yhteydessä.',
			},
		],
	},
	{
		title: '6. Tietojen luovutukset ja siirto EU:n tai ETA:n ulkopuolelle',
		blocks: [
			{
				type: 'p',
				text: 'Tietoja ei myydä eikä luovuteta ulkopuolisille tahoille kaupallisiin tarkoituksiin.',
			},
			{
				type: 'p',
				text: 'Yhdistys käyttää hallinnossaan pilvipalveluita, kuten Google Workspace -ympäristöä, sekä taloushallinnon työkaluja. Palveluntarjoajat voivat käsitellä tietoja myös EU- tai ETA-alueen ulkopuolella, esimerkiksi Yhdysvalloissa. Tällöin tietojen siirrossa noudatetaan Euroopan komission hyväksymiä vakiosopimuslausekkeita (SCC) tai EU–US Data Privacy Framework -järjestelyä riittävän tietosuojan tason varmistamiseksi.',
			},
		],
	},
	{
		title: '7. Tietojen säilytysaika',
		blocks: [
			{
				type: 'list',
				items: [
					'Jäsentiedot säilytetään jäsenyyden keston ajan. Jäsenyyden päätyttyä tiedot poistetaan jäsenrekisteristä viimeistään yhden (1) vuoden kuluessa.',
					'Mikäli hallitus ei hyväksy jäsenhakemusta, hakijan tiedot poistetaan välittömästi päätöksenteon jälkeen.',
					'Jäsenmaksuihin liittyviä laskutustietoja säilytetään kirjanpitolain mukaisesti kuusi (6) vuotta sen kalenterivuoden päättymisestä, jonka aikana tilikausi on päättynyt.',
				],
			},
		],
	},
	{
		title: '8. Rekisterin suojauksen periaatteet',
		blocks: [
			{
				type: 'p',
				text: 'Rekisteriä käsitellään luottamuksellisesti. Sähköiset järjestelmät on suojattu henkilökohtaisin käyttäjätunnuksin, vahvoin salasanoin ja kaksivaiheisella tunnistautumisella. Pääsy tietoihin on rajattu ainoastaan niille yhdistyksen hallituksen jäsenille tai toimihenkilöille, joiden tehtävien hoitaminen, kuten jäsenhakemusten käsittely ja laskutus, sitä edellyttää.',
			},
		],
	},
	{
		title: '9. Tekoälyn käyttö ja automaattinen päätöksenteko',
		blocks: [
			{
				type: 'p',
				text: 'Yhdistys hyödyntää tekoälytyökaluja hallintonsa rutiineissa ja viestinnässä, mutta jäsenrekisterin henkilötietoja ei koskaan syötetä julkisten tekoälymallien koulutusdataksi. Henkilötietoja ei myöskään käytetä sellaiseen automaattiseen päätöksentekoon tai profilointiin, jolla olisi oikeudellisia vaikutuksia rekisteröityyn. Jäsenhakemukset käsittelee ja hyväksyy aina yhdistyksen hallitus.',
			},
		],
	},
	{
		title: '10. Rekisteröidyn oikeudet',
		blocks: [
			{ type: 'p', text: 'Rekisteröidyllä on tietosuoja-asetuksen mukaisesti oikeus:' },
			{
				type: 'list',
				items: [
					'Tarkastaa itseään koskevat henkilötiedot.',
					'Vaatia virheellisen, puutteellisen tai vanhentuneen tiedon oikaisua tai poistamista.',
					'Rajoittaa tai vastustaa tietojensa käsittelyä.',
					'Peruuttaa antamansa suostumus milloin tahansa, esimerkiksi uutiskirjeen tilaus.',
					'Tehdä valitus valvontaviranomaiselle, Tietosuojavaltuutetun toimistoon (tietosuoja.fi), mikäli hän katsoo, että henkilötietojen käsittelyssä rikotaan tietosuojalainsäädäntöä.',
				],
			},
			{
				type: 'p',
				text: 'Tietopyynnöt tulee osoittaa kirjallisesti kohdassa 1 mainitulle yhteyshenkilölle.',
			},
		],
	},
	{
		title: '11. Verkkosivuston evästeet ja palvelinlokit',
		blocks: [
			{
				type: 'p',
				text: 'Sivusto arcai.fi ei aseta evästeitä. Se ei käytä kolmannen osapuolen seuranta-, analytiikka- tai markkinointievästeitä.',
			},
			{
				type: 'p',
				text: 'Sivusto julkaistaan GitHub Pages -palvelussa. Palveluntarjoaja voi kerätä teknisiä palvelinlokeja, kuten IP-osoitteen, selaintyypin ja vierailun ajankohdan, palvelun toimivuuden ja tietoturvan vuoksi. Näitä lokitietoja ei yhdistetä yhdistyksen jäsenrekisteriin. Lokien säilytysajasta päättää palveluntarjoaja.',
			},
		],
	},
];

const enSections: RulesSection[] = [
	{
		title: '1. Controller',
		blocks: [
			{
				type: 'p',
				text: 'Arctic AI Association ry. Business ID 3663885-8. Domicile Oulu.',
			},
			{
				type: 'p',
				text: 'The contact person for data protection is Elina Heikkinen, chair of the board. The association’s email address will be added to this page as soon as the electronic systems are opened.',
			},
		],
	},
	{
		title: '2. Name of the register',
		blocks: [
			{
				type: 'p',
				text: 'The member, event and stakeholder register of Arctic AI Association ry.',
			},
		],
	},
	{
		title: '3. Purpose and legal basis of processing',
		blocks: [
			{ type: 'p', text: 'Personal data is processed for the following purposes:' },
			{
				type: 'list',
				items: [
					'Legal obligation (Article 6(1)(c) of the GDPR): section 11 of the Finnish Associations Act requires the association to keep a list of its members. The Accounting Act also requires the association to retain vouchers relating to membership fees.',
					'Membership relationship and legitimate interest (Article 6(1)(b) and (f) of the GDPR): processing membership applications, invoicing membership fees, communicating with members, and organising training, workshops and events.',
					'Consent (Article 6(1)(a) of the GDPR): sending newsletters to people other than members, and any publication of photographs or lists of participants in connection with events.',
				],
			},
		],
	},
	{
		title: '4. Content of the register',
		blocks: [
			{ type: 'p', text: 'The register may contain the following data:' },
			{
				type: 'list',
				items: [
					'Basic data of an individual member: full name and domicile (the mandatory data required by the Associations Act).',
					'Basic data of a company or other organisational member: the organisation’s official name, domicile and business ID (the data required by the Associations Act), and the name and title of the contact person.',
					'Contact details: email address, telephone number and invoicing or postal address.',
					'Data relating to membership and activities: member class, the start and end dates of membership, records of membership-fee payments, and attendance at the association’s events.',
				],
			},
		],
	},
	{
		title: '5. Regular sources of data',
		blocks: [
			{
				type: 'p',
				text: 'The data is obtained from the data subject or from a representative of an organisational member through the online membership form, by email, or when the person registers for an event or a workshop.',
			},
		],
	},
	{
		title: '6. Disclosures and transfers outside the EU or the EEA',
		blocks: [
			{
				type: 'p',
				text: 'Data is not sold or disclosed to outside parties for commercial purposes.',
			},
			{
				type: 'p',
				text: 'The association uses cloud services in its administration, such as Google Workspace, and tools for financial administration. Service providers may also process data outside the EU or the EEA, for example in the United States. Such transfers rely on the standard contractual clauses approved by the European Commission or on the EU–US Data Privacy Framework, so that an adequate level of protection is ensured.',
			},
		],
	},
	{
		title: '7. Retention',
		blocks: [
			{
				type: 'list',
				items: [
					'Member data is kept for the duration of membership. After membership ends, the data is removed from the member register within one (1) year at the latest.',
					'If the board does not accept a membership application, the applicant’s data is deleted immediately after the decision.',
					'Invoicing data relating to membership fees is retained for six (6) years from the end of the calendar year in which the financial year ended, as required by the Accounting Act.',
				],
			},
		],
	},
	{
		title: '8. Protection of the register',
		blocks: [
			{
				type: 'p',
				text: 'The register is handled confidentially. The electronic systems are protected by personal user accounts, strong passwords and two-factor authentication. Access is limited to those members of the board and officers whose duties, such as processing membership applications and invoicing, require it.',
			},
		],
	},
	{
		title: '9. Use of artificial intelligence and automated decision-making',
		blocks: [
			{
				type: 'p',
				text: 'The association uses artificial intelligence tools in its administrative routines and communications. Personal data from the member register is never entered as training data for public AI models. Personal data is also not used for automated decision-making or profiling that would have legal effects on the data subject. Membership applications are always considered and accepted by the board of the association.',
			},
		],
	},
	{
		title: '10. Rights of the data subject',
		blocks: [
			{ type: 'p', text: 'Under the GDPR, the data subject has the right to:' },
			{
				type: 'list',
				items: [
					'Access the personal data concerning them.',
					'Request rectification or erasure of data that is inaccurate, incomplete or outdated.',
					'Restrict or object to the processing of their data.',
					'Withdraw consent at any time, for example a newsletter subscription.',
					'Lodge a complaint with the supervisory authority, the Office of the Data Protection Ombudsman (tietosuoja.fi), if they consider that the processing of personal data infringes data protection law.',
				],
			},
			{
				type: 'p',
				text: 'Requests concerning personal data must be sent in writing to the contact person named in section 1.',
			},
		],
	},
	{
		title: '11. Cookies and server logs on the website',
		blocks: [
			{
				type: 'p',
				text: 'The website arcai.fi does not set cookies. It does not use third-party tracking, analytics or marketing cookies.',
			},
			{
				type: 'p',
				text: 'The website is published on GitHub Pages. The provider may collect technical server logs, such as the IP address, browser type and time of the visit, for the operation and security of the service. These logs are not combined with the association’s member register. The provider decides how long the logs are kept.',
			},
		],
	},
];

export const privacy: Record<Locale, RulesDocument> = {
	fi: {
		locale: 'fi',
		title: 'Tietosuoja',
		description:
			'Arctic AI Association ry:n tietosuoja- ja rekisteriseloste. Laadittu 2.11.2026. Rekisterinpitäjä Arctic AI Association ry, Oulu.',
		eyebrow: 'Laadittu 2.11.2026',
		intro:
			'Tietosuoja- ja rekisteriseloste. Seloste on laadittu EU:n yleisen tietosuoja-asetuksen ja yhdistyslain (503/1989) mukaisesti.',
		contentsLabel: 'Sisällys',
		sections: fiSections,
	},
	en: {
		locale: 'en',
		title: 'Privacy',
		description:
			'Privacy and register notice of Arctic AI Association ry. Unofficial English translation. The Finnish notice dated 2 November 2026 is the original.',
		eyebrow: 'Drawn up on 2 November 2026',
		intro: 'Privacy and register notice of Arctic AI Association ry.',
		notice:
			'This is an unofficial English translation. The original notice is the Finnish text drawn up under the EU General Data Protection Regulation and the Finnish Associations Act (503/1989).',
		officialLabel: 'Tietosuojaseloste suomeksi',
		contentsLabel: 'Contents',
		sections: enSections,
	},
};
