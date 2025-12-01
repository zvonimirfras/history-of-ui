import Head from 'next/head';

const PrivacyPolicy = () => {
	return (
		<>
			<Head>
				<title>Privacy Policy - The History of User Interfaces</title>
				<meta name='description' content='Privacy Policy for The History of User Interfaces' />
			</Head>

			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20'>
				<h1 className='font-["Fraunces"] text-4xl md:text-5xl font-bold text-slate-900 mb-8'>
					Privacy Policy
				</h1>

				<div className='prose prose-slate prose-lg max-w-none text-slate-600'>
					<p className='mb-6'>
						We value your privacy and believe in transparency. This page outlines how we handle
						information when you visit The History of User Interfaces.
					</p>

					<h2 className='font-["Fraunces"] text-2xl font-semibold text-slate-800 mt-10 mb-4'>
						Analytics
					</h2>
					<p className='mb-6'>
						We use <a href='https://datafa.st/' target='_blank' rel='noreferrer' className='text-amber-700 hover:text-amber-900 transition-colors'>DataFast</a> for
						website analytics to understand how our site is used and to improve the user experience.
						DataFast is designed to be privacy-friendly and does not track you across other websites.
					</p>
					<p className='mb-6'>
						We have configured the analytics to be optional. You can choose to accept or decline
						analytics cookies through the consent banner that appears when you first visit the site.
					</p>

					<h2 className='font-["Fraunces"] text-2xl font-semibold text-slate-800 mt-10 mb-4'>
						Main Privacy Policy
					</h2>
					<p className='mb-6'>
						The History of User Interfaces is a project by Zvonimir Fras. For comprehensive details
						about how we handle data, please refer to our main privacy policy:
					</p>
					<p>
						<a
							href='https://www.zvonimirfras.com/privacy-policy/'
							className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-700 hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors'
						>
							Read Full Privacy Policy
						</a>
					</p>
				</div>
			</div>
		</>
	);
};

export default PrivacyPolicy;
