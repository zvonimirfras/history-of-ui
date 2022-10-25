import Head from 'next/head';

const Layout = ({ children }: any) => {
	return (
		<div className='min-h-screen absolute top-0 w-full bg-slate-50'>
			<Head>
				<title>History of UI</title>
				<meta name='description' content='Important events in the history of user interfaces, with interactive timeline' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<h1 className='text-center text-3xl font-bold mt-10 mb-14'>History of user interfaces</h1>

			<main>
				{children}
			</main>

			<footer>

			</footer>
		</div>
	);
};

export default Layout;
