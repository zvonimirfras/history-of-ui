import type { Event } from './types';

export const google_search: Event = {
	id: 'google-search',
	time: '1998-09-04',
	name: 'Google Search',
	companies: ['Google'],
	people: ['Larry Page', 'Sergey Brin'],
	labels: ['key-point', 'web'],
	summary: 'Google launched with a radically simple interface (just a logo, search box, and two' +
		'buttons) that revolutionized web design by proving that less can be more.',
	description: <>
		<h3>Radical Simplicity</h3>
		<p>Google Search, founded by <strong>Larry Page and Sergey Brin</strong>, introduced a
			revolutionary approach to web interface design through radical simplicity. While competing
			search engines like Yahoo and AltaVista cluttered their homepages with news, links, and
			advertisements, Google&apos;s interface featured just a logo, a search box, and two
			buttons (&quot;Google Search&quot; and &quot;I&apos;m Feeling Lucky&quot;). That&apos;s
			it. The simplicity was shocking.</p>

		<h3>Design Philosophy</h3>
		<p>This minimalist design was initially born from necessity (neither Page nor Brin were web
			designers), but it proved to be genius. The clean interface loaded instantly, focused
			users on the core task (searching), and made Google feel fast and efficient.</p>

		<p>The white space and simplicity conveyed <strong>confidence in the product</strong>.
			Google didn&apos;t need to distract users because its search results were superior. The
			PageRank algorithm provided remarkably relevant results, but the interface made Google
			approachable and trustworthy.</p>

		<h3>Industry Influence</h3>
		<p>Google&apos;s design philosophy influenced an entire generation of web applications,
			demonstrating that <strong>simplicity and focus could be powerful
			differentiators</strong>. The Google homepage became one of the most-visited pages on
			the Internet and established minimalism as a legitimate design approach. Today,
			Google&apos;s interface remains remarkably similar, proving the timelessness of good,
			simple design.</p>
	</>
};
