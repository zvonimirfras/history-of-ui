import Link from 'next/link';

import type { Event } from './types';

export const xerox_star: Event = {
	id: 'xerox-star',
	time: '1981-04-27',
	name: 'Xerox Star 8010',
	companies: ['Xerox'],
	labels: ['key-point', 'first-gui', 'operating-system'],
	summary: 'The first commercial personal computer to feature a graphical user interface with' +
		'the complete desktop metaphor: windows, icons, folders, mouse, ethernet networking,' +
		'and WYSIWYG editing.',
	description: <>
		<p>The Xerox Star 8010 (officially the Xerox 8010 Information System) was the first
			commercial personal computer to implement a complete <strong>desktop metaphor</strong>
			with a graphical user interface. Building on research from the <Link
			href="/event/xerox-alto">Alto</Link>, the Star was designed for business professionals,
			not programmers.</p>

		<h3>The Complete Desktop Metaphor</h3>
		<p>When you sat down at a Star, you saw something revolutionary: a desktop with icons
			representing files and folders, windows showing overlapping documents, and a mouse for
			pointing and clicking. Everything you could see, you could manipulate directly. Want to
			delete a file? Drag it to the trash. Need to copy something? Click it, choose Copy,
			click where you want it, choose Paste. The same commands worked everywhere, in every
			application.</p>

		<p>The Star offered true WYSIWYG editing: what you saw on screen was exactly what would
			print. Property sheets let you adjust settings through dialog boxes rather than cryptic
			commands. And it all worked together seamlessly, connected via Ethernet networking and
			integrated with Xerox&apos;s laser printers. You could even send electronic mail to
			colleagues.</p>

		<h3>A Commercial Failure, A Design Triumph</h3>
		<p>Despite its revolutionary interface, the Star failed spectacularly in the market. At
			$16,595 per workstation (about $55,000 in today&apos;s money), it was simply too
			expensive. The hardware was underpowered for its ambitious interface, making it feel
			sluggish. As a closed system that couldn&apos;t run third-party software, it offered
			limited functionality. And Xerox, a copier company at heart, didn&apos;t understand
			how to market a computer.</p>

		<p>Only about 25,000 Stars were sold, but the influence was enormous. When Steve Jobs
			visited <Link href="/event/xerox-apple-deal">Xerox PARC</Link>, he saw the Alto, but
			the Star&apos;s refined commercial implementation informed the <Link
			href="/event/macintosh">Macintosh</Link> even more directly. The Star proved that GUIs
			could work for business users, not just researchers. It established UI conventions that
			remain standard today: the desktop metaphor, drag-and-drop, property sheets, and
			universal commands. The Star was the bridge between research (Alto) and mass-market
			GUIs (Mac, Windows).</p>
	</>
};
