import { Image } from '../image';
import Link from 'next/link';

import type { Event } from './types';

export const nls_mother_of_all_demos: Event = {
	id: 'nls-mother-of-all-demos',
	time: '1968-12-09',
	name: 'oN-Line System (NLS) - Mother of All Demos',
	companies: ['SRI International'],
	people: ['Douglas Engelbart', 'Bill English'],
	labels: ['key-point', 'first-mouse'],
	thumbnail: '/images/SRI_Bill_English_1968-320px.jpg',
	summary: 'Revolutionary computer collaboration system developed in the 1960s. Designed by' +
		'Douglas Engelbart and implemented by researchers at the Augmentation Research' +
		'Center (ARC) at the Stanford Research Institute (SRI), the NLS system was the first' +
		'to employ the practical use of hypertext links, the mouse, raster-scan video' +
		'monitors, information organized by relevance, screen windowing, presentation' +
		'programs, and other modern computing concepts.',
	description: <>
		<Image src="/images/SRI_Bill_English_1968.jpg"
			alt="SRI's Bill English, engineer who built the first computer mouse prototype,
			prepares for the December 9, 1968 'mother of all demos'" />

		<p>On <strong>December 9, 1968</strong>, Douglas Engelbart gave what would later be called
			the <strong>&quot;Mother of All Demos&quot;</strong>, a 90-minute presentation that
			previewed the future of computing. The oN-Line System (NLS) demonstrated revolutionary
			technologies that wouldn&apos;t become mainstream for decades.</p>

		<h3>Seeing the Future</h3>
		<p>The demo showcased technologies that seemed like science fiction. The computer mouse
			(its first public demonstration) drove a mouse-driven interface. Hypertext links let you
			click to navigate between documents. Multiple windows displayed several documents
			simultaneously. Video conferencing enabled remote collaboration with live video.
			Collaborative editing let multiple people edit the same document. Outline processing
			organized information hierarchically. Context-sensitive help provided a built-in
			documentation system. Each of these concepts would take decades to become mainstream,
			but Engelbart showed them all working together in 1968.</p>

		<h3>The Setup</h3>
		<p>Engelbart sat on stage with a keyboard, mouse, and keyset (a 5-key chord device).
			Behind him, a massive 22-foot screen displayed his work. His team, 30 miles away at
			SRI, collaborated via video link, demonstrating remote work decades before it became
			common. The technical complexity of pulling this off in 1968 was staggering. One wrong
			move and the whole demo could have crashed.</p>

		<h3>Historical Significance</h3>
		<p>The demo showcased concepts that would define modern computing: the mouse (built by
			<strong>Bill English</strong>), windowing, hypertext, and collaborative tools. While
			the technology was too expensive for widespread use at the time, it directly influenced
			researchers at <Link href="/event/xerox-alto">Xerox PARC</Link>, who later
			commercialized many of these ideas. Engelbart&apos;s vision of &quot;augmenting human
			intellect&quot; through computers was revolutionary. He saw computers not as calculating
			machines but as tools for thought and collaboration. This philosophy continues to drive
			interface design today.</p>
	</>
};
