import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						// eslint-disable-next-line max-len
						href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;400;600;700;900&family=Inter:wght@300;400;500;600&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;

