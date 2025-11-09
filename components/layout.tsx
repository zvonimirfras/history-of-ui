import Head from 'next/head';
import { RequestQuote } from '@carbon/icons-react';
import { useState } from 'react';
import { Modal } from './modal';
import Link from 'next/link';
import { events } from './events';

const Layout = ({ children }: any) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Calculate timeline span dynamically
	const earliestYear = Math.min(...events.map(e => new Date(e.time).getFullYear()));
	const currentYear = new Date().getFullYear();
	const yearsSpan = currentYear - earliestYear;

	return (
		<div className='min-h-screen bg-gradient-to-b from-amber-50/30 via-stone-50 to-slate-50 text-slate-900 relative overflow-x-hidden'>
			<Head>
				<title>History of UI</title>
				<meta name='description' content='Important events in the history of user interfaces, with interactive timeline' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{/* Subtle Background Pattern */}
			<div className='fixed inset-0 overflow-hidden pointer-events-none opacity-30'>
				<div className='absolute top-0 left-0 w-full h-full' style={ {
					backgroundImage: 'radial-gradient(circle at 2px 2px, #d4d4d8 1px, transparent 0)',
					backgroundSize: '48px 48px'
				} }></div>
			</div>

			{/* Hero Section */}
			<div className='relative overflow-hidden border-b border-amber-200/30'>
				<div className='absolute inset-0 bg-gradient-to-b from-amber-100/20 via-transparent to-transparent'></div>
				<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12'>
					<div className='text-center'>
						<div className={`inline-flex items-center px-4 py-2 bg-amber-100/40 backdrop-blur-sm 
							rounded-full border border-amber-200/30 shadow-sm mb-6`}>
							<svg className='w-4 h-4 mr-2 text-amber-700' fill='currentColor' viewBox='0 0 20 20'>
								{/* eslint-disable-next-line max-len */}
								<path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z' />
							</svg>
							<span className='text-sm font-medium text-amber-900 tracking-wide'>
								Explore {yearsSpan}+ Years of Innovation
							</span>
						</div>
						<h1 className='font-["Fraunces"] text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-4 leading-tight tracking-tight'>
							<Link href='/'>
								<a className='hover:text-amber-800 transition-colors duration-300 block'>
									The History of<br />
									{/* eslint-disable-next-line max-len */}
									<span className='bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 bg-clip-text text-transparent'>User Interfaces</span>
								</a>
							</Link>
						</h1>
						<p className={`text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed 
							mb-8 font-light`}>
							{/* eslint-disable-next-line max-len */}
							From punch cards to touch screens: discover the pivotal moments<br className='hidden md:block' /> that shaped how we interact with technology
						</p>
						<div className='flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500'>
							<div className='flex items-center space-x-2'>
								<div className='w-1.5 h-1.5 bg-amber-600 rounded-full'></div>
								<span>{earliestYear}–Present</span>
							</div>
							<div className='w-1 h-1 bg-slate-300 rounded-full'></div>
							<div className='flex items-center space-x-2'>
								<div className='w-1.5 h-1.5 bg-emerald-600 rounded-full'></div>
								<span>{events.length} Key Innovations</span>
							</div>
							<div className='w-1 h-1 bg-slate-300 rounded-full'></div>
							<div className='flex items-center space-x-2'>
								<div className='w-1.5 h-1.5 bg-sky-600 rounded-full'></div>
								<span>Interactive Timeline</span>
							</div>
						</div>
						<p className='text-xs text-slate-400 mt-8'>
							Curated by <a href='https://www.zvonimirfras.com' className={`text-amber-700 
								hover:text-amber-900 transition-colors font-medium`}>Zvonimir Fras</a>
						</p>
					</div>
				</div>
			</div>

			<main className='relative z-10'>
				{children}
			</main>

			{/* Floating Feedback Button */}
			<button
				className={`fixed bottom-8 right-8 bg-gradient-to-br from-amber-600 to-orange-700 
					text-white rounded-full p-4 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 
					transition-all duration-300 z-50 group border border-amber-500/20`}
				onClick={() => setIsModalOpen(true)}
				aria-label='Provide feedback'>
				<RequestQuote size={24} className='group-hover:rotate-6 transition-transform duration-300' />
			</button>

			<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
				<div className='max-w-4xl'>
					<iframe
						className='w-[100vw] h-[calc(100vh-6rem)] max-w-full rounded-lg'
						src='https://docs.google.com/forms/d/e/1FAIpQLSffPwmzEMwPRB9jMPzKYbN-doJ__YHRf7C1FBwHcnVZwmnwqg/viewform?embedded=true'>
						Loading…
					</iframe>
				</div>
			</Modal>

			{/* Footer */}
			<footer className='relative bg-slate-900 text-slate-300 py-16 mt-32 border-t border-slate-800'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<div className='font-["Fraunces"] text-2xl font-semibold text-slate-100 mb-3'>
							The Journey Continues
						</div>
						<p className='text-slate-400 mb-8 max-w-2xl mx-auto text-sm leading-relaxed'>
							{/* eslint-disable-next-line max-len */}
							From mechanical calculators to neural interfaces, the evolution of human-computer interaction<br className='hidden md:block' />
							is an ongoing story of innovation, creativity, and human ingenuity.
						</p>
						<div className='flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 mb-6'>
							<span>© 2025 History of UI</span>
							<span className='w-1 h-1 bg-slate-600 rounded-full'></span>
							<a href='https://github.com/zvonimirfras/history-of-ui' className='hover:text-amber-500 transition-colors'>Contribute</a>
							<span className='w-1 h-1 bg-slate-600 rounded-full'></span>
							<a href='https://www.zvonimirfras.com' className='hover:text-amber-500 transition-colors'>Contact</a>
						</div>
						<div className='text-xs text-slate-600'>
							Images courtesy of public domain and historical archives
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Layout;
