import Link from 'next/link';

import type { Event } from './types';

export const psion_epoc: Event = {
	id: 'psion-epoc',
	time: '1989',
	name: 'Psion EPOC',
	companies: ['Psion'],
	labels: ['key-point', 'operating-system', 'mobile'],
	summary: 'Mobile operating system that supported apps.',
	description: <>
		<p>EPOC (Electronic Piece of Cheese, later backronymed as &quot;Expandable PC Operating
			Chip&quot;) was a sophisticated mobile operating system developed by <strong>Psion</strong>
			for their handheld computers. It proved that powerful, user-friendly operating systems
			could run on portable devices with limited resources.</p>

		<h3>Revolutionary Mobile Features</h3>
		<p>Starting with the <strong>Psion Series 3 in 1991</strong>, EPOC introduced concepts that
			were revolutionary for portable computing. True preemptive multitasking let multiple apps
			run simultaneously, remarkable for a handheld device. A graphical user interface brought
			icons, menus, and windows to a handheld. Third-party applications made it an extensible
			platform. A built-in productivity suite included word processor, spreadsheet, and
			database. Instant-on meant no boot time: just open and work. Exceptional power
			efficiency delivered weeks of battery life. These features were standard on desktops
			but revolutionary on a device you could hold in your hand.</p>

		<h3>User Interface Design</h3>
		<p>EPOC featured a <strong>consistent, icon-based interface</strong> adapted for small
			screens and limited input. The system menu used a grid of application icons, while apps
			themselves used a toolbar paradigm with clear buttons for common actions. The interface
			prioritized efficiency: users could accomplish tasks with minimal stylus taps.</p>

		<h3>Professional Adoption</h3>
		<p>Psion&apos;s devices running EPOC were particularly popular among <strong>business
			professionals and enthusiasts throughout the 1990s</strong>. The combination of a full
			QWERTY keyboard, large screen (for the time), and desktop-class applications made it
			ideal for mobile professionals who needed to work away from their desks.</p>

		<h3>Evolution to Symbian</h3>
		<p>EPOC&apos;s architecture evolved into <strong>Symbian OS</strong>, which dominated the
			smartphone market in the 2000s before <Link href="/event/iphone">iOS</Link> and <Link
			href="/event/android">Android</Link>. Nokia, Ericsson, Motorola, and others licensed
			Symbian, making it the world&apos;s most popular smartphone OS for years. EPOC proved
			that mobile computing had a viable future.</p>
	</>
};
