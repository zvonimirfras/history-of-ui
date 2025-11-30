import Link from 'next/link';

import type { Event } from './types';

export const javascript: Event = {
	id: 'javascript',
	time: '1995-12-04',
	name: 'JavaScript',
	companies: ['Netscape Communications'],
	people: ['Brendan Eich'],
	labels: ['key-point', 'web'],
	summary: 'JavaScript, created by Brendan Eich in just 10 days, brought interactivity to the' +
		'web and became the most widely-used programming language, fundamentally' +
		'transforming web interfaces from static documents to dynamic applications.',
	description: <>
		<p>JavaScript, created by <strong>Brendan Eich</strong> at Netscape in May 1995 and
			released with <Link href="/event/netscape-navigator">Netscape Navigator 2.0</Link> in
			December 1995, revolutionized the web by enabling client-side interactivity. Before
			JavaScript, web pages were static documents. JavaScript made them interactive
			applications.</p>

		<h3>Created in 10 Days</h3>
		<p>Eich famously created the first version of JavaScript (originally called Mocha, then
			LiveScript) in just 10 days in May 1995. Despite this rushed development, the
			language&apos;s core concepts proved remarkably durable and flexible. That&apos;s either
			a testament to Eich&apos;s genius or proof that perfect is the enemy of good enough.</p>

		<h3>Making Pages Come Alive</h3>
		<p>JavaScript initially enabled simple but revolutionary interactions. You could validate
			form inputs before submitting them to the server, saving users from frustrating round
			trips. You could change page content dynamically without reloading. Image rollovers made
			buttons and navigation feel interactive. Pop-up windows (later horrifically abused) let
			you open new browser windows. You could detect which browser someone was using and
			adapt accordingly, and manipulate cookies to store user preferences.</p>

		<p>These seem trivial now, but they transformed the web from static pages into something
			that felt alive and responsive.</p>

		<h3>The Browser Wars Mess</h3>
		<p>During the browser wars, Microsoft reverse-engineered JavaScript for Internet Explorer,
			calling it JScript. This led to incompatibility nightmares that plagued web development
			for years. Standardization as ECMAScript in 1997 helped, but browser differences
			remained a challenge until the 2000s. Developers had to test everything in multiple
			browsers and write workarounds for each one&apos;s quirks.</p>

		<h3>The AJAX Revolution</h3>
		<p>JavaScript&apos;s true power emerged with AJAX in 2005, enabling asynchronous server
			communication. This transformed web pages into full applications. Gmail and Google Maps
			demonstrated that JavaScript could power sophisticated, desktop-class applications in
			the browser. The web would never be the same.</p>

		<h3>Everywhere, All at Once</h3>
		<p>Today, JavaScript is ubiquitous. React, Vue, and Angular power modern web apps.
			Node.js runs JavaScript on servers. React Native and Ionic build mobile apps. Electron
			powers desktop applications like VS Code, Slack, and Discord. WebGL enables game
			development. JavaScript escaped the browser and conquered every platform.</p>

		<p>JavaScript fundamentally changed what was possible in user interfaces. Single-page
			applications eliminated page reloads for instant interactions. Real-time updates brought
			live data without refreshing. Rich interactions like drag-and-drop, animations, and
			transitions became standard. Progressive enhancement allowed graceful degradation for
			accessibility.</p>

		<h3>Lasting Legacy</h3>
		<p>Despite its rushed creation and early quirks, JavaScript became the most widely-used
			programming language in the world. It&apos;s the only language that runs natively in all
			web browsers, making it essential for web development. JavaScript transformed the web
			from a document platform into an application platform, enabling the rich, interactive
			experiences we expect today.</p>

		<p>The language continues to evolve with annual ECMAScript updates, adding modern features
			while maintaining backward compatibility. JavaScript&apos;s success proves that sometimes
			&quot;good enough, shipped quickly&quot; beats &quot;perfect but late.&quot;</p>
	</>
};
