import Head from 'next/head';

const Layout = ({ children }: any) => {
	return (
		<div className='min-h-screen absolute top-0 w-full bg-slate-50'>
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

			<footer>

			</footer>
		</div>
	);
};

export default Layout;
