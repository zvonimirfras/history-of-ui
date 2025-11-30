import Link from 'next/link';

import type { Event } from './types';

export const mac_os_x: Event = {
	id: 'mac-os-x',
	time: '2001-03-24',
	name: 'Mac OS X',
	companies: ['Apple'],
	people: ['Steve Jobs'],
	labels: ['key-point', 'operating-system'],
	summary: 'Mac OS X introduced the Aqua interface with its distinctive translucent,' +
		'candy-colored design elements, drop shadows, and smooth animations that influenced' +
		'modern UI design.',
	description: <>
		<p>Mac OS X (later macOS) was Apple&apos;s complete reimagining of the Mac operating
			system, combining the <strong>stability of Unix</strong> with a revolutionary new user
			interface called <strong>Aqua</strong>. Unveiled by Steve Jobs with the tagline &quot;the
			ultimate OS,&quot; it marked a clean break from the aging classic Mac OS.</p>

		<h3>The Aqua Interface</h3>
		<p>Aqua introduced a lush, tactile design philosophy with &quot;lickable&quot; buttons
			(glossy, three-dimensional UI elements), translucent elements (windows with
			frosted-glass effects), the Dock (animated icon bar with magnification), drop shadows
			(providing depth and hierarchy), smooth animations (transitions that delighted users),
			and anti-aliasing everywhere (smooth text and graphics). Jobs famously said the buttons
			looked so good you wanted to lick them, a quote that perfectly captured Aqua&apos;s
			tactile appeal.</p>

		<h3>Skeuomorphic Design Era</h3>
		<p>The Aqua interface introduced design trends that would dominate the 2000s: glossy
			buttons, realistic textures (<strong>skeuomorphism</strong>), subtle reflections, and
			obsessive attention to visual detail. Jobs pushed the team to make windows and UI
			elements feel <strong>tangible and three-dimensional</strong>, as if they existed in
			physical space.</p>

		<h3>The Dock Revolution</h3>
		<p>The Dock replaced the classic Mac OS application launcher, providing a persistent,
			animated bar for launching applications (click to open), switching between apps (see
			running applications), drag-and-drop (files onto application icons), animated feedback
			(bouncing icons showed activity), and a magnification effect (icons grew as you
			hovered). The Dock was controversial at first: some loved it, others hated it. But it
			became iconic.</p>

		<h3>Initial Reception</h3>
		<p>While initially criticized for being &quot;too flashy&quot; and using too many system
			resources, Aqua established Apple&apos;s design philosophy of <strong>sweating the
			details</strong> and making software feel crafted. Jobs believed software should be
			beautiful, not just functional.</p>

		<h3>Lasting Influence</h3>
		<p>Mac OS X laid the groundwork for <Link href="/event/iphone">iOS</Link> and influenced UI
			design across the industry. Concepts pioneered in Aqua were later adopted by many
			operating systems: application docks (Ubuntu, Windows 7+), translucent UI elements
			(Windows Vista/7), and smooth animations (now expected everywhere). Aqua showed that
			operating systems could be both powerful and beautiful.</p>

		<p>Though Apple later moved away from heavy skeuomorphism with <Link
			href="/event/ios-7">iOS 7</Link>, Mac OS X proved that operating systems could be both
			powerful and beautiful. It showed that Unix stability and gorgeous design weren&apos;t
			mutually exclusive.</p>
	</>
};
