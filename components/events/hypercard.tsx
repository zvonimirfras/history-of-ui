import Link from 'next/link';

import type { Event } from './types';

export const hypercard: Event = {
	id: 'hypercard',
	time: '1987-08-11',
	name: 'HyperCard',
	companies: ['Apple'],
	people: ['Bill Atkinson'],
	labels: ['key-point'],
	summary: 'Revolutionary hypermedia system that allowed users to create interactive &quot;stacks&quot;' +
		'of information with clickable links. HyperCard pioneered concepts that influenced' +
		'the World Wide Web, interactive multimedia, and modern app development.',
	description: <>
		<p>HyperCard, created by <strong>Bill Atkinson</strong> and bundled free with every
			Macintosh, was a revolutionary hypermedia system that let anyone create interactive
			applications without traditional programming. It was one of the first successful
			implementations of hypertext on a personal computer.</p>

		<h3>Stacks of Possibility</h3>
		<p>HyperCard organized information into &quot;stacks&quot; of &quot;cards&quot;, like a deck
			of index cards, but infinitely more powerful. Each card could contain text, images,
			buttons, and fields. Buttons could link to other cards, play sounds, or run scripts.
			You could create interactive presentations, educational software, searchable databases,
			games, or rapid UI prototypes. The metaphor was simple enough for anyone to understand,
			yet powerful enough to build real applications.</p>

		<h3>Programming in Plain English</h3>
		<p>HyperTalk, HyperCard&apos;s scripting language, was revolutionary because it read like
			English. Want something to happen when a user clicks? Write <code>on mouseUp</code>.
			Need to navigate forward? Write <code>go to next card</code>. Want to play a sound?
			Write <code>play &quot;boing&quot;</code>. Need user input? Write <code>ask &quot;What
			is your name?&quot;</code>. This made programming accessible to teachers, students, and
			hobbyists who had never coded before.</p>

		<h3>A Generation of Creators</h3>
		<p>HyperCard became wildly popular in education, creating a generation of &quot;citizen
			developers.&quot; The best-selling PC game of the 1990s, Myst, started as a HyperCard
			stack. Cyan&apos;s earlier works (The Manhole and Cosmic Osmo) were pioneering
			interactive stories built entirely in HyperCard. Countless teachers built educational
			tools, businesses created custom databases, and hobbyists explored interactive
			storytelling.</p>

		<h3>The Web Before the Web</h3>
		<p>HyperCard directly influenced the <Link href="/event/world-wide-web">World Wide Web</Link>.
			Tim Berners-Lee cited it as inspiration for the Web&apos;s hypertext system.
			Clickable links between documents, mixing text and graphics, user-created content,
			non-linear navigation: all these concepts appeared in HyperCard before the Web existed.
			HyperCard was the Web, just without the network.</p>

		<h3>Missed Opportunity</h3>
		<p>Apple never fully capitalized on HyperCard. It remained Mac-only, wasn&apos;t updated
			for color until embarrassingly late, and Apple couldn&apos;t figure out how to monetize
			something they&apos;d been giving away for free. When the Web arrived, it offered
			similar functionality but was cross-platform and networked. HyperCard was discontinued
			in 2004, but its influence persists in modern tools like Notion, Airtable, and no-code
			platforms. It proved that programming could be accessible and visual, that hypertext
			was powerful, and that users wanted to create, not just consume. HyperCard was the Web
			before the Web existed.</p>
	</>
};
