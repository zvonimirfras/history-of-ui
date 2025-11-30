import Link from 'next/link';

import type { Event } from './types';

export const netscape_navigator: Event = {
	id: 'netscape-navigator',
	time: '1994-12-15',
	name: 'Netscape Navigator',
	companies: ['Netscape Communications'],
	people: ['Marc Andreessen', 'Jim Clark'],
	labels: ['key-point', 'web', 'browser'],
	summary: 'Netscape Navigator became the dominant web browser of the 1990s, introducing' +
		'features like cookies, JavaScript, and SSL that became web standards.',
	description: <>
		<p>Netscape Navigator, released by Netscape Communications (co-founded by <strong>Marc
			Andreessen and Jim Clark</strong>), became the dominant web browser of the mid-1990s
			and drove the commercialization of the Web. Building on the success of <Link
			href="/event/mosaic-browser">Mosaic</Link>, Navigator introduced numerous innovations.</p>

		<h3>Technical Innovations</h3>
		<p>Navigator introduced groundbreaking web technologies: JavaScript for client-side
			scripting (still fundamental today), cookies for maintaining state between page loads,
			SSL/HTTPS for secure encrypted transactions, progressive rendering to display pages as
			they loaded, frames for dividing pages into multiple sections, and plug-ins for
			extending browser capabilities. These innovations became fundamental to the modern web,
			especially JavaScript, cookies, and SSL.</p>

		<h3>Interface Refinements</h3>
		<p>Navigator&apos;s interface refined the browser UI with memorable features. The throbber
			animation (the spinning &quot;N&quot; logo) showed activity. A progress bar visualized
			page load progress. The status bar showed link destinations on hover. Improved
			bookmarks added folders and organization. &quot;View Source&quot; let users learn from
			web pages, an educational feature that helped create a generation of web developers
			who learned by examining other people&apos;s code.</p>

		<h3>Market Dominance</h3>
		<p>At its peak in 1996, Navigator had nearly <strong>90% market share</strong>. The browser
			was initially free, adopting a &quot;freemium&quot; model that was novel for the time.
			Netscape&apos;s <strong>IPO in August 1995</strong> was a watershed moment for the
			dot-com era, validating the commercial potential of the Internet. The stock doubled on
			the first day, creating instant millionaires and igniting the dot-com boom.</p>

		<h3>The Browser Wars</h3>
		<p>The &quot;browser wars&quot; with Microsoft&apos;s Internet Explorer reshaped the
			software industry. Microsoft bundled IE with Windows for free, using its OS monopoly to
			win market share. This led to <strong>antitrust cases against Microsoft</strong> and
			fundamentally changed how platforms could leverage their dominance.</p>

		<h3>Lasting Legacy</h3>
		<p>Though Navigator eventually lost to IE, its innovations, particularly
			<strong>JavaScript</strong> and many UI patterns, remain fundamental to modern web
			browsing. Netscape open-sourced Navigator in 1998, creating the <Link
				href="/event/firefox">Mozilla project</Link> that would later produce Firefox.
			Navigator proved that browsers could be platforms, not just viewers.</p>
	</>
};
