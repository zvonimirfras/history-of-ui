import Link from 'next/link';

import type { Event } from './types';

export const google_chrome: Event = {
	id: 'google-chrome',
	time: '2008-09-02',
	name: 'Google Chrome',
	companies: ['Google'],
	labels: ['key-point', 'web', 'browser'],
	summary: 'Google Chrome revolutionized web browsers with its speed, simplicity, and' +
		'multi-process architecture, setting new standards for browser performance and' +
		'eventually becoming the dominant browser.',
	description: <>
		<p>Google Chrome, released in September 2008, revolutionized web browsers with a focus on
			speed, simplicity, and security. It challenged <Link href="/event/firefox">Firefox</Link>
			and Internet Explorer with a radically different architecture and minimalist design.</p>

		<h3>Each Tab, Its Own World</h3>
		<p>Chrome&apos;s multi-process architecture was groundbreaking. Each tab ran in its own
			process, meaning one crashed tab couldn&apos;t bring down the entire browser. Processes
			were sandboxed for enhanced security isolation. The V8 JavaScript engine made JavaScript
			dramatically faster. Startup times were optimized to be nearly instant. This wasn&apos;t
			just an incremental improvement: it was a complete rethinking of how browsers should
			work.</p>

		<h3>Radically Simple</h3>
		<p>Chrome&apos;s UI was minimalist to the extreme. The &quot;Omnibox&quot; combined the
			address bar and search box into one: just start typing and Chrome figured out whether
			you wanted to search or navigate. Tabs moved above the address bar, emphasizing their
			importance. The status bar disappeared. The New Tab page showed your most visited sites.
			Chrome gave maximum screen space to content by minimizing the browser&apos;s own
			interface (appropriately called &quot;chrome&quot; in UI terminology).</p>

		<h3>A Comic Book Launch</h3>
		<p>Google announced Chrome with an unusual marketing approach: a 38-page comic book
			illustrated by Scott McCloud, explaining Chrome&apos;s technical innovations in an
			accessible way. This creative launch generated massive buzz and clearly communicated
			Chrome&apos;s advantages to both technical and non-technical audiences. It was quirky,
			memorable, and very Google.</p>

		<h3>Tools That Changed Development</h3>
		<p>Chrome&apos;s built-in Developer Tools became the industry standard. The element
			inspector let you examine and modify HTML/CSS live. The JavaScript console made debugging
			interactive. The network monitor helped analyze page loading performance. The performance
			profiler identified bottlenecks. These tools were so good that developers switched to
			Chrome just for them, even if they preferred other browsers for regular browsing.</p>

		<h3>Rapid Evolution</h3>
		<p>Chrome pioneered rapid, automatic updates with new versions every 6 weeks. Users always
			had the latest features and security patches without manual intervention. This raised
			the bar for browser development pace: other browsers had to speed up their release
			cycles to compete. The extension system, launched in 2010, created a thriving ecosystem
			similar to <Link href="/event/apple-app-store">app stores</Link>, with extensions for
			ad-blocking, productivity, development tools, and more.</p>

		<h3>Total Dominance</h3>
		<p>Chrome&apos;s combination of speed, simplicity, and Google&apos;s marketing power led to
			rapid adoption. By 2012, it became the most popular browser. By 2023, it held over 65%
			market share. Chrome&apos;s success forced other browsers to improve performance and adopt
			similar features. Chrome&apos;s open-source base, Chromium, became the foundation for
			many other browsers including Microsoft Edge (2020), Opera, Brave, and Vivaldi. This
			created a browser monoculture with both benefits (consistency) and concerns
			(Google&apos;s control).</p>

		<p>Chrome proved that browsers could be fast, simple, and secure simultaneously. It raised
			user expectations for browser performance and established patterns (like the omnibox and
			automatic updates) that became industry standard. Chrome&apos;s success transformed
			Google from a search company into a platform company, controlling how billions access
			the web.</p>
	</>
};
