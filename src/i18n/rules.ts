import type { Locale } from './ui';

export interface RulesEntry {
	text: string;
	lines?: string[];
	tail?: string;
}

export type RulesItem = string | RulesEntry;

export type RulesBlock = { type: 'p'; text: string } | { type: 'list'; items: RulesItem[] };

export interface RulesSection {
	title: string;
	blocks: RulesBlock[];
}

export interface RulesDocument {
	locale: Locale;
	title: string;
	description: string;
	eyebrow: string;
	intro: string;
	notice?: string;
	officialLabel?: string;
	contentsLabel: string;
	sections: RulesSection[];
}

const fiSections: RulesSection[] = [
	{
		title: '1. Nimi ja kotipaikka',
		blocks: [
			{
				type: 'p',
				text: 'Yhdistyksen nimi on Arctic AI Association ry ja sen kotipaikka on Oulu.',
			},
		],
	},
	{
		title: '2. Tarkoitus ja toiminnan laatu',
		blocks: [
			{
				type: 'p',
				text: 'Yhdistyksen tarkoituksena on edistää tekoälyteknologioiden ja älykkäiden tietojärjestelmien tuntemusta, soveltavaa ja tieteellistä tutkimusta, monialaista osaamista sekä niiden vastuullista, turvallista ja eettisesti kestävää soveltamista yhteiskunnassa. Yhdistys toimii alan asiantuntijoiden, tutkijoiden, harrastajien, opiskelijoiden, yritysten, koulujen, sekä muiden julkistoimijoiden yhdyssiteenä ja verkostoitumisalustana, erityisesti Pohjois-Suomessa.',
			},
			{ type: 'p', text: 'Tarkoituksensa toteuttamiseksi yhdistys:' },
			{
				type: 'list',
				items: [
					'Järjestää koulutus-, esitelmä-, seminaari- ja keskustelutilaisuuksia, konferensseja, hackathoneja ja työpajoja.',
					'Harjoittaa toimialaansa liittyvää tiedotus-, viestintä- ja julkaisutoimintaa sekä ylläpitää ammatillisia ja harrastepohjaisia verkkoyhteisöjä ja viestintäkanavia.',
					'Seuraa tekoälyalan kansainvälistä kehitystä, tekee aloitteita ja antaa lausuntoja alan sääntelyyn, koulutukseen ja tutkimuspolitiikkaan liittyen.',
					'Edistää avointa lähdekoodia, avointa tiedettä ja avoimen datan saatavuutta yhdistyksen aatteellisten päämäärien mukaisesti, muun muassa myöntämällä apurahoja.',
					'Ylläpitää suhteita ja tekee yhteistyötä koti- ja ulkomaisten oppilaitosten, tutkimuslaitosten, julkishallinnon, elinkeinoelämän ja muiden alan järjestöjen kanssa.',
				],
			},
			{ type: 'p', text: 'Toimintansa tukemiseksi yhdistys voi:' },
			{
				type: 'list',
				items: [
					'Kantaa jäsenistöltään vuotuisia jäsenmaksuja ja liittymismaksuja.',
					'Ottaa vastaan avustuksia, apurahoja, lahjoituksia ja testamentteja.',
					'Omistaa toimintaansa varten tarpeellista irtainta ja kiinteää omaisuutta.',
					'Järjestää asianmukaisella luvalla rahankeräyksiä ja arpajaisia.',
					'Harjoittaa tarkoituksensa toteuttamiseen välittömästi liittyvää julkaisu- ja koulutustoimintaa.',
				],
			},
		],
	},
	{
		title: '3. Jäsenet',
		blocks: [
			{
				type: 'p',
				text: 'Yhdistyksen jäseneksi voi liittyä luonnollinen henkilö tai oikeuskelpoinen yhteisö, joka hyväksyy yhdistyksen tarkoituksen ja säännöt.',
			},
			{ type: 'p', text: 'Yhdistyksen jäsenryhmät ovat:' },
			{
				type: 'list',
				items: [
					{
						text: 'Varsinaiset jäsenet: Luonnollisia henkilöitä tai oikeuskelpoisia yhteisöjä, jotka hyväksyvät yhdistyksen tarkoituksen ja säännöt. Varsinaisia jäseniä on neljä luokkaa, joille vahvistetaan erilliset jäsenmaksut:',
						lines: [
							'(1) henkilöjäsenet,',
							'(2) opiskelija- ja eläkeläisjäsenet,',
							'(3) yritykset, ja',
							'(4) muut yleishyödylliset toimijat (koulut, kunnat, tutkimuslaitokset, yhdistykset).',
						],
						tail: 'Yrityksille voidaan jäsenmaksua porrastaa liikevaihdon mukaan.',
					},
					'Kannattajajäsenet: Luonnollisia henkilöitä tai oikeuskelpoisia yhteisöjä, jotka haluavat tukea yhdistyksen tarkoitusta ja toimintaa.',
					'Kunniajäsenet ja kunniapuheenjohtajat: Luonnollisia henkilöitä, joille jäsenyys myönnetään ansioiden perusteella.',
				],
			},
			{
				type: 'p',
				text: 'Varsinaiset jäsenet ja kannattajajäsenet hyväksyy hakemuksesta yhdistyksen hallitus. Hallituksen esityksestä yhdistyksen kokous voi kutsua kunniajäseneksi tai kunniapuheenjohtajaksi henkilön, joka on huomattavasti edistänyt yhdistyksen toimintaa tai tekoälyalan kehitystä.',
			},
		],
	},
	{
		title: '4. Jäsenen eroaminen ja erottaminen',
		blocks: [
			{
				type: 'p',
				text: 'Jäsenellä on oikeus erota yhdistyksestä ilmoittamalla siitä kirjallisesti hallitukselle tai sen puheenjohtajalle taikka ilmoittamalla erosta yhdistyksen kokouksessa pöytäkirjaan merkittäväksi.',
			},
			{
				type: 'p',
				text: 'Hallitus voi erottaa jäsenen yhdistyksestä, jos jäsen on jättänyt täyttämättä ne velvoitukset, joihin hän on yhdistykseen liittymällä sitoutunut, tai on menettelyllään yhdistyksessä tai sen ulkopuolella huomattavasti vahingoittanut yhdistystä taikka ei enää täytä laissa taikka yhdistyksen säännöissä mainittuja jäsenyyden ehtoja. Ennen erottamispäätöksen tekemistä asianomaiselle jäsenelle on varattava tilaisuus selvityksen antamiseen asiassa, paitsi jos erottamisen syynä on jäsenmaksun maksamatta jättäminen.',
			},
			{
				type: 'p',
				text: 'Hallitus voi katsoa jäsenen eronneeksi yhdistyksestä, jos jäsen on jättänyt jäsenmaksunsa maksamatta kuuden (6) kuukauden ajan sen erääntymisestä.',
			},
		],
	},
	{
		title: '5. Liittymis- ja jäsenmaksut',
		blocks: [
			{
				type: 'p',
				text: 'Varsinaisilta jäseniltä ja kannattajajäseniltä perittävän vuotuisen jäsenmaksun sekä mahdollisen liittymismaksun suuruudesta kullekin jäsenryhmälle ja -luokalle erikseen päättää yhdistyksen vuosikokous. Kannattajajäsenille voidaan vahvistaa erisuuruinen maksu sekä luonnollisille henkilöille, että yhteisöille. Kunniajäsenet ja kunniapuheenjohtajat eivät suorita jäsenmaksuja.',
			},
		],
	},
	{
		title: '6. Hallitus',
		blocks: [
			{
				type: 'p',
				text: 'Yhdistyksen asioita hoitaa hallitus, johon kuuluu vuosikokouksessa valitut puheenjohtaja sekä kahdesta kuuteen (2-6) muuta varsinaista jäsentä ja nollasta kolmeen (0-3) varajäsentä.',
			},
			{
				type: 'p',
				text: 'Hallituksen toimikausi on vuosikokousten välinen aika. Hallituksen puheenjohtajalla on oltava asuinpaikka Suomessa, jollei Patentti- ja rekisterihallitus myönnä lupaa poiketa tästä.',
			},
			{
				type: 'p',
				text: 'Hallitus valitsee keskuudestaan varapuheenjohtajan sekä ottaa keskuudestaan tai ulkopuoleltaan sihteerin, rahastonhoitajan ja muut tarvittavat toimihenkilöt. Hallitus kokoontuu puheenjohtajan tai hänen estyneenä ollessaan varapuheenjohtajan kutsusta, kun he katsovat siihen olevan aihetta tai kun vähintään puolet hallituksen jäsenistä sitä vaatii.',
			},
			{
				type: 'p',
				text: 'Hallitus on päätösvaltainen, kun vähintään puolet sen jäsenistä, puheenjohtaja tai varapuheenjohtaja mukaan luettuna, on läsnä. Hallituksen päätökset tehdään yksinkertaisella äänten enemmistöllä. Äänten mennessä tasan ratkaisee hallituksen puheenjohtajan ääni, vaaleissa kuitenkin arpa. Hallituksen kokous voidaan järjestää läsnäolokokouksena, hybridikokouksena tai kokonaan tietoliikenneyhteyden ja teknisen apuvälineen avulla.',
			},
		],
	},
	{
		title: '7. Yhdistyksen nimen kirjoittaminen',
		blocks: [
			{ type: 'p', text: 'Yhdistyksen nimen kirjoittavat:' },
			{
				type: 'list',
				items: [
					'Hallituksen puheenjohtaja yksin;',
					'Hallituksen jäsenet kaksi yhdessä; tai',
					'Henkilö tai henkilöt, joille hallitus on antanut henkilökohtaisen nimenkirjoitusoikeuden, yksin tai kaksi yhdessä hallituksen määräyksen mukaisesti.',
				],
			},
		],
	},
	{
		title: '8. Tilikausi ja toiminnantarkastus',
		blocks: [
			{ type: 'p', text: 'Yhdistyksen tilikausi on kalenterivuosi (1.1.-31.12.).' },
			{
				type: 'p',
				text: 'Tilinpäätösasiakirjat ja hallituksen vuosikertomus on toimitettava toiminnantarkastajille tai tilintarkastajille viimeistään kuukautta ennen sitä kokousta, jossa tilinpäätös esitetään vahvistettavaksi. Toiminnantarkastajien tai tilintarkastajien on annettava kirjallinen lausuntonsa hallitukselle viimeistään kaksi viikkoa ennen kyseistä kokousta.',
			},
			{
				type: 'p',
				text: 'Yhdistyksen tilinpäätös vahvistetaan ja vastuuvapaudesta päätetään yhdistyksen varsinaisessa vuosikokouksessa.',
			},
			{
				type: 'p',
				text: 'Yhdistykselle valitaan vuosikokouksessa yksi (1) tai kaksi (2) toiminnantarkastajaa ja heille vastaava määrä varatoiminnantarkastajia. Mikäli yhdistys täyttää tilintarkastuslaissa säädetyt rajat tai laissa säädetty velvollisuus sitä edellyttää, valitaan toiminnantarkastajien sijasta tilintarkastajat ja varatilintarkastajat.',
			},
		],
	},
	{
		title: '9. Yhdistyksen kokoukset',
		blocks: [
			{
				type: 'p',
				text: 'Yhdistys pitää vuosittain yhden varsinaisen kokouksen (vuosikokous) hallituksen määräämänä päivänä maalis-toukokuun aikana.',
			},
			{
				type: 'p',
				text: 'Ylimääräinen kokous pidetään, kun yhdistyksen kokous niin päättää tai kun hallitus katsoo siihen olevan aihetta taikka kun vähintään kymmenesosa (1/10) yhdistyksen äänioikeutetuista jäsenistä sitä hallitukselta erityisesti ilmoitettua asiaa varten kirjallisesti vaatii. Kokous on pidettävä kolmenkymmenen (30) vuorokauden kuluessa vaatimuksen esittämisestä hallitukselle.',
			},
			{
				type: 'p',
				text: 'Yhdistyksen kokouksessa jokaisella varsinaisella jäsenellä, kunniajäsenellä ja kunniapuheenjohtajalla on yksi (1) ääni. Kannattajajäsenellä on läsnäolo- ja puheoikeus, mutta ei äänioikeutta. Päätökset tehdään yksinkertaisella äänten enemmistöllä, ellei säännöissä toisin määrätä. Äänten mennessä tasan ratkaisee kokouksen puheenjohtajan ääni, vaaleissa kuitenkin arpa.',
			},
			{
				type: 'p',
				text: 'Hallitus voi päättää, että yhdistyksen kokoukseen saa osallistua myös siten, että jäsen käyttää päätösvaltaansa ajantasaisesti tietoliikenneyhteyden ja teknisen apuvälineen avulla kokouksen aikana. Hallitus voi myös päättää, että yhdistyksen kokous järjestetään ilman kokouspaikkaa siten, että jäsenet käyttävät päätösvaltaansa ajantasaisesti tietoliikenneyhteyden ja teknisen apuvälineen avulla kokouksen aikana.',
			},
		],
	},
	{
		title: '10. Yhdistyksen kokousten koollekutsuminen',
		blocks: [
			{
				type: 'p',
				text: 'Hallituksen on kutsuttava yhdistyksen kokoukset koolle vähintään neljätoista (14) vuorokautta ennen kokousta lähettämällä kokouskutsu jäsenen ilmoittamaan sähköpostiosoitteeseen tai julkaisemalla kutsu yhdistyksen virallisella tiedotuskanavalla.',
			},
			{
				type: 'p',
				text: 'Kokouskutsussa on mainittava kokouksen aika ja paikka. Mikäli kokoukseen voidaan osallistua tietoliikenneyhteyden avulla tai kokous järjestetään ilman kokouspaikkaa, siitä on mainittava kutsussa ja samalla annettava ohjeet etäosallistumisen teknisistä edellytyksistä sekä mahdollisesta ennakkoilmoittautumisesta.',
			},
		],
	},
	{
		title: '11. Sääntöjen muuttaminen ja yhdistyksen purkaminen',
		blocks: [
			{
				type: 'p',
				text: 'Päätös sääntöjen muuttamisesta ja yhdistyksen purkamisesta on tehtävä yhdistyksen kokouksessa vähintään kolmen neljäsosan (3/4) enemmistöllä annetuista äänistä. Kokouskutsussa on nimenomaisesti ilmoitettava sääntöjen muuttamisesta tai suunnitellusta yhdistyksen purkamisesta.',
			},
			{
				type: 'p',
				text: 'Yhdistyksen purkautuessa sen varojen käytöstä määrää purkamisesta päättävä kokous joko',
			},
			{
				type: 'list',
				items: [
					'(A) määräämällä varat käytettäväksi yhdistyksen aatteellisen tarkoituksen edistämiseen, kuten avoimen tekoälytutkimuksen, yleishyödyllisen tekoälykoulutuksen tai alan yleishyödyllisen tiedonvälityksen tukemiseen valitussa Pohjois-Suomen julkisyhteisössä, tai',
					'(B) yhdistyksen jäsenet ja varat siirretään toisen, mahdollisimman samankaltaisen yleishyödyllisen yhdistyksen alaisuuteen Pohjois-Suomessa.',
				],
			},
			{
				type: 'p',
				text: 'Yhdistyksen tullessa lakkautetuksi varat käytetään vastaavaan aatteelliseen tarkoitukseen tai ne julistetaan menetetyiksi valtiolle yhdistyslain mukaisesti.',
			},
		],
	},
];

const enSections: RulesSection[] = [
	{
		title: '1. Name and domicile',
		blocks: [
			{
				type: 'p',
				text: 'The name of the association is Arctic AI Association ry and its domicile is Oulu.',
			},
		],
	},
	{
		title: '2. Purpose and nature of the activities',
		blocks: [
			{
				type: 'p',
				text: 'The purpose of the association is to advance knowledge of artificial intelligence technologies and intelligent information systems, applied and scientific research, and multidisciplinary expertise, and their responsible, safe and ethically sustainable application in society. The association acts as a link and a networking platform for specialists, researchers, hobbyists, students, companies, schools and other public bodies in the field, especially in Northern Finland.',
			},
			{ type: 'p', text: 'To fulfil its purpose, the association:' },
			{
				type: 'list',
				items: [
					'Organises training, lectures, seminars and discussions, conferences, hackathons and workshops.',
					'Carries out information, communication and publishing activities related to its field, and maintains professional and hobby-based online communities and communication channels.',
					'Follows international developments in artificial intelligence, makes initiatives and issues statements concerning regulation, education and research policy in the field.',
					'Promotes open source, open science and the availability of open data in accordance with the association’s nonprofit aims, including by awarding grants.',
					'Maintains relations and cooperates with domestic and foreign educational institutions, research institutes, public administration, business and other organisations in the field.',
				],
			},
			{ type: 'p', text: 'To support its activities, the association may:' },
			{
				type: 'list',
				items: [
					'Collect annual membership fees and joining fees from its members.',
					'Receive subsidies, grants, donations and bequests.',
					'Own movable and immovable property necessary for its activities.',
					'Organise fundraising and raffles with the appropriate permit.',
					'Carry out publishing and training activities directly related to fulfilling its purpose.',
				],
			},
		],
	},
	{
		title: '3. Members',
		blocks: [
			{
				type: 'p',
				text: 'A natural person or a legal entity that accepts the purpose and rules of the association may join as a member.',
			},
			{ type: 'p', text: 'The membership groups of the association are:' },
			{
				type: 'list',
				items: [
					{
						text: 'Full members: natural persons or legal entities that accept the purpose and rules of the association. There are four classes of full members, for which separate membership fees are confirmed:',
						lines: [
							'(1) individual members,',
							'(2) student and pensioner members,',
							'(3) companies, and',
							'(4) other nonprofit actors (schools, municipalities, research institutes and associations).',
						],
						tail: 'For companies, the membership fee may be graded by turnover.',
					},
					'Supporting members: natural persons or legal entities that wish to support the purpose and activities of the association.',
					'Honorary members and honorary chairs: natural persons to whom membership is granted on the basis of merit.',
				],
			},
			{
				type: 'p',
				text: 'The board of the association accepts full members and supporting members on application. On the proposal of the board, a meeting of the association may invite as an honorary member or honorary chair a person who has significantly advanced the activities of the association or the development of the field of artificial intelligence.',
			},
		],
	},
	{
		title: '4. Resignation and expulsion of a member',
		blocks: [
			{
				type: 'p',
				text: 'A member has the right to resign from the association by notifying the board or its chair in writing, or by announcing the resignation at a meeting of the association to be recorded in the minutes.',
			},
			{
				type: 'p',
				text: 'The board may expel a member if the member has failed to fulfil the obligations to which they committed by joining the association, or has by their conduct within the association or outside it significantly harmed the association, or no longer meets the conditions of membership laid down by law or by the rules of the association. Before a decision on expulsion is made, the member concerned must be given an opportunity to provide an explanation, unless the reason for expulsion is failure to pay the membership fee.',
			},
			{
				type: 'p',
				text: 'The board may deem a member to have resigned if the member has left the membership fee unpaid for six (6) months after it fell due.',
			},
		],
	},
	{
		title: '5. Joining fees and membership fees',
		blocks: [
			{
				type: 'p',
				text: 'The annual general meeting decides, separately for each membership group and class, the amount of the annual membership fee payable by full members and supporting members and of any joining fee. A different fee may be set for supporting members who are natural persons and for those that are organisations. Honorary members and honorary chairs do not pay membership fees.',
			},
		],
	},
	{
		title: '6. Board',
		blocks: [
			{
				type: 'p',
				text: 'The affairs of the association are managed by a board consisting of a chair elected at the annual general meeting, from two to six (2–6) other ordinary members, and from zero to three (0–3) deputy members.',
			},
			{
				type: 'p',
				text: 'The term of the board is the period between annual general meetings. The chair of the board must reside in Finland, unless the Finnish Patent and Registration Office grants permission to depart from this.',
			},
			{
				type: 'p',
				text: 'The board elects a vice-chair from among its members and appoints a secretary, a treasurer and other necessary officers from among its members or from outside. The board meets when convened by the chair or, if the chair is unable to act, by the vice-chair, when they consider there is cause, or when at least half of the members of the board so request.',
			},
			{
				type: 'p',
				text: 'The board has a quorum when at least half of its members are present, including the chair or the vice-chair. Decisions of the board are made by a simple majority of votes. In the event of a tie, the chair of the board has the casting vote; in an election, the matter is decided by drawing lots. A meeting of the board may be held in person, as a hybrid meeting, or entirely by means of a data connection and a technical aid.',
			},
		],
	},
	{
		title: '7. Signing for the association',
		blocks: [
			{ type: 'p', text: 'The name of the association is signed by:' },
			{
				type: 'list',
				items: [
					'the chair of the board alone;',
					'two members of the board jointly; or',
					'a person or persons to whom the board has granted an individual right to sign, alone or two jointly, as determined by the board.',
				],
			},
		],
	},
	{
		title: '8. Financial year and audit of activities',
		blocks: [
			{ type: 'p', text: 'The financial year of the association is the calendar year (1 January–31 December).' },
			{
				type: 'p',
				text: 'The financial statements and the annual report of the board must be delivered to the auditors of activities or to the auditors at the latest one month before the meeting at which the financial statements are presented for adoption. The auditors of activities or the auditors must give their written statement to the board at the latest two weeks before that meeting.',
			},
			{
				type: 'p',
				text: 'The financial statements of the association are adopted, and discharge from liability is decided, at the annual general meeting of the association.',
			},
			{
				type: 'p',
				text: 'The annual general meeting elects one (1) or two (2) auditors of activities and the same number of deputy auditors of activities. If the association meets the thresholds laid down in the Auditing Act, or if a statutory obligation so requires, auditors and deputy auditors are elected instead of auditors of activities.',
			},
		],
	},
	{
		title: '9. Meetings of the association',
		blocks: [
			{
				type: 'p',
				text: 'The association holds one ordinary meeting each year (the annual general meeting) on a date determined by the board during March, April or May.',
			},
			{
				type: 'p',
				text: 'An extraordinary meeting is held when a meeting of the association so decides, when the board considers there is cause, or when at least one tenth (1/10) of the members entitled to vote request it from the board in writing for a matter specifically stated. The meeting must be held within thirty (30) days of the request being presented to the board.',
			},
			{
				type: 'p',
				text: 'At a meeting of the association, each full member, honorary member and honorary chair has one (1) vote. A supporting member has the right to attend and to speak, but not to vote. Decisions are made by a simple majority of the votes cast, unless the rules provide otherwise. In the event of a tie, the chair of the meeting has the casting vote; in an election, the matter is decided by drawing lots.',
			},
			{
				type: 'p',
				text: 'The board may decide that a member may also attend a meeting of the association by exercising their power of decision in real time during the meeting by means of a data connection and a technical aid. The board may also decide that a meeting is held without a meeting venue, so that members exercise their power of decision in real time during the meeting by means of a data connection and a technical aid.',
			},
		],
	},
	{
		title: '10. Convening meetings of the association',
		blocks: [
			{
				type: 'p',
				text: 'The board must convene meetings of the association at least fourteen (14) days before the meeting by sending the notice to the email address notified by the member or by publishing the notice on the association’s official channel of communication.',
			},
			{
				type: 'p',
				text: 'The notice must state the time and place of the meeting. If the meeting may be attended by means of a data connection, or if the meeting is held without a meeting venue, the notice must say so and must give instructions on the technical requirements for remote attendance and on any advance registration.',
			},
		],
	},
	{
		title: '11. Amendment of the rules and dissolution of the association',
		blocks: [
			{
				type: 'p',
				text: 'A decision to amend the rules or to dissolve the association must be made at a meeting of the association by a majority of at least three quarters (3/4) of the votes cast. The notice of the meeting must expressly state that the rules are to be amended or that dissolution of the association is proposed.',
			},
			{
				type: 'p',
				text: 'If the association is dissolved, the meeting that decides on the dissolution determines the use of its assets either by',
			},
			{
				type: 'list',
				items: [
					'(A) directing the assets to be used to advance the nonprofit purpose of the association, such as supporting open research in artificial intelligence, nonprofit education in artificial intelligence, or nonprofit dissemination of knowledge in the field through a chosen public body in Northern Finland, or by',
					'(B) transferring the members and assets of the association to another, as similar as possible, nonprofit association in Northern Finland.',
				],
			},
			{
				type: 'p',
				text: 'If the association is ordered to be dissolved, the assets are used for the corresponding nonprofit purpose or are declared forfeited to the state in accordance with the Associations Act.',
			},
		],
	},
];

export const rules: Record<Locale, RulesDocument> = {
	fi: {
		locale: 'fi',
		title: 'Säännöt',
		description:
			'Arctic AI Association ry:n säännöt. Patentti- ja rekisterihallituksen yhdistysrekisteriin 20.10.2026 merkityt säännöt. Kotipaikka Oulu.',
		eyebrow: 'Voimassa 20.10.2026 alkaen',
		intro:
			'Patentti- ja rekisterihallituksen yhdistysrekisteriin 20.10.2026 merkityt säännöt. Sivun teksti vastaa rekisteröityä asiakirjaa.',
		contentsLabel: 'Sisällys',
		sections: fiSections,
	},
	en: {
		locale: 'en',
		title: 'Rules',
		description:
			'Rules of Arctic AI Association ry. Unofficial English translation. The Finnish rules entered in the register on 20 October 2026 are binding.',
		eyebrow: 'In force from 20 October 2026',
		intro: 'Rules of Arctic AI Association ry, domiciled in Oulu.',
		notice:
			'This is an unofficial English translation. The binding text is the Finnish rules entered in the association register of the Finnish Patent and Registration Office on 20 October 2026.',
		officialLabel: 'Official rules in Finnish',
		contentsLabel: 'Contents',
		sections: enSections,
	},
};
