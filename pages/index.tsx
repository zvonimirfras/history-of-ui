import { Search } from '@carbon/icons-react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { EventTile } from '../components/event-tile';

const allEvents = [
	{
		id: 'colossus',
		time: '1943-12',
		name: 'Colossus',
		companies: ['General Post Office'],
		labels: ['key-point'],
		description: 'A set of computers developed by British codebreakers in the years 1943-1945 to help in the cryptanalysis of the Lorenz cipher.'
	},
	{
		id: 'eniac',
		time: '1946-02-15',
		name: 'ENIAC',
		companies: ['Eckert-Mauchly Computer Corporation'],
		labels: ['key-point'],
		description: 'ENIAC was the first programmable, electronic, general-purpose digital computer, completed in 1945. There were other computers that had these features, but the ENIAC had all of them in one package. It was Turing-complete and able to solve "a large class of numerical problems" through reprogramming.'
	},
	{
		id: 'designing-for-people',
		time: '1955',
		name: 'Designing for people',
		companies: [],
		people: ['Henry Dreyfuss'],
		labels: ['key-point'],
		description: 'Henry Dreyfuss wrote a book called "Designing for people" in which he talked about his ideas related to the relationship between humans and machines, namely "fitting the machine to the man rather than the man to the machine"'
	},
	{
		id: 'ibm-29-card-punch',
		time: '1964-10-14',
		name: 'IBM 29 card punch',
		companies: ['IBM'],
		labels: ['key-point'],
		description: ''
	},
	{
		id: 'nls',
		time: '1968-12-09',
		name: 'oN-Line System (NLS)',
		companies: ['SRI International'],
		labels: ['key-point'],
		description: 'Revolutionary computer collaboration system developed in the 1960s. Designed by Douglas Engelbart and implemented by researchers at the Augmentation Research Center (ARC) at the Stanford Research Institute (SRI), the NLS system was the first to employ the practical use of hypertext links, the mouse, raster-scan video monitors, information organized by relevance, screen windowing, presentation programs, and other modern computing concepts.'
	},
	{
		id: 'xerox-alto',
		time: '1973-03-01',
		name: 'Xerox Alto',
		companies: ['Xerox'],
		labels: ['key-point', 'first-gui'],
		description: 'First Graphical User Interface (GUI)'
	},
	{
		id: 'windows-1',
		time: '1985-11-20',
		name: 'Windows 1.0',
		companies: ['Microsoft'],
		labels: ['key-point', 'operating-system'],
		description: ''
	},
	{
		id: 'psion-epoc',
		time: '1989',
		name: 'Psion EPOC',
		companies: ['Psion'],
		labels: ['key-point', 'operating-system', 'mobile'],
		description: 'Mobile operating system that supported apps.'
	},
	{
		id: 'ibm-simon',
		time: '1994-08-16',
		name: 'IBM Simon',
		companies: ['IBM'],
		labels: ['key-point', 'smartphone'],
		description: 'The first smartphone. First to include phone and PDA features in one device. It had a touchscreen.'
	},
	{
		id: 'windows-95',
		time: '1995-08-24',
		name: 'Windows 95',
		companies: ['Microsoft'],
		labels: ['key-point', 'operating-system'],
		description: 'The most notable was the inclusion of the "START" button which is still present in Windows 10'
	},
	{
		id: 'apple-app-store',
		time: '2008-07-10',
		name: 'Apple App Store',
		companies: ['Apple'],
		labels: ['key-point', 'app-store'],
		description: ''
	},
	{
		id: 'macintosh-system-1',
		time: '1984-01-24',
		name: 'Macintosh "System 1"',
		companies: ['Apple'],
		labels: ['key-point', 'operating-system'],
		description: 'Window based system with icons. First version of Apple Macintosh operating system and the beginning of the classic Mac OS series.'
	},
];

const Home: NextPage = () => {
	return (
		<div className='min-h-screen absolute top-0 w-full bg-slate-50'>
			<Head>
				<title>History of UI</title>
				<meta name='description' content='Important events in the history of user interfaces, with interactive timeline' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<h1 className='text-center text-3xl font-bold mt-10 mb-14'>History of user interfaces</h1>

			<main>
				{/* <label htmlFor='default-search' className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'>Search</label>
				<div className='relative'>
					<div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
						<Search className='w-5 h-5 text-gray-500 dark:text-gray-400' />
					</div>
					<input type='search' id='default-search' className='block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Search acronyms...' required />
				</div> */}

				<div className='box-border relative mt-8 mb-8 before:bg-slate-300 before:bottom-0 before:content-[""] before:left-1/2 before:-ml-1 before:absolute before:top-0 before:w-1 before:z-1'>
					<div className='relative z-2'>
						{
							allEvents.sort((a, b) => a.time < b.time ? -1 : 1).map((event, index) => <div className={`${index % 2 ? 'left-1/2 after:-left-3 pl-8 pr-5' : 'left-0 pl-5 pr-8'} text-base pt-10 w-1/2 z-2 relative after:border-4 after:border-slate-300 after:rounded-full after:content[""] after:h-5 after:w-5 after:absolute after:-right-2 after:top-1/2 after:bg-white after:translate-y-1/2 after:z-1`}>
								<EventTile event={event} />
							</div>)
						}
					</div>
				</div>
			</main>

			<footer>

			</footer>
		</div>
	);
};

export default Home;
