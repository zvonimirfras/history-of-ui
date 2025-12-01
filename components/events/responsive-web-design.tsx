import Link from 'next/link';

import type { Event } from './types';

export const responsive_web_design: Event = {
	id: 'responsive-web-design',
	time: '2010-05-25',
	name: 'Responsive Web Design',
	companies: [],
	people: ['Ethan Marcotte'],
	labels: ['key-point', 'web'],
	summary: 'Ethan Marcotte coined "Responsive Web Design," introducing a methodology for' +
		'creating websites that adapt fluidly to any screen size, fundamentally changing web' +
		'development.',
	description: <>
		<p>Ethan Marcotte&apos;s seminal article <strong>&quot;Responsive Web Design&quot;</strong>
			in A List Apart introduced a methodology for creating websites that adapt fluidly to
			different screen sizes and devices. Rather than creating separate mobile and desktop
			versions, responsive design uses a single codebase that works everywhere.</p>

		<h3>The Problem</h3>
		<p>By 2010, the web was fragmenting. Users accessed websites from desktop computers
		(1024px+ wide screens), <Link href="/event/iphone">iPhones</Link> (320px-wide screens),
		<Link href="/event/ipad">iPads</Link> (768px-wide screens), and Android devices (varying
		sizes). Creating separate &quot;mobile&quot; and &quot;desktop&quot; sites was expensive,
		hard to maintain, and always out of sync.</p>

		<h3>Three Core Principles</h3>
		<p>Marcotte identified three core principles: fluid grids (using percentages instead of
			fixed pixels), flexible images (images that scale with their containers), and media
			queries (applying different <Link href="/event/css">CSS</Link> based on screen
			characteristics). These simple principles enabled complex adaptive layouts.</p>

		<h3>The Solution</h3>
		<p>Responsive web design solved the problem of the proliferating web. Instead of
		designing for one screen size or maintaining multiple site versions, developers could
		create <strong>one adaptive design</strong> that worked on any device. Layouts would
		<strong>reflow gracefully</strong> from mobile to tablet to desktop.</p>

		<h3>Implementation Example</h3>
		<p>A responsive site might stack content vertically on phones (single column), show two
			columns on tablets, and display three columns on desktops, all from the same HTML and
			CSS, using media queries to adjust the layout. One codebase, infinite screen sizes.</p>

		<h3>Industry Adoption</h3>
		<p>Responsive design became <strong>the default approach</strong> for web development.
			Frameworks like Bootstrap and Foundation built responsive grids into their core. Google
			later made <strong>mobile-friendliness a ranking factor</strong>, making responsive
			design not just a best practice but a necessity for SEO.</p>

		<h3>Beyond Desktop</h3>
		<p>Marcotte&apos;s article fundamentally changed how designers thought about the web.
			Instead of designing for a <strong>fixed canvas</strong> (like print), web designers
			had to think about <strong>flexible systems</strong> that worked anywhere. This
			philosophical shift (from controlling every pixel to designing adaptable systems)
			continues to influence web and app design today.</p>

		<h3>Legacy</h3>
		<p>Responsive web design proved that the web&apos;s strength was its <strong>adaptability,
			not its control</strong>. The same content could work on a watch, a phone, a tablet, a
			laptop, and a TV. This &quot;design once, display anywhere&quot; philosophy made the
			web more accessible and more resilient than platform-specific apps.</p>
	</>
};
