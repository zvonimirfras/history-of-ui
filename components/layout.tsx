import Head from 'next/head';
import { Close, RequestQuote } from '@carbon/icons-react';
import { useState } from 'react';

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

			{
				isModalOpen
				&& <div className='relative z-10' aria-labelledby='modal-title' role='dialog' aria-modal='true'>
					<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
							<div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-[calc(100vw-4rem)]  max-w-3xl h-[calc(100vh-4rem)]'>
								<button
								onClick={() => setIsModalOpen(false)}
								className='absolute right-0 top-0 p-2 bg-white'>
									<Close size='32' />
								</button>
								<div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
									<iframe className='w-[calc(100vw-7rem)] h-[calc(100vh-7rem)]  max-w-full' src='https://docs.google.com/forms/d/e/1FAIpQLSffPwmzEMwPRB9jMPzKYbN-doJ__YHRf7C1FBwHcnVZwmnwqg/viewform?embedded=true'>Loading…</iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
			}

			<footer>

			</footer>
		</div>
	);
};

export default Layout;
