import Link from 'next/link';

import type { Event } from './types';

export const bootstrap: Event = {
	id: 'bootstrap',
	time: '2011-08-19',
	name: 'Bootstrap',
	companies: ['Twitter'],
	people: ['Mark Otto', 'Jacob Thornton'],
	labels: ['design-system', 'web'],
	summary: 'Bootstrap democratized responsive web design by providing a comprehensive,' +
		'ready-to-use framework of components and grid systems, becoming the most popular' +
		'front-end framework.',
	description: <>
		<p>Bootstrap, created by <strong>Mark Otto and Jacob Thornton</strong> at Twitter and
			released as open source in 2011, became the world&apos;s most popular front-end framework.
			It democratized responsive web design by providing a comprehensive toolkit that anyone
			could use.</p>

		<h3>Everything You Need in One Package</h3>
		<p>Bootstrap provided a complete toolkit: a responsive 12-column grid system that adapted to
			any screen size, pre-built components (buttons, forms, navigation, modals, and more),
			CSS utilities for spacing, colors, and typography, JavaScript plugins for dropdowns,
			tooltips, and carousels, a consistent visual language, and browser compatibility that
			actually worked everywhere. For the first time, developers didn&apos;t need designers to
			create professional-looking sites.</p>

		<h3>The Great Democratization</h3>
		<p>Bootstrap made professional-looking websites accessible to everyone. Developers could
			design without a designer. You could build functional prototypes in hours, not days. It
			established UI conventions that became standard. Bootstrap 3 made it mobile-first by
			default. Suddenly, anyone could build a responsive website that looked decent.</p>

		<h3>The Bootstrap Look</h3>
		<p>Bootstrap&apos;s default styling became so ubiquitous it was instantly recognizable:
			rounded corners on soft, friendly buttons, the famous Bootstrap blue primary color,
			Glyphicons for common symbols, standard navbar patterns. This led to thousands of sites
			looking similar, a blessing and a curse. You could spot a Bootstrap site from across
			the room.</p>

		<h3>Massive Adoption</h3>
		<p>Bootstrap became the most starred GitHub project for years. It powered approximately 28%
			of all websites. An entire ecosystem of commercial and free Bootstrap themes emerged. It
			became an education tool, teaching a generation about responsive design principles.
			Bootstrap wasn&apos;t just popular: it was everywhere.</p>

		<h3>The Design System Blueprint</h3>
		<p>Bootstrap pioneered the &quot;design system as framework&quot; concept: reusable component
			libraries, comprehensive documentation with examples and guidelines, customization
			through variables for theming, and utility classes for functional CSS. Every modern
			design system owes something to Bootstrap&apos;s approach.</p>

		<p>Bootstrap evolved significantly over the years. Bootstrap 2 (2012) made it responsive by
			default. Bootstrap 3 (2013) adopted a mobile-first approach. Bootstrap 4 (2018)
			introduced flexbox grid and improved customization. Bootstrap 5 (2021) finally dropped
			its jQuery dependency. Each version refined the formula.</p>

		<p>Bootstrap&apos;s success spawned alternatives: Foundation (Zurb&apos;s alternative),
			Bulma (CSS-only), Tailwind CSS (utility-first), and Material-UI (<Link href="/event/material-design">Material Design</Link>
			implementation). Competition made everyone better.</p>

		<h3>The Criticism</h3>
		<p>Bootstrap faced valid criticism. &quot;Bootstrap sites all look the same&quot; became a
			common complaint: the generic appearance was hard to escape. It included unused CSS/JS,
			causing bloat. Customization could be difficult, requiring deep knowledge to override
			defaults. It was opinionated, imposing specific design patterns whether you wanted them
			or not.</p>

		<h3>Lasting Impact</h3>
		<p>Bootstrap proved that <strong>design systems could be open source and
			community-driven</strong>. It established patterns for component libraries,
			documentation, and customization that influenced every design system that followed.
			Bootstrap made <Link href="/event/responsive-web-design">responsive web design</Link> practical and accessible,
			accelerating the mobile web revolution.</p>

		<p>While modern frameworks have moved beyond Bootstrap&apos;s approach, its influence is
			undeniable. Bootstrap taught a generation of developers about responsive design,
			component thinking, and design systems. It proved that good defaults and comprehensive
			documentation could democratize design.</p>
	</>
};
