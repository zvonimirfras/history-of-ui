import Link from 'next/link';

import type { Event } from './types';

export const ibm_simon: Event = {
	id: 'ibm-simon',
	time: '1994-08-16',
	name: 'IBM Simon',
	companies: ['IBM', 'BellSouth'],
	labels: ['key-point', 'smartphone'],
	summary: 'The first smartphone. First to include phone and PDA features in one device. It had a touchscreen.',
	description: <>
		<p>The IBM Simon Personal Communicator is widely considered the <strong>world&apos;s first
			smartphone</strong>, combining a mobile phone with PDA features in a single device, a
			full decade before the term &quot;smartphone&quot; was even coined.</p>

		<h3>Pioneering Features</h3>
		<p>The Simon featured a touchscreen usable with stylus or finger, email and fax
			capabilities for wireless communication, a calendar for schedule management on the go, an
			address book for contact management, calculator and notepad as built-in utilities,
			downloadable applications for extensibility, and predictive typing for text input
			assistance. These features are standard on every smartphone today, but in 1994, they
			were revolutionary.</p>

		<h3>The Reality</h3>
		<p>At <strong>$899 (or $1,099 without a service contract)</strong>, the Simon was expensive
			and sold only about 50,000 units during its six-month production run (1994-1995). Its
			battery life was limited to <strong>one hour of talk time</strong>, and it was bulky by
			modern standards, weighing nearly a pound and measuring over 8 inches tall. The vision
			was right, but the technology wasn&apos;t ready.</p>

		<h3>Ahead of Its Time</h3>
		<p>The Simon was far ahead of its time. It offered capabilities that wouldn&apos;t become
			mainstream until over a decade later with devices like the <Link
			href="/event/iphone">iPhone</Link> and BlackBerry. The device demonstrated that people
			wanted converged devices (not separate gadgets), touchscreens could work for mobile
			input, mobile email had legitimate business value, and an app ecosystem could extend
			device functionality. Every one of these insights was correct, just a decade early.</p>

		<h3>Why It Failed</h3>
		<p>The Simon failed commercially because the supporting infrastructure wasn&apos;t ready:
			cellular networks were slow and expensive, mobile email wasn&apos;t standard, and battery
			technology couldn&apos;t support the power demands. The technology was right, but the
			timing was wrong.</p>

		<h3>Legacy</h3>
		<p>Despite commercial failure, the IBM Simon established the concept of a converged device
			that combined communication and computing. It proved the smartphone concept was viable,
			just premature. Every smartphone today owes a debt to the Simon&apos;s vision of
			unified communication.</p>
	</>
};
