import { Search } from '@carbon/icons-react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { EventTile } from '../components/event-tile';
import { events } from '../components/events';

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
							events.sort((a, b) => a.time < b.time ? -1 : 1).map((event, index) => <div className={`${index % 2 ? 'left-1/2 after:-left-3 pl-8 pr-5' : 'left-0 pl-5 pr-8'} text-base pt-10 w-1/2 z-2 relative after:border-4 after:border-slate-300 after:rounded-full after:content[""] after:h-5 after:w-5 after:absolute after:-right-2 after:top-1/2 after:bg-white after:translate-y-1/2 after:z-1`}>
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
