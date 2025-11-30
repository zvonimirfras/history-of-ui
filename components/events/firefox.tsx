import Link from 'next/link';

import type { Event } from './types';

export const firefox: Event = {
	id: 'firefox',
	time: '2004-11-09',
	name: 'Mozilla Firefox',
	companies: ['Mozilla Foundation'],
	labels: ['key-point', 'web', 'browser'],
	summary: 'Firefox challenged Internet Explorer\'s dominance and championed open web standards, ' +
		'tabbed browsing, and extensions that put customization in users\' hands.',
	description: <>
		<p>Mozilla Firefox (originally Phoenix, then Firebird) emerged from the ashes of <Link
			href="/event/netscape-navigator">Netscape</Link> as a fast, secure, standards-compliant
			browser that challenged Internet Explorer&apos;s monopoly.</p>

		<h3>Challenging IE&apos;s Monopoly</h3>
		<p>Released during <strong>IE&apos;s stagnation period</strong> (IE6 lasted five years without
			updates), Firefox offered features that IE lacked: tabbed browsing (multiple pages in one
			window), pop-up blocking (built-in ad protection), integrated search (search box in the
			toolbar), live bookmarks with RSS (automatic feed updates), find as you type (quick page
			searching), and extensions and themes (customizable interface). These features seem
			standard now, but in 2004, they were revolutionary.</p>

		<h3>Revolutionary Extension Ecosystem</h3>
		<p>The extension ecosystem was <strong>revolutionary</strong>, allowing developers and users
			to add functionality ranging from ad-blocking (Adblock Plus) to developer tools
			(Firebug). This gave users control over their browser experience, making Firefox feel
			personal rather than prescribed.</p>

		<p>Popular extensions like <strong>Tab Mix Plus, NoScript, DownThemAll!, and
			Greasemonkey</strong> showed that the browser could be a platform, not just an
			application. This model influenced <Link href="/event/google-search">Chrome</Link> and all modern browsers.</p>

		<h3>Championing Open Standards</h3>
		<p>Firefox championed <strong>web standards</strong> and helped end the &quot;best viewed
			in Internet Explorer&quot; era. By implementing standards correctly and pushing for
			compatibility, Firefox forced web developers to write standards-compliant code. This made
			the web work better for everyone.</p>

		<h3>Interface Design</h3>
		<p>Firefox&apos;s clean, simple interface focused on <strong>content rather than
			chrome</strong>, influencing modern browser design. The browser put web pages front and
			center, minimizing interface elements that distracted from content.</p>

		<h3>Community & Marketing</h3>
		<p>The <strong>&quot;Spread Firefox&quot;</strong> community marketing campaign was one of the
			first successful crowdsourced marketing efforts. Users bought a full-page ad in the New
			York Times, created grassroots marketing materials, and evangelized Firefox
			person-to-person. This community passion was unprecedented for software.</p>

		<h3>Market Impact</h3>
		<p>Firefox achieved <strong>30% market share at its peak</strong> and forced Microsoft to
			restart IE development. The browser proved that open-source software could compete with
			commercial giants and played a crucial role in making the web more open and
			standards-compliant.</p>

		<h3>Lasting Philosophy</h3>
		<p>Firefox&apos;s focus on <strong>user control and privacy</strong> remains its core
			philosophy. Features like enhanced tracking protection, containers for isolating sites,
			and transparency about data collection set Firefox apart. In an era of surveillance
			capitalism, Firefox represents user-first browser design.</p>
	</>
};
