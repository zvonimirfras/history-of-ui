import Link from 'next/link';

import type { Event } from './types';

export const google_play: Event = {
	id: 'google-play',
	time: '2008-10-22',
	name: 'Android Market (later Google Play)',
	companies: ['Google'],
	labels: ['key-point', 'app-store', 'mobile'],
	summary: 'Android Market (rebranded as Google Play in 2012) launched as Android&apos;s app' +
		'distribution platform, creating an open alternative to Apple&apos;s App Store and' +
		'enabling the Android app ecosystem.',
	description: <>
		<p>Android Market, launched alongside the first <Link href="/event/android">Android</Link>
			phone in October 2008 and rebranded as <strong>Google Play</strong> in 2012, became the
			app distribution platform for Android devices. It took a more open approach than <Link
				href="/event/apple-app-store">Apple&apos;s App Store</Link>, reflecting Android&apos;s
			philosophy.</p>

		<h3>More Open Approach</h3>
		<p>Android Market differed from the App Store in key ways: instant publishing (apps went
			live immediately without review), lower barriers (one-time $25 developer fee vs
			Apple&apos;s $99/year), fewer restrictions (allowed apps Apple rejected),
			side-loading (users could install apps from other sources), and more flexibility (apps
			could deeply integrate with the system). This openness attracted developers frustrated
			with Apple&apos;s restrictions.</p>

		<h3>Trade-offs of Openness</h3>
		<p>The open approach had consequences: quality varied widely (less curation meant more
			low-quality apps), malware problems (easier for malicious apps to appear),
			fragmentation (apps had to support many device types), and piracy concerns (easier to
			distribute unauthorized copies). Over time, Google added more review processes and
			security measures while maintaining more openness than Apple.</p>

		<h3>Evolution to Google Play</h3>
		<p>In 2012, Google rebranded Android Market as <strong>Google Play</strong>, unifying apps
			and games (from Android Market), music (from Google Music), books (from Google Books),
			and movies and TV (from Google Video). This created a unified digital content ecosystem
			to compete with Apple&apos;s iTunes/App Store combination.</p>

		<h3>Revenue Model</h3>
		<p>Google Play adopted a similar <strong>30% revenue share</strong> as Apple (later reduced
			to 15% for small developers). This model became the industry standard, though it faced
			increasing scrutiny and legal challenges in the 2020s.</p>

		<h3>Market Growth</h3>
		<p>Google Play grew rapidly: 100,000 apps by 2010, 1 million apps by 2013, and over 3.5
			million apps by 2023. By app count, Google Play surpassed the App Store, though iOS
			apps generally generated more revenue per download.</p>

		<h3>Global Reach</h3>
		<p>Google Play&apos;s availability in more countries and support for more payment methods
			made it crucial for <strong>emerging markets</strong>. In regions where iPhones were too
			expensive, Android and Google Play democratized access to mobile apps.</p>

		<h3>Developer Freedom</h3>
		<p>Google Play allowed developers more freedom: alternative payment systems (more flexibility
			than iOS), beta testing (easy staged rollouts), A/B testing (test different app
			versions), and direct APK distribution (developers could bypass the store). This
			openness contrasted with Apple&apos;s tighter control, giving developers more
			options.</p>

		<h3>Impact on Mobile Ecosystem</h3>
		<p>Google Play&apos;s more open approach created healthy competition with the App Store,
			preventing a single company from controlling mobile app distribution. This competition
			benefited developers and users, though it also highlighted ongoing debates about
			platform control, revenue sharing, and app store policies.</p>
	</>
};
