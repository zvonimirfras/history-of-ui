import Script from 'next/script';
import Head from 'next/head';

const Analytics = () => {
	const loadDataFast = () => {
		if (document.getElementById('datafast-script')) {
			return;
		}

		const script = document.createElement('script');
		script.id = 'datafast-script';
		script.defer = true;
		script.setAttribute('data-website-id', 'dfid_tf2j3EHlDRzFxJ8tuj9yF');
		script.setAttribute('data-domain', 'www.historyofui.com');
		script.src = 'https://datafa.st/js/script.js';
		document.head.appendChild(script);
	};

	const handleScriptLoad = () => {
		if ((window as any).cookieconsent) {
			(window as any).cookieconsent.initialise({
				'type': 'opt-in',
				'position': 'bottom-left',
				'palette': {
					'popup': { 'background': '#000', 'text': '#fff' },
					'button': { 'background': '#ff6600', 'text': '#fff' },
					'highlight': { 'background': '#333', 'text': '#ccc' }
				},
				'theme': 'edgeless',
				'content': {
					'message': 'We\'d like to enable analytics via DataFast to understand how ' +
						'the site is used. This is optional. We\'ll only turn it on if you allow it.',
					'allow': 'Allow',
					'dismiss': 'Continue without analytics',
					'link': 'Privacy Policy',
					'href': '/privacy-policy/',
					'policy': 'Cookie Policy'
				},
				'onStatusChange': function(_status: string) {
					if (this.hasConsented()) {
						loadDataFast();
					}
				}
			});
		}
	};

	return (
		<>
			<Head>
				{/* eslint-disable-next-line @next/next/no-css-tags */}
				<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent/3.1.0/cookieconsent.min.css" />
				<style>{`
					/* Custom fixes for positioning and z-index */
					.cc-window {
						z-index: 9999 !important;
						position: fixed !important;
						font-family: inherit; /* Inherit font from the app */
					}
					/* Bottom-left positioning */
					.cc-window.cc-banner {
						bottom: 20px !important;
						left: 20px !important;
						right: auto !important;
					}
				`}</style>
			</Head>
			<Script
				src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent/3.1.0/cookieconsent.min.js"
				strategy="afterInteractive"
				onLoad={handleScriptLoad}
			/>
		</>
	);
};

export default Analytics;
