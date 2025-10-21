import Head from 'next/head';
import { RequestQuote } from '@carbon/icons-react';
import { useState } from 'react';
import { Modal } from './modal';
import Link from 'next/link';

const Layout = ({ children }: any) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div className='min-h-screen absolute top-0 w-full bg-slate-50 text-gray-800'>
			<Head>
				<title>History of UI</title>
				<meta name='description' content='Important events in the history of user interfaces, with interactive timeline' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='ml-auto mr-auto w-fit mt-10 mb-14'>
				<h1 className='text-3xl font-bold mb-1'><Link href='/'>History of user interfaces</Link></h1>
				<p className='italic'>by <a href='https://www.zvonimirfras.com'>Zvonimir Fras</a></p>
			</div>

			<main>
				{children}
			</main>

			<button
			className='fixed bottom-6 right-6 border-1 bg-white rounded-full p-4 hover:shadow-md shadow-sm shadow-slate-300 hover:shadow-slate-500 active:shadow-sm transition-all'
			onClick={() => setIsModalOpen(true)}>
				<RequestQuote size='24' />
			</button>

			<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
				<div className='max-w-3xl'>
					<iframe
					className='w-[100vw] h-[calc(100vh-6rem)]  max-w-full'
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
							From mechanical calculators to neural interfaces, the evolution of human-computer interaction<br className='hidden md:block' />
							is an ongoing story of innovation, creativity, and human ingenuity.
						</p>
						<div className='flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 mb-6'>
							<span>© 2024 History of UI</span>
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
