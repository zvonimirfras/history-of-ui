import Link from 'next/link';

import type { Event } from './types';

export const css: Event = {
	id: 'css',
	time: '1996-12-17',
	name: 'CSS (Cascading Style Sheets)',
	companies: ['W3C'],
	people: ['Håkon Wium Lie', 'Bert Bos'],
	labels: ['key-point', 'web'],
	summary: 'CSS separated presentation from content on the web, enabling designers to control' +
		'visual styling across entire websites and establishing the foundation for modern' +
		'web design.',
	description: <>
		<p>CSS (Cascading Style Sheets), proposed by <strong>Håkon Wium Lie</strong> in 1994 and
			developed with <strong>Bert Bos</strong>, became a W3C recommendation in December 1996.
			CSS revolutionized web design by separating content from presentation: HTML for structure,
			CSS for styling.</p>

		<h3>The Nightmare Before CSS</h3>
		<p>Before CSS, styling was embedded directly in HTML using tags like <code>&lt;font&gt;</code>
			and <code>&lt;center&gt;</code>. Want to change your site&apos;s color scheme? You had to
			edit every single page, hunting through HTML to find every font tag. Want consistent
			styling across your site? Good luck: there was no easy way to ensure uniformity. Your
			HTML files were bloated with styling code mixed into content, making them hard to read
			and harder to maintain. Creating sophisticated layouts was nearly impossible.</p>

		<h3>A Simple Yet Powerful Idea</h3>
		<p>CSS1 gave designers control over fonts (family, size, weight, style), colors and
			backgrounds, text properties (alignment, decoration, spacing), the box model (margins,
			borders, padding), and classification (display types, list styles). Simple capabilities,
			but they changed everything.</p>

		<p>The &quot;cascading&quot; in CSS meant multiple stylesheets could be combined with clear
			rules for precedence: browser defaults provided basic styling, users could add their own
			stylesheets for accessibility preferences, authors (designers) added their styles, and
			inline styles had the highest priority. This hierarchy made sense and gave everyone
			(browsers, users, and designers) appropriate control.</p>

		<h3>The Browser Wars Strike Again</h3>
		<p>CSS adoption was painfully slow due to inconsistent browser support. Internet Explorer
			and Netscape implemented CSS differently, leading to frustrating cross-browser
			compatibility issues. Developers had to test everything in multiple browsers and write
			hacks for each one. The &quot;CSS Zen Garden&quot; project in 2003 finally demonstrated
			CSS&apos;s power by showing how the same HTML could be styled in radically different ways.
			This was proof that CSS worked if browsers would just implement it correctly.</p>

		<h3>CSS Grows Up</h3>
		<p>CSS2 arrived in 1998 with positioning, z-index, and media types. Then CSS3 broke into
			modular specifications throughout the 2000s, adding animations, transitions, flexbox, and
			grid. Modern CSS enables sophisticated interfaces with powerful layout systems, smooth
			performant motion, responsive design through media queries, CSS variables for theming,
			and 2D and 3D transformations.</p>

		<h3>Transforming Web Design</h3>
		<p>CSS fundamentally changed web design. It enabled design systems with consistent styling
			across products. It made responsive design possible, allowing sites to adapt to any screen
			size. It improved accessibility by separating content from presentation. It boosted
			performance through smaller HTML files and cached stylesheets. And it made sites
			maintainable: you could change your entire site&apos;s styling from one file.</p>

		<p>CSS, along with HTML and <Link href="/event/javascript">JavaScript</Link>, forms the
			foundation of the modern web. It enabled the profession of web design to flourish,
			separating design from development concerns. CSS proved that separation of concerns
			wasn&apos;t just good engineering: it was essential for the web to scale and evolve.
			Today, CSS is more powerful than ever, with new features added regularly. From simple
			color changes to complex animations and layouts, CSS remains the language of web
			design.</p>
	</>
};
