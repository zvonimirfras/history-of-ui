import type { Event } from './types';

export const world_wide_web: Event = {
	id: 'world-wide-web',
	time: '1991-08-06',
	name: 'World Wide Web',
	companies: ['CERN'],
	people: ['Tim Berners-Lee'],
	labels: ['key-point', 'web'],
	summary: 'Tim Berners-Lee published the first website and introduced the World Wide Web to' +
		'the public, creating the foundation for the modern internet as we know it.',
	description: <>
		<p>On <strong>August 6, 1991</strong>, Tim Berners-Lee, a British scientist at CERN,
			published the first website and made the World Wide Web publicly available.</p>

		<h3>Core Technologies Created</h3>
		<p>Berners-Lee created the foundational technologies of the web: HTTP (Hypertext Transfer
			Protocol) for data transfer, HTML (Hypertext Markup Language) for content structure,
			URLs as a universal address system for web resources, and the WorldWideWeb browser,
			the first web browser/editor (later renamed Nexus). These technologies worked together
			to create a system for linking and accessing documents across the internet.</p>

		<h3>The Vision</h3>
		<p>The first website, <strong>info.cern.ch</strong>, explained what the World Wide Web was
			and how to use it. Berners-Lee&apos;s vision was to create a universal linked
			information system that would allow researchers to share information easily.</p>

		<h3>Open & Free</h3>
		<p>Crucially, CERN released the WWW technology into the <strong>public domain in
			1993</strong>, allowing it to flourish freely. This decision enabled the Web to become
			the global platform it is today.</p>

		<h3>UI Revolution</h3>
		<p>The Web transformed user interfaces by introducing the concept of
			<strong>hyperlinks</strong>, allowing users to navigate between documents with a click.
			It created a new paradigm for information architecture and interaction design that would
			become the foundation for billions of websites and web applications.</p>
	</>
};
