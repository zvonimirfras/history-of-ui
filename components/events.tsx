import { Image } from "./image";
import Link from 'next/link';

import type { ReactNode } from 'react';

export type Label = 'key-point' | 'first-gui' | 'first-mouse' | 'first-computer' | 'first-laptop' | 'operating-system' | 'mobile' | 'web' | 'browser' | 'smartphone' | 'pda' | 'app-store' | 'tablet' | 'touchscreen' | 'flat-design' | 'design-system' | 'spatial-computing';

export interface Event {
	id: string;
	time: string;
	name: string;
	companies?: string[];
	people?: string[];
	labels: Label[];
	thumbnail?: string;
	thumbnailAlt?: string;
	summary: string;
	description?: ReactNode;
}

export const events: Event[] = [
	{
		id: 'colossus',
		time: '1943-12',
		name: 'Colossus',
		companies: ['General Post Office'],
		labels: ['key-point'],
		thumbnail: '/images/Colossus-320px.jpg',
		thumbnailAlt: 'Two female code breakers working on the Colossus computers',
		summary: 'A set of computers developed by British codebreakers in the years 1943-1945 to help in the cryptanalysis of the Lorenz cipher.',
		description: <>
			<Image src='/images/Colossus-640px.jpg' srcFull='/images/Colossus.jpg'  alt='Two female code breakers working on the Colossus computers' />

			<p>Colossus was a set of computers developed by British codebreakers at <strong>Bletchley Park</strong> in the years 1943-1945 to help in the cryptanalysis of the Lorenz cipher used by the German High Command during World War II.</p>

			<h3>Revolutionary Technology</h3>
			<p>Colossus was the first programmable electronic computer, though not general-purpose. It used 1,500-1,600 vacuum tubes, making it incredibly fast for its time. It could process 5,000 characters per second. An optical tape reader could read paper tape at high speed, feeding encrypted messages into the machine for analysis. These specifications sound modest now, but in 1943, they represented the cutting edge of what was technologically possible.</p>

			<h3>Interface & Operation</h3>
			<p>While primitive by modern standards, Colossus had a control panel with switches and dials that operators (mostly women) used to set the machine's parameters. The output was displayed on a typewriter and indicator lamps. This represented an early form of human-computer interaction, where operators needed to understand both the mathematics and the machine's operation. Programming Colossus meant understanding cryptanalysis, mathematics, and the machine's physical operation. It was a demanding combination.</p>

			<h3>Historical Impact</h3>
			<p>Colossus remained classified until the 1970s, so its influence on computer development was indirect. However, many of the engineers who worked on Colossus went on to build later computers, carrying forward their knowledge of electronic computing. Ten Colossus machines were built, significantly shortening WWII and saving countless lives. The machines were so secret that most were destroyed after the war, and their existence wasn't publicly acknowledged for decades.</p>
		</>
	},
	{
		id: 'eniac',
		time: '1946-02-15',
		name: 'ENIAC',
		companies: ['Eckert-Mauchly Computer Corporation'],
		labels: ['key-point'],
		thumbnail: '/images/Eniac-314px.jpg',
		thumbnailAlt: 'ENIAC in Philadelphia, Pennsylvania. Glen Beck (background) and Betty Snyder (foreground) program the ENIAC in building 328 at the Ballistic Research Laboratory',
		summary: 'ENIAC was the first programmable, electronic, general-purpose digital computer, completed in 1945. There were other computers that had these features, but the ENIAC had all of them in one package. It was Turing-complete and able to solve "a large class of numerical problems" through reprogramming.',
		description: <>
			<Image src='/images/Eniac-628px.jpg' srcFull='/images/Eniac.jpg' alt='ENIAC in Philadelphia, Pennsylvania. Glen Beck (background) and Betty Snyder (foreground) program the ENIAC in building 328 at the Ballistic Research Laboratory' />
			ENIAC was the first programmable, electronic, general-purpose digital computer, completed in 1945. There were other computers that
			had these features, but the ENIAC had all of them in one package. It was Turing-complete and able to solve "a large class of numerical
			problems" through reprogramming.
		</>
	},
	{
		id: 'designing-for-people',
		time: '1955',
		name: 'Designing for people',
		companies: [],
		people: ['Henry Dreyfuss'],
		labels: ['key-point'],
		summary: 'Henry Dreyfuss wrote a book called "Designing for people" in which he talked about his ideas related to the relationship between humans and machines, namely "fitting the machine to the man rather than the man to the machine"'
	},
	{
		id: 'ibm-29-card-punch',
		time: '1964-10-14',
		name: 'IBM 29 card punch',
		companies: ['IBM'],
		labels: ['key-point'],
		thumbnail: '/images/IBM_card_punch_machine_29-320px.jpg',
		thumbnailAlt: 'IBM 029 card punch machine in 2016 at Instituut voor Nederlandse Lexicologie (Leiden, the Netherlands)',
		summary: 'The IBM 29 card punch and its companion, the IBM 59 card verifier, were used to record and check information in punched cards. The cards were then read and processed by a computer or an accounting machine.',
		description: <>
			<Image src='/images/IBM_card_punch_machine_29-640px.jpg' srcFull='/images/IBM_card_punch_machine_29.jpg' alt='IBM 029 card punch machine in 2016 at Instituut voor Nederlandse Lexicologie (Leiden, the Netherlands)' />
			The IBM 29 card punch and its companion, the IBM 59 card verifier, were used to record and check information in
			punched cards. The cards were then read and processed by a computer or an accounting machine.
		</>
	},
	{
		id: 'nls-mother-of-all-demos',
		time: '1968-12-09',
		name: 'oN-Line System (NLS) - Mother of All Demos',
		companies: ['SRI International'],
		people: ['Douglas Engelbart', 'Bill English'],
		labels: ['key-point', 'first-mouse'],
		thumbnail: '/images/SRI_Bill_English_1968-320px.jpg',
		summary: 'Revolutionary computer collaboration system developed in the 1960s. Designed by Douglas Engelbart and implemented by researchers at the Augmentation Research Center (ARC) at the Stanford Research Institute (SRI), the NLS system was the first to employ the practical use of hypertext links, the mouse, raster-scan video monitors, information organized by relevance, screen windowing, presentation programs, and other modern computing concepts.',
		description: <>
			<Image src='/images/SRI_Bill_English_1968.jpg' alt='SRI’s Bill English, engineer who built the first computer mouse prototype, prepares for the December 9, 1968 "mother of all demos"' />
			Revolutionary computer collaboration system developed in the 1960s. Designed by Douglas Engelbart and implemented by
			researchers at the Augmentation Research Center (ARC) at the Stanford Research Institute (SRI), the NLS system was the
			first to employ the practical use of hypertext links, the mouse, raster-scan video monitors, information organized by
			relevance, screen windowing, presentation programs, and other modern computing concepts.
		</>
	},
	{
		id: 'xerox-alto',
		time: '1973-03-01',
		name: 'Xerox Alto',
		companies: ['Xerox'],
		labels: ['key-point', 'first-gui'],
		summary: 'First Graphical User Interface (GUI)'
	},
	{
		id: 'xerox-apple-deal',
		time: '1979',
		name: 'Xerox and Apple make a deal',
		companies: ['Xerox', 'Apple'],
		labels: [],
		summary: "Apple gave Xerox the opportunity to buy $1 million of Apple stock. (needs more info)"
	},
	{
		id: 'ibm-pc',
		time: '1981-08-12',
		name: 'IBM Personal Computer',
		companies: ['IBM'],
		people: ['Don Estridge'],
		labels: ['key-point', 'first-computer'],
		summary: 'The first microcomputer released in the IBM PC model line and the basis for the IBM PC compatible de facto standard. IBM recruited Charlie Chaplin to advertise their more approachable side. The IBM PC revolutionized business computing by becoming the first PC to gain widespread adoption by industry.'
	},
	{
		id: 'grid-compass',
		time: '1982-04',
		name: 'GRiD Compass - first laptop',
		companies: ['GRiD Systems Corporation'],
		people: ['Bill Moggridge'],
		labels: ['key-point', 'first-laptop'],
		summary: 'Development began in 1979. NASA used it on the Space Shuttle in early 1980s.'
	},
	{
		id: 'compaq-portable',
		time: '1983-03',
		name: 'The Compaq Portable',
		companies: ['Compaq'],
		labels: ['key-point'],
		summary: 'Portable computer that was like an IBM PC in a luggage form.'
	},
	{
		id: 'macintosh',
		time: '1984-01-24',
		name: 'The Macintosh (OS System 1.0)',
		companies: ['Apple'],
		labels: ['key-point', 'operating-system'],
		summary: 'Window based system with icons. First version of Apple Macintosh operating system and the beginning of the classic Mac OS series. Even though other personal computers came before it, Macintosh changed the way people thought about personal computers.'
	},
	{
		id: 'windows-1',
		time: '1985-11-20',
		name: 'Windows 1.0',
		companies: ['Microsoft'],
		labels: ['key-point', 'operating-system'],
		summary: ''
	},
	{
		id: 'eisa',
		time: '1988',
		name: 'EISA',
		labels: ['key-point'],
		summary: 'IBM got a lot of competition from IBM-compatible devices so they came up with Micro Channel architecture, their own copyrighted standard - no longer compatible with their older versions. It backfired. Nine leading competitors created their own standard called Extended Industry Standard Architecture (EISA). EISA was compatible with previous versions and easily available for companies to purchase.'
	},
	{
		id: 'psion-epoc',
		time: '1989',
		name: 'Psion EPOC',
		companies: ['Psion'],
		labels: ['key-point', 'operating-system', 'mobile'],
		summary: 'Mobile operating system that supported apps.'
	},
	{
		id: 'thinkpad',
		time: '1992-02',
		name: 'ThinkPad',
		companies: ['IBM'],
		labels: ['key-point'],
		summary: ''
	},
	{
		id: 'apple-newton',
		time: '1993-08-03',
		name: 'Apple Newton',
		companies: ['IBM'],
		labels: ['key-point', 'mobile'],
		summary: 'First personal digital assistant (PDA) to feature handwriting recognition. Had inconsistent results.'
	},
	{
		id: 'ibm-simon',
		time: '1994-08-16',
		name: 'IBM Simon',
		companies: ['IBM'],
		labels: ['key-point', 'smartphone'],
		summary: 'The first smartphone. First to include phone and PDA features in one device. It had a touchscreen.'
	},
	{
		id: 'user-experience-architect',
		time: '1995',
		name: 'User Experience Architect',
		companies: ['Apple'],
		people: ['Don Norman'],
		labels: ['key-point'],
		// https://www.nngroup.com/articles/definition-user-experience/
		summary: 'During his time at Apple, Don Norman created the first "User Experience Architect" poistion. "It\'s the way you experience the world, it\'s the way you experience your life, it\'s the way you experience service.'
	},
	{
		id: 'windows-95',
		time: '1995-08-24',
		name: 'Windows 95',
		companies: ['Microsoft'],
		labels: ['key-point', 'operating-system'],
		summary: 'The most notable was the inclusion of the "START" button which is still present in Windows 10'
	},
	{
		id: 'imac-g3',
		time: '1998-08-15',
		name: 'iMac G3 - The first iMac',
		companies: ['Apple'],
		labels: ['key-point'],
		summary: 'The iMac was drastically different from other existing mainstream computers. It was made with "nothing-to-hide" translucent plastic.'
	},
	{
		id: 'visualphone-vp210',
		time: '1999-05',
		name: 'Visualphone VP210',
		companies: ['Kyocera Fineceramics'],
		labels: ['key-point', 'mobile'],
		summary: 'First phone with a front facing camera and the first mobile color videophone. It could send 2 photos per second via Japan\'s PHS network system'
	},
	{
		id: 'apple-app-store',
		time: '2008-07-10',
		name: 'Apple App Store',
		companies: ['Apple'],
		labels: ['key-point', 'app-store'],
		summary: ''
	}
];
