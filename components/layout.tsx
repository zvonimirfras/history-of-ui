import Head from 'next/head';
import { RequestQuote } from '@carbon/icons-react';
import { useState } from 'react';
import { Modal } from './modal';

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
				<h1 className='text-3xl font-bold mb-1'>History of user interfaces</h1>
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

			<footer>

			</footer>
		</div>
	);
};

export default Layout;
