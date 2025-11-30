import Link from 'next/link';

import type { Event } from './types';

export const mosaic_browser: Event = {
	id: 'mosaic-browser',
	time: '1993-04-22',
	name: 'NCSA Mosaic Browser',
	companies: ['NCSA', 'University of Illinois'],
	people: ['Marc Andreessen', 'Eric Bina'],
	labels: ['key-point', 'web', 'browser'],
	summary: 'The first popular graphical web browser that brought the World Wide Web to the' +
		'mainstream. Mosaic displayed images inline with text and featured a user-friendly' +
		'interface.',
	description: <>
		<p>NCSA Mosaic, developed by <strong>Marc Andreessen and Eric Bina</strong> at the
			National Center for Supercomputing Applications, was the first web browser to gain
			widespread popularity and bring the <Link href="/event/world-wide-web">World Wide Web</Link> to mainstream users.</p>

		<h3>Revolutionary Feature: Inline Images</h3>
		<p>Mosaic was revolutionary because it displayed <strong>images inline with text</strong>
			rather than in separate windows. This feature seems obvious now but was groundbreaking
			then. This made the Web visual and engaging instead of purely textual.</p>

		<h3>User Interface Innovations</h3>
		<p>Mosaic introduced a graphical interface with point-and-click navigation. Forward and
			back buttons provided intuitive page navigation. A URL bar allowed direct address entry.
			Bookmarks let you save favorite pages. Clickable hyperlinks appeared as underlined blue
			text. A history list tracked visited pages. These conventions became so standard that
			we forget they had to be invented. They&apos;re now the universal language of web
			browsing.</p>

		<h3>Explosive Growth</h3>
		<p>Mosaic made the Web accessible to non-technical users, sparking <strong>exponential
			growth in Web adoption</strong>. Released in 1993 for Unix, followed by Windows and Mac
			versions, Mosaic&apos;s user base grew from thousands to millions within a year.
			Traffic on the Web increased by <strong>341,000% in 1993</strong>, largely attributed to
			Mosaic.</p>

		<h3>Commercial Impact</h3>
		<p>The browser&apos;s success led Andreessen to co-found <Link
			href="/event/netscape-navigator">Netscape Communications Corporation</Link>, and many
			Mosaic developers went on to create Internet Explorer. Mosaic established UI conventions
			for web browsers that remain standard today.</p>

		<h3>Platform Transformation</h3>
		<p>Mosaic transformed the Web from a text-based academic tool into a <strong>multimedia
			platform</strong>. It proved that the Web could be beautiful, not just functional.
			Mosaic made people realize the Internet&apos;s potential as a mass medium, sparking the
			dot-com boom and changing the world.</p>
	</>
};
