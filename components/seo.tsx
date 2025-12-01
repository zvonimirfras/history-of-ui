import Head from 'next/head';

interface SeoProps {
	title?: string;
	description?: string;
	image?: string;
	url?: string;
	type?: 'website' | 'article';
}

export const Seo = ({
	title = 'History of UI',
	// eslint-disable-next-line max-len
	description = 'Explore the evolution of user interfaces from 1943 to present day. From punch cards to spatial computing, discover the pivotal moments that shaped how we interact with technology.',
	image = '/images/Eniac-640px.jpg',
	url = 'https://www.historyofui.com',
	type = 'website'
}: SeoProps) => {
	const siteTitle = title === 'History of UI' ? title : `${title} | History of UI`;
	const fullUrl = url.startsWith('http') ? url : `https://www.historyofui.com${url}`;
	const fullImage = image.startsWith('http') ? image : `https://www.historyofui.com${image}`;

	return (
		<Head>
			<title key="title">{siteTitle}</title>
			<meta name="description" content={description} key="description" />
			<meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
			<link rel="icon" href="/favicon.ico" key="favicon" />
			<link rel="canonical" href={fullUrl} key="canonical" />
			<link rel="manifest" href="/manifest.json" key="manifest" />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content={type} key="og:type" />
			<meta property="og:url" content={fullUrl} key="og:url" />
			<meta property="og:title" content={siteTitle} key="og:title" />
			<meta property="og:description" content={description} key="og:description" />
			<meta property="og:image" content={fullImage} key="og:image" />

			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image" key="twitter:card" />
			<meta property="twitter:url" content={fullUrl} key="twitter:url" />
			<meta property="twitter:title" content={siteTitle} key="twitter:title" />
			<meta property="twitter:description" content={description} key="twitter:description" />
			<meta property="twitter:image" content={fullImage} key="twitter:image" />
		</Head>
	);
};
