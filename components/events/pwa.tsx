import type { Event } from './types';

export const pwa: Event = {
	id: 'pwa',
	time: '2015-06-15',
	name: 'Progressive Web Apps (PWAs)',
	companies: ['Google'],
	people: ['Alex Russell', 'Frances Berriman'],
	labels: ['key-point', 'web'],
	summary: 'Progressive Web Apps combined the reach of the web with the capabilities of native' +
		'apps, enabling offline functionality, push notifications, and installation without' +
		'app stores.',
	description: <>
		<p>Progressive Web Apps (PWAs), coined by <strong>Alex Russell and Frances Berriman</strong>
			at Google in 2015, represented a new approach to web applications that combined the
			<strong>reach of the web with capabilities of native apps</strong>. PWAs use modern web
			technologies to deliver app-like experiences.</p>

		<h3>The Web Gets Superpowers</h3>
		<p>PWAs combined several technologies to create app-like experiences: Service Workers
			(background scripts enabling offline functionality), Web App Manifest (JSON file
			defining app metadata and appearance), HTTPS (required for security), responsive design
			(works on any device), and app shell architecture (instant loading skeleton). Together,
			these technologies gave the web capabilities it never had before.</p>

		<p>PWAs brought native app features to the web. They work offline without an internet
			connection. You can install them to your home screen without an app store. They send
			push notifications to re-engage users. Background sync syncs data when connection
			returns. Full-screen mode provides immersive, app-like experiences. They can access
			hardware like cameras, geolocation, and sensors.</p>

		<h3>Progressive Enhancement in Action</h3>
		<p>PWAs follow progressive enhancement philosophy. They work for everyone with basic
			functionality on any browser. They&apos;re enhanced for capable browsers with advanced
			features where supported. No app store barriers: they&apos;re accessible via URL.
			They&apos;re always up-to-date with no manual updates needed. This &quot;work
			everywhere, enhanced where possible&quot; approach was revolutionary.</p>

		<h3>Real-World Success</h3>
		<p>Major companies demonstrated PWA benefits with impressive numbers. Twitter Lite saw a
			65% increase in pages per session. Pinterest reported a 60% increase in engagement.
			Starbucks doubled daily active users. Uber&apos;s PWA was 50KB versus their 25MB native
			app. Flipkart saw a 70% increase in conversions. These weren&apos;t marginal
			improvements: PWAs transformed these businesses.</p>

		<h3>Advantages Without Compromise</h3>
		<p>PWAs offered advantages over native apps: no installation friction with instant access
			via URL, smaller size (typically much smaller than native apps), cross-platform with
			one codebase for all platforms, SEO benefits as they&apos;re discoverable by search
			engines, no app store approval needed for instant deployment, and linkability: you can
			share them via URL. These advantages made PWAs compelling for many use cases.</p>

		<p>Platform support evolved over time. Android provided full PWA support from 2015.
			Windows added PWAs to the Microsoft Store in 2018. iOS added limited support in 2018,
			gradually improving. Desktop browsers like Chrome, Edge, and Firefox support
			installation. The web platform was catching up to native.</p>

		<h3>The Challenges</h3>
		<p>PWAs face constraints. iOS limitations remain: Apple restricts some features. Hardware
			access is less than native apps. Discoverability is challenging without a central app
			store (though this is also an advantage). User perception remains a hurdle:
			&quot;it&apos;s just a website&quot; dismisses PWA capabilities.</p>

		<p>PWAs changed how developers think about web apps. Offline-first design assumes
			unreliable connections. Performance focus makes fast loading critical. App-like patterns
			for navigation, gestures, and animations became standard. Service worker patterns for
			caching strategies and background work became essential knowledge.</p>

		<h3>Lasting Impact</h3>
		<p>PWAs proved that the web could deliver <strong>app-quality experiences</strong> without
			app store gatekeepers. They demonstrated that offline functionality and installation
			weren&apos;t exclusive to native apps. PWAs made the web more capable and resilient,
			especially important for users with unreliable connections or limited storage.</p>

		<p>While PWAs haven&apos;t replaced native apps, they&apos;ve established the web as a
			<strong>viable platform for sophisticated applications</strong>. They&apos;ve influenced
			native platforms: iOS&apos;s App Clips and Android&apos;s Instant Apps borrowed PWA
			concepts. PWAs show that the web&apos;s superpower isn&apos;t just reach, but
			adaptability and openness.</p>
	</>
};
