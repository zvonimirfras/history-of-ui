import Link from 'next/link';

import type { Event } from './types';

export const ibm_carbon: Event = {
	id: 'ibm-carbon',
	time: '2018-03-30',
	name: 'IBM Carbon Design System',
	companies: ['IBM'],
	labels: ['design-system', 'web'],
	summary: 'IBM&apos;s Carbon Design System established patterns for enterprise design systems,' +
		'demonstrating how large organizations can create cohesive, accessible, and scalable' +
		'design languages for complex products.',
	description: <>
		<p>IBM Carbon Design System, launched in 2018, represents IBM&apos;s comprehensive
			approach to <strong>enterprise design at scale</strong>. It provides a complete toolkit
			for building consistent, accessible products across IBM&apos;s vast portfolio.</p>

		<h3>Built for Enterprise Reality</h3>
		<p>Carbon was built specifically for enterprise software with its unique challenges: data
			density for displaying complex information clearly, productivity focus for
			efficiency-obsessed power users, accessibility with WCAG AA compliance built-in,
			consistency providing a unified experience across products, and scalability that works
			for small and large applications. Carbon understood that enterprise software has
			different needs than consumer apps.</p>

		<h3>Everything You Need</h3>
		<p>Carbon provides everything needed for product development. Design kits for Sketch,
			Figma, and Adobe XD. Component libraries for React, Vue, Angular, Svelte, and vanilla
			JavaScript. Over 2000 icons in multiple sizes. Accessible color palettes. The IBM Plex
			font family. Animation guidelines and utilities. Common UI patterns and best practices.
			It&apos;s comprehensive in a way that most design systems aren&apos;t.</p>

		<p>IBM created IBM Plex, an open-source typeface family with multiple styles (Sans, Serif,
			Mono, Condensed), extensive language support (100+ languages), and optimization for
			digital interfaces. They open-sourced it for anyone to use, a generous move that
			benefited the entire design community.</p>

		<h3>Accessibility as Foundation</h3>
		<p>Carbon prioritizes accessibility from the ground up. Components meet <Link
			href="/event/wcag-2">WCAG 2.1 AA</Link> out of the box. Full keyboard navigation is
			standard. Everything is screen reader tested and works with assistive technologies. All
			color combinations are tested for contrast. Each component includes accessibility
			guidance in its documentation. Accessibility isn&apos;t an afterthought: it&apos;s the
			foundation.</p>

		<h3>Surprisingly Open</h3>
		<p>Carbon is fully open source. All code is publicly available on GitHub. They accept
			external contributions from the community. The roadmap is transparent with public
			planning and discussion. Other enterprises have adopted Carbon for their own products.
			IBM proved that large companies can successfully open source their design systems.</p>

		<p>Carbon includes comprehensive data visualization components: charts for line, bar, pie,
			scatter, and more. They&apos;re accessible by default with keyboard navigation and
			screen reader support. Styling matches the Carbon design language. Everything is
			responsive, adapting to different screen sizes. Enterprise software needs great data
			visualization, and Carbon delivers.</p>

		<p>Carbon supports multiple frameworks equally: <Link href="/event/react">React</Link> (the
			most popular implementation), Vue, Angular, Svelte, and Web Components for
			framework-agnostic usage. This multi-framework approach means teams can use Carbon
			regardless of their tech stack.</p>

		<h3>Raising the Bar</h3>
		<p>Carbon influenced how enterprises approach design systems. It demonstrated
			accessibility-first design where compliance is built in, not bolted on. It proved large
			companies can open source design systems successfully. It showed that comprehensive
			documentation with extensive guidelines and examples is achievable. It established
			patterns for data-dense interfaces and complex information display.</p>

		<p>Carbon is used by IBM products (Watson, Cloud, Security, etc.), external companies
			building similar products, government agencies requiring accessibility, and educational
			institutions teaching design system principles. Its influence extends far beyond
			IBM.</p>

		<h3>Lasting Legacy</h3>
		<p>Carbon demonstrated that <strong>enterprise design systems could be world-class</strong>.
			It proved that accessibility, consistency, and beauty aren&apos;t mutually exclusive.
			Carbon showed that large organizations could successfully open source their design
			systems, benefiting both the company and the broader design community.</p>

		<p>Carbon&apos;s influence extends beyond IBM: it established patterns for enterprise design
			systems, showed how to document complex systems comprehensively, and proved that
			enterprise software doesn&apos;t have to look boring. It raised the bar for what
			enterprise design systems should provide.</p>
	</>
};
