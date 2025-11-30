import Link from 'next/link';

import type { Event } from './types';

export const ajax: Event = {
	id: 'ajax',
	time: '2005-02-18',
	name: 'AJAX (Asynchronous JavaScript and XML)',
	companies: ['Adaptive Path'],
	people: ['Jesse James Garrett'],
	labels: ['key-point', 'web'],
	summary: 'AJAX enabled web pages to update dynamically without full page reloads,' +
		'transforming static websites into responsive, app-like experiences and paving the' +
		'way for modern web applications.',
	description: <>
		<p>AJAX, coined by <strong>Jesse James Garrett</strong> of Adaptive Path in his 2005 essay
			&quot;Ajax: A New Approach to Web Applications,&quot; wasn&apos;t a new technology but a
			pattern for using existing technologies to create more responsive web applications. It
			revolutionized web development by enabling asynchronous communication with servers.</p>

		<h3>The Frustrating Web of 2004</h3>
		<p>Before AJAX, web interactions followed a frustrating pattern: You click a link or submit
			a form. The browser sends a request to the server. You wait while the page goes blank.
			The server sends back an entire new page. The browser reloads everything from scratch.
			This made web apps feel slow and clunky compared to desktop applications. Every
			interaction meant waiting for a full page reload.</p>

		<h3>A Pattern, Not a Technology</h3>
		<p>AJAX brought together existing web technologies in a new way: XMLHttpRequest (created by
			Microsoft in 1999) for asynchronous server communication, <Link href="/event/javascript">JavaScript</Link> for
			client-side scripting, DOM manipulation for updating page content dynamically, XML (later
			JSON) for data exchange, and <Link href="/event/css">CSS</Link> for styling dynamic content. None of these
			were new, but using them together was revolutionary.</p>

		<p>With AJAX, web pages could update portions of the page without full reloads, fetch data
			in the background while users continued working, respond instantly to user interactions,
			and feel like desktop apps with smooth, responsive interfaces.</p>

		<h3>The Moment Everything Changed</h3>
		<p>Gmail launched in 2004 as email that felt like a desktop app. Google Maps followed in
			2005 with draggable maps that didn&apos;t require page reloads. Google Suggest showed
			autocomplete search suggestions as you typed. These applications shocked users by being
			so much faster and more responsive than traditional web pages. People couldn&apos;t
			believe these were websites: they felt like real applications.</p>

		<h3>New Interaction Patterns</h3>
		<p>AJAX enabled entirely new interaction patterns: autocomplete with instant search
			suggestions, infinite scroll loading content as you scrolled, live validation checking
			form inputs immediately, real-time updates for chat and notifications, drag-and-drop
			with server synchronization, and single-page applications where entire apps lived in one
			page. These patterns are now ubiquitous, but they were revolutionary in 2005.</p>

		<h3>Growing Pains</h3>
		<p>AJAX introduced new challenges. The browser back button didn&apos;t work as expected. You
			couldn&apos;t bookmark specific states. Screen readers struggled with dynamic content.
			Search engines couldn&apos;t index JavaScript-rendered content. These challenges led
			to solutions like the History API, progressive enhancement, and server-side rendering.
			The web had to evolve to support this new paradigm.</p>

		<h3>An Entire Ecosystem</h3>
		<p>AJAX spawned entire categories of tools and frameworks. jQuery simplified AJAX and DOM
			manipulation. AngularJS, React, and Vue built modern frameworks on AJAX principles.
			REST APIs standardized data exchange. WebSockets enabled real-time bidirectional
			communication. The entire modern web development ecosystem emerged from AJAX&apos;s
			foundation.</p>

		<h3>Lasting Legacy</h3>
		<p>AJAX transformed the web from a document platform into an application platform. It proved
			that web applications could rival desktop applications in responsiveness and user
			experience. Today, asynchronous communication is so fundamental to web development that
			we barely think about it, but AJAX made it all possible. The term &quot;AJAX&quot;
			itself is less commonly used now (and JSON replaced XML), but the pattern it described
			became the foundation for modern web applications. Every dynamic website you use today
			(from social media to productivity tools) relies on the principles AJAX popularized.</p>
	</>
};
