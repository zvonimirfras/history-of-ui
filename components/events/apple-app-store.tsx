import Link from 'next/link';

import type { Event } from './types';

export const apple_app_store: Event = {
	id: 'apple-app-store',
	time: '2008-07-10',
	name: 'Apple App Store',
	companies: ['Apple'],
	labels: ['key-point', 'app-store'],
	summary: 'Apple launched the App Store with the iPhone 3G, revolutionizing software' +
		'distribution for mobile devices. It launched with 500 apps and introduced the' +
		'modern app economy where third-party developers could easily create, distribute,' +
		'and monetize applications. This fundamentally changed how users interact with their' +
		'devices and created a new software ecosystem.',
	description: <>
		<p>The Apple App Store, launched alongside the iPhone 3G and iPhone OS 2.0, revolutionized
			software distribution and created the modern <strong>app economy</strong>. It transformed
			how we think about software.</p>

		<h3>Steve Jobs&apos; Change of Heart</h3>
		<p>Initially, <strong>Steve Jobs resisted third-party apps</strong> on the <Link href="/event/iphone">iPhone</Link>,
			preferring web apps. He worried about malware, battery drain, and quality control. But
			developer demand and competitive pressure (Android was coming) led to the creation of
			a <strong>curated marketplace</strong> with strict guidelines.</p>

		<h3>Launch & Early Success</h3>
		<p>The App Store launched with approximately <strong>500 applications</strong> in categories
			including games, business, news, sports, and health. Within the first weekend, users
			downloaded <strong>10 million apps</strong>. The demand was overwhelming.</p>

		<h3>The 30/70 Model</h3>
		<p>Apple&apos;s <strong>30% revenue share model</strong> (70% to developers) became the
			industry standard. While controversial, it provided discoverability (apps could reach
			millions instantly), payment processing (Apple handled transactions worldwide),
			distribution (automatic updates and global reach), and developer tools (SDKs,
			documentation, and support). For many developers, especially indies, the App Store was
			transformative. Suddenly they had access to a global market.</p>

		<h3>Quality Through Curation</h3>
		<p>The App Store introduced <strong>rigorous app review processes</strong>, ensuring quality
			and security. While sometimes frustrating for developers, this curation prevented the
			malware problems that plagued other platforms. Users trusted the App Store in a way they
			didn&apos;t trust other software sources.</p>

		<h3>Explosive Growth</h3>
		<p>By 2023, the App Store hosts over <strong>1.8 million apps</strong> and has paid
			developers more than <strong>$320 billion</strong>. The App Store model was so successful
			that it was quickly replicated by Google (Google Play), Microsoft, and others.</p>

		<h3>Platform Transformation</h3>
		<p>The App Store transformed smartphones from communication devices into <strong>platforms
			for infinite functionality</strong>. Suddenly, your phone could be a camera with
			professional filters, a music studio with real instruments, a navigation system better
			than standalone GPS, a social network connecting billions, a fitness tracker, a game
			console, a translator... anything. The possibilities were limited only by developers&apos;
			imagination.</p>

		<h3>Cultural Impact</h3>
		<p>The phrase <strong>&quot;there&apos;s an app for that&quot;</strong> became a cultural
			phenomenon. The App Store spawned entire industries: indie game development,
			mobile-first startups, the gig economy (Uber, Airbnb). It democratized software
			development, letting individual developers reach global audiences.</p>

		<h3>UI/UX Revolution</h3>
		<p>The App Store itself became a model for software marketplaces: <strong>screenshots,
			ratings, reviews, and curated featured sections</strong> became standard. It proved that
			software distribution could be elegant and user-friendly, not the Wild West of download
			sites.</p>
	</>
};
